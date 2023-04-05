/// <reference types="node" />
import { EventEmitter } from 'events';
import type { Options, Capabilities } from '@wdio/types';
/**
 * user types for globals are set in webdriverio
 * putting this here to make compiler happy
 */
declare global {
    namespace NodeJS {
        interface Global {
            $: any;
            $$: any;
            browser: any;
            driver: any;
            multiremotebrowser: any;
        }
    }
}
interface Args extends Partial<Options.Testrunner> {
    ignoredWorkerServices?: string[];
    watch?: boolean;
}
type RunParams = {
    cid: string;
    args: Args;
    specs: string[];
    caps: Capabilities.RemoteCapability;
    configFile: string;
    retries: number;
};
declare global {
    var _HAS_FIBER_CONTEXT: boolean;
}
export default class Runner extends EventEmitter {
    private _configParser;
    private _sigintWasCalled;
    private _isMultiremote;
    private _specFileRetryAttempts;
    private _reporter?;
    private _framework?;
    private _config?;
    private _cid?;
    private _specs?;
    private _caps?;
    /**
     * run test suite
     * @param  {String}    cid            worker id (e.g. `0-0`)
     * @param  {Object}    args           config arguments passed into worker process
     * @param  {String[]}  specs          list of spec files to run
     * @param  {Object}    caps           capabilities to run session with
     * @param  {String}    configFile     path to config file to get config from
     * @param  {Number}    retries        number of retries remaining
     * @return {Promise}                  resolves in number of failures for testrun
     */
    run({ cid, args, specs, caps, configFile, retries }: RunParams): Promise<number>;
    /**
     * init protocol session
     * @param  {object}  config        configuration of sessions
     * @param  {Object}  caps          desired capabilities of session
     * @param  {Object}  browserStub   stubbed `browser` object with only capabilities, config and env flags
     * @return {Promise}               resolves with browser object or null if session couldn't get established
     */
    private _initSession;
    /**
     * start protocol session
     * @param  {object}  config        configuration of sessions
     * @param  {Object}  caps          desired capabilities of session
     * @return {Promise}               resolves with browser object or null if session couldn't get established
     */
    private _startSession;
    /**
     * fetch logs provided by browser driver
     */
    private _fetchDriverLogs;
    /**
     * kill worker session
     */
    private _shutdown;
    /**
     * end WebDriver session, a config object can be applied if object has changed
     * within a hook by the user
     */
    endSession(): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map