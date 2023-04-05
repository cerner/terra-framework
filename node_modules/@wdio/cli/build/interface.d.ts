/// <reference types="node" />
import { EventEmitter } from 'events';
import type { Options, Workers } from '@wdio/types';
import { HookError } from './utils';
interface TestError {
    type: string;
    message: string;
    stack?: string;
}
interface CLIInterfaceEvent {
    origin?: string;
    name: string;
    cid?: string;
    fullTitle?: string;
    content?: any;
    params?: any;
    error?: TestError;
}
export default class WDIOCLInterface extends EventEmitter {
    private _config;
    totalWorkerCnt: number;
    private _isWatchMode;
    hasAnsiSupport: boolean;
    result: {
        finished: number;
        passed: number;
        retries: number;
        failed: number;
    };
    private _jobs;
    private _specFileRetries;
    private _specFileRetriesDelay;
    private _skippedSpecs;
    private _inDebugMode;
    private _start;
    private _messages;
    constructor(_config: Options.Testrunner, totalWorkerCnt: number, _isWatchMode?: boolean);
    setup(): void;
    onStart(): void;
    onSpecRunning(rid: string): void;
    onSpecRetry(rid: string, job?: Workers.Job, retries?: number): void;
    onSpecPass(rid: string, job?: Workers.Job, retries?: number): void;
    onSpecFailure(rid: string, job?: Workers.Job, retries?: number): void;
    onSpecSkip(rid: string, job?: Workers.Job): void;
    onJobComplete(cid: string, job?: Workers.Job, retries?: number, message?: string, _logger?: Function): any;
    onTestError(payload: CLIInterfaceEvent): any[];
    getFilenames(specs?: string[]): string;
    /**
     * add job to interface
     */
    addJob({ cid, caps, specs, hasTests }: Workers.Job & {
        cid: string;
    }): void;
    /**
     * clear job from interface
     */
    clearJob({ cid, passed, retries }: {
        cid: string;
        passed: boolean;
        retries: number;
    }): void;
    /**
     * for testing purposes call console log in a static method
     */
    log(...args: any[]): any[];
    logHookError(error: HookError): any[];
    /**
     * event handler that is triggered when runner sends up events
     */
    onMessage(event: CLIInterfaceEvent): boolean | void | any[];
    sigintTrigger(): false | any[];
    printReporters(): void;
    printSummary(): any[];
    finalise(): void;
}
export {};
//# sourceMappingURL=interface.d.ts.map