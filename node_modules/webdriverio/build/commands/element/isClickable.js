"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const isElementClickable_1 = __importDefault(require("../../scripts/isElementClickable"));
/**
 *
 * Return true if the selected DOM-element:
 *
 * - exists
 * - is visible
 * - is within viewport (if not try scroll to it)
 * - its center is not overlapped with another element
 * - is not disabled
 *
 * otherwise return false.
 *
 * :::info
 *
 * Please note that `isClickable` works only in web browser and in mobile webviews,
 * it doesn't work in mobile app native context. Also, As opposed to other element
 * commands WebdriverIO will not wait for the element to exist to execute this command.
 *
 * :::
 *
 * <example>
    :isClickable.js
    it('should detect if an element is clickable', async () => {
        const el = await $('#el')
        let clickable = await el.isClickable();
        console.log(clickable); // outputs: true or false

        // wait for element to be clickable
        await browser.waitUntil(() => el.isClickable())
    });
 * </example>
 *
 * @alias element.isClickable
 * @return {Boolean}            true if element is clickable
 * @uses protocol/selectorExecute, protocol/timeoutsAsyncScript
 * @type state
 *
 */
async function isClickable() {
    if (!await this.isDisplayed()) {
        return false;
    }
    if (this.isMobile && await this.getContext() === 'NATIVE_APP') {
        throw new Error('Method not supported in mobile native environment. It is unlikely that you need to use this command.');
    }
    const browser = (0, utils_1.getBrowserObject)(this);
    return browser.execute(isElementClickable_1.default, {
        [constants_1.ELEMENT_KEY]: this.elementId,
        ELEMENT: this.elementId // jsonwp compatible
    });
}
exports.default = isClickable;
