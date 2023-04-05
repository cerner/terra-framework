import type { Options, Capabilities } from '@wdio/types';
import type { Browser, MultiRemoteBrowser } from 'webdriverio';
export interface ConfigWithSessionId extends Omit<Options.Testrunner, 'capabilities'> {
    sessionId?: string;
    capabilities: Capabilities.RemoteCapability;
}
/**
 * sanitizes wdio config from capability properties
 * @param  {Object} caps  desired session capabilities
 * @return {Object}       sanitized caps
 */
export declare function sanitizeCaps(caps: Capabilities.RemoteCapability, filterOut?: boolean): Omit<Capabilities.RemoteCapability, 'logLevel'>;
/**
 * initialise browser instance depending whether remote or multiremote is requested
 * @param  {Object}  config        configuration of sessions
 * @param  {Object}  capabilities  desired session capabilities
 * @param  {boolean} isMultiremote isMultiremote
 * @return {Promise}               resolves with browser object
 */
export declare function initialiseInstance(config: ConfigWithSessionId, capabilities: Capabilities.RemoteCapability, isMultiremote?: boolean): Promise<Browser<'async'> | MultiRemoteBrowser<'async'>>;
/**
 * Filter logTypes based on filter
 * @param  {string[]} excludeDriverLogs logTypes filter
 * @param  {string[]} driverLogTypes    available driver log types
 * @return {string[]}                   logTypes
 */
export declare function filterLogTypes(excludeDriverLogs: string[], driverLogTypes: string[]): string[];
/**
 * Send event to WDIOCLInterface if test or before/after all hook failed
 * @param {string} e        event
 * @param {object} payload  payload
 */
export declare function sendFailureMessage(e: string, payload: any): void;
type BrowserData = {
    sessionId: string;
    isW3C: boolean;
    protocol: string;
    hostname: string;
    port: number;
    path: string;
    queryParams: Record<string, string>;
};
/**
 * Gets { sessionId, isW3C, protocol, hostname, port, path, queryParams } of every Multiremote instance
 * @param {object} browser browser
 * @param {boolean} isMultiremote isMultiremote
 * @return {object}
 */
export declare function getInstancesData(browser: Browser<'async'> | MultiRemoteBrowser<'async'>, isMultiremote: boolean): Record<string, Partial<BrowserData>> | undefined;
export {};
//# sourceMappingURL=utils.d.ts.map