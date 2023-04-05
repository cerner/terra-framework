"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveValueContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveValue_1 = require("./toHaveValue");
function toHaveValueContainingFn(el, value, options = {}) {
    return toHaveValue_1.toHaveValueFn.call(this, el, value, {
        ...options,
        containing: true
    });
}
function toHaveValueContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveValueContainingFn, args);
}
exports.toHaveValueContaining = toHaveValueContaining;
