import type { Browser } from 'puppeteer-core/lib/cjs/puppeteer/common/Browser';
import type { Dialog } from 'puppeteer-core/lib/cjs/puppeteer/common/Dialog';
import type { Page } from 'puppeteer-core/lib/cjs/puppeteer/common/Page';
import type { CommandEndpoint } from '@wdio/protocols';
import type { Frame } from 'puppeteer-core/lib/cjs/puppeteer/common/FrameManager';
import ElementStore from './elementstore';
import { ActiveListener } from './types.js';
export default class DevToolsDriver {
    commands: Record<string, Function>;
    elementStore: ElementStore;
    windows: Map<string, Page>;
    timeouts: Map<string, number>;
    activeDialog?: Dialog;
    browser: Browser;
    currentFrame?: Page;
    currentWindowHandle?: string;
    currentFrameUrl?: string;
    activeListeners: ActiveListener[];
    constructor(browser: Browser, pages: Page[]);
    private _createWindowHandle;
    private _targetCreatedHandler;
    private _targetDestroyedHandler;
    /**
     * moved into an extra method for testing purposes
     */
    static requireCommand(filePath: string): any;
    private addListener;
    private cleanupListeners;
    /**
     * Inits browser listeners and sets initial handlers for given pages.
     * Function is also intended to be used while reloading DevTools session.
     * @param browser Puppeteer Browser
     * @param pages Puppeteer page array
     */
    initBrowser(browser: Browser, pages: Page[]): void;
    register(commandInfo: CommandEndpoint): (this: Browser, ...args: any[]) => Promise<any>;
    dialogHandler(dialog: Dialog): void;
    framenavigatedHandler(frame: Frame): void;
    setTimeouts(implicit?: number, pageLoad?: number, script?: number): void;
    getPageHandle(isInFrame?: boolean): Page;
    checkPendingNavigations(pendingNavigationStart?: number): Promise<void>;
}
//# sourceMappingURL=devtoolsdriver.d.ts.map