var assert = require('assert');
var pinpoint = require('..');

exports.generates = function (opts, input, output) {
	assert.equal(pinpoint(input, opts), output);
};