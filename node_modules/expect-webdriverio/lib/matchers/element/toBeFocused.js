"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeFocused = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeFocusedFn(received, options = {}) {
    this.expectation = this.expectation || 'focused';
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, el => el.isFocused(), options);
        return result;
    });
}
function toBeFocused(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeFocusedFn, args);
}
exports.toBeFocused = toBeFocused;
