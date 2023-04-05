"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveLinkContaining = exports.toHaveHrefContaining = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveHref_1 = require("./toHaveHref");
function toHaveHrefContainingFn(el, href, options = {}) {
    return toHaveHref_1.toHaveHrefFn.call(this, el, href, {
        ...options,
        containing: true
    });
}
function toHaveHrefContaining(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveHrefContainingFn, args);
}
exports.toHaveHrefContaining = toHaveHrefContaining;
exports.toHaveLinkContaining = toHaveHrefContaining;
