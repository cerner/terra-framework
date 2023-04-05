"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * Get the computed WAI-ARIA label of an element.
 *
 * <example>
    :getComputedLabel.js
    it('should demonstrate the getComputedLabel command', async () => {
        await browser.url('https://www.google.com/ncr')
        const elem = await $('*[name="q"]');
        console.log(await elem.getComputedLabel()); // outputs: "Search"
    })
 * </example>
 *
 * @alias element.getComputedLabel
 * @return {String} the computed WAI-ARIA label
 * @type property
 *
 */
function getComputedLabel() {
    return this.getElementComputedLabel(this.elementId);
}
exports.default = getComputedLabel;
