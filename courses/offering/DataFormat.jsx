/**
 * Converts boolean values into emojis.
 * @param {boolean} p - a boolean value that is either true or false.
 * @returns {string} a string of emoji icon signifying true or false. If 'p' is neither true or false, returns an error message.
 */
function BooleanToEmoji(b) {
    return b ? "✅" : "❌";
}

/**
 * Converts a string of UWindsor undergrad CS program into emojis.
 * @param {string} p - an acronym of one of the UWindsor CS programs.
 * @returns {string} a string of emoji icon signifying the program.
 */
function ProgramToEmoji(p) {
    if (p === "CSG") return "📚";
    else if (p === "CSH") return "🎓";
    else if (p === "CSHAC") return "📲";
    else if (p === "CIS") return "💽";
    else if (p === "CSSE") return "⚙";
    else if (p === "BACS") return "👔";
    else if (p === "MCS") return "📐";
    return p;
}

/**
 * Converts a string array of UWindsor CS program acronyms and into an array of emojis
 * @param {string} programs - an array of acronyms of one of the UWindsor CS programs.
 * @returns {string} text - a string array of emoji icons signifying the programs.
 */
function ListProgramsAsEmoji(programs) {
    return programs.map((p) => ProgramToEmoji(p)).join("");
}

/**
 * Reformats an array of UWindsor undergrad CS course objects for display purposes.
 * @param {string} data - an array of objects.
 * @returns {string} newData - an array of objects with their properties modified: string array converted to one string, and terms and programs are converted to emoji strings.
 */
function ReformatData(data) {
    const newData = data.map((element) => ({
        code: element["course code"],
        name: element["course name"],
        fall: BooleanToEmoji(element.fall),
        winter: BooleanToEmoji(element.winter),
        summer: BooleanToEmoji(element.summer),
        required: ListProgramsAsEmoji(element.required),
        prerequisites: element.prerequisites.join(", "),
    }));

    return newData;
}

export default ReformatData;
