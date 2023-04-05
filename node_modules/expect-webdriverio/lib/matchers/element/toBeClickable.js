"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeClickable = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeClickableFn(received, options = {}) {
    this.expectation = this.expectation || 'clickable';
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, async (el) => {
            try {
                return el.isClickable();
            }
            catch (_a) {
                return false;
            }
        }, options);
        return result;
    });
}
function toBeClickable(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeClickableFn, args);
}
exports.toBeClickable = toBeClickable;
