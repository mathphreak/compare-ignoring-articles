# compare-ignoring-articles [![Build Status](https://travis-ci.org/mathphreak/compare-ignoring-articles.svg?branch=master)](https://travis-ci.org/mathphreak/compare-ignoring-articles)

> Compare two strings while ignoring 'A' or 'The' at the beginning


## Install

```
$ npm install --save compare-ignoring-articles
```


## Usage

```js
const compareIgnoringArticles = require('compare-ignoring-articles');

compareIgnoringArticles('The Title', 'Title');
//=> 0
```


## API

### compareIgnoringArticles(str1, str2[, caseSensitive])

#### str1

Type: `string`

The first string to use.

#### str2

Type: `string`

The second string to use.

#### caseSensitive

Type: `bool`
Default: `true`

Whether or not the comparison should be case sensitive.

#### Return

- Negative when the str1 occurs before str2
- Positive when the str1 occurs after str2
- Returns 0 if they are equivalent

Note that this is the same as [String#localeCompare](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare),
which this library uses once articles have been stripped.

## License

MIT © [Matt Horn](http://mathphreak.me)
