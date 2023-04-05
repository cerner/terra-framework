"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl_1 = __importDefault(require("@wdio/repl"));
class WDIORunnerRepl extends repl_1.default {
    constructor(childProcess, options) {
        super(options);
        this.commandIsRunning = false;
        this.childProcess = childProcess;
    }
    _getError(params) {
        if (!params.error) {
            return null;
        }
        const err = new Error(params.message);
        err.stack = params.stack;
        return err;
    }
    eval(cmd, context, filename, callback) {
        if (this.commandIsRunning) {
            return;
        }
        this.commandIsRunning = true;
        this.childProcess.send({
            origin: 'debugger',
            name: 'eval',
            content: { cmd }
        });
        this.callback = callback;
    }
    onResult(params) {
        const error = this._getError(params);
        if (this.callback) {
            this.callback(error, params.result);
        }
        this.commandIsRunning = false;
    }
    start(context) {
        this.childProcess.send({
            origin: 'debugger',
            name: 'start'
        });
        return super.start(context);
    }
}
exports.default = WDIORunnerRepl;
