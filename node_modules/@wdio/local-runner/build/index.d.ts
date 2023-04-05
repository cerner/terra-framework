import { WritableStreamBuffer } from 'stream-buffers';
import type { Options, Workers } from '@wdio/types';
import WorkerInstance from './worker';
interface RunArgs extends Workers.WorkerRunPayload {
    command: string;
    args: any;
}
export default class LocalRunner {
    private _config;
    workerPool: Record<string, WorkerInstance>;
    stdout: WritableStreamBuffer;
    stderr: WritableStreamBuffer;
    constructor(configFile: unknown, _config: Options.Testrunner);
    /**
     * nothing to initialise when running locally
     */
    initialise(): void;
    getWorkerCount(): number;
    run({ command, args, ...workerOptions }: RunArgs): WorkerInstance;
    /**
     * shutdown all worker processes
     *
     * @return {Promise}  resolves when all worker have been shutdown or
     *                    a timeout was reached
     */
    shutdown(): Promise<void>;
}
export {};
//# sourceMappingURL=index.d.ts.map