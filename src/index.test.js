/*eslint no-undef: 0 */

const { expect } = require("chai");
const lib = require("./index");

describe("lib", () => {
    it("should strip <p> tags", () => {
        const result = lib("<p>foo</p>");
        expect(result).to.equal("foo");
    });

    it("should replace non-leading tags with a new line", () => {
        const result = lib("<p>foo</p><p>bar</p>");
        expect(result).to.equal("foo\nbar");
    });

    it("should return an empty string if passed an empty string", () => {
        const result = lib("");
        expect(result).to.equal("");
    });

    it("should return an empty string if passed undefined", () => {
        const result = lib();
        expect(result).to.equal("");
    });

    it("should remove h1-h6", () => {
        const hTags = ["h1, h2", "h3", "h4", "h5", "h6"];
        hTags.forEach(tag => {
            const result = lib(`<${tag}>My Title</${tag}>`);
            expect(result).to.equal("My Title");
        });
    });

    it("should replace multiple new lines", () => {
        const result = lib("some\n\ntext");
        expect(result).to.equal("some\ntext");
    });

    it("should remove leading new line", () => {
        const result = lib("\nsome text");
        expect(result).to.equal("some text");
    });

    it("should remove multiple leading new lines", () => {
        const result = lib("\n\n\nsome text");
        expect(result).to.equal("some text");
    });

    it("should remove trailing new line", () => {
        const result = lib("some text\n");
        expect(result).to.equal("some text");
    });

    it("should remove multiple trailing new lines", () => {
        const result = lib("some text\n\n\n");
        expect(result).to.equal("some text");
    });

    it("should replace a single HTML space with a space", () => {
        const result = lib("some&nbsp;text");
        expect(result).to.equal("some text");
    });

    it("should replace multiple HTML spaces with spaces", () => {
        const result = lib("some&nbsp;&nbsp;text");
        expect(result).to.equal("some  text");
    });

    it("should replace tables with new lines", () => {
        const result = lib("some<table>text</table>");
        expect(result).to.equal("some\ntext");
    });

    it("should replace table cells with new lines", () => {
        const result = lib(
            "some<table><tbody><tr><td>text1</td><td>text2</td></tr></tbody></table>"
        );
        expect(result).to.equal("some\ntext1\ntext2");
    });
});
