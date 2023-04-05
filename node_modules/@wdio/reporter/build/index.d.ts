/// <reference types="node" />
/// <reference types="node" />
import type { WriteStream } from 'fs';
import { EventEmitter } from 'events';
import type { Reporters } from '@wdio/types';
import SuiteStats from './stats/suite';
import HookStats from './stats/hook';
import TestStats, { Test } from './stats/test';
import RunnerStats from './stats/runner';
import { AfterCommandArgs, BeforeCommandArgs, CommandArgs, Tag, Argument } from './types';
type CustomWriteStream = {
    write: (content: any) => boolean;
};
export default class WDIOReporter extends EventEmitter {
    options: Partial<Reporters.Options>;
    outputStream: WriteStream | CustomWriteStream;
    failures: number;
    suites: Record<string, SuiteStats>;
    hooks: Record<string, HookStats>;
    tests: Record<string, TestStats>;
    currentSuites: SuiteStats[];
    counts: {
        suites: number;
        tests: number;
        hooks: number;
        passes: number;
        skipping: number;
        failures: number;
    };
    retries: number;
    runnerStat?: RunnerStats;
    isContentPresent: boolean;
    specs: string[];
    currentSpec?: string;
    constructor(options: Partial<Reporters.Options>);
    /**
     * allows reporter to stale process shutdown process until required sync work
     * is done (e.g. when having to send data to some server or any other async work)
     */
    get isSynchronised(): boolean;
    /**
     * function to write to reporters output stream
     */
    write(content: any): void;
    onRunnerStart(runnerStats: RunnerStats): void;
    onBeforeCommand(commandArgs: BeforeCommandArgs): void;
    onAfterCommand(commandArgs: AfterCommandArgs): void;
    onSuiteStart(suiteStats: SuiteStats): void;
    onHookStart(hookStat: HookStats): void;
    onHookEnd(hookStats: HookStats): void;
    onTestStart(testStats: TestStats): void;
    onTestPass(testStats: TestStats): void;
    onTestFail(testStats: TestStats): void;
    onTestRetry(testStats: TestStats): void;
    onTestSkip(testStats: TestStats): void;
    onTestEnd(testStats: TestStats): void;
    onSuiteEnd(suiteStats: SuiteStats): void;
    onRunnerEnd(runnerStats: RunnerStats): void;
}
export { SuiteStats, Tag, HookStats, TestStats, RunnerStats, BeforeCommandArgs, AfterCommandArgs, CommandArgs, Argument, Test };
//# sourceMappingURL=index.d.ts.map