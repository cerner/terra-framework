"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveAttrContaining = exports.toHaveAttributeContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveAttribute_1 = require("./toHaveAttribute");
function toHaveAttributeContainingFn(el, attribute, value, options = {}) {
    return toHaveAttribute_1.toHaveAttributeAndValueFn.call(this, el, attribute, value, {
        ...options,
        containing: true
    });
}
function toHaveAttributeContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveAttributeContainingFn, args);
}
exports.toHaveAttributeContaining = toHaveAttributeContaining;
exports.toHaveAttrContaining = toHaveAttributeContaining;
