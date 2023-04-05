import type { Workers } from '@wdio/types';
import { RunCommandArguments, ValueKeyIteratee } from './types.js';
type Spec = string | string[];
export default class Watcher {
    private _configFile;
    private _args;
    private _launcher;
    private _specs;
    constructor(_configFile: string, _args: Omit<RunCommandArguments, 'configPath'>);
    watch(): Promise<void>;
    /**
     * return file listener callback that calls `run` method
     * @param  {Boolean}  [passOnFile=true]  if true pass on file change as parameter
     * @return {Function}                    chokidar event callback
     */
    getFileListener(passOnFile?: boolean): (spec: string) => void[];
    /**
     * helper method to get workers from worker pool of wdio runner
     * @param  predicate         filter by property value (see lodash.pickBy)
     * @param  includeBusyWorker don't filter out busy worker (default: false)
     * @return                   Object with workers, e.g. {'0-0': { ... }}
     */
    getWorkers(predicate?: ValueKeyIteratee<Workers.Worker> | null | undefined, includeBusyWorker?: boolean): Workers.WorkerPool;
    /**
     * run workers with params
     * @param  params parameters to run the worker with
     */
    run(params?: Omit<Partial<RunCommandArguments>, 'spec'> & {
        spec?: Spec;
    }): void;
    cleanUp(): void;
}
export {};
//# sourceMappingURL=watcher.d.ts.map