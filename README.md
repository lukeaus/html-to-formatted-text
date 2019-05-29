# html-to-formatted-text

[![Tests](https://img.shields.io/travis/lukeaus/html-to-formatted-text/master.svg)](https://travis-ci.org/lukeaus/html-to-formatted-text)
[![Coverage](https://img.shields.io/codecov/c/github/lukeaus/html-to-formatted-text.svg)](https://codecov.io/gh/lukeaus/html-to-formatted-text)
[![MIT License](https://img.shields.io/npm/l/html-to-formatted-text.svg)](https://github.com/lukeaus/html-to-formatted-text/blob/master/LICENSE)
[![version](https://img.shields.io/npm/v/html-to-formatted-text.svg)](http://npm.im/html-to-formatted-text)
[![downloads](https://img.shields.io/npm/dm/html-to-formatted-text.svg)](http://npm-stat.com/charts.html?package=html-to-formatted-text&from=2018-07-24)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## What

Converts HTML to formatted plain text.

From:

`"<p>Some text.</p><p>More text.</p><div>Even more text.</div>"`

To:

```
Some text.

More text.

Even more text.
```

## Usage

### Node

### Installation

```bash
npm install --save html-to-formatted-text
```

```javascript
const htmlToFormattedText = require("html-to-formatted-text");
htmlToFormattedText("<p>foo</p><p>bar</p>"); // Output: "foo\nbar"
```

### ES6

```javascript
// ES6
import htmlToFormattedText from "html-to-formatted-text";
htmlToFormattedText("<p>foo</p><p>bar</p>"); // Output: "foo\nbar"
```

### Vanilla JS / UMD

```html
<!-- latest version -->
<script src="https://unpkg.com/html-to-formatted-text/dist/index.umd.min.js"></script>
<!-- or for a specific version -->
<script src="https://unpkg.com/html-to-formatted-text@X.Y.Z/dist/index.umd.min.js"></script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    window.htmlToFormattedText('<p>foo</p><p>bar</p>') // Output: "foo\nbar"
  });
</script>
```

## Why

You might have HTML that you want to display as text.

One use case might be that a user adds HTML via an online editor [TinyMCE](https://www.tiny.cloud/) and you want to display this as plain text somewhere else.

## Contributing

- Create an issue on Github
- Fork project
- Make changes then use `npm run commit` to make commits
- Create a pull request
