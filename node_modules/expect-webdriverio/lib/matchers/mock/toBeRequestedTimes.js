"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeRequestedTimes = exports.toBeRequestedTimesFn = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
const formatMessage_1 = require("../../util/formatMessage");
function toBeRequestedTimesFn(received, expected = {}, options = {}) {
    const isNot = this.isNot || false;
    const { expectation = `called${typeof expected === 'number' ? ' ' + expected : ''} time${expected !== 1 ? 's' : ''}`, verb = 'be' } = this;
    let numberOptions;
    if (typeof expected === 'number') {
        numberOptions = { eq: expected };
    }
    else if (typeof expected === 'object') {
        numberOptions = expected;
    }
    return received.browser.call(async () => {
        let actual;
        const pass = await (0, utils_1.waitUntil)(async () => {
            actual = received.calls.length;
            return (0, utils_1.compareNumbers)(actual, numberOptions);
        }, isNot, { ...numberOptions, ...options });
        const error = (0, formatMessage_1.numberError)(numberOptions);
        const message = (0, utils_1.enhanceError)('mock', error, actual, this, verb, expectation, '', numberOptions);
        return {
            pass,
            message: () => message
        };
    });
}
exports.toBeRequestedTimesFn = toBeRequestedTimesFn;
function toBeRequestedTimes(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeRequestedTimesFn, args);
}
exports.toBeRequestedTimes = toBeRequestedTimes;
