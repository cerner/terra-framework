"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const util_1 = __importDefault(require("util"));
const events_1 = require("events");
const logger_1 = __importDefault(require("@wdio/logger"));
const utils_1 = require("@wdio/utils");
const config_1 = require("@wdio/config");
const reporter_1 = __importDefault(require("./reporter"));
const utils_2 = require("./utils");
const log = (0, logger_1.default)('@wdio/runner');
class Runner extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this._configParser = new config_1.ConfigParser();
        this._sigintWasCalled = false;
        this._isMultiremote = false;
        this._specFileRetryAttempts = 0;
    }
    /**
     * run test suite
     * @param  {String}    cid            worker id (e.g. `0-0`)
     * @param  {Object}    args           config arguments passed into worker process
     * @param  {String[]}  specs          list of spec files to run
     * @param  {Object}    caps           capabilities to run session with
     * @param  {String}    configFile     path to config file to get config from
     * @param  {Number}    retries        number of retries remaining
     * @return {Promise}                  resolves in number of failures for testrun
     */
    async run({ cid, args, specs, caps, configFile, retries }) {
        var _a;
        this._cid = cid;
        this._specs = specs;
        this._caps = caps;
        /**
         * autocompile after parsing configs so we support ES6 features in tests with config driven by users
         */
        if ((_a = args.autoCompileOpts) === null || _a === void 0 ? void 0 : _a.autoCompile) {
            this._configParser.merge({ autoCompileOpts: args.autoCompileOpts });
            this._configParser.autoCompile();
        }
        /**
         * add config file
         */
        try {
            this._configParser.addConfigFile(configFile);
        }
        catch (err) {
            return this._shutdown(1, retries);
        }
        /**
         * merge cli arguments again as some might have been overwritten by the config
         */
        this._configParser.merge(args);
        this._config = this._configParser.getConfig();
        this._specFileRetryAttempts = (this._config.specFileRetries || 0) - (retries || 0);
        logger_1.default.setLogLevelsConfig(this._config.logLevels, this._config.logLevel);
        const isMultiremote = this._isMultiremote = !Array.isArray(this._configParser.getCapabilities());
        /**
         * create `browser` stub only if `specFiltering` feature is enabled
         */
        let browser = await this._startSession({
            ...this._config,
            // @ts-ignore used in `/packages/webdriverio/src/protocol-stub.ts`
            _automationProtocol: this._config.automationProtocol,
            automationProtocol: './protocol-stub'
        }, caps);
        /**
         * run `beforeSession` command before framework and browser are initiated
         */
        (0, utils_1.initialiseWorkerService)(this._config, caps, args.ignoredWorkerServices).map(this._configParser.addService.bind(this._configParser));
        const beforeSessionParams = [this._config, this._caps, this._specs, this._cid];
        await (0, utils_1.executeHooksWithArgs)('beforeSession', this._config.beforeSession, beforeSessionParams);
        this._reporter = new reporter_1.default(this._config, this._cid, { ...caps });
        /**
         * initialise framework
         */
        this._framework = (0, utils_1.initialisePlugin)(this._config.framework, 'framework').default;
        this._framework = await this._framework.init(cid, this._config, specs, caps, this._reporter);
        process.send({ name: 'testFrameworkInit', content: { cid, caps, specs, hasTests: this._framework.hasTests() } });
        if (!this._framework.hasTests()) {
            return this._shutdown(0, retries);
        }
        browser = await this._initSession(this._config, this._caps, browser);
        /**
         * return if session initialisation failed
         */
        if (!browser) {
            const afterArgs = [1, this._caps, this._specs];
            await (0, utils_1.executeHooksWithArgs)('after', this._config.after, afterArgs);
            return this._shutdown(1, retries);
        }
        this._reporter.caps = browser.capabilities;
        const beforeArgs = [this._caps, this._specs, browser];
        await (0, utils_1.executeHooksWithArgs)('before', this._config.before, beforeArgs);
        /**
         * kill session of SIGINT signal showed up while trying to
         * get a session ID
         */
        if (this._sigintWasCalled) {
            log.info('SIGINT signal detected while starting session, shutting down...');
            await this.endSession();
            return this._shutdown(0, retries);
        }
        /**
         * initialisation successful, send start message
         */
        const multiRemoteBrowser = browser;
        this._reporter.emit('runner:start', {
            cid,
            specs,
            config: browser.options,
            isMultiremote,
            instanceOptions: isMultiremote
                ? multiRemoteBrowser.instances.reduce((prev, browserName) => {
                    prev[multiRemoteBrowser[browserName].sessionId] = multiRemoteBrowser[browserName].options;
                    return prev;
                }, {})
                : {
                    [browser.sessionId]: browser.options
                },
            sessionId: browser.sessionId,
            capabilities: isMultiremote
                ? multiRemoteBrowser.instances.reduce((caps, browserName) => {
                    caps[browserName] = multiRemoteBrowser[browserName].capabilities;
                    caps[browserName].sessionId = multiRemoteBrowser[browserName].sessionId;
                    return caps;
                }, {})
                : { ...browser.capabilities, sessionId: browser.sessionId },
            retry: this._specFileRetryAttempts
        });
        /**
         * report sessionId and target connection information to worker
         */
        const { protocol, hostname, port, path, queryParams } = browser.options;
        const { isW3C, sessionId } = browser;
        const instances = (0, utils_2.getInstancesData)(browser, isMultiremote);
        process.send({
            origin: 'worker',
            name: 'sessionStarted',
            content: { sessionId, isW3C, protocol, hostname, port, path, queryParams, isMultiremote, instances }
        });
        /**
         * kick off tests in framework
         */
        let failures = 0;
        try {
            failures = await this._framework.run();
            await this._fetchDriverLogs(this._config, caps.excludeDriverLogs);
        }
        catch (err) {
            log.error(err);
            this.emit('error', err);
            failures = 1;
        }
        /**
         * in watch mode we don't close the session and leave current page opened
         */
        if (!args.watch) {
            await this.endSession();
        }
        return this._shutdown(failures, retries);
    }
    /**
     * init protocol session
     * @param  {object}  config        configuration of sessions
     * @param  {Object}  caps          desired capabilities of session
     * @param  {Object}  browserStub   stubbed `browser` object with only capabilities, config and env flags
     * @return {Promise}               resolves with browser object or null if session couldn't get established
     */
    async _initSession(config, caps, browserStub) {
        const browser = await this._startSession(config, caps);
        // return null if session couldn't get established
        if (!browser) {
            return;
        }
        // add flags declared by user to browser object
        if (browserStub) {
            Object.entries(browserStub).forEach(([key, value]) => {
                if (typeof browser[key] === 'undefined') {
                    // @ts-ignore allow to set value for undefined props
                    browser[key] = value;
                }
            });
        }
        /**
         * register global helper method to fetch elements
         */
        // @ts-ignore
        global.$ = (selector) => browser.$(selector);
        // @ts-ignore
        global.$$ = (selector) => browser.$$(selector);
        /**
         * register command event
         */
        browser.on('command', (command) => {
            var _a;
            return (_a = this._reporter) === null || _a === void 0 ? void 0 : _a.emit('client:beforeCommand', Object.assign(command, { sessionId: browser.sessionId }));
        });
        /**
         * register result event
         */
        browser.on('result', (result) => {
            var _a;
            return (_a = this._reporter) === null || _a === void 0 ? void 0 : _a.emit('client:afterCommand', Object.assign(result, { sessionId: browser.sessionId }));
        });
        return browser;
    }
    /**
     * start protocol session
     * @param  {object}  config        configuration of sessions
     * @param  {Object}  caps          desired capabilities of session
     * @return {Promise}               resolves with browser object or null if session couldn't get established
     */
    async _startSession(config, caps) {
        let browser;
        try {
            // @ts-ignore
            browser = global.browser = global.driver = await (0, utils_2.initialiseInstance)(config, caps, this._isMultiremote);
            /**
             * attach browser to `multiremotebrowser` so user have better typing support
             */
            if (this._isMultiremote) {
                // @ts-ignore
                global.multiremotebrowser = browser;
            }
        }
        catch (err) {
            log.error(err);
            return;
        }
        browser.config = config;
        return browser;
    }
    /**
     * fetch logs provided by browser driver
     */
    async _fetchDriverLogs(config, excludeDriverLogs) {
        /**
         * only fetch logs if
         */
        if (
        /**
         * a log directory is given in config
         */
        !config.outputDir ||
            /**
             * the session wasn't killed during start up phase
             */
            !global.browser.sessionId ||
            /**
             * driver supports it
             */
            typeof global.browser.getLogs === 'undefined') {
            return;
        }
        /**
         * suppress @wdio/sync warnings of not running commands inside of
         * a Fibers context
         */
        global._HAS_FIBER_CONTEXT = true;
        let logTypes;
        try {
            logTypes = await global.browser.getLogTypes();
        }
        catch (errIgnored) {
            /**
             * getLogTypes is not supported by browser
             */
            return;
        }
        logTypes = (0, utils_2.filterLogTypes)(excludeDriverLogs, logTypes);
        log.debug(`Fetching logs for ${logTypes.join(', ')}`);
        return Promise.all(logTypes.map(async (logType) => {
            let logs;
            try {
                logs = await global.browser.getLogs(logType);
            }
            catch (e) {
                return log.warn(`Couldn't fetch logs for ${logType}: ${e.message}`);
            }
            /**
             * don't write to file if no logs were captured
             */
            if (logs.length === 0) {
                return;
            }
            const stringLogs = logs.map((log) => JSON.stringify(log)).join('\n');
            return util_1.default.promisify(fs_1.default.writeFile)(path_1.default.join(config.outputDir, `wdio-${this._cid}-${logType}.log`), stringLogs, 'utf-8');
        }));
    }
    /**
     * kill worker session
     */
    async _shutdown(failures, retries) {
        this._reporter.emit('runner:end', {
            failures,
            cid: this._cid,
            retries
        });
        try {
            await this._reporter.waitForSync();
        }
        catch (err) {
            log.error(err);
        }
        this.emit('exit', failures === 0 ? 0 : 1);
        return failures;
    }
    /**
     * end WebDriver session, a config object can be applied if object has changed
     * within a hook by the user
     */
    async endSession() {
        /**
         * make sure instance(s) exist and have `sessionId`
         */
        const multiremoteBrowser = global.browser;
        const hasSessionId = Boolean(global.browser) && (this._isMultiremote
            /**
             * every multiremote instance should exist and should have `sessionId`
             */
            ? !multiremoteBrowser.instances.some(i => multiremoteBrowser[i] && !multiremoteBrowser[i].sessionId)
            /**
             * browser object should have `sessionId` in regular mode
             */
            : global.browser.sessionId);
        /**
         * don't do anything if test framework returns after SIGINT
         * if endSession is called without payload we expect a session id
         */
        if (!hasSessionId) {
            return;
        }
        /**
         * store capabilities for afterSession hook
         */
        const capabilities = global.browser.capabilities || {};
        if (this._isMultiremote) {
            multiremoteBrowser.instances.forEach((browserName) => {
                capabilities[browserName] = multiremoteBrowser[browserName].capabilities;
            });
        }
        await global.browser.deleteSession();
        /**
         * delete session(s)
         */
        if (this._isMultiremote) {
            multiremoteBrowser.instances.forEach(i => {
                // @ts-ignore sessionId is usually required
                delete multiremoteBrowser[i].sessionId;
            });
        }
        else {
            // @ts-ignore sessionId is usually required
            delete global.browser.sessionId;
        }
        const afterSessionArgs = [this._config, capabilities, this._specs];
        await (0, utils_1.executeHooksWithArgs)('afterSession', global.browser.config.afterSession, afterSessionArgs);
    }
}
exports.default = Runner;
