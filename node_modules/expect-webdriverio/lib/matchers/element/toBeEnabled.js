"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeEnabled = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeEnabledFn(received, options = {}) {
    this.expectation = this.expectation || 'enabled';
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, el => el.isEnabled(), options);
        return result;
    });
}
function toBeEnabled(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeEnabledFn, args);
}
exports.toBeEnabled = toBeEnabled;
