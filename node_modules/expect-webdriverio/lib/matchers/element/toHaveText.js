"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveText = exports.toHaveTextFn = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function condition(el, text, options) {
    const actualText = await el.getText();
    if (Array.isArray(text)) {
        return (0, utils_1.compareTextWithArray)(actualText, text, options);
    }
    return (0, utils_1.compareText)(actualText, text, options);
}
async function toHaveTextFn(received, text, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'text', verb = 'have' } = this;
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        let el = await received;
        let actualText;
        const pass = await (0, utils_1.waitUntil)(async () => {
            const result = await utils_1.executeCommand.call(this, el, condition, options, [text, options]);
            el = result.el;
            actualText = result.values;
            return result.success;
        }, isNot, options);
        (0, utils_1.updateElementsArray)(pass, received, el);
        const message = (0, utils_1.enhanceError)(el, (0, utils_1.wrapExpectedWithArray)(el, actualText, text), actualText, this, verb, expectation, '', options);
        return {
            pass,
            message: () => message
        };
    });
}
exports.toHaveTextFn = toHaveTextFn;
function toHaveText(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveTextFn, args);
}
exports.toHaveText = toHaveText;
