"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runnable_1 = __importDefault(require("./runnable"));
class HookStats extends runnable_1.default {
    constructor(runner) {
        super('hook');
        this.uid = runnable_1.default.getIdentifier(runner);
        this.cid = runner.cid;
        this.title = runner.title;
        this.parent = runner.parent;
        this.currentTest = runner.currentTest;
    }
    complete(errors) {
        this.errors = errors;
        if (errors && errors.length) {
            this.error = errors[0];
            this.state = 'failed';
        }
        super.complete();
    }
}
exports.default = HookStats;
