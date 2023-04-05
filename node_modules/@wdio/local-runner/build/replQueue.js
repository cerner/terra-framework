"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const repl_1 = __importDefault(require("./repl"));
/**
 * repl queue class
 * allows to run debug commands in mutliple workers one after another
 */
class ReplQueue {
    constructor() {
        this._repls = [];
    }
    add(childProcess, options, onStart, onEnd) {
        this._repls.push({ childProcess, options, onStart, onEnd });
    }
    next() {
        if (this.isRunning || this._repls.length === 0) {
            return;
        }
        const nextRepl = this._repls.shift();
        if (!nextRepl) {
            return;
        }
        const { childProcess, options, onStart, onEnd } = nextRepl;
        const runningRepl = this.runningRepl = new repl_1.default(childProcess, options);
        onStart();
        runningRepl.start().then(() => {
            const ev = {
                origin: 'debugger',
                name: 'stop'
            };
            runningRepl.childProcess.send(ev);
            onEnd(ev);
            delete this.runningRepl;
            this.next();
        });
    }
    get isRunning() {
        return Boolean(this.runningRepl);
    }
}
exports.default = ReplQueue;
