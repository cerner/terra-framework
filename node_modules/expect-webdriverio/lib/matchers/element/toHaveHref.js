"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toHaveLink = exports.toHaveHref = exports.toHaveHrefFn = void 0;
const expectAdapter_1 = require("../../util/expectAdapter");
const toHaveAttribute_1 = require("./toHaveAttribute");
function toHaveHrefFn(el, href, options = {}) {
    return toHaveAttribute_1.toHaveAttributeAndValueFn.call(this, el, 'href', href, options);
}
exports.toHaveHrefFn = toHaveHrefFn;
function toHaveHref(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toHaveHrefFn, args);
}
exports.toHaveHref = toHaveHref;
exports.toHaveLink = toHaveHref;
