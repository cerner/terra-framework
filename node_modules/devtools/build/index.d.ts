import type { Options } from '@wdio/types';
import { SUPPORTED_BROWSER } from './constants';
import type { Client, AttachOptions, WDIODevtoolsOptions as WDIODevtoolsOptionsExtension } from './types';
export declare const sessionMap: Map<any, any>;
export default class DevTools {
    static newSession(options: Options.WebDriver, modifier?: Function, userPrototype?: {}, customCommandWrapper?: Function): Promise<Client>;
    static reloadSession(instance: any): Promise<string>;
    /**
     * allows user to attach to existing sessions
     */
    static attachToSession(options: AttachOptions, modifier?: Function, userPrototype?: {}, customCommandWrapper?: Function): Promise<Client>;
}
export { SUPPORTED_BROWSER };
export * from './types';
declare global {
    namespace WebdriverIO {
        interface WDIODevtoolsOptions extends WDIODevtoolsOptionsExtension {
        }
    }
}
//# sourceMappingURL=index.d.ts.map