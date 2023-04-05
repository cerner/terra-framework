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
export default function isEqual(this: WebdriverIO.Element, el: WebdriverIO.Element): Promise<boolean>;
//# sourceMappingURL=isEqual.d.ts.map