import { Options } from '@wdio/types';
import WebDriverRequest from './index';
type RequestLibOptions = Options.RequestLibOptions;
type RequestOptions = Omit<Options.WebDriver, 'capabilities'>;
export default class BrowserRequest extends WebDriverRequest {
    constructor(method: string, endpoint: string, body?: Record<string, unknown>, isHubCommand?: boolean);
    protected _createOptions(options: RequestOptions, sessionId?: string): RequestLibOptions;
    protected _libRequest(url: URL, options: RequestLibOptions): Promise<{
        statusCode: number;
        body: any;
    }>;
    protected _libPerformanceNow(): number;
}
export {};
//# sourceMappingURL=browser.d.ts.map