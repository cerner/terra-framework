"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeRequestedWithResponse = void 0;
const toBeRequestedWith_1 = require("./toBeRequestedWith");
const expectAdapter_1 = require("../../util/expectAdapter");
function toBeRequestedWithResponseFn(received, response, options = {}) {
    return toBeRequestedWith_1.toBeRequestedWithFn.call(this, received, { response }, options);
}
function toBeRequestedWithResponse(...args) {
    console.warn('expect(...).toBeRequestedWithResponse is deprecated and will be removed in next release. Use toBeRequestedWith instead.');
    return expectAdapter_1.runExpect.call(this || {}, toBeRequestedWithResponseFn, args);
}
exports.toBeRequestedWithResponse = toBeRequestedWithResponse;
