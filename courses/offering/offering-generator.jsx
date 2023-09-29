/*
 * This file used and modified code from TanStack Table v7 under MIT license.
 * More information about the license can be found in ACKNOWLEDGEMENT.md.
 * The original code can be found here: https://github.com/TanStack/table/blob/v7/examples/filtering/src/App.js.
 */

import React from "react";
import {Link} from "react-router-dom";
import regeneratorRuntime from "regenerator-runtime";
import {
    useTable,
    useFilters,
    useGlobalFilter,
    useAsyncDebounce,
} from "react-table";
import ReformatData from "./data-format";
import JsonData from "./courses.json";

// Defines a default UI for filtering
// This would be the filter that searches all cells in the table rows
function GlobalFilter({preGlobalFilteredRows, globalFilter, setGlobalFilter}) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = React.useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
        setGlobalFilter(value || undefined);
    }, 200);

    return (
        <span>
            Search:{" "}
            <input
                value={value || ""}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
                style={{
                    fontSize: "1.1rem",
                    border: "0",
                }}
            />
        </span>
    );
}

// Defines a default UI for filtering
// This would be the filter that searches all cells in a column
function DefaultColumnFilter({
    column: {filterValue, preFilteredRows, setFilter},
}) {
    const count = preFilteredRows.length;

    return (
        <input
            value={filterValue || ""}
            onChange={(e) => {
                setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            placeholder={`Search ${count} records...`}
        />
    );
}

// This is a custom filter UI for selecting a unique option from a list
function SelectColumnFilter({
    column: {filterValue, setFilter, preFilteredRows, id},
}) {
    // Calculate the options for filtering
    // using the preFilteredRows
    const options = React.useMemo(() => {
        const options = new Set();
        preFilteredRows.forEach((row) => {
            const item = [...row.values[id]]; //breaks the emoji string by their code points
            const len = item.length;
            for (let i = 0; i < len; i++) {
                options.add(item[i]);
            }
        });
        return [...options.values()];
    }, [id, preFilteredRows]);

    // Render a multi-select box
    return (
        <select
            value={filterValue}
            onChange={(e) => {
                setFilter(e.target.value || undefined);
            }}
        >
            <option value="">All</option>
            {options.map((option, i) => (
                <option key={i} value={option}>
                    {option}
                </option>
            ))}
        </select>
    );
}

// This is the table component for the plug-in
function Table({columns, data}) {
    const filterTypes = React.useMemo(() => ({
        // default text filter
        text: (rows, id, filterValue) => {
            return rows.filter((row) => {
                const rowValue = row.values[id];
                return rowValue !== undefined
                    ? String(rowValue)
                          .toLowerCase()
                          .startsWith(String(filterValue).toLowerCase())
                    : true;
            });
        },
    }));

    const defaultColumn = React.useMemo(() => ({
        // This sets up the default filter UI
        Filter: DefaultColumnFilter,
    }));

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        visibleColumns,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn, // Be sure to pass the defaultColumn option
            filterTypes,
        },
        useFilters, // useFilters!
        useGlobalFilter // useGlobalFilter!
    );

    return (
        <>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps()}>
                                    {column.render("Header")}
                                    {/* Render the columns filter UI */}
                                    <div>
                                        {column.canFilter
                                            ? column.render("Filter")
                                            : null}
                                    </div>
                                </th>
                            ))}
                        </tr>
                    ))}
                    <tr>
                        <th
                            colSpan={visibleColumns.length}
                            style={{
                                textAlign: "center",
                            }}
                        >
                            <GlobalFilter
                                preGlobalFilteredRows={preGlobalFilteredRows}
                                globalFilter={state.globalFilter}
                                setGlobalFilter={setGlobalFilter}
                            />
                        </th>
                    </tr>
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <br />
        </>
    );
}

/**
 * Builds a table that lists all UWindsor undergrad CS courses and their course information.
 * @returns {object} a React component table that lists the courses' code, name, terms of offering, programs that requires it, and course prerequisites
 */
function BuildJsonTable() {
    //columns with no specified filters use the default text filter
    const columns = React.useMemo(
        () => [
            {
                Header: "Course Offering Table",
                columns: [
                    {
                        Header: "Course Code",
                        accessor: "code",
                        Cell: ({row}) => (
                            <Link
                                to={`/wiki/courses/${row.original.code}/overview`}
                                className="course-code-link"
                                children={row.values.code}
                            />
                        ),
                    },
                    {
                        Header: "Course Name",
                        accessor: "name",
                    },
                    {
                        Header: "Fall",
                        accessor: "fall",
                        Filter: SelectColumnFilter,
                        filter: "includes",
                    },
                    {
                        Header: "Winter",
                        accessor: "winter",
                        Filter: SelectColumnFilter,
                        filter: "includes",
                    },
                    {
                        Header: "Summer",
                        accessor: "summer",
                        Filter: SelectColumnFilter,
                        filter: "includes",
                    },
                    {
                        Header: "Required",
                        accessor: "required",
                        Filter: SelectColumnFilter,
                        filter: "includes",
                    },
                    {
                        Header: "Prerequisite(s)",
                        accessor: "prerequisites",
                        Cell: ({value}) => {
                            const courseCodeRegex = /\b[A-Z]{4}-\d{4}\b/g;
                            const matches = value.match(courseCodeRegex);
                            if (!matches) return value;

                            const nonCodeParts = value.split(courseCodeRegex);
                            const newStr = [];
                            for (let i = 0; i < nonCodeParts.length; i++) {
                                newStr.push(nonCodeParts[i]);
                                if (i < matches.length) {
                                    newStr.push(
                                        <Link
                                            to={`/wiki/courses/${matches[i]}/overview`}
                                            className="course-code-link"
                                            children={matches[i]}
                                        />
                                    );
                                }
                            }

                            return <>{newStr}</>;
                        },
                    },
                ],
            },
        ],
        []
    );

    const courseData = ReformatData(JsonData.courses);

    return <Table columns={columns} data={courseData} />;
}

export default BuildJsonTable;
