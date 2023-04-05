import WDIOReporter, { SuiteStats, HookStats, RunnerStats, TestStats } from '@wdio/reporter';
import { Capabilities } from '@wdio/types';
import type { Symbols, SpecReporterOptions, TestLink } from './types';
export default class SpecReporter extends WDIOReporter {
    private _suiteUids;
    private _indents;
    private _suiteIndents;
    private _orderedSuites;
    private _consoleOutput;
    private _suiteIndent;
    private _preface;
    private _consoleLogs;
    private _pendingReasons;
    private _originalStdoutWrite;
    private _addConsoleLogs;
    private _realtimeReporting;
    private _showPreface;
    private _suiteName;
    private _stateCounts;
    private _symbols;
    private _onlyFailures;
    private _sauceLabsSharableLinks;
    constructor(options: SpecReporterOptions);
    onRunnerStart(runner: RunnerStats): void;
    onSuiteStart(suite: SuiteStats): void;
    onSuiteEnd(): void;
    onHookEnd(hook: HookStats): void;
    onTestStart(): void;
    onTestPass(testStat: TestStats): void;
    onTestFail(testStat: TestStats): void;
    onTestSkip(testStat: TestStats): void;
    onRunnerEnd(runner: RunnerStats): void;
    /**
     * Print the report to the stdout realtime
     */
    printCurrentStats(stat: TestStats | HookStats | SuiteStats): void;
    /**
     * Print the report to the screen
     */
    printReport(runner: RunnerStats): void;
    /**
     * get link to saucelabs job
     */
    getTestLink({ sessionId, isMultiremote, instanceName, capabilities }: TestLink): string[];
    /**
     * Get the header display for the report
     * @param  {Object} runner Runner data
     * @return {Array}         Header data
     */
    getHeaderDisplay(runner: RunnerStats): string[];
    /**
     * returns everything worth reporting from a suite
     * @param  {Object}    suite  test suite containing tests and hooks
     * @return {Object[]}         list of events to report
     */
    getEventsToReport(suite: SuiteStats): (HookStats | TestStats)[];
    /**
     * Get the results from the tests
     * @param  {Array} suites Runner suites
     * @return {Array}        Display output list
     */
    getResultDisplay(prefaceString?: string): string[];
    /**
     * Get the display for passing, failing and skipped
     * @param  {String} duration Duration string
     * @return {Array} Count display
     */
    getCountDisplay(duration: string): string[];
    /**
     * Get display for failed tests, e.g. stack trace
     * @return {Array} Stack trace output
     */
    getFailureDisplay(): string[];
    /**
     * Get suites in the order they were called
     * @return {Array} Ordered suites
     */
    getOrderedSuites(): SuiteStats[];
    /**
     * Indent a suite based on where how it's nested
     * @param  {String} uid Unique suite key
     * @return {String}     Spaces for indentation
     */
    indent(uid: string): string;
    /**
     * Get a symbol based on state
     * @param  {String} state State of a test
     * @return {String}       Symbol to display
     */
    getSymbol(state?: keyof Symbols): string;
    /**
     * Get a color based on a given state
     * @param  {String} state Test state
     * @return {String}       State color
     */
    getColor(state?: string): "red" | "green" | "cyan" | "gray";
    /**
     * Get information about the enviroment
     * @param  {Object}  caps    Enviroment details
     * @param  {Boolean} verbose
     * @return {String}          Enviroment string
     */
    getEnviromentCombo(capability: Capabilities.RemoteCapability, verbose?: boolean, isMultiremote?: boolean): string;
}
//# sourceMappingURL=index.d.ts.map