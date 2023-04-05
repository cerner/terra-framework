"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeElementsArrayOfSize = void 0;
const utils_1 = require("../../utils");
const refetchElements_1 = require("../../util/refetchElements");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeElementsArrayOfSizeFn(received, expected, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'elements array of size', verb = 'be' } = this;
    let numberOptions;
    if (typeof expected === 'number') {
        numberOptions = { eq: expected };
    }
    else if (!expected || (typeof expected.eq !== 'number' && typeof expected.gte !== 'number' && typeof expected.lte !== 'number')) {
        throw new Error('Invalid params passed to toBeElementsArrayOfSize.');
    }
    else {
        numberOptions = expected;
    }
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        let elements = await received;
        const arrLength = elements.length;
        const pass = await (0, utils_1.waitUntil)(async () => {
            elements = await (0, refetchElements_1.refetchElements)(elements, numberOptions.wait, true);
            return (0, utils_1.compareNumbers)(elements.length, numberOptions);
        }, isNot, { ...numberOptions, ...options });
        (0, utils_1.updateElementsArray)(pass, received, elements, true);
        const error = (0, utils_1.numberError)(numberOptions);
        const message = (0, utils_1.enhanceError)(elements, error, arrLength, this, verb, expectation, '', numberOptions);
        return {
            pass,
            message: () => message
        };
    });
}
function toBeElementsArrayOfSize(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeElementsArrayOfSizeFn, args);
}
exports.toBeElementsArrayOfSize = toBeElementsArrayOfSize;
