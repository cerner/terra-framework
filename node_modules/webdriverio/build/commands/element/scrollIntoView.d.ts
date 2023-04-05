/**
 *
 * Scroll element into viewport ([MDN Reference](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)).
 *
 * <example>
    :scrollIntoView.js
    it('should demonstrate the scrollIntoView command', async () => {
        const elem = await $('#myElement');
        // scroll to specific element
        await elem.scrollIntoView();
    });
 * </example>
 *
 * @alias element.scrollIntoView
 * @param {object|boolean=} scrollIntoViewOptions  options for `Element.scrollIntoView()` (default: `true`)
 * @uses protocol/execute
 * @type utility
 *
 */
export default function scrollIntoView(this: WebdriverIO.Element, scrollIntoViewOptions?: boolean | ScrollIntoViewOptions): Promise<void>;
//# sourceMappingURL=scrollIntoView.d.ts.map