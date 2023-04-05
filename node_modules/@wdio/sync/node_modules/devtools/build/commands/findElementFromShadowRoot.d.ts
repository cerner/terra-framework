import type DevToolsDriver from '../devtoolsdriver';
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
export default function findElementFromShadowRoot(this: DevToolsDriver, { shadowId, using, value }: {
    shadowId: string;
    using: string;
    value: string;
}): Promise<import("@wdio/protocols").ElementReference | Error>;
//# sourceMappingURL=findElementFromShadowRoot.d.ts.map