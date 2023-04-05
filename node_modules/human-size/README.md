# node-human-size

Tiny module to get a human readable file size from a byte count.

## Usage

```js
var humanSize = require('human-size');

console.log(humanSize(10 * 1024 * 1024));
// prints "10 MB"

console.log(humanSize(10 * 1024 * 1024, 2));
// prints "10.00 MB"

console.log(humanSize(106168));
// prints "103 KB"

console.log(humanSize(106168, 2));
// prints "103.68 KB"
```
