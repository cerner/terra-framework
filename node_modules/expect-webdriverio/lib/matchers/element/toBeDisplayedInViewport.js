"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeDisplayedInViewport = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toBeDisplayedInViewportFn(received, options = {}) {
    this.expectation = this.expectation || 'displayed in viewport';
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, async (el) => {
            try {
                return el.isDisplayedInViewport();
            }
            catch (_a) {
                return false;
            }
        }, options);
        return result;
    });
}
function toBeDisplayedInViewport(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeDisplayedInViewportFn, args);
}
exports.toBeDisplayedInViewport = toBeDisplayedInViewport;
