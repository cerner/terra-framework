import type { ElementArray } from '../../types';
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
declare function custom$$(this: WebdriverIO.Element, strategyName: string, ...strategyArguments: any[]): Promise<ElementArray>;
export default custom$$;
//# sourceMappingURL=custom$$.d.ts.map