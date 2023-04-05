# override-require

[![Travis build status](http://img.shields.io/travis/gajus/override-require/master.svg?style=flat-square)](https://travis-ci.org/gajus/override-require)
[![Coveralls](https://img.shields.io/coveralls/gajus/override-require.svg?style=flat-square)](https://github.com/gajus/override-require)
[![NPM version](http://img.shields.io/npm/v/override-require.svg?style=flat-square)](https://www.npmjs.org/package/override-require)
[![Canonical Code Style](https://img.shields.io/badge/code%20style-canonical-blue.svg?style=flat-square)](https://github.com/gajus/canonical)

Overrides Node.js module resolution logic.

## Usage

```js
import overrideRequire from 'override-require';

// Setup a callback used to determine whether a specific `require` invocation
// needs to be overridden.
const isOverride = (request: string, parent: Object): boolean => {};

// Setup a callback used to handle an overridden `require` invocation.
const resolveRequest = (request: string, parent: Object): any => {};

const restoreOriginalModuleLoader = overrideRequire(isOverride, resolveRequest);

// Restore the original module loader.
restoreOriginalModuleLoader();
```

## Example

```js
import overrideRequire from 'override-require';

const isOverride = (request) => {
  return request === 'vm';
};

const resolveRequest = (request) => {
  return 'test';
};

const restoreOriginalModuleLoader = restoreOriginalRequire(isOverride, resolveRequest);

require('vm');
// string 'test'

require('events');
// class EventEmitter

restoreOriginalModuleLoader();

require('vm');
// object vm
```
