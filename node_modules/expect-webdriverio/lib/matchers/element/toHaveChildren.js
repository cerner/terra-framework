"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveChildren = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function condition(el, options) {
    const children = await el.$$('./*');
    if (typeof options.lte !== 'number' &&
        typeof options.gte !== 'number' &&
        typeof options.eq !== 'number') {
        return {
            result: children.length > 0,
            value: children === null || children === void 0 ? void 0 : children.length
        };
    }
    return {
        result: (0, utils_1.compareNumbers)(children === null || children === void 0 ? void 0 : children.length, options),
        value: children === null || children === void 0 ? void 0 : children.length
    };
}
async function toHaveChildrenFn(received, expected, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'children', verb = 'have' } = this;
    let numberOptions;
    if (typeof expected === 'number') {
        numberOptions = { eq: expected };
    }
    else if (typeof expected === 'object') {
        numberOptions = expected;
    }
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        let el = await received;
        let children;
        const pass = await (0, utils_1.waitUntil)(async () => {
            const result = await utils_1.executeCommand.call(this, el, condition, numberOptions, [numberOptions]);
            el = result.el;
            children = result.values;
            return result.success;
        }, isNot, { ...numberOptions, ...options });
        (0, utils_1.updateElementsArray)(pass, received, el);
        const error = (0, utils_1.numberError)(numberOptions);
        const expected = (0, utils_1.wrapExpectedWithArray)(el, children, error);
        const message = (0, utils_1.enhanceError)(el, expected, children, this, verb, expectation, '', numberOptions);
        return {
            pass,
            message: () => message
        };
    });
}
function toHaveChildren(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveChildrenFn, args);
}
exports.toHaveChildren = toHaveChildren;
