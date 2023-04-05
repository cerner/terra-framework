"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveElementProperty = exports.toHaveElementPropertyFn = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function condition(el, property, value, options = {}) {
    const { asString = false } = options;
    let prop = await el.getProperty(property);
    if (prop === null || prop === undefined) {
        return { result: false, value: prop };
    }
    if (value === null) {
        return { result: true, value: prop };
    }
    if (!(value instanceof RegExp) && (typeof value !== 'string' || (typeof prop !== 'string' && !asString))) {
        return { result: prop === value, value: prop };
    }
    prop = prop.toString();
    return (0, utils_1.compareText)(prop, value, options);
}
async function toHaveElementPropertyFn(received, property, value, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'property', verb = 'have' } = this;
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        let el = await received;
        let prop;
        const pass = await (0, utils_1.waitUntil)(async () => {
            const result = await utils_1.executeCommand.call(this, el, condition, options, [property, value]);
            el = result.el;
            prop = result.values;
            return result.success;
        }, isNot, options);
        (0, utils_1.updateElementsArray)(pass, received, el);
        let message;
        if (value === undefined) {
            message = (0, utils_1.enhanceError)(el, !isNot, pass, this, verb, expectation, property, options);
        }
        else {
            const expected = (0, utils_1.wrapExpectedWithArray)(el, prop, value);
            message = (0, utils_1.enhanceError)(el, expected, prop, this, verb, expectation, property, options);
        }
        return {
            pass,
            message: () => message,
        };
    });
}
exports.toHaveElementPropertyFn = toHaveElementPropertyFn;
function toHaveElementProperty(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveElementPropertyFn, args);
}
exports.toHaveElementProperty = toHaveElementProperty;
