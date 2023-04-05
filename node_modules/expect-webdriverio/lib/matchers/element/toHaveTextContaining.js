"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveTextContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveText_1 = require("./toHaveText");
function toHaveTextContainingFn(el, text, options = {}) {
    return toHaveText_1.toHaveTextFn.call(this, el, text, {
        ...options,
        containing: true
    });
}
function toHaveTextContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveTextContainingFn, args);
}
exports.toHaveTextContaining = toHaveTextContaining;
