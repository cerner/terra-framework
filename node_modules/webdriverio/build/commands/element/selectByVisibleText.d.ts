/**
 *
 * Select option with displayed text matching the argument.
 *
 * <example>
    :example.html
    <select id="selectbox">
        <option value="someValue0">uno</option>
        <option value="someValue1">dos</option>
        <option value="someValue2">tres</option>
        <option value="someValue3">cuatro</option>
        <option value="someValue4">cinco</option>
        <option value="someValue5">seis</option>
    </select>
    :selectByVisibleText.js
    it('demonstrate the selectByVisibleText command', async () => {
        const selectBox = await $('#selectbox');
        console.log(await selectBox.getText('option:checked')); // returns "uno"
        await selectBox.selectByVisibleText('cuatro');
        console.log(await selectBox.getText('option:checked')); // returns "cuatro"
    })
 * </example>
 *
 * @alias element.selectByVisibleText
 * @param {String|Number} text       text of option element to get selected
 * @uses protocol/findElementsFromElement, protocol/elementClick
 * @type action
 *
 */
export default function selectByVisibleText(this: WebdriverIO.Element, text: string | number): Promise<void>;
//# sourceMappingURL=selectByVisibleText.d.ts.map