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

### compareIgnoringArticles(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## License

MIT © [Matt Horn](http://mathphreak.me)
