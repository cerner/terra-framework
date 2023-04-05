"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInstancesData = exports.sendFailureMessage = exports.filterLogTypes = exports.initialiseInstance = exports.sanitizeCaps = void 0;
const deepmerge_1 = __importDefault(require("deepmerge"));
const logger_1 = __importDefault(require("@wdio/logger"));
const webdriverio_1 = require("webdriverio");
const webdriver_1 = require("webdriver");
const config_1 = require("@wdio/config");
const log = (0, logger_1.default)('@wdio/local-runner:utils');
const MERGE_OPTIONS = { clone: false };
const mochaAllHooks = ['"before all" hook', '"after all" hook'];
/**
 * sanitizes wdio config from capability properties
 * @param  {Object} caps  desired session capabilities
 * @return {Object}       sanitized caps
 */
function sanitizeCaps(caps, filterOut) {
    const defaultConfigsKeys = [
        // WDIO config keys
        ...Object.keys((0, config_1.DEFAULT_CONFIGS)()),
        // WebDriver config keys
        ...Object.keys(webdriver_1.DEFAULTS)
    ];
    return Object.keys(caps).filter((key) => (
    /**
     * filter out all wdio config keys
     */
    !defaultConfigsKeys.includes(key) === !filterOut)).reduce((obj, key) => {
        obj[key] = caps[key];
        return obj;
    }, {});
}
exports.sanitizeCaps = sanitizeCaps;
/**
 * initialise browser instance depending whether remote or multiremote is requested
 * @param  {Object}  config        configuration of sessions
 * @param  {Object}  capabilities  desired session capabilities
 * @param  {boolean} isMultiremote isMultiremote
 * @return {Promise}               resolves with browser object
 */
async function initialiseInstance(config, capabilities, isMultiremote) {
    /**
     * check if config has sessionId and attach it to a running session if so
     */
    if (config.sessionId) {
        log.debug(`attach to session with id ${config.sessionId}`);
        config.capabilities = sanitizeCaps(capabilities);
        /**
         * propagate connection details defined by services or user in capabilities
         */
        const { protocol, hostname, port, path } = capabilities;
        return (0, webdriverio_1.attach)({ ...config, ...{ protocol, hostname, port, path } });
    }
    if (!isMultiremote) {
        log.debug('init remote session');
        const sessionConfig = {
            ...config,
            ...sanitizeCaps(capabilities, true),
            capabilities: sanitizeCaps(capabilities)
        };
        return (0, webdriverio_1.remote)(sessionConfig);
    }
    const options = {};
    log.debug('init multiremote session');
    // @ts-expect-error ToDo(Christian): can be removed?
    delete config.capabilities;
    for (let browserName of Object.keys(capabilities)) {
        options[browserName] = (0, deepmerge_1.default)(config, capabilities[browserName], MERGE_OPTIONS);
    }
    const browser = await (0, webdriverio_1.multiremote)(options, config);
    for (let browserName of Object.keys(capabilities)) {
        // @ts-ignore allow random global browser names
        global[browserName] = browser[browserName];
    }
    return browser;
}
exports.initialiseInstance = initialiseInstance;
/**
 * Filter logTypes based on filter
 * @param  {string[]} excludeDriverLogs logTypes filter
 * @param  {string[]} driverLogTypes    available driver log types
 * @return {string[]}                   logTypes
 */
function filterLogTypes(excludeDriverLogs, driverLogTypes) {
    let logTypes = [...driverLogTypes];
    if (Array.isArray(excludeDriverLogs)) {
        log.debug('filtering logTypes', logTypes);
        if (excludeDriverLogs.length === 1 && excludeDriverLogs[0] === '*') { // exclude all logTypes
            logTypes = [];
        }
        else {
            logTypes = logTypes.filter(x => !excludeDriverLogs.includes(x)); // exclude specific logTypes
        }
        log.debug('filtered logTypes', logTypes);
    }
    return logTypes;
}
exports.filterLogTypes = filterLogTypes;
/**
 * Send event to WDIOCLInterface if test or before/after all hook failed
 * @param {string} e        event
 * @param {object} payload  payload
 */
function sendFailureMessage(e, payload) {
    if (e === 'test:fail' ||
        (e === 'hook:end' &&
            payload.error &&
            mochaAllHooks.some(hook => payload.title.startsWith(hook)))) {
        process.send({
            origin: 'reporter',
            name: 'printFailureMessage',
            content: payload
        });
    }
}
exports.sendFailureMessage = sendFailureMessage;
/**
 * Gets { sessionId, isW3C, protocol, hostname, port, path, queryParams } of every Multiremote instance
 * @param {object} browser browser
 * @param {boolean} isMultiremote isMultiremote
 * @return {object}
 */
function getInstancesData(browser, isMultiremote) {
    if (!isMultiremote) {
        return;
    }
    const multiRemoteBrowser = browser;
    const instances = {};
    multiRemoteBrowser.instances.forEach((browserName) => {
        const { protocol, hostname, port, path, queryParams } = multiRemoteBrowser[browserName].options;
        const { isW3C, sessionId } = multiRemoteBrowser[browserName];
        instances[browserName] = { sessionId, isW3C, protocol, hostname, port, path, queryParams };
    });
    return instances;
}
exports.getInstancesData = getInstancesData;
