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
export default function custom$$(this: WebdriverIO.Browser, strategyName: string, ...strategyArguments: any[]): Promise<ElementArray>;
//# sourceMappingURL=custom$$.d.ts.map