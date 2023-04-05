# pinpoint

Add line numbers and an arrow to a string of code that points to a specific location.

## Installation

	npm install pinpoint

## Example

With this code:

```javascript
function add(left, right) {
  return left + right;
}

console.log(add(1 + 1));
```

When being asked to point to line 2 and column 2, generates this:

```javascript
1| function add(left, right) {
2|   return left + right;
-----^
3| }
4|
5| console.log(add(1 + 1));
```
## API

```javascript
var pinpoint = require('pinpoint');

var str = pinpoint(code, options);
```

* `code` - a string of code
* `options` - an object literal supports these options:
	* `line` - the line number to point to, 1-based.
	* `column` - the column number to point to, 1-based.
	* `showLines` - the number of lines to show. The pointed line will try to stay in the middle of the displays lines.
	* `indent` - indent string prepend to each line, before the line number.
	* `tabSize` - width of a tab character.