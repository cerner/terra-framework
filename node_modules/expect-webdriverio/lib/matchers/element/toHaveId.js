"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveId = exports.toHaveIdFn = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveAttribute_1 = require("./toHaveAttribute");
function toHaveIdFn(el, id, options = {}) {
    return toHaveAttribute_1.toHaveAttributeAndValueFn.call(this, el, 'id', id, options);
}
exports.toHaveIdFn = toHaveIdFn;
function toHaveId(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveIdFn, args);
}
exports.toHaveId = toHaveId;
