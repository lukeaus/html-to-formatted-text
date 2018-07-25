import striptags from "striptags";

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
    "li",
    "pre",
    "table",
    "td"
];

const removeAllNonTagsToBreakOn = html => striptags(html, TAGS_TO_BREAK_ON);
const convertTagsToBreak = html => striptags(html, [], "\n");
const replaceSpaces = html => html.replace(/&nbsp;/g, " ");
const replaceMultiNewLines = html => html.replace(/\n\n/g, "\n");
const removeLeadingNewLines = html => html.replace(/\n+$/, "");
const removeTrailingNewLines = html => html.replace(/^\n+/, "");

module.exports = (text = "") =>
    [text]
        .map(removeAllNonTagsToBreakOn)
        .map(convertTagsToBreak)
        .map(replaceSpaces)
        .map(replaceMultiNewLines)
        .map(removeLeadingNewLines)
        .map(removeTrailingNewLines)[0];
