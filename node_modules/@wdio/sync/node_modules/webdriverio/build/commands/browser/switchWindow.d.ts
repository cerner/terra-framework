/**
 *
 * Switch focus to a particular tab / window.
 *
 * <example>
    :switchWindow.js
    it('should switch to another window', async () => {
        // open url
        await browser.url('https://google.com')

        // create new window
        await browser.newWindow('https://webdriver.io')

        // switch back via url match
        await browser.switchWindow('google.com')

        // switch back via title match
        await browser.switchWindow('Next-gen browser and mobile automation test framework for Node.js')
    });
 * </example>
 *
 * @param {String|RegExp}  matcher  String or regular expression that matches the title and url of the page or window name
 *
 * @uses protocol/getWindowHandles, protocol/switchToWindow, protocol/getUrl, protocol/getTitle
 * @alias browser.switchTab
 * @type window
 *
 */
export default function switchWindow(this: WebdriverIO.Browser, matcher: string | RegExp): Promise<string>;
//# sourceMappingURL=switchWindow.d.ts.map