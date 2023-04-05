/**
 *
 * Returns true if element exists in the DOM.
 *
 * :::info
 *
 * As opposed to other element commands WebdriverIO will not wait for the element
 * to exist to execute this command.
 *
 * :::
 *
 * <example>
    :index.html
    <div id="notDisplayed" style="display: none"></div>
    <div id="notVisible" style="visibility: hidden"></div>
    <div id="notInViewport" style="position:absolute; left: 9999999"></div>
    <div id="zeroOpacity" style="opacity: 0"></div>
    :isExisting.js
    it('should detect if elements are existing', async () => {
        let elem = await $('#someRandomNonExistingElement')
        let isExisting = await elem.isExisting()
        console.log(isExisting); // outputs: false

        elem = await $('#notDisplayed')
        isExisting = await elem.isExisting()
        console.log(isExisting); // outputs: true

        elem = await $('#notVisible')
        isExisting = await elem.isExisting()
        console.log(isExisting); // outputs: true

        elem = await $('#notInViewport')
        isExisting = await elem.isExisting()
        console.log(isExisting); // outputs: true

        elem = await $('#zeroOpacity')
        isExisting = await elem.isExisting()
        console.log(isExisting); // outputs: true
    });
 * </example>
 *
 * @alias element.isExisting
 * @return {Boolean}            true if element(s)* [is|are] existing
 * @uses protocol/elements
 * @type state
 *
 */
export default function isExisting(this: WebdriverIO.Element): Promise<boolean>;
//# sourceMappingURL=isExisting.d.ts.map