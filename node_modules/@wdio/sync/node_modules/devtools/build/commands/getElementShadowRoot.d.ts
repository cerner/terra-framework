import type DevToolsDriver from '../devtoolsdriver';
/**
 * Get the shadow root object of an element. The result object can be used to fetch
 * elements within this shadow root using e.g. `findElementFromShadowRoots` or `findElementsFromShadowRoots`.
 *
 * @alias browser.getElementShadowRoot
 * @see https://w3c.github.io/webdriver/#dfn-get-element-rect
 * @param {string} elementId  the id of an element returned in a previous call to Find Element(s)
 * @return {string}           A JSON representation of an element shadow root, e.g. `{ 'shadow-6066-11e4-a52e-4f735466cecf': 'ELEMENT_1' }`.
 */
export default function getElementShadowRoot(this: DevToolsDriver, { elementId }: {
    elementId: string;
}): Promise<{
    "shadow-6066-11e4-a52e-4f735466cecf": string;
}>;
//# sourceMappingURL=getElementShadowRoot.d.ts.map