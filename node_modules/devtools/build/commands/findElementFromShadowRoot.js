"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const findElementFromElement_1 = __importDefault(require("./findElementFromElement"));
/**
 * The Find Element From Shadow Root command is used to find an element
 * within the shadow root of an element that can be used for future commands.
 * This command returns JSON representation of the element that can be passed
 * to $ command to transform the reference to an extended WebdriverIO element.
 *
 * @alias browser.findElementFromShadowRoot
 * @see https://w3c.github.io/webdriver/#find-element-from-shadow-root
 * @param {string} using  a valid element location strategy
 * @param {string} value  the actual selector that will be used to find an element
 * @return {Object}       A JSON representation of an element shadow object, e.g. `{ 'element-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.
 */
async function findElementFromShadowRoot({ shadowId, using, value }) {
    if (using !== 'css selector') {
        throw new Error('Fetching elements from a shadow element using something other than "css selector" is currently not supported.');
    }
    return findElementFromElement_1.default.call(this, {
        elementId: shadowId,
        using: 'shadow',
        value
    });
}
exports.default = findElementFromShadowRoot;
