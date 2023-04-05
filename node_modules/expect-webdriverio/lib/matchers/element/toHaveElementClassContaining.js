"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveClassContaining = exports.toHaveElementClassContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveAttribute_1 = require("./toHaveAttribute");
function toHaveElementClassContainingFn(el, className, options = {}) {
    return toHaveAttribute_1.toHaveAttributeAndValueFn.call(this, el, 'class', className, {
        ...options,
        containing: true
    });
}
function toHaveElementClassContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveElementClassContainingFn, args);
}
exports.toHaveElementClassContaining = toHaveElementClassContaining;
function toHaveClassContaining(...args) {
    console.warn('expect(...).toHaveClassContaining is deprecated and will be removed in next release. Use toHaveElementClassContaining instead.');
    return expectAdapter_1.runExpect.call(this || {}, toHaveElementClassContainingFn, args);
}
exports.toHaveClassContaining = toHaveClassContaining;
