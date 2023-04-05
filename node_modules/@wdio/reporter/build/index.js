"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RunnerStats = exports.TestStats = exports.HookStats = exports.SuiteStats = void 0;
const fs_1 = __importDefault(require("fs"));
const fs_extra_1 = require("fs-extra");
const events_1 = require("events");
const utils_1 = require("./utils");
const suite_1 = __importDefault(require("./stats/suite"));
exports.SuiteStats = suite_1.default;
const hook_1 = __importDefault(require("./stats/hook"));
exports.HookStats = hook_1.default;
const test_1 = __importDefault(require("./stats/test"));
exports.TestStats = test_1.default;
const runner_1 = __importDefault(require("./stats/runner"));
exports.RunnerStats = runner_1.default;
class WDIOReporter extends events_1.EventEmitter {
    constructor(options) {
        super();
        this.options = options;
        this.failures = 0;
        this.suites = {};
        this.hooks = {};
        this.tests = {};
        this.currentSuites = [];
        this.counts = {
            suites: 0,
            tests: 0,
            hooks: 0,
            passes: 0,
            skipping: 0,
            failures: 0
        };
        this.retries = 0;
        this.isContentPresent = false;
        this.specs = [];
        // ensure the report directory exists
        if (this.options.outputDir) {
            (0, fs_extra_1.ensureDirSync)(this.options.outputDir);
        }
        this.outputStream = (this.options.stdout || !this.options.logFile) && this.options.writeStream
            ? this.options.writeStream
            : (0, fs_extra_1.createWriteStream)(this.options.logFile);
        let currentTest;
        const rootSuite = new suite_1.default({
            title: '(root)',
            fullTitle: '(root)',
            file: ''
        });
        this.currentSuites.push(rootSuite);
        this.on('client:beforeCommand', this.onBeforeCommand.bind(this));
        this.on('client:afterCommand', this.onAfterCommand.bind(this));
        this.on('runner:start', /* istanbul ignore next */ (runner) => {
            rootSuite.cid = runner.cid;
            this.specs.push(...runner.specs);
            this.runnerStat = new runner_1.default(runner);
            this.onRunnerStart(this.runnerStat);
        });
        this.on('suite:start', /* istanbul ignore next */ (params) => {
            /**
             * the jasmine framework doesn't give us information about the file
             * therefore we need to propagate these information into params
             */
            if (!params.file) {
                params.file = !params.parent
                    ? this.specs.shift() || 'unknown spec file'
                    : this.currentSpec;
                this.currentSpec = params.file;
            }
            const suite = new suite_1.default(params);
            const currentSuite = this.currentSuites[this.currentSuites.length - 1];
            currentSuite.suites.push(suite);
            this.currentSuites.push(suite);
            this.suites[suite.uid] = suite;
            this.onSuiteStart(suite);
        });
        this.on('hook:start', /* istanbul ignore next */ (hook) => {
            const hookStats = new hook_1.default(hook);
            const currentSuite = this.currentSuites[this.currentSuites.length - 1];
            currentSuite.hooks.push(hookStats);
            currentSuite.hooksAndTests.push(hookStats);
            this.hooks[hook.uid] = hookStats;
            this.onHookStart(hookStats);
        });
        this.on('hook:end', /* istanbul ignore next */ (hook) => {
            const hookStats = this.hooks[hook.uid];
            hookStats.complete((0, utils_1.getErrorsFromEvent)(hook));
            this.counts.hooks++;
            this.onHookEnd(hookStats);
        });
        this.on('test:start', /* istanbul ignore next */ (test) => {
            test.retries = this.retries;
            currentTest = new test_1.default(test);
            const currentSuite = this.currentSuites[this.currentSuites.length - 1];
            currentSuite.tests.push(currentTest);
            currentSuite.hooksAndTests.push(currentTest);
            this.tests[test.uid] = currentTest;
            this.onTestStart(currentTest);
        });
        this.on('test:pass', /* istanbul ignore next */ (test) => {
            const testStat = this.tests[test.uid];
            testStat.pass();
            this.counts.passes++;
            this.counts.tests++;
            this.onTestPass(testStat);
        });
        this.on('test:skip', (test) => {
            const testStat = this.tests[test.uid];
            currentTest.skip(test.pendingReason);
            this.counts.skipping++;
            this.counts.tests++;
            this.onTestSkip(testStat);
        });
        this.on('test:fail', /* istanbul ignore next */ (test) => {
            const testStat = this.tests[test.uid];
            testStat.fail((0, utils_1.getErrorsFromEvent)(test));
            this.counts.failures++;
            this.counts.tests++;
            this.onTestFail(testStat);
        });
        this.on('test:retry', (test) => {
            const testStat = this.tests[test.uid];
            testStat.fail((0, utils_1.getErrorsFromEvent)(test));
            this.onTestRetry(testStat);
            this.retries++;
        });
        this.on('test:pending', (test) => {
            test.retries = this.retries;
            const currentSuite = this.currentSuites[this.currentSuites.length - 1];
            currentTest = new test_1.default(test);
            /**
             * In Mocha: tests that are skipped don't have a start event but a test end.
             * In Jasmine: tests have a start event, therefore we need to replace the
             * test instance with the pending test here
             */
            if (test.uid in this.tests && this.tests[test.uid].state !== 'pending') {
                currentTest.uid = test.uid in this.tests ? 'skipped-' + this.counts.skipping : currentTest.uid;
            }
            const suiteTests = currentSuite.tests;
            if (!suiteTests.length || currentTest.uid !== suiteTests[suiteTests.length - 1].uid) {
                currentSuite.tests.push(currentTest);
                currentSuite.hooksAndTests.push(currentTest);
            }
            else {
                suiteTests[suiteTests.length - 1] = currentTest;
                currentSuite.hooksAndTests[currentSuite.hooksAndTests.length - 1] = currentTest;
            }
            this.tests[currentTest.uid] = currentTest;
            currentTest.skip(test.pendingReason);
            this.counts.skipping++;
            this.counts.tests++;
            this.onTestSkip(currentTest);
        });
        this.on('test:end', /* istanbul ignore next */ (test) => {
            const testStat = this.tests[test.uid];
            this.retries = 0;
            this.onTestEnd(testStat);
        });
        this.on('suite:end', /* istanbul ignore next */ (suite) => {
            const suiteStat = this.suites[suite.uid];
            suiteStat.complete();
            this.currentSuites.pop();
            this.onSuiteEnd(suiteStat);
        });
        this.on('runner:end', /* istanbul ignore next */ (runner) => {
            rootSuite.complete();
            if (this.runnerStat) {
                this.runnerStat.failures = runner.failures;
                this.runnerStat.retries = runner.retries;
                this.runnerStat.complete();
                this.onRunnerEnd(this.runnerStat);
            }
            const logFile = this.options.logFile;
            if (!this.isContentPresent && logFile && fs_1.default.existsSync(logFile)) {
                fs_1.default.unlinkSync(logFile);
            }
        });
        /**
         * browser client event handlers
         */
        this.on('client:beforeCommand', /* istanbul ignore next */ (payload) => {
            if (!currentTest) {
                return;
            }
            currentTest.output.push(Object.assign(payload, { type: 'command' }));
        });
        this.on('client:afterCommand', /* istanbul ignore next */ (payload) => {
            if (!currentTest) {
                return;
            }
            currentTest.output.push(Object.assign(payload, { type: 'result' }));
        });
    }
    /**
     * allows reporter to stale process shutdown process until required sync work
     * is done (e.g. when having to send data to some server or any other async work)
     */
    get isSynchronised() {
        return true;
    }
    /**
     * function to write to reporters output stream
     */
    write(content) {
        if (content) {
            this.isContentPresent = true;
        }
        this.outputStream.write(content);
    }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRunnerStart(runnerStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onBeforeCommand(commandArgs) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onAfterCommand(commandArgs) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuiteStart(suiteStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onHookStart(hookStat) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onHookEnd(hookStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTestStart(testStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTestPass(testStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTestFail(testStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTestRetry(testStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTestSkip(testStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onTestEnd(testStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSuiteEnd(suiteStats) { }
    /* istanbul ignore next */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onRunnerEnd(runnerStats) { }
}
exports.default = WDIOReporter;
