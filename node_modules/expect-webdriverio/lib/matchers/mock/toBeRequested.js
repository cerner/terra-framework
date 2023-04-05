"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeRequested = void 0;
const toBeRequestedTimes_1 = require("./toBeRequestedTimes");
const expectAdapter_1 = require("../../util/expectAdapter");
function toBeRequestedFn(received, options = {}) {
    return toBeRequestedTimes_1.toBeRequestedTimes.call({ ...(this || {}), expectation: 'called' }, received, { ...options, gte: 1 });
}
function toBeRequested(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeRequestedFn, args);
}
exports.toBeRequested = toBeRequested;
