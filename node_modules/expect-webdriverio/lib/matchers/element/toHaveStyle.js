"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveStyle = exports.toHaveStyleFn = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function condition(el, style, options) {
    return (0, utils_1.compareStyle)(el, style, options);
}
async function toHaveStyleFn(received, style, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'style', verb = 'have' } = this;
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        let el = await received;
        let actualStyle;
        const pass = await (0, utils_1.waitUntil)(async () => {
            const result = await utils_1.executeCommand.call(this, el, condition, options, [style, options]);
            el = result.el;
            actualStyle = result.values;
            return result.success;
        }, isNot, options);
        (0, utils_1.updateElementsArray)(pass, received, el);
        const message = (0, utils_1.enhanceError)(el, (0, utils_1.wrapExpectedWithArray)(el, actualStyle, style), actualStyle, this, verb, expectation, '', options);
        return {
            pass,
            message: () => message
        };
    });
}
exports.toHaveStyleFn = toHaveStyleFn;
function toHaveStyle(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveStyleFn, args);
}
exports.toHaveStyle = toHaveStyle;
