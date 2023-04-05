import type { Options, Capabilities, Reporters } from '@wdio/types';
/**
 * BaseReporter
 * responsible for initialising reporters for every testrun and propagating events
 * to all these reporters
 */
export default class BaseReporter {
    private _config;
    private _cid;
    caps: Capabilities.RemoteCapability;
    private _reporters;
    constructor(_config: Options.Testrunner, _cid: string, caps: Capabilities.RemoteCapability);
    /**
     * emit events to all registered reporter and wdio launcer
     *
     * @param  {String} e       event name
     * @param  {object} payload event payload
     */
    emit(e: string, payload: any): void;
    getLogFile(name: string): string | undefined;
    /**
     * return write stream object based on reporter name
     */
    getWriteStreamObject(reporter: string): {
        write: (content: unknown) => boolean;
    };
    /**
     * wait for reporter to finish synchronization, e.g. when sending data asynchronous
     * to a server (e.g. sumo reporter)
     */
    waitForSync(): Promise<unknown>;
    /**
     * initialise reporters
     */
    initReporter(reporter: Reporters.ReporterEntry): Reporters.ReporterInstance;
}
//# sourceMappingURL=reporter.d.ts.map