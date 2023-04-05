/// <reference types="node" />
/**
 * ToDo(Christian): remove when @wdio/runner got typed
 */
interface RunnerInterface extends NodeJS.EventEmitter {
    sigintWasCalled: boolean;
    [key: string]: any;
}
export declare const runner: RunnerInterface;
/**
 * catch sigint messages as they are handled by main process
 */
export declare const exitHookFn: (callback: () => void) => void;
export {};
//# sourceMappingURL=run.d.ts.map