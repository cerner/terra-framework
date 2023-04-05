"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiremoteHandler = exports.elementErrorHandler = void 0;
const refetchElement_1 = __importDefault(require("./utils/refetchElement"));
const implicitWait_1 = __importDefault(require("./utils/implicitWait"));
const utils_1 = require("./utils");
const constants_1 = require("./constants");
/**
 * This method is an command wrapper for elements that checks if a command is called
 * that wasn't found on the page and automatically waits for it
 *
 * @param  {Function} fn  commandWrap from wdio-sync package (or shim if not running in sync)
 */
const elementErrorHandler = (fn) => (commandName, commandFn) => {
    return function elementErrorHandlerCallback(...args) {
        return fn(commandName, async function elementErrorHandlerCallbackFn() {
            const element = await (0, implicitWait_1.default)(this, commandName);
            this.elementId = element.elementId;
            this[constants_1.ELEMENT_KEY] = element.elementId;
            try {
                const result = await fn(commandName, commandFn).apply(this, args);
                /**
                 * assume Safari responses like { error: 'no such element', message: '', stacktrace: '' }
                 * as `stale element reference`
                 */
                const caps = (0, utils_1.getBrowserObject)(this).capabilities;
                if (caps && caps.browserName === 'safari' &&
                    result && result.error === 'no such element') {
                    const errorName = 'stale element reference';
                    const err = new Error(errorName);
                    err.name = errorName;
                    throw err;
                }
                return result;
            }
            catch (err) {
                if (err.name === 'stale element reference') {
                    const element = await (0, refetchElement_1.default)(this, commandName);
                    this.elementId = element.elementId;
                    this.parent = element.parent;
                    return await fn(commandName, commandFn).apply(this, args);
                }
                throw err;
            }
        }).apply(this);
    };
};
exports.elementErrorHandler = elementErrorHandler;
/**
 * handle single command calls from multiremote instances
 */
const multiremoteHandler = (wrapCommand) => (commandName) => {
    return wrapCommand(commandName, function (...args) {
        // @ts-ignore
        const commandResults = this.instances.map((instanceName) => {
            // @ts-ignore ToDo(Christian)
            return this[instanceName][commandName](...args);
        });
        return Promise.all(commandResults);
    });
};
exports.multiremoteHandler = multiremoteHandler;
