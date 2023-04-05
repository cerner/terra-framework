"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const constants_1 = require("../constants");
/**
 * Get the shadow root object of an element. The result object can be used to fetch
 * elements within this shadow root using e.g. `findElementFromShadowRoots` or `findElementsFromShadowRoots`.
 *
 * @alias browser.getElementShadowRoot
 * @see https://w3c.github.io/webdriver/#dfn-get-element-rect
 * @param {string} elementId  the id of an element returned in a previous call to Find Element(s)
 * @return {string}           A JSON representation of an element shadow root, e.g. `{ 'shadow-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.
 */
async function getElementShadowRoot({ elementId }) {
    const elementHandle = await this.elementStore.get(elementId);
    if (!elementHandle) {
        throw (0, utils_1.getStaleElementError)(elementId);
    }
    /**
     * given that puppeteer doesn't allow to get an element handle from a shadow root
     * we just return the given element and use the shadow selector in `findElementFromShadowRoots`
     * and `findElementsFromShadowRoots` commands
     */
    return { [constants_1.SHADOW_ELEMENT_KEY]: elementId };
}
exports.default = getElementShadowRoot;
