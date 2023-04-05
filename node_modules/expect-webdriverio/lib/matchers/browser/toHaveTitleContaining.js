"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveTitleContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveTitle_1 = require("./toHaveTitle");
function toHaveTitleContainingFn(browser, title, options = {}) {
    return toHaveTitle_1.toHaveTitleFn.call(this, browser, title, {
        ...options,
        containing: true
    });
}
function toHaveTitleContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveTitleContainingFn, args);
}
exports.toHaveTitleContaining = toHaveTitleContaining;
