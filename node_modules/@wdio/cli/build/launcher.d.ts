import { ConfigParser } from '@wdio/config';
import type { Options, Capabilities, Services } from '@wdio/types';
import CLInterface from './interface';
import { RunCommandArguments } from './types';
interface EndMessage {
    cid: string;
    exitCode: number;
    specs: string[];
    retries: number;
}
declare class Launcher {
    private _configFilePath;
    private _args;
    private _isWatchMode;
    configParser: ConfigParser;
    isMultiremote: boolean;
    runner: Services.RunnerInstance;
    interface: CLInterface;
    private _exitCode;
    private _hasTriggeredExitRoutine;
    private _schedule;
    private _rid;
    private _runnerStarted;
    private _runnerFailed;
    private _launcher?;
    private _resolve?;
    constructor(_configFilePath: string, _args?: Partial<RunCommandArguments>, _isWatchMode?: boolean);
    /**
     * run sequence
     * @return  {Promise}               that only gets resolves with either an exitCode or an error
     */
    run(): Promise<number>;
    /**
     * run without triggering onPrepare/onComplete hooks
     */
    runMode(config: Required<Options.Testrunner>, caps: Capabilities.RemoteCapabilities): Promise<number>;
    /**
     * Format the specs into an array of objects with files and retries
     */
    formatSpecs(capabilities: (Capabilities.DesiredCapabilities | Capabilities.W3CCapabilities | Capabilities.RemoteCapabilities), specFileRetries: number): {
        files: string[];
        retries: number;
    }[];
    /**
     * run multiple single remote tests
     * @return {Boolean} true if all specs have been run and all instances have finished
     */
    runSpecs(): boolean;
    /**
     * gets number of all running instances
     * @return {number} number of running instances
     */
    getNumberOfRunningInstances(): number;
    /**
     * get number of total specs left to complete whole suites
     * @return {number} specs left to complete suite
     */
    getNumberOfSpecsLeft(): number;
    /**
     * Start instance in a child process.
     * @param  {Array} specs  Specs to run
     * @param  {Number} cid  Capabilities ID
     * @param  {String} rid  Runner ID override
     * @param  {Number} retries  Number of retries remaining
     */
    startInstance(specs: string[], caps: Capabilities.DesiredCapabilities | Capabilities.W3CCapabilities | Capabilities.MultiRemoteCapabilities, cid: number, rid: string | undefined, retries: number): Promise<void>;
    private _workerHookError;
    /**
     * generates a runner id
     * @param  {Number} cid capability id (unique identifier for a capability)
     * @return {String}     runner id (combination of cid and test id e.g. 0a, 0b, 1a, 1b ...)
     */
    getRunnerId(cid: number): string;
    /**
     * Close test runner process once all child processes have exited
     * @param  {Number} cid       Capabilities ID
     * @param  {Number} exitCode  exit code of child process
     * @param  {Array} specs      Specs that were run
     * @param  {Number} retries   Number or retries remaining
     */
    endHandler({ cid: rid, exitCode, specs, retries }: EndMessage): Promise<void>;
    /**
     * We need exitHandler to catch SIGINT / SIGTERM events.
     * Make sure all started selenium sessions get closed properly and prevent
     * having dead driver processes. To do so let the runner end its Selenium
     * session first before killing
     */
    exitHandler(callback?: (value: void) => void): void | Promise<void>;
    /**
     * returns true if user stopped watch mode, ex with ctrl+c
     * @returns {boolean}
     */
    private _isWatchModeHalted;
}
export default Launcher;
//# sourceMappingURL=launcher.d.ts.map