import { WaitForOptions } from '../../types';
import { MockFilterOptions, MockOverwrite, MockResponseParams, Matches } from './types';
import type Protocol from 'devtools-protocol';
export default abstract class Interception {
    url: string | RegExp;
    filterOptions: MockFilterOptions;
    browser: WebdriverIO.Browser;
    abstract calls: Matches[] | Promise<Matches[]>;
    abstract clear(): void;
    abstract restore(): void;
    abstract respond(overwrite: MockOverwrite, params: MockResponseParams): void;
    abstract respondOnce(overwrite: MockOverwrite, params: MockResponseParams): void;
    abstract abort(errorReason: Protocol.Network.ErrorReason, sticky: boolean): void;
    abstract abortOnce(errorReason: Protocol.Network.ErrorReason): void;
    respondOverwrites: {
        overwrite?: MockOverwrite;
        params?: MockResponseParams;
        sticky?: boolean;
        errorReason?: Protocol.Network.ErrorReason;
    }[];
    matches: Matches[];
    constructor(url: string | RegExp, filterOptions: MockFilterOptions, browser: WebdriverIO.Browser);
    waitForResponse({ timeout, interval, timeoutMsg, }?: WaitForOptions): Promise<boolean> | Promise<Promise<boolean>>;
    static isMatchingRequest(expectedUrl: string | RegExp, actualUrl: string): boolean;
}
//# sourceMappingURL=index.d.ts.map