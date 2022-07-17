import React from "react";
import JsonData from "./courses.json";

/**
 * Converts boolean values into emojis.
 * @param {boolean} p - a boolean value that is either true or false.
 * @returns {string} a string of emoji icon signifying true or false. If 'p' is neither true or false, returns an error message.
 */
function booleanToEmoji(b) {
    if (b === true) return "✅";
    else if (!b) return "❌";
    return "ERROR";
}

/**
 * Converts a string of words into titlecase.
 * @param {string} str - a string of words separated by spaces.
 * @returns {string} a string of words with the first letter of each word capitalized.
 */
function toTitleCase(str) {
    var words = str.split(" ");
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}

/**
 * Converts a string of UWindsor undergrad CS program into emojis.
 * @param {string} p - an acronym of one of the UWindsor CS programs.
 * @returns {string} a string of emoji icon signifying the program. If the acronym cannot be found, returns an error message.
 */
function programToEmoji(p) {
    if (p === "CSG") return "📚";
    else if (p === "CSH") return "🎓";
    else if (p === "CSHAC") return "📲";
    else if (p === "CSSE") return "⚙";
    else if (p === "BACS") return "👔";
    else if (p === "MCS") return "📐";
    return "ERROR";
}

/**
 * Converts a string array of UWindsor CS program acronyms and into an array of emojis
 * @param {string} programs - an array of acronyms of one of the UWindsor CS programs.
 * @returns {string} text - a string array of emoji icons signifying the programs.
 */
function listProgramsAsEmoji(programs) {
    var text = "";
    const len = programs.length;
    for (let i = 0; i < len; i++) {
        text += programToEmoji(programs[i]);
    }
    return text;
}

/**
 * Joins an array of string elements with commas.
 * @param {string} text - a string array of words.
 * @returns {string} out - a string of words separated by commas.
 */
function joinWithComma(text) {
    var out = text[0];
    const len = text.length;
    for (let i = 1; i < len; i++) {
        out += ", ";
        out += text[i];
    }
    return out;
}

/**
 * Reformats an array of UWindsor undergrad CS course objects for display purposes.
 * @param {string} data - an array of objects.
 * @returns {string} newData - an array of objects with their properties modified: string array converted to one string, and terms and programs are converted to emoji strings.
 */
function reformatData(data) {
    const newData = data.map((element) => ({
        code: element["course code"],
        name: element["course name"],
        fall: booleanToEmoji(element.fall),
        winter: booleanToEmoji(element.winter),
        summer: booleanToEmoji(element.summer),
        required: listProgramsAsEmoji(element.required),
        prerequisites: joinWithComma(element.prerequisites),
    }));

    return newData;
}

/**
 * Builds a table that lists all UWindsor undergrad CS courses and their course information.
 * @returns {object} a HTML table that lists the courses' code, name, terms of offering, programs that requires it, and course prerequisites
 */
function BuildJsonTable() {
    //extract data from JSON file and convert them into proper format
    const headings = Object.keys(JsonData.courses[0]).map((item) =>
        toTitleCase(item)
    );
    const courseData = reformatData(JsonData.courses);

    //construct the HTML elements for the table
    const headingRow = headings.map((title) => {
        return <th key={title}>{title}</th>;
    });

    const bodyRows = courseData.map((course) => {
        return (
            <tr key={course.code}>
                {Object.values(course).map((element, index) => {
                    return <td key={index}>{element}</td>;
                })}
            </tr>
        );
    });

    return (
        <div>
            <table className="course-table">
                <thead>
                    <tr>{headingRow}</tr>
                </thead>
                <tbody>{bodyRows}</tbody>
            </table>
        </div>
    );
}

export default BuildJsonTable;
