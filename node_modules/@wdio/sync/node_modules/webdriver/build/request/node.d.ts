/// <reference types="node" />
import type { URL } from 'url';
import { Options } from '@wdio/types';
import WebDriverRequest from './index';
export default class NodeJSRequest extends WebDriverRequest {
    constructor(method: string, endpoint: string, body?: Record<string, unknown>, isHubCommand?: boolean);
    protected _libRequest(url: URL, opts: Options.RequestLibOptions): Promise<Options.RequestLibResponse>;
    protected _libPerformanceNow(): number;
}
//# sourceMappingURL=node.d.ts.map