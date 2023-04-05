import type { Capabilities, Options } from '@wdio/types';
import RunnableStats from './runnable';
/**
 * Class to capture statistics about a test run. A test run is a single instance that
 * runs one or more spec files
 */
export default class RunnerStats extends RunnableStats {
    cid: string;
    capabilities: Capabilities.RemoteCapability;
    sanitizedCapabilities: string;
    config: Options.Testrunner;
    specs: string[];
    sessionId: string;
    isMultiremote: boolean;
    instanceOptions: Record<string, Options.WebdriverIO>;
    retry?: number;
    failures?: number;
    retries?: number;
    constructor(runner: Options.RunnerStart);
}
//# sourceMappingURL=runner.d.ts.map