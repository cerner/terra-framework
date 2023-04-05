import type { NewWindowOptions } from '../../types';
/**
 *
 * Open new window in browser. This command is the equivalent function to `window.open()`. This command does not
 * work in mobile environments.
 *
 * __Note:__ When calling this command you automatically switch to the new window.
 *
 * <example>
    :newWindowSync.js
    it('should open a new tab', async () => {
        await browser.url('https://google.com')
        console.log(await browser.getTitle()) // outputs: "Google"

        await browser.newWindow('https://webdriver.io', {
            windowName: 'WebdriverIO window',
            windowFeature: 'width=420,height=230,resizable,scrollbars=yes,status=1',
        })
        console.log(await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"

        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
        await browser.closeWindow()
        await browser.switchToWindow(handles[0])
        console.log(await browser.getTitle()) // outputs: "Google"
    });
 * </example>
 *
 * @param {String}  url      website URL to open
 * @param {NewWindowOptions=} options                newWindow command options
 * @param {String=}           options.windowName     name of the new window
 * @param {String=}           options.windowFeatures features of opened window (e.g. size, position, scrollbars, etc.)
 *
 * @return {String}          id of window handle of new tab
 *
 * @uses browser/execute, protocol/getWindowHandles, protocol/switchToWindow
 * @alias browser.newWindow
 * @type window
 */
export default function newWindow(this: WebdriverIO.Browser, url: string, { windowName, windowFeatures }?: NewWindowOptions): Promise<string>;
//# sourceMappingURL=newWindow.d.ts.map