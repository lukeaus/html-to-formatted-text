const striptags = require("striptags");

const TAGS_TO_BREAK_ON = [
    "p",
    "div",
    "br",
    "hr",
    "title",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "ol",
    "ul",
    "li"
];

module.exports = (text = "") =>
    [text]
        .map(val => striptags(val, TAGS_TO_BREAK_ON))
        .map(val => striptags(val, [], "\n"))
        .map(val => striptags(val, ["&nbsp;"], " "))
        .map(val => val.replace(/&nbsp;/g, " "))
        .map(val => val.replace(/\n\n/g, "\n"))
        .map(val => val.replace(/\n+$/, ""))
        .map(val => val.replace(/^\n+/, ""))[0];
