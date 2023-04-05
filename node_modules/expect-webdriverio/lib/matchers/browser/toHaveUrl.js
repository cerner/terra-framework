"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveUrl = exports.toHaveUrlFn = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const utils_1 = require("../../utils");
function toHaveUrlFn(browser, url, options = {}) {
    const isNot = this.isNot;
    const { expectation = 'url', verb = 'have' } = this;
    return browser.call(async () => {
        let actual;
        const pass = await (0, utils_1.waitUntil)(async () => {
            actual = await browser.getUrl();
            return (0, utils_1.compareText)(actual, url, options).result;
        }, isNot, options);
        const message = (0, utils_1.enhanceError)('window', url, actual, this, verb, expectation, '', options);
        return {
            pass,
            message: () => message
        };
    });
}
exports.toHaveUrlFn = toHaveUrlFn;
function toHaveUrl(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveUrlFn, args);
}
exports.toHaveUrl = toHaveUrl;
