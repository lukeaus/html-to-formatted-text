# html-to-formatted-text

[![Tests](https://img.shields.io/travis/lukeaus/html-to-formatted-text/master.svg)](https://travis-ci.org/lukeaus/html-to-formatted-text)
[![Coverage](https://img.shields.io/codecov/c/github/lukeaus/html-to-formatted-text.svg)](https://codecov.io/gh/lukeaus/html-to-formatted-text)

## What?

Converts HTML to formatted plain text.

From:

`"<p>Some text.</p><p>More text.</p><div>Even more text.</div>"`

To:

`"Some text.\n More text.\nEven more text."`

## Usage

```javascript
// Node
const htmlToFormattedText = require("htmlToFormattedText");
// ES6
import htmlToFormattedText from "htmlToFormattedText";

htmlToFormattedText("<p>Some text.</p><p>More text.</p>");
// Output: "Some text.\n More text."
```

## Why?

You might have HTML that you want to display as text.

One use case might be that a user adds HTML via an online editor [TinyMCE](https://www.tiny.cloud/) and you want to display this as plain text somewhere else.

## Contributing

- Create an issue on Github
- Fork project
- Make changes then use `npm run commit` to make commits
- Check that tests pass on travis.ci
- Create a pull request
