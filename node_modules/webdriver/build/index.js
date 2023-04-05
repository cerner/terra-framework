"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = exports.DEFAULTS = exports.getPrototype = void 0;
const path_1 = __importDefault(require("path"));
const logger_1 = __importDefault(require("@wdio/logger"));
const utils_1 = require("@wdio/utils");
const config_1 = require("@wdio/config");
const command_1 = __importDefault(require("./command"));
exports.command = command_1.default;
const constants_1 = require("./constants");
Object.defineProperty(exports, "DEFAULTS", { enumerable: true, get: function () { return constants_1.DEFAULTS; } });
const utils_2 = require("./utils");
Object.defineProperty(exports, "getPrototype", { enumerable: true, get: function () { return utils_2.getPrototype; } });
const log = (0, logger_1.default)('webdriver');
class WebDriver {
    static async newSession(options, modifier, userPrototype = {}, customCommandWrapper) {
        const params = (0, config_1.validateConfig)(constants_1.DEFAULTS, options);
        if (!options.logLevels || !options.logLevels.webdriver) {
            logger_1.default.setLevel('webdriver', params.logLevel);
        }
        /**
         * Store all log events in a file
         */
        if (params.outputDir && !process.env.WDIO_LOG_PATH) {
            process.env.WDIO_LOG_PATH = path_1.default.join(params.outputDir, 'wdio.log');
        }
        log.info('Initiate new session using the WebDriver protocol');
        const requestedCapabilities = { ...params.capabilities };
        const { sessionId, capabilities } = await (0, utils_2.startWebDriverSession)(params);
        const environment = (0, utils_1.sessionEnvironmentDetector)({ capabilities, requestedCapabilities });
        const environmentPrototype = (0, utils_2.getEnvironmentVars)(environment);
        const protocolCommands = (0, utils_2.getPrototype)(environment);
        const prototype = { ...protocolCommands, ...environmentPrototype, ...userPrototype };
        const monad = (0, utils_1.webdriverMonad)({ ...params, requestedCapabilities }, modifier, prototype);
        const client = monad(sessionId, customCommandWrapper);
        /**
         * if the server responded with direct connect information, update the
         * client options to speak directly to the appium host instead of a load
         * balancer (see https://github.com/appium/python-client#direct-connect-urls
         * for example). But only do this if the user has enabled this
         * behavior in the first place.
         */
        if (params.enableDirectConnect) {
            (0, utils_2.setupDirectConnect)(client);
        }
        return client;
    }
    /**
     * allows user to attach to existing sessions
     */
    static attachToSession(options, modifier, userPrototype = {}, commandWrapper) {
        if (!options || typeof options.sessionId !== 'string') {
            throw new Error('sessionId is required to attach to existing session');
        }
        // logLevel can be undefined in watch mode when SIGINT is called
        if (options.logLevel) {
            logger_1.default.setLevel('webdriver', options.logLevel);
        }
        options.capabilities = options.capabilities || {};
        options.isW3C = options.isW3C === false ? false : true;
        options.protocol = options.protocol || constants_1.DEFAULTS.protocol.default;
        options.hostname = options.hostname || constants_1.DEFAULTS.hostname.default;
        options.port = options.port || constants_1.DEFAULTS.port.default;
        options.path = options.path || constants_1.DEFAULTS.path.default;
        const environmentPrototype = (0, utils_2.getEnvironmentVars)(options);
        const protocolCommands = (0, utils_2.getPrototype)(options);
        const prototype = { ...protocolCommands, ...environmentPrototype, ...userPrototype };
        const monad = (0, utils_1.webdriverMonad)(options, modifier, prototype);
        return monad(options.sessionId, commandWrapper);
    }
    /**
     * Changes The instance session id and browser capabilities for the new session
     * directly into the passed in browser object
     *
     * @param   {Object} instance  the object we get from a new browser session.
     * @returns {string}           the new session id of the browser
    */
    static async reloadSession(instance) {
        const params = {
            ...instance.options,
            capabilities: instance.requestedCapabilities
        };
        const { sessionId, capabilities } = await (0, utils_2.startWebDriverSession)(params);
        instance.sessionId = sessionId;
        instance.capabilities = capabilities;
        return sessionId;
    }
    static get WebDriver() {
        return WebDriver;
    }
}
exports.default = WebDriver;
__exportStar(require("./types"), exports);
