"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../utils");
const getElementObject_1 = require("../../utils/getElementObject");
const constants_1 = require("../../constants");
/**
 *
 * The `customs$$` allows you to use a custom strategy declared by using `browser.addLocatorStrategy`
 *
 * <example>
    :example.js
    it('should get all the plugin wrapper buttons', async () => {
        await browser.url('https://webdriver.io')
        await browser.addLocatorStrategy('myStrat', (selector) => {
            return document.querySelectorAll(selector)
        })

        const pluginWrapper = await browser.custom$$('myStrat', '.pluginWrapper')

        console.log(await pluginWrapper.length) // 4
    })
 * </example>
 *
 * @alias custom$$
 * @param {String} strategyName
 * @param {Any} strategyArguments
 * @return {ElementArray}
 */
async function custom$$(strategyName, ...strategyArguments) {
    const strategy = this.strategies.get(strategyName);
    if (!strategy) {
        throw Error('No strategy found for ' + strategyName);
    }
    const strategyRef = { strategy, strategyName, strategyArguments };
    let res = await this.execute(strategy, ...strategyArguments);
    /**
     * if the user's script return just one element
     * then we convert it to an array as this method
     * should return multiple elements
     */
    if (!Array.isArray(res)) {
        res = [res];
    }
    res = res.filter(el => !!el && typeof el[constants_1.ELEMENT_KEY] === 'string');
    const elements = res.length ? await getElementObject_1.getElements.call(this, strategyRef, res) : [];
    return (0, utils_1.enhanceElementsArray)(elements, this, strategyName, 'custom$$', strategyArguments);
}
exports.default = custom$$;
