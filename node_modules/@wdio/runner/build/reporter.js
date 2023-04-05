"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("@wdio/logger"));
const utils_1 = require("@wdio/utils");
const utils_2 = require("./utils");
const log = (0, logger_1.default)('@wdio/runner');
/**
 * BaseReporter
 * responsible for initialising reporters for every testrun and propagating events
 * to all these reporters
 */
class BaseReporter {
    constructor(_config, _cid, caps) {
        this._config = _config;
        this._cid = _cid;
        this.caps = caps;
        // ensure all properties are set before initializing the reporters
        this._reporters = this._config.reporters.map(this.initReporter.bind(this));
    }
    /**
     * emit events to all registered reporter and wdio launcer
     *
     * @param  {String} e       event name
     * @param  {object} payload event payload
     */
    emit(e, payload) {
        payload.cid = this._cid;
        /**
         * Send failure message (only once) in case of test or hook failure
         */
        (0, utils_2.sendFailureMessage)(e, payload);
        this._reporters.forEach((reporter) => reporter.emit(e, payload));
    }
    getLogFile(name) {
        // clone the config to avoid changing original properties
        let options = Object.assign({}, this._config);
        let filename = `wdio-${this._cid}-${name}-reporter.log`;
        const reporterOptions = this._config.reporters.find((reporter) => (Array.isArray(reporter) &&
            (reporter[0] === name ||
                typeof reporter[0] === 'function' && reporter[0].name === name)));
        if (reporterOptions && Array.isArray(reporterOptions)) {
            const fileformat = reporterOptions[1].outputFileFormat;
            options.cid = this._cid;
            options.capabilities = this.caps;
            Object.assign(options, reporterOptions[1]);
            if (fileformat) {
                if (typeof fileformat !== 'function') {
                    throw new Error('outputFileFormat must be a function');
                }
                filename = fileformat(options);
            }
        }
        if (!options.outputDir) {
            return;
        }
        return path_1.default.join(options.outputDir, filename);
    }
    /**
     * return write stream object based on reporter name
     */
    getWriteStreamObject(reporter) {
        return {
            write: /* istanbul ignore next */ (content) => process.send({
                origin: 'reporter',
                name: reporter,
                content
            })
        };
    }
    /**
     * wait for reporter to finish synchronization, e.g. when sending data asynchronous
     * to a server (e.g. sumo reporter)
     */
    waitForSync() {
        const startTime = Date.now();
        return new Promise((resolve, reject) => {
            const interval = setInterval(() => {
                const unsyncedReporter = this._reporters
                    .filter((reporter) => !reporter.isSynchronised)
                    .map((reporter) => reporter.constructor.name);
                if ((Date.now() - startTime) > this._config.reporterSyncTimeout && unsyncedReporter.length) {
                    clearInterval(interval);
                    return reject(new Error(`Some reporters are still unsynced: ${unsyncedReporter.join(', ')}`));
                }
                /**
                 * no reporter are in need to sync anymore, continue
                 */
                if (!unsyncedReporter.length) {
                    clearInterval(interval);
                    return resolve(true);
                }
                log.info(`Wait for ${unsyncedReporter.length} reporter to synchronise`);
                // wait otherwise
            }, this._config.reporterSyncInterval);
        });
    }
    /**
     * initialise reporters
     */
    initReporter(reporter) {
        let ReporterClass;
        let options = {};
        /**
         * check if reporter has custom options
         */
        if (Array.isArray(reporter)) {
            options = Object.assign({}, options, reporter[1]);
            reporter = reporter[0];
        }
        /**
         * check if reporter was passed in from a file, e.g.
         *
         * ```js
         * const MyCustomReporter = require('/some/path/MyCustomReporter.js')
         * exports.config
         *     //...
         *     reporters: [
         *         MyCustomReporter, // or
         *         [MyCustomReporter, { custom: 'option' }]
         *     ]
         *     //...
         * }
         * ```
         */
        if (typeof reporter === 'function') {
            ReporterClass = reporter;
            options.logFile = options.setLogFile
                ? options.setLogFile(this._cid, ReporterClass.name)
                : typeof options.logFile === 'string'
                    ? options.logFile
                    : this.getLogFile(ReporterClass.name);
            options.writeStream = this.getWriteStreamObject(ReporterClass.name);
            return new ReporterClass(options);
        }
        /**
         * check if reporter is a node package, e.g. wdio-dot reporter
         *
         * ```js
         * exports.config
         *     //...
         *     reporters: [
         *         'dot', // or
         *         ['dot', { custom: 'option' }]
         *     ]
         *     //...
         * }
         * ```
         */
        if (typeof reporter === 'string') {
            ReporterClass = (0, utils_1.initialisePlugin)(reporter, 'reporter').default;
            options.logFile = options.setLogFile
                ? options.setLogFile(this._cid, reporter)
                : typeof options.logFile === 'string'
                    ? options.logFile
                    : this.getLogFile(reporter);
            options.writeStream = this.getWriteStreamObject(reporter);
            return new ReporterClass(options);
        }
        /**
         * throw error if reporter property was invalid
         */
        throw new Error('Invalid reporters config');
    }
}
exports.default = BaseReporter;
