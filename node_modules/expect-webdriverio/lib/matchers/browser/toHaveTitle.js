"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveTitle = exports.toHaveTitleFn = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const utils_1 = require("../../utils");
function toHaveTitleFn(browser, title, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'title', verb = 'have' } = this;
    return browser.call(async () => {
        let actual;
        const pass = await (0, utils_1.waitUntil)(async () => {
            actual = await browser.getTitle();
            return (0, utils_1.compareText)(actual, title, options).result;
        }, isNot, options);
        const message = (0, utils_1.enhanceError)('window', title, actual, this, verb, expectation, '', options);
        return {
            pass,
            message: () => message
        };
    });
}
exports.toHaveTitleFn = toHaveTitleFn;
function toHaveTitle(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveTitleFn, args);
}
exports.toHaveTitle = toHaveTitle;
