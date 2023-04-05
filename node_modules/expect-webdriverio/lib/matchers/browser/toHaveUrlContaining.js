"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveUrlContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveUrl_1 = require("./toHaveUrl");
function toHaveUrlContainingFn(browser, url, options = {}) {
    return toHaveUrl_1.toHaveUrlFn.call(this, browser, url, {
        ...options,
        containing: true
    });
}
function toHaveUrlContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveUrlContainingFn, args);
}
exports.toHaveUrlContaining = toHaveUrlContaining;
