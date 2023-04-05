"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveValue = exports.toHaveValueFn = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveElementProperty_1 = require("./toHaveElementProperty");
function toHaveValueFn(el, value, options = {}) {
    return toHaveElementProperty_1.toHaveElementPropertyFn.call(this, el, 'value', value, options);
}
exports.toHaveValueFn = toHaveValueFn;
function toHaveValue(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveValueFn, args);
}
exports.toHaveValue = toHaveValue;
