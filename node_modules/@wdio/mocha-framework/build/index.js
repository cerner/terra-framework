"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adapterFactory = exports.MochaAdapter = void 0;
const path_1 = __importDefault(require("path"));
const mocha_1 = __importDefault(require("mocha"));
const util_1 = require("util");
const logger_1 = __importDefault(require("@wdio/logger"));
const utils_1 = require("@wdio/utils");
const utils_2 = require("./utils");
const constants_1 = require("./constants");
const log = (0, logger_1.default)('@wdio/mocha-framework');
/**
* Extracts the mocha UI type following this convention:
*  - If the mochaOpts.ui provided doesn't contain a '-' then the full name
*      is taken as ui type (i.e. 'bdd','tdd','qunit')
*  - If it contains a '-' then it asumes we are providing a custom ui for
*      mocha. Then it extracts the text after the last '-' (ignoring .js if
*      provided) as the interface type. (i.e. strong-bdd in
*      https://github.com/strongloop/strong-mocha-interfaces)
*/
const MOCHA_UI_TYPE_EXTRACTOR = /^(?:.*-)?([^-.]+)(?:.js)?$/;
const DEFAULT_INTERFACE_TYPE = 'bdd';
/**
 * Mocha runner
 */
class MochaAdapter {
    constructor(_cid, _config, _specs, _capabilities, _reporter) {
        this._cid = _cid;
        this._config = _config;
        this._specs = _specs;
        this._capabilities = _capabilities;
        this._reporter = _reporter;
        this._level = 0;
        this._hasTests = true;
        this._suiteIds = ['0'];
        this._suiteCnt = new Map();
        this._hookCnt = new Map();
        this._testCnt = new Map();
        this._suiteStartDate = Date.now();
        this._config = Object.assign({
            mochaOpts: {}
        }, _config);
    }
    async init() {
        const { mochaOpts } = this._config;
        const mocha = this._mocha = new mocha_1.default(mochaOpts);
        await mocha.loadFilesAsync();
        mocha.reporter(constants_1.NOOP);
        mocha.fullTrace();
        this._specs.forEach((spec) => mocha.addFile(spec));
        mocha.suite.on('pre-require', this.preRequire.bind(this));
        await this._loadFiles(mochaOpts);
        /**
         * import and set options for `expect-webdriverio` assertion lib once
         * the framework was initiated so that it can detect the environment
         */
        const { setOptions } = require('expect-webdriverio');
        setOptions({
            wait: this._config.waitforTimeout,
            interval: this._config.waitforInterval, // interval between attempts
        });
        return this;
    }
    async _loadFiles(mochaOpts) {
        try {
            await this._mocha.loadFilesAsync();
            /**
             * grep
             */
            const mochaRunner = new mocha_1.default.Runner(this._mocha.suite, { delay: false });
            if (mochaOpts.grep) {
                mochaRunner.grep(this._mocha.options.grep, mochaOpts.invert);
            }
            this._hasTests = mochaRunner.total > 0;
        }
        catch (err) {
            const error = '' +
                'Unable to load spec files quite likely because they rely on `browser` object that is not fully initialised.\n' +
                '`browser` object has only `capabilities` and some flags like `isMobile`.\n' +
                'Helper files that use other `browser` commands have to be moved to `before` hook.\n' +
                `Spec file(s): ${this._specs.join(',')}\n` +
                `Error: ${err.stack}`;
            this._specLoadError = new Error(error);
            log.warn(error);
        }
    }
    hasTests() {
        return this._hasTests;
    }
    async run() {
        const mocha = this._mocha;
        let runtimeError;
        const result = await new Promise((resolve) => {
            try {
                this._runner = mocha.run(resolve);
            }
            catch (err) {
                runtimeError = err;
                return resolve(1);
            }
            Object.keys(constants_1.EVENTS).forEach((e) => this._runner.on(e, this.emit.bind(this, constants_1.EVENTS[e])));
            this._runner.suite.beforeAll(this.wrapHook('beforeSuite'));
            this._runner.suite.afterAll(this.wrapHook('afterSuite'));
        });
        await (0, utils_1.executeHooksWithArgs)('after', this._config.after, [runtimeError || result, this._capabilities, this._specs]);
        /**
         * in case the spec has a runtime error throw after the wdio hook
         */
        if (runtimeError || this._specLoadError) {
            throw runtimeError || this._specLoadError;
        }
        return result;
    }
    options(options, context) {
        let { require = [], compilers = [] } = options;
        if (typeof require === 'string') {
            require = [require];
        }
        this.requireExternalModules([...compilers, ...require], context);
    }
    preRequire(context, file, mocha) {
        const options = this._config.mochaOpts;
        const match = MOCHA_UI_TYPE_EXTRACTOR.exec(options.ui);
        const type = (match && constants_1.INTERFACES[match[1]] && match[1]) || DEFAULT_INTERFACE_TYPE;
        const hookArgsFn = (context) => {
            var _a, _b;
            return [{ ...context.test, parent: (_b = (_a = context.test) === null || _a === void 0 ? void 0 : _a.parent) === null || _b === void 0 ? void 0 : _b.title }, context];
        };
        constants_1.INTERFACES[type].forEach((fnName) => {
            const isTest = constants_1.TEST_INTERFACES[type].flatMap((testCommand) => [testCommand, testCommand + '.only']).includes(fnName);
            (0, utils_1.runTestInFiberContext)(isTest, isTest ? this._config.beforeTest : this._config.beforeHook, 
            // @ts-ignore
            hookArgsFn, isTest ? this._config.afterTest : this._config.afterHook, hookArgsFn, fnName, this._cid);
        });
        this.options(options, { context, file, mocha, options });
    }
    /**
     * Hooks which are added as true Mocha hooks need to call done() to notify async
     */
    wrapHook(hookName) {
        return () => (0, utils_1.executeHooksWithArgs)(hookName, this._config[hookName], [this.prepareMessage(hookName)]).catch((e) => {
            log.error(`Error in ${hookName} hook: ${e.stack.slice(7)}`);
        });
    }
    prepareMessage(hookName) {
        var _a, _b, _c;
        const params = { type: hookName };
        switch (hookName) {
            case 'beforeSuite':
                this._suiteStartDate = Date.now();
                params.payload = (_a = this._runner) === null || _a === void 0 ? void 0 : _a.suite.suites[0];
                break;
            case 'afterSuite':
                params.payload = (_b = this._runner) === null || _b === void 0 ? void 0 : _b.suite.suites[0];
                if (params.payload) {
                    params.payload.duration = params.payload.duration || (Date.now() - this._suiteStartDate);
                }
                break;
            case 'beforeTest':
            case 'afterTest':
                params.payload = (_c = this._runner) === null || _c === void 0 ? void 0 : _c.test;
                break;
        }
        return this.formatMessage(params);
    }
    formatMessage(params) {
        var _a, _b, _c;
        let message = {
            type: params.type
        };
        const mochaAllHooksIfPresent = (_b = (_a = params.payload) === null || _a === void 0 ? void 0 : _a.title) === null || _b === void 0 ? void 0 : _b.match(/^"(before|after)( all| each)?" hook/);
        if (params.err) {
            /**
             * replace "Ensure the done() callback is being called in this test." with a more meaningful message
             */
            if (params.err && params.err.message && params.err.message.includes(constants_1.MOCHA_TIMEOUT_MESSAGE)) {
                const replacement = (0, util_1.format)(constants_1.MOCHA_TIMEOUT_MESSAGE_REPLACEMENT, params.payload.parent.title, params.payload.title);
                params.err.message = params.err.message.replace(constants_1.MOCHA_TIMEOUT_MESSAGE, replacement);
                params.err.stack = params.err.stack.replace(constants_1.MOCHA_TIMEOUT_MESSAGE, replacement);
            }
            message.error = {
                name: params.err.name,
                message: params.err.message,
                stack: params.err.stack,
                type: params.err.type || params.err.name,
                expected: params.err.expected,
                actual: params.err.actual
            };
            /**
             * hook failures are emitted as "test:fail"
             */
            if (mochaAllHooksIfPresent) {
                message.type = 'hook:end';
            }
        }
        if (params.payload) {
            message.title = params.payload.title;
            message.parent = params.payload.parent ? params.payload.parent.title : null;
            let fullTitle = message.title;
            if (params.payload.parent) {
                let parent = params.payload.parent;
                while (parent && parent.title) {
                    fullTitle = parent.title + '.' + fullTitle;
                    parent = parent.parent;
                }
            }
            message.fullTitle = fullTitle;
            message.pending = params.payload.pending || false;
            message.file = params.payload.file;
            message.duration = params.payload.duration;
            /**
             * Add the current test title to the payload for cases where it helps to
             * identify the test, e.g. when running inside a beforeEach hook
             */
            if (params.payload.ctx && params.payload.ctx.currentTest) {
                message.currentTest = params.payload.ctx.currentTest.title;
            }
            if (params.type.match(/Test/)) {
                message.passed = (params.payload.state === 'passed');
            }
            if (((_c = params.payload.parent) === null || _c === void 0 ? void 0 : _c.title) && mochaAllHooksIfPresent) {
                const hookName = mochaAllHooksIfPresent[0];
                message.title = `${hookName} for ${params.payload.parent.title}`;
            }
            if (params.payload.context) {
                message.context = params.payload.context;
            }
        }
        return message;
    }
    requireExternalModules(modules, context) {
        modules.forEach(module => {
            if (!module) {
                return;
            }
            module = module.replace(/.*:/, '');
            if (module.substr(0, 1) === '.') {
                module = path_1.default.join(process.cwd(), module);
            }
            (0, utils_2.loadModule)(module, context);
        });
    }
    emit(event, payload, err) {
        /**
         * For some reason, Mocha fires a second 'suite:end' event for the root suite,
         * with no matching 'suite:start', so this can be ignored.
         */
        if (payload.root)
            return;
        let message = this.formatMessage({ type: event, payload, err });
        message.cid = this._cid;
        message.specs = this._specs;
        message.uid = this.getUID(message);
        this._reporter.emit(message.type, message);
    }
    getSyncEventIdStart(type) {
        const prop = `_${type}Cnt`;
        const suiteId = this._suiteIds[this._suiteIds.length - 1];
        const cnt = this[prop].has(suiteId)
            ? this[prop].get(suiteId) || 0
            : 0;
        this[prop].set(suiteId, cnt + 1);
        return `${type}-${suiteId}-${cnt}`;
    }
    getSyncEventIdEnd(type) {
        const prop = `_${type}Cnt`;
        const suiteId = this._suiteIds[this._suiteIds.length - 1];
        const cnt = this[prop].get(suiteId) - 1;
        return `${type}-${suiteId}-${cnt}`;
    }
    getUID(message) {
        if (message.type === 'suite:start') {
            const suiteCnt = this._suiteCnt.has(this._level.toString())
                ? this._suiteCnt.get(this._level.toString())
                : 0;
            const suiteId = `suite-${this._level}-${suiteCnt}`;
            if (this._suiteCnt.has(this._level.toString())) {
                this._suiteCnt.set(this._level.toString(), this._suiteCnt.get(this._level.toString()) + 1);
            }
            else {
                this._suiteCnt.set(this._level.toString(), 1);
            }
            // const suiteId = this.getSyncEventIdStart('suite')
            this._suiteIds.push(`${this._level}${suiteCnt}`);
            this._level++;
            return suiteId;
        }
        if (message.type === 'suite:end') {
            this._level--;
            const suiteCnt = this._suiteCnt.get(this._level.toString()) - 1;
            const suiteId = `suite-${this._level}-${suiteCnt}`;
            this._suiteIds.pop();
            return suiteId;
        }
        if (message.type === 'hook:start') {
            return this.getSyncEventIdStart('hook');
        }
        if (message.type === 'hook:end') {
            return this.getSyncEventIdEnd('hook');
        }
        if (['test:start', 'test:pending'].includes(message.type)) {
            return this.getSyncEventIdStart('test');
        }
        if (['test:end', 'test:pass', 'test:fail', 'test:retry'].includes(message.type)) {
            return this.getSyncEventIdEnd('test');
        }
        throw new Error(`Unknown message type : ${message.type}`);
    }
}
exports.MochaAdapter = MochaAdapter;
const adapterFactory = {};
exports.adapterFactory = adapterFactory;
adapterFactory.init = async function (...args) {
    // @ts-ignore just passing through args
    const adapter = new MochaAdapter(...args);
    const instance = await adapter.init();
    return instance;
};
exports.default = adapterFactory;
