/// <reference types="node" />
import WebDriverRequest from './index';
import type { URL as URLType } from 'url';
export default class RequestFactory {
    static getInstance(method: string, endpoint: string, body?: Record<string, unknown>, isHubCommand?: boolean): WebDriverRequest;
}
export declare class URLFactory {
    static getInstance(uri: string): URLType;
}
//# sourceMappingURL=factory.d.ts.map