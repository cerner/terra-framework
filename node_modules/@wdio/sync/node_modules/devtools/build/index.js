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
exports.SUPPORTED_BROWSER = exports.sessionMap = void 0;
const os_1 = __importDefault(require("os"));
const path_1 = __importDefault(require("path"));
const ua_parser_js_1 = __importDefault(require("ua-parser-js"));
const uuid_1 = require("uuid");
const logger_1 = __importDefault(require("@wdio/logger"));
const utils_1 = require("@wdio/utils");
const config_1 = require("@wdio/config");
const devtoolsdriver_1 = __importDefault(require("./devtoolsdriver"));
const launcher_1 = __importDefault(require("./launcher"));
const constants_1 = require("./constants");
Object.defineProperty(exports, "SUPPORTED_BROWSER", { enumerable: true, get: function () { return constants_1.SUPPORTED_BROWSER; } });
const utils_2 = require("./utils");
const log = (0, logger_1.default)('devtools:puppeteer');
/**
 * patch debug package to log Puppeteer CDP messages
 */
(0, utils_2.patchDebug)(log);
exports.sessionMap = new Map();
class DevTools {
    static async newSession(options, modifier, userPrototype = {}, customCommandWrapper) {
        var _a, _b, _c;
        const params = (0, config_1.validateConfig)(constants_1.DEFAULTS, options);
        if (params.logLevel && (!options.logLevels || !options.logLevels['devtools'])) {
            logger_1.default.setLevel('devtools', params.logLevel);
        }
        /**
         * Store all log events in a file
         */
        if (params.outputDir && !process.env.WDIO_LOG_PATH) {
            process.env.WDIO_LOG_PATH = path_1.default.join(params.outputDir, 'wdio.log');
        }
        log.info('Initiate new session using the DevTools protocol');
        const requestedCapabilities = { ...params.capabilities };
        const browser = await (0, launcher_1.default)(params.capabilities);
        const pages = await browser.pages();
        const driver = new devtoolsdriver_1.default(browser, pages);
        const sessionId = (0, uuid_1.v4)();
        const uaParser = new ua_parser_js_1.default(await browser.userAgent());
        const userAgent = uaParser.getResult();
        const availableVendorPrefixes = Object.values(constants_1.VENDOR_PREFIX);
        const vendorCapPrefix = Object.keys(params.capabilities)
            .find((capKey) => availableVendorPrefixes.includes(capKey))
            ||
                constants_1.VENDOR_PREFIX[(_a = userAgent.browser.name) === null || _a === void 0 ? void 0 : _a.toLocaleLowerCase()];
        params.capabilities = {
            browserName: userAgent.browser.name,
            browserVersion: userAgent.browser.version,
            platformName: os_1.default.platform(),
            platformVersion: os_1.default.release()
        };
        if (vendorCapPrefix) {
            Object.assign(params.capabilities, {
                [vendorCapPrefix]: Object.assign({ debuggerAddress: browser._connection.url().split('/')[2] }, params.capabilities[vendorCapPrefix])
            });
        }
        exports.sessionMap.set(sessionId, { browser, session: driver });
        const environmentPrototype = {};
        Object.entries((0, utils_1.devtoolsEnvironmentDetector)({
            browserName: (_c = (_b = userAgent === null || userAgent === void 0 ? void 0 : userAgent.browser) === null || _b === void 0 ? void 0 : _b.name) === null || _c === void 0 ? void 0 : _c.toLowerCase()
        })).forEach(([name, value]) => {
            environmentPrototype[name] = { value };
        });
        const commandWrapper = (method, endpoint, commandInfo) => driver.register(commandInfo);
        const protocolCommands = (0, utils_2.getPrototype)(commandWrapper);
        const prototype = {
            ...protocolCommands,
            ...userPrototype,
            ...environmentPrototype
        };
        const monad = (0, utils_1.webdriverMonad)({ ...params, requestedCapabilities }, modifier, prototype);
        return monad(sessionId, customCommandWrapper);
    }
    static async reloadSession(instance) {
        const { session } = exports.sessionMap.get(instance.sessionId);
        const browser = await (0, launcher_1.default)(instance.requestedCapabilities);
        const pages = await browser.pages();
        session.initBrowser.call(session, browser, pages);
        instance.puppeteer = browser;
        exports.sessionMap.set(instance.sessionId, { browser, session });
        return instance.sessionId;
    }
    /**
     * allows user to attach to existing sessions
     */
    static async attachToSession(options, modifier, userPrototype = {}, customCommandWrapper) {
        var _a, _b;
        const browser = await (0, launcher_1.default)(options.capabilities);
        const pages = await browser.pages();
        const driver = new devtoolsdriver_1.default(browser, pages);
        const sessionId = (0, uuid_1.v4)();
        const uaParser = new ua_parser_js_1.default(await browser.userAgent());
        const userAgent = uaParser.getResult();
        const environmentPrototype = { puppeteer: { value: browser } };
        Object.entries((0, utils_1.devtoolsEnvironmentDetector)({
            browserName: (_b = (_a = userAgent === null || userAgent === void 0 ? void 0 : userAgent.browser) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.toLowerCase()
        })).forEach(([name, value]) => {
            environmentPrototype[name] = { value };
        });
        const commandWrapper = (method, endpoint, commandInfo) => driver.register(commandInfo);
        const protocolCommands = (0, utils_2.getPrototype)(commandWrapper);
        const prototype = {
            ...protocolCommands,
            ...userPrototype,
            ...environmentPrototype
        };
        const monad = (0, utils_1.webdriverMonad)(options, modifier, prototype);
        return monad(sessionId, customCommandWrapper);
    }
}
exports.default = DevTools;
__exportStar(require("./types"), exports);
