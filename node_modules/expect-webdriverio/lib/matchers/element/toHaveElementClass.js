"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveClass = exports.toHaveElementClass = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function condition(el, attribute, value, options) {
    const { ignoreCase = false, trim = false, containing = false } = options;
    let attr = await el.getAttribute(attribute);
    if (typeof attr !== 'string') {
        return { result: false };
    }
    if (trim) {
        attr = attr.trim();
    }
    if (ignoreCase) {
        attr = attr.toLowerCase();
        if (!(value instanceof RegExp)) {
            value = value.toLowerCase();
        }
    }
    const classes = attr.split(' ');
    const valueInClasses = classes.some((t) => {
        return value instanceof RegExp ? !!t.match(value) : containing ? t.includes(value) : t === value;
    });
    return {
        value: attr,
        result: valueInClasses
    };
}
async function toHaveElementClassFn(received, className, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'class', verb = 'have' } = this;
    const attribute = 'class';
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        let el = await received;
        let attr;
        const pass = await (0, utils_1.waitUntil)(async () => {
            const result = await utils_1.executeCommand.call(this, el, condition, options, [attribute, className, options]);
            el = result.el;
            attr = result.values;
            return result.success;
        }, isNot, options);
        (0, utils_1.updateElementsArray)(pass, received, el);
        const message = (0, utils_1.enhanceError)(el, (0, utils_1.wrapExpectedWithArray)(el, attr, className), attr, this, verb, expectation, '', options);
        return {
            pass,
            message: () => message
        };
    });
}
function toHaveElementClass(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveElementClassFn, args);
}
exports.toHaveElementClass = toHaveElementClass;
function toHaveClass(...args) {
    console.warn('expect(...).toHaveClass is deprecated and will be removed in next release. Use toHaveElementClass instead.');
    return expectAdapter_1.runExpect.call(this || {}, toHaveElementClassFn, args);
}
exports.toHaveClass = toHaveClass;
