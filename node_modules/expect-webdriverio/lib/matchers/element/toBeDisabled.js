"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeDisabled = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeDisabledFn(received, options = {}) {
    this.expectation = this.expectation || 'disabled';
    received = await received;
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, async (el) => !await el.isEnabled(), options);
        return result;
    });
}
function toBeDisabled(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeDisabledFn, args);
}
exports.toBeDisabled = toBeDisabled;
