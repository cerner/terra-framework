# suffix [![NPM version](https://img.shields.io/npm/v/suffix.svg)](https://npmjs.com/package/suffix) [![NPM downloads](https://img.shields.io/npm/dm/suffix.svg)](https://npmjs.com/package/suffix) [![Build Status](https://img.shields.io/circleci/project/egoist/suffix/master.svg)](https://circleci.com/gh/egoist/suffix)

> Add suffix to a filename.

## Install

```bash
$ npm install --save suffix
```

## Usage

```js
const suffix = require('suffix')

suffix('a.js', '.min')
//=> a.min.js
```

## API

### suffix(filename, [suffix])

#### filename

Type: `string`

#### suffix

Type: `string`  

The suffix string to be added.

## License

MIT © [EGOIST](https://github.com/egoist)
