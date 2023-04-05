declare let hasWdioSyncSupport: boolean;
declare let runSync: (this: unknown, fn: Function, repeatTest: any, args: unknown[]) => (resolve: Function, reject: Function) => unknown;
interface Retries {
    limit: number;
    attempts: number;
}
declare global {
    var _HAS_FIBER_CONTEXT: boolean;
    var browser: any;
    var expectAsync: any;
}
declare global {
    namespace NodeJS {
        interface Global {
            expect: any;
            expectAsync: any;
        }
    }
}
export declare function expectAsyncShim(actual?: any, syncMatcher?: Function): any;
export declare let runAsync: boolean;
export declare let asyncSpec: boolean;
declare let executeHooksWithArgs: <T>(hookName: string, hooks?: Function | Function[], args?: any[]) => Promise<(Error | T)[]>;
declare let runFnInFiberContext: (fn: Function) => (this: any, ...args: any[]) => Promise<any>;
/**
 * wrap command to enable before and after command to be executed
 * @param commandName name of the command (e.g. getTitle)
 * @param fn          command function
 */
declare let wrapCommand: <T>(commandName: string, fn: Function) => (...args: any) => Promise<T>;
/**
 * execute test or hook synchronously
 *
 * @param  {Function} fn         spec or hook method
 * @param  {Number}   retries    { limit: number, attempts: number }
 * @param  {Array}    args       arguments passed to hook
 * @return {Promise}             that gets resolved once test/hook is done or was retried enough
 */
declare function executeSyncFn(this: any, fn: Function, retries: Retries, args?: any[]): Promise<unknown>;
/**
 * execute test or hook asynchronously
 *
 * @param  {Function} fn         spec or hook method
 * @param  {object}   retries    { limit: number, attempts: number }
 * @param  {Array}    args       arguments passed to hook
 * @return {Promise}             that gets resolved once test/hook is done or was retried enough
 */
declare function executeAsync(this: any, fn: Function, retries: Retries, args?: any[]): Promise<unknown>;
declare let executeSync: typeof executeSyncFn;
/**
 * Method to switch between sync and async execution. It allows to have async
 * tests in between synchronous tests. `fn` can either return a promise (e.g. for `executeSync`)
 * or a function (e.g. for `runSync`). In both cases we need to make sure that
 * we flip `runAsync` flag to true to that commands are wrapped with the @wdio/sync
 * wrapper.
 */
export declare function switchSyncFlag(fn: Function): (this: unknown, ...args: any[]) => any;
export { executeHooksWithArgs, runFnInFiberContext, wrapCommand, hasWdioSyncSupport, executeSync, executeAsync, runSync };
//# sourceMappingURL=shim.d.ts.map