/// <reference types="node" />
/// <reference types="node" />
import { EventEmitter } from 'events';
import type { URL } from 'url';
import type { Options } from '@wdio/types';
type Agents = Options.Agents;
type RequestLibOptions = Options.RequestLibOptions;
type RequestLibResponse = Options.RequestLibResponse;
type RequestOptions = Omit<Options.WebDriver, 'capabilities'>;
export declare class RequestLibError extends Error {
    statusCode?: number;
    body?: any;
    code?: string;
}
export interface WebDriverResponse {
    value: any;
    /**
     * error case
     * https://w3c.github.io/webdriver/webdriver-spec.html#dfn-send-an-error
     */
    error?: string;
    message?: string;
    stacktrace?: string;
    /**
     * JSONWP property
     */
    status?: number;
    sessionId?: string;
}
export default abstract class WebDriverRequest extends EventEmitter {
    body?: Record<string, unknown>;
    method: string;
    endpoint: string;
    isHubCommand: boolean;
    requiresSessionId: boolean;
    defaultAgents: Agents | null;
    defaultOptions: RequestLibOptions;
    constructor(method: string, endpoint: string, body?: Record<string, unknown>, isHubCommand?: boolean);
    makeRequest(options: RequestOptions, sessionId?: string): Promise<WebDriverResponse>;
    protected _createOptions(options: RequestOptions, sessionId?: string, isBrowser?: boolean): RequestLibOptions;
    protected _libRequest(url: URL, options: RequestLibOptions): Promise<RequestLibResponse>;
    protected _libPerformanceNow(): number;
    private _request;
}
export {};
//# sourceMappingURL=index.d.ts.map