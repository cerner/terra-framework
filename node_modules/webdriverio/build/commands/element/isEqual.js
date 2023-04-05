"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("../../constants");
const utils_1 = require("../../utils");
const getWebElement = (el) => ({
    [constants_1.ELEMENT_KEY]: el.elementId,
    ELEMENT: el.elementId // jsonwp compatible
});
/**
 *
 * Return true if the selected element matches with the provided one.
 *
 * <example>
    :isEqual.js
    it('should detect if an element is clickable', async () => {
        const el = await $('#el')
        const sameEl = await $('#el')
        const anotherEl = await $('#anotherEl')

        el.isEqual(sameEl) // outputs: true

        el.isEqual(anotherEl) // outputs: false
    });
 * </example>
 *
 * @alias element.isEqual
 * @param   {Element}   el element to compare with
 * @return  {Boolean}   true if elements are equal
 *
 */
async function isEqual(el) {
    const browser = (0, utils_1.getBrowserObject)(this);
    // mobile native
    if (browser.isMobile) {
        const context = await browser.getContext();
        const contextId = typeof context === 'string'
            ? context
            : context === null || context === void 0 ? void 0 : context.id;
        if (contextId && contextId.toLowerCase().includes('native')) {
            return this.elementId === el.elementId;
        }
    }
    // browser or webview
    let result;
    try {
        result = await browser.execute(
        /* istanbul ignore next */
        function (el1, el2) { return el1 === el2; }, getWebElement(this), getWebElement(el));
    }
    catch (err) {
        result = false;
    }
    return result;
}
exports.default = isEqual;
