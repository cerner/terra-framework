"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getElementObject_1 = require("../../utils/getElementObject");
const utils_1 = require("../../utils");
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

        const pluginRowBlock = await browser.custom$('myStrat', '.pluginRowBlock')
        const pluginWrapper = await pluginRowBlock.custom$$('myStrat', '.pluginWrapper')

        console.log(pluginWrapper.length) // 4
    })
 * </example>
 *
 * @alias custom$$
 * @param {String} strategyName
 * @param {Any} strategyArguments
 * @return {ElementArray}
 */
async function custom$$(strategyName, ...strategyArguments) {
    const browserObject = (0, utils_1.getBrowserObject)(this);
    const strategy = browserObject.strategies.get(strategyName);
    if (!strategy) {
        /* istanbul ignore next */
        throw Error('No strategy found for ' + strategyName);
    }
    /**
     * fail if root element is not found, similar to:
     * $('.notExisting').$('.someElem')
     */
    if (!this.elementId) {
        throw Error(`Can't call custom$ on element with selector "${this.selector}" because element wasn't found`);
    }
    const strategyRef = { strategy, strategyName, strategyArguments: [...strategyArguments, this] };
    let res = await this.execute(strategy, ...strategyArguments, this);
    /**
     * if the user's script return just one element
     * then we convert it to an array as this method
     * should return multiple elements
     */
    if (!Array.isArray(res)) {
        res = [res];
    }
    res = res.filter((el) => !!el && typeof el[constants_1.ELEMENT_KEY] === 'string');
    const elements = res.length ? await getElementObject_1.getElements.call(this, strategyRef, res) : [];
    return (0, utils_1.enhanceElementsArray)(elements, this, strategyName, 'custom$$', strategyArguments);
}
exports.default = custom$$;
