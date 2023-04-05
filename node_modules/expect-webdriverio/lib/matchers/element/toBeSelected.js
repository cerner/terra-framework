"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeChecked = exports.toBeSelected = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeSelectedFn(received, options = {}) {
    this.expectation = this.expectation || 'selected';
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, el => el.isSelected(), options);
        return result;
    });
}
function toBeSelected(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeSelectedFn, args);
}
exports.toBeSelected = toBeSelected;
function toBeChecked(el, options) {
    const context = (0, expectAdapter_1.getContext)(this);
    context.expectation = 'checked';
    return toBeSelected.call(context, el, options);
}
exports.toBeChecked = toBeChecked;
