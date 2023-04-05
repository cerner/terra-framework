import { Options, Capabilities } from '@wdio/types';
import { WebDriverResponse } from './request';
import type { Client, JSONWPCommandError, SessionFlags } from './types';
/**
 * start browser session with WebDriver protocol
 */
export declare function startWebDriverSession(params: Options.WebDriver): Promise<{
    sessionId: string;
    capabilities: Capabilities.DesiredCapabilities;
}>;
/**
 * check if WebDriver requests was successful
 * @param  {Number}  statusCode status code of request
 * @param  {Object}  body       body payload of response
 * @return {Boolean}            true if request was successful
 */
export declare function isSuccessfulResponse(statusCode?: number, body?: WebDriverResponse): boolean;
/**
 * creates the base prototype for the webdriver monad
 */
export declare function getPrototype({ isW3C, isChrome, isFirefox, isMobile, isSauce, isSeleniumStandalone }: Partial<SessionFlags>): Record<string, PropertyDescriptor>;
/**
 * helper method to determine the error from webdriver response
 * @param  {Object} body body object
 * @return {Object} error
 */
export declare function getErrorFromResponseBody(body: any, requestOptions: any): Error;
export declare class CustomRequestError extends Error {
    constructor(body: WebDriverResponse, requestOptions: any);
}
/**
 * return all supported flags and return them in a format so we can attach them
 * to the instance protocol
 * @param  {Object} options   driver instance or option object containing these flags
 * @return {Object}           prototype object
 */
export declare function getEnvironmentVars({ isW3C, isMobile, isIOS, isAndroid, isChrome, isFirefox, isSauce, isSeleniumStandalone }: Partial<SessionFlags>): {
    isW3C: {
        value: boolean | undefined;
    };
    isMobile: {
        value: boolean | undefined;
    };
    isIOS: {
        value: boolean | undefined;
    };
    isAndroid: {
        value: boolean | undefined;
    };
    isFirefox: {
        value: boolean | undefined;
    };
    isChrome: {
        value: boolean | undefined;
    };
    isSauce: {
        value: boolean | undefined;
    };
    isSeleniumStandalone: {
        value: boolean | undefined;
    };
};
/**
 * Decorate the client's options object with host updates based on the presence of
 * directConnect capabilities in the new session response. Note that this
 * mutates the object.
 * @param  {Client} params post-new-session client
 */
export declare function setupDirectConnect(client: Client): void;
/**
 * get human readable message from response error
 * @param {Error} err response error
 */
export declare const getSessionError: (err: JSONWPCommandError, params?: Partial<Options.WebDriver>) => string;
/**
 * return timeout error with information about the executing command on which the test hangs
 */
export declare const getTimeoutError: (error: Error, requestOptions: Options.RequestLibOptions) => Error;
//# sourceMappingURL=utils.d.ts.map