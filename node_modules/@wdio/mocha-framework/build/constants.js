"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MOCHA_TIMEOUT_MESSAGE_REPLACEMENT = exports.MOCHA_TIMEOUT_MESSAGE = exports.NOOP = exports.EVENTS = exports.TEST_INTERFACES = exports.INTERFACES = void 0;
exports.INTERFACES = {
    bdd: ['it', 'specify', 'before', 'beforeEach', 'after', 'afterEach'],
    tdd: ['test', 'suiteSetup', 'setup', 'suiteTeardown', 'teardown'],
    qunit: ['test', 'before', 'beforeEach', 'after', 'afterEach']
};
exports.TEST_INTERFACES = {
    bdd: ['it', 'specify'],
    tdd: ['test'],
    qunit: ['test']
};
/**
 * to map Mocha events to WDIO events
 */
exports.EVENTS = {
    'suite': 'suite:start',
    'suite end': 'suite:end',
    'test': 'test:start',
    'test end': 'test:end',
    'hook': 'hook:start',
    'hook end': 'hook:end',
    'pass': 'test:pass',
    'fail': 'test:fail',
    'retry': 'test:retry',
    'pending': 'test:pending'
};
const NOOP = function () { };
exports.NOOP = NOOP;
exports.MOCHA_TIMEOUT_MESSAGE = 'For async tests and hooks, ensure "done()" is called; if returning a Promise, ensure it resolves.';
exports.MOCHA_TIMEOUT_MESSAGE_REPLACEMENT = [
    'The execution in the test "%s %s" took too long. Try to reduce the run time or',
    'increase your timeout for test specs (https://webdriver.io/docs/timeouts).'
].join(' ');
