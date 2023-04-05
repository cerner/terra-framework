"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitHookFn = exports.runner = void 0;
const async_exit_hook_1 = __importDefault(require("async-exit-hook"));
const runner_1 = __importDefault(require("@wdio/runner"));
const logger_1 = __importDefault(require("@wdio/logger"));
const constants_1 = require("./constants");
const log = (0, logger_1.default)('@wdio/local-runner');
exports.runner = new runner_1.default();
exports.runner.on('exit', process.exit.bind(process));
exports.runner.on('error', ({ name, message, stack }) => process.send({
    origin: 'worker',
    name: 'error',
    content: { name, message, stack }
}));
process.on('message', (m) => {
    if (!m || !m.command) {
        return;
    }
    log.info(`Run worker command: ${m.command}`);
    exports.runner[m.command](m).then((result) => process.send({
        origin: 'worker',
        name: 'finisedCommand',
        content: {
            command: m.command,
            result
        }
    }), (e) => {
        log.error(`Failed launching test session: ${e.stack}`);
        setTimeout(() => process.exit(1), 10);
    });
});
/**
 * catch sigint messages as they are handled by main process
 */
const exitHookFn = (callback) => {
    if (!callback) {
        return;
    }
    exports.runner.sigintWasCalled = true;
    log.info(`Received SIGINT, giving process ${constants_1.SHUTDOWN_TIMEOUT}ms to shutdown gracefully`);
    setTimeout(callback, constants_1.SHUTDOWN_TIMEOUT);
};
exports.exitHookFn = exitHookFn;
(0, async_exit_hook_1.default)(exports.exitHookFn);
