var humanSize = require('./');
var assert = require('assert');

assert.strictEqual(humanSize(1000), "1000B");
assert.strictEqual(humanSize(1024), "1KB");
assert.strictEqual(humanSize(10 * 1024), "10KB");
assert.strictEqual(humanSize(106168, 2), "103.68KB");
assert.strictEqual(humanSize(10 * 1024 * 1024), "10MB");
assert.strictEqual(humanSize(10 * 1024 * 1024 * 1024), "10GB");
assert.strictEqual(humanSize(103 * 1024 * 1024 * 1024 + 1533333333, 2), "104.43GB");
assert.strictEqual(humanSize(Math.pow(1024, 8) * 4.4, 1), "4.4YB");
assert.strictEqual(humanSize(Math.pow(1024, 9) * 1.4, 1), "1433.6YB");
