"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const diff_1 = require("diff");
const object_inspect_1 = __importDefault(require("object-inspect"));
const runnable_1 = __importDefault(require("./runnable"));
const utils_1 = require("../utils");
const util_1 = require("util");
const maxStringLength = 2048;
/**
 * TestStats class
 * captures data on a test.
 */
class TestStats extends runnable_1.default {
    constructor(test) {
        super('test');
        this.uid = runnable_1.default.getIdentifier(test);
        this.cid = test.cid;
        this.title = test.title;
        this.fullTitle = test.fullTitle;
        this.output = [];
        this.argument = test.argument;
        this.retries = test.retries;
        this.parent = test.parent;
        /**
         * initial test state is pending
         * the state can change to the following: passed, skipped, failed
         */
        this.state = 'pending';
    }
    pass() {
        this.complete();
        this.state = 'passed';
    }
    skip(reason) {
        this.pendingReason = reason;
        this.state = 'skipped';
    }
    fail(errors) {
        this.complete();
        this.state = 'failed';
        /**
         * Iterates through all errors to check if they're a type of 'AssertionError',
         * and formats it if so. Otherwise, just leaves error as is
         */
        const formattedErrors = errors === null || errors === void 0 ? void 0 : errors.map((err) => (
        /**
         * only format if error object has either an "expected" or "actual" property set
         */
        ((err.expected || err.actual) && !util_1.types.isProxy(err.actual)) &&
            /**
             * and if they aren't already formated, e.g. in Jasmine
             */
            (err.message && !err.message.includes('Expected: ') && !err.message.includes('Received: '))
            ? this._stringifyDiffObjs(err)
            : err));
        this.errors = formattedErrors;
        if (formattedErrors && formattedErrors.length) {
            this.error = formattedErrors[0];
        }
    }
    _stringifyDiffObjs(err) {
        const inspectOpts = { maxStringLength };
        const expected = (0, object_inspect_1.default)(err.expected, inspectOpts);
        const actual = (0, object_inspect_1.default)(err.actual, inspectOpts);
        let msg = (0, diff_1.diffWordsWithSpace)(actual, expected)
            .map((str) => (str.added
            ? (0, utils_1.colorLines)('diff added inline', str.value)
            : str.removed
                ? (0, utils_1.colorLines)('diff removed inline', str.value)
                : str.value))
            .join('');
        // linenos
        const lines = msg.split('\n');
        if (lines.length > 4) {
            const width = String(lines.length).length;
            msg = lines
                .map(function (str, i) {
                return (0, utils_1.pad)(String(++i), width) + ' |' + ' ' + str;
            })
                .join('\n');
        }
        // legend
        msg = `\n${(0, utils_1.color)('diff removed inline', 'actual')} ${(0, utils_1.color)('diff added inline', 'expected')}\n\n${msg}\n`;
        // indent
        msg = msg.replace(/^/gm, '      ');
        const newError = new Error(err.message + msg);
        newError.stack = err.stack;
        return newError;
    }
}
exports.default = TestStats;
