"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("util");
const reporter_1 = __importDefault(require("@wdio/reporter"));
const chalk_1 = __importDefault(require("chalk"));
const pretty_ms_1 = __importDefault(require("pretty-ms"));
const utils_1 = require("./utils");
const DEFAULT_INDENT = '   ';
class SpecReporter extends reporter_1.default {
    constructor(options) {
        /**
         * make spec reporter to write to output stream by default
         */
        super(Object.assign({ stdout: true }, options));
        this._suiteUids = new Set();
        this._indents = 0;
        this._suiteIndents = {};
        this._orderedSuites = [];
        this._consoleOutput = '';
        this._suiteIndent = '';
        this._preface = '';
        this._consoleLogs = [];
        this._pendingReasons = [];
        this._originalStdoutWrite = process.stdout.write.bind(process.stdout);
        this._addConsoleLogs = false;
        this._realtimeReporting = false;
        this._showPreface = true;
        this._suiteName = '';
        // Keep track of the order that suites were called
        this._stateCounts = {
            passed: 0,
            failed: 0,
            skipped: 0
        };
        this._symbols = {
            passed: '✓',
            skipped: '-',
            pending: '?',
            failed: '✖'
        };
        this._onlyFailures = false;
        this._sauceLabsSharableLinks = true;
        this._symbols = { ...this._symbols, ...this.options.symbols || {} };
        this._onlyFailures = options.onlyFailures || false;
        this._realtimeReporting = options.realtimeReporting || false;
        this._showPreface = options.showPreface !== false;
        this._sauceLabsSharableLinks = 'sauceLabsSharableLinks' in options
            ? options.sauceLabsSharableLinks
            : this._sauceLabsSharableLinks;
        let processObj = process;
        if (options.addConsoleLogs || this._addConsoleLogs) {
            processObj.stdout.write = (chunk, encoding, callback) => {
                if (typeof chunk === 'string' && !chunk.includes('mwebdriver')) {
                    this._consoleOutput += chunk;
                }
                return this._originalStdoutWrite(chunk, encoding, callback);
            };
        }
    }
    onRunnerStart(runner) {
        this._preface = this._showPreface ? `[${this.getEnviromentCombo(runner.capabilities, false, runner.isMultiremote).trim()} #${runner.cid}]` : '';
    }
    onSuiteStart(suite) {
        this._suiteName = suite.file.replace(process.cwd(), '');
        this.printCurrentStats(suite);
        this._suiteUids.add(suite.uid);
        if (suite.type === 'feature') {
            this._indents = 0;
            this._suiteIndents[suite.uid] = this._indents;
        }
        else {
            this._suiteIndents[suite.uid] = ++this._indents;
        }
    }
    onSuiteEnd() {
        this._indents--;
    }
    onHookEnd(hook) {
        this.printCurrentStats(hook);
        if (hook.error) {
            this._stateCounts.failed++;
        }
    }
    onTestStart() {
        this._consoleOutput = '';
    }
    onTestPass(testStat) {
        this.printCurrentStats(testStat);
        this._consoleLogs.push(this._consoleOutput);
        this._stateCounts.passed++;
    }
    onTestFail(testStat) {
        this.printCurrentStats(testStat);
        this._consoleLogs.push(this._consoleOutput);
        this._stateCounts.failed++;
    }
    onTestSkip(testStat) {
        this.printCurrentStats(testStat);
        this._pendingReasons.push(testStat.pendingReason);
        this._consoleLogs.push(this._consoleOutput);
        this._stateCounts.skipped++;
    }
    onRunnerEnd(runner) {
        this.printReport(runner);
    }
    /**
     * Print the report to the stdout realtime
     */
    printCurrentStats(stat) {
        if (!this._realtimeReporting) {
            return;
        }
        const title = stat.title, state = stat.state;
        const divider = '------------------------------------------------------------------';
        const indent = (stat.type === 'test') ?
            `${DEFAULT_INDENT}${this._suiteIndent}` :
            this.indent(stat.uid);
        const suiteStartBanner = (stat.type === 'feature' || stat.type === 'suite' || stat.type === 'suite:start') ?
            `${this._preface} ${divider}\n` +
                `${this._preface} Suite started : \n` +
                `${this._preface}   » ${this._suiteName}\n` : '\n';
        const contentNonTest = stat.type !== 'hook' ?
            `${suiteStartBanner}${this._preface} ${title}` :
            `${this._preface} Hook executed : ${title}`;
        const contentTest = `${this._preface} ${indent}` +
            `${chalk_1.default[this.getColor(state)](this.getSymbol(state))} ${title}` +
            ` » ${chalk_1.default[this.getColor(state)]('[')} ${this._suiteName} ${chalk_1.default[this.getColor(state)](']')}`;
        process.send({
            name: 'reporterRealTime',
            content: stat.type === 'test' ? contentTest : contentNonTest
        });
    }
    /**
     * Print the report to the screen
     */
    printReport(runner) {
        // Don't print non failed tests
        if (runner.failures === 0 && this._onlyFailures === true) {
            return;
        }
        const duration = `(${(0, pretty_ms_1.default)(runner._duration)})`;
        const preface = `[${this.getEnviromentCombo(runner.capabilities, false, runner.isMultiremote).trim()} #${runner.cid}]`;
        const divider = '------------------------------------------------------------------';
        // Get the results
        const results = this.getResultDisplay(preface);
        // If there are no test results then return nothing
        if (results.length === 0) {
            return;
        }
        const testLinks = runner.isMultiremote
            ? Object.entries(runner.capabilities).map(([instanceName, capabilities]) => this.getTestLink({
                capabilities,
                sessionId: capabilities.sessionId,
                isMultiremote: runner.isMultiremote,
                instanceName
            })).filter((links) => links.length)
            : this.getTestLink(runner);
        const output = [
            ...this.getHeaderDisplay(runner),
            '',
            ...results,
            ...this.getCountDisplay(duration),
            ...this.getFailureDisplay(),
            ...(testLinks.length
                /**
                 * if we have test links add an empty line
                 */
                ? ['', ...testLinks]
                : [])
        ];
        // Prefix all values with the browser information
        const prefacedOutput = this._showPreface ? output.map((value) => {
            return value ? `${preface} ${value}` : preface;
        }) : output;
        // Output the results
        this.write(`${divider}\n${prefacedOutput.join('\n')}\n`);
    }
    /**
     * get link to saucelabs job
     */
    getTestLink({ sessionId, isMultiremote, instanceName, capabilities }) {
        var _a, _b, _c;
        const config = this.runnerStat && this.runnerStat.instanceOptions[sessionId];
        const isSauceJob = ((config && config.hostname && config.hostname.includes('saucelabs')) ||
            // only show if multiremote is not used
            capabilities && (
            // check w3c cap in jsonwp caps
            capabilities['sauce:options'] ||
                // check jsonwp caps
                capabilities.tunnelIdentifier ||
                // check w3c caps
                (capabilities.alwaysMatch &&
                    capabilities.alwaysMatch['sauce:options'])));
        if (isSauceJob && config && config.user && config.key && sessionId) {
            const multiremoteNote = isMultiremote ? ` ${instanceName}` : '';
            const note = 'Check out%s job at %s';
            // The report url of RDC is in the caps that are returned
            if ('testobject_test_report_url' in capabilities) {
                return [(0, util_1.format)(note, multiremoteNote, capabilities.testobject_test_report_url)];
            }
            // VDC urls can be constructed / be made shared
            const isUSEast = config.headless || ((_a = config.hostname) === null || _a === void 0 ? void 0 : _a.includes('us-east-1'));
            const isEUCentral = ['eu', 'eu-central-1'].includes((config === null || config === void 0 ? void 0 : config.region) || '') || ((_b = config.hostname) === null || _b === void 0 ? void 0 : _b.includes('eu-central'));
            const isAPAC = ['apac', 'apac-southeast-1'].includes((config === null || config === void 0 ? void 0 : config.region) || '') || ((_c = config.hostname) === null || _c === void 0 ? void 0 : _c.includes('apac'));
            const dc = isUSEast ? '.us-east-1' : isEUCentral ? '.eu-central-1' : isAPAC ? '.apac-southeast-1' : '';
            const sauceLabsSharableLinks = this._sauceLabsSharableLinks
                ? (0, utils_1.sauceAuthenticationToken)(config.user, config.key, sessionId)
                : '';
            const sauceUrl = `https://app${dc}.saucelabs.com/tests/${sessionId}${sauceLabsSharableLinks}`;
            return [(0, util_1.format)(note, multiremoteNote, sauceUrl)];
        }
        return [];
    }
    /**
     * Get the header display for the report
     * @param  {Object} runner Runner data
     * @return {Array}         Header data
     */
    getHeaderDisplay(runner) {
        const combo = this.getEnviromentCombo(runner.capabilities, undefined, runner.isMultiremote).trim();
        // Spec file name and enviroment information
        const output = [`Running: ${combo}`];
        /**
         * print session ID if not multiremote
         */
        // @ts-expect-error
        if (runner.capabilities.sessionId) {
            // @ts-expect-error
            output.push(`Session ID: ${runner.capabilities.sessionId}`);
        }
        return output;
    }
    /**
     * returns everything worth reporting from a suite
     * @param  {Object}    suite  test suite containing tests and hooks
     * @return {Object[]}         list of events to report
     */
    getEventsToReport(suite) {
        return [
            /**
             * report all tests and only hooks that failed
             */
            ...suite.hooksAndTests
                .filter((item) => {
                return item.type === 'test' || Boolean(item.error);
            })
        ];
    }
    /**
     * Get the results from the tests
     * @param  {Array} suites Runner suites
     * @return {Array}        Display output list
     */
    getResultDisplay(prefaceString) {
        const output = [];
        const preface = this._showPreface ? prefaceString : '';
        const suites = this.getOrderedSuites();
        const specFileReferences = [];
        for (const suite of suites) {
            // Don't do anything if a suite has no tests or sub suites
            if (suite.tests.length === 0 && suite.suites.length === 0 && suite.hooks.length === 0) {
                continue;
            }
            // Get the indent/starting point for this suite
            const suiteIndent = this.indent(suite.uid);
            // Display file path of spec
            if (!specFileReferences.includes(suite.file)) {
                output.push(`${suiteIndent}» ${suite.file.replace(process.cwd(), '')}`);
                specFileReferences.push(suite.file);
            }
            // Display the title of the suite
            output.push(`${suiteIndent}${suite.title}`);
            // display suite description (Cucumber only)
            if (suite.description) {
                output.push(...suite.description.trim().split('\n')
                    .map((l) => `${suiteIndent}${chalk_1.default.grey(l.trim())}`));
                output.push(''); // empty line
            }
            // display suite rule (Cucumber only)
            if (suite.rule) {
                output.push(...suite.rule.trim().split('\n')
                    .map((l) => `${suiteIndent}${chalk_1.default.grey(l.trim())}`));
            }
            const eventsToReport = this.getEventsToReport(suite);
            for (const test of eventsToReport) {
                const testTitle = test.title;
                const state = test.state;
                const testIndent = `${DEFAULT_INDENT}${suiteIndent}`;
                // Output for a single test
                output.push(`${testIndent}${chalk_1.default[this.getColor(state)](this.getSymbol(state))} ${testTitle}`);
                // print cucumber data table cells
                const args = test.argument;
                if (args && args.rows && args.rows.length) {
                    const data = (0, utils_1.buildTableData)(args.rows);
                    const rawTable = (0, utils_1.printTable)(data);
                    const table = (0, utils_1.getFormattedRows)(rawTable, testIndent);
                    output.push(...table);
                }
                // print pending reasons
                const pendingItem = this._pendingReasons.shift();
                if (pendingItem) {
                    output.push('');
                    output.push(testIndent.repeat(2) + '.........Pending Reasons.........');
                    output.push(testIndent.repeat(3) + (pendingItem === null || pendingItem === void 0 ? void 0 : pendingItem.replace(/\n/g, '\n'.concat(preface + ' ', testIndent.repeat(3)))));
                }
                // print console output
                const logItem = this._consoleLogs.shift();
                if (logItem) {
                    output.push('');
                    output.push(testIndent.repeat(2) + '.........Console Logs.........');
                    output.push(testIndent.repeat(3) + (logItem === null || logItem === void 0 ? void 0 : logItem.replace(/\n/g, '\n'.concat(preface + ' ', testIndent.repeat(3)))));
                }
            }
            // Put a line break after each suite (only if tests exist in that suite)
            if (eventsToReport.length) {
                output.push('');
            }
        }
        return output;
    }
    /**
     * Get the display for passing, failing and skipped
     * @param  {String} duration Duration string
     * @return {Array} Count display
     */
    getCountDisplay(duration) {
        const output = [];
        // Get the passes
        if (this._stateCounts.passed > 0) {
            const text = `${this._stateCounts.passed} passing ${duration}`;
            output.push(chalk_1.default[this.getColor('passed')](text));
            duration = '';
        }
        // Get the failures
        if (this._stateCounts.failed > 0) {
            const text = `${this._stateCounts.failed} failing ${duration}`.trim();
            output.push(chalk_1.default[this.getColor('failed')](text));
            duration = '';
        }
        // Get the skipped tests
        if (this._stateCounts.skipped > 0) {
            const text = `${this._stateCounts.skipped} skipped ${duration}`.trim();
            output.push(chalk_1.default[this.getColor('skipped')](text));
        }
        return output;
    }
    /**
     * Get display for failed tests, e.g. stack trace
     * @return {Array} Stack trace output
     */
    getFailureDisplay() {
        var _a;
        let failureLength = 0;
        const output = [];
        const suites = this.getOrderedSuites();
        for (const suite of suites) {
            const suiteTitle = suite.title;
            const eventsToReport = this.getEventsToReport(suite);
            for (const test of eventsToReport) {
                if (test.state !== 'failed') {
                    continue;
                }
                const testTitle = test.title;
                const errors = test.errors || (test.error ? [test.error] : []);
                // If we get here then there is a failed test
                output.push('', `${++failureLength}) ${suiteTitle} ${testTitle}`);
                for (const error of errors) {
                    !((_a = error === null || error === void 0 ? void 0 : error.stack) === null || _a === void 0 ? void 0 : _a.includes('new AssertionError'))
                        ? output.push(chalk_1.default.red(error.message))
                        : output.push(...error.message.split('\n'));
                    if (error.stack) {
                        output.push(...error.stack.split(/\n/g).map(value => chalk_1.default.gray(value)));
                    }
                }
            }
        }
        return output;
    }
    /**
     * Get suites in the order they were called
     * @return {Array} Ordered suites
     */
    getOrderedSuites() {
        if (this._orderedSuites.length) {
            return this._orderedSuites;
        }
        this._orderedSuites = [];
        for (const uid of this._suiteUids) {
            for (const [suiteUid, suite] of Object.entries(this.suites)) {
                if (suiteUid !== uid) {
                    continue;
                }
                this._orderedSuites.push(suite);
            }
        }
        return this._orderedSuites;
    }
    /**
     * Indent a suite based on where how it's nested
     * @param  {String} uid Unique suite key
     * @return {String}     Spaces for indentation
     */
    indent(uid) {
        const indents = this._suiteIndents[uid];
        return indents === 0 ? '' : Array(indents).join('    ');
    }
    /**
     * Get a symbol based on state
     * @param  {String} state State of a test
     * @return {String}       Symbol to display
     */
    getSymbol(state) {
        return (state && this._symbols[state]) || '?';
    }
    /**
     * Get a color based on a given state
     * @param  {String} state Test state
     * @return {String}       State color
     */
    getColor(state) {
        // In case of an unknown state
        let color = 'gray';
        switch (state) {
            case 'passed':
                color = 'green';
                break;
            case 'pending':
            case 'skipped':
                color = 'cyan';
                break;
            case 'failed':
                color = 'red';
                break;
        }
        return color;
    }
    /**
     * Get information about the enviroment
     * @param  {Object}  caps    Enviroment details
     * @param  {Boolean} verbose
     * @return {String}          Enviroment string
     */
    getEnviromentCombo(capability, verbose = true, isMultiremote = false) {
        const caps = (capability.alwaysMatch ||
            capability);
        const device = caps.deviceName;
        const browser = isMultiremote ? 'MultiremoteBrowser' : (caps.browserName || caps.browser);
        /**
         * fallback to different capability types:
         * browserVersion: W3C format
         * version: JSONWP format
         * platformVersion: mobile format
         * browser_version: invalid BS capability
         */
        const version = caps.browserVersion || caps.version || caps.platformVersion || caps.browser_version;
        /**
         * fallback to different capability types:
         * platformName: W3C format
         * platform: JSONWP format
         * os, os_version: invalid BS capability
         */
        const platform = isMultiremote
            ? ''
            : caps.platformName || caps.platform || (caps.os ? caps.os + (caps.os_version ? ` ${caps.os_version}` : '') : '(unknown)');
        // Mobile capabilities
        if (device) {
            const program = (caps.app || '').replace('sauce-storage:', '') || caps.browserName;
            const executing = program ? `executing ${program}` : '';
            if (!verbose) {
                return `${device} ${platform} ${version}`;
            }
            return `${device} on ${platform} ${version} ${executing}`.trim();
        }
        if (!verbose) {
            return (browser + (version ? ` ${version} ` : ' ') + (platform)).trim();
        }
        if (isMultiremote) {
            return browser + (version ? ` (v${version})` : '') + ` on ${Object.values(capability).map((c) => c.browserName).join(', ')}`;
        }
        return browser + (version ? ` (v${version})` : '') + (` on ${platform}`);
    }
}
exports.default = SpecReporter;
