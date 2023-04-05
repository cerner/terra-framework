/**
 *
 * Return true or false if the selected DOM-element currently has focus. If the selector matches
 * multiple elements, it will return true if one of the elements has focus.
 *
 * <example>
    :index.html
    <input name="login" autofocus="" />
    :hasFocus.js
    it('should detect the focus of an element', async () => {
        await browser.url('/');
        const loginInput = await $('[name="login"]');
        console.log(await loginInput.isFocused()); // outputs: false

        await loginInput.click();
        console.log(await loginInput.isFocused()); // outputs: true
    })
 * </example>
 *
 * @alias element.isFocused
 * @return {Boolean}         true if one of the matching elements has focus
 *
 * @uses protocol/execute
 * @type state
 *
 */
export default function isFocused(this: WebdriverIO.Element): Promise<boolean>;
//# sourceMappingURL=isFocused.d.ts.map