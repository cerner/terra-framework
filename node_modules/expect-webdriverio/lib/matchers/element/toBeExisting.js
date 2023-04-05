"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBePresent = exports.toBeExisting = exports.toExist = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
async function toExistFn(received, options = {}) {
    this.expectation = this.expectation || 'exist';
    this.verb = this.verb || '';
    received = await received;
    const browser = await (0, utils_1.getBrowserObject)(await received);
    return browser.call(async () => {
        const result = await utils_1.executeCommandBe.call(this, received, async (el) => {
            try {
                return el.isExisting();
            }
            catch (_a) {
                return false;
            }
        }, options);
        return result;
    });
}
function toExist(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toExistFn, args);
}
exports.toExist = toExist;
function toBeExisting(el, options) {
    return utils_1.aliasFn.call(this, toExist, { verb: 'be', expectation: 'existing' }, el, options);
}
exports.toBeExisting = toBeExisting;
function toBePresent(el, options) {
    return utils_1.aliasFn.call(this, toExist, { verb: 'be', expectation: 'present' }, el, options);
}
exports.toBePresent = toBePresent;
