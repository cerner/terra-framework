/// <reference types="node" />
/// <reference types="node" />
import vm from 'vm';
import WDIORepl, { ReplConfig, ReplCallback } from '@wdio/repl';
import type { ChildProcess } from 'child_process';
export default class WDIORunnerRepl extends WDIORepl {
    childProcess: ChildProcess;
    callback?: ReplCallback;
    commandIsRunning: boolean;
    constructor(childProcess: ChildProcess, options: ReplConfig);
    private _getError;
    eval(cmd: string, context: vm.Context, filename: string, callback: ReplCallback): void;
    onResult(params: any): void;
    start(context?: vm.Context): Promise<unknown>;
}
//# sourceMappingURL=repl.d.ts.map