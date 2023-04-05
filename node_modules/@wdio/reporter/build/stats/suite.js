"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const runnable_1 = __importDefault(require("./runnable"));
/**
 * Class describing statistics about a single suite.
 */
class SuiteStats extends runnable_1.default {
    constructor(suite) {
        super(suite.type || 'suite');
        this.tests = [];
        this.hooks = [];
        this.suites = [];
        /**
         * an array of hooks and tests stored in order as they happen
         */
        this.hooksAndTests = [];
        this.uid = runnable_1.default.getIdentifier(suite);
        this.cid = suite.cid;
        this.file = suite.file;
        this.title = suite.title;
        this.fullTitle = suite.fullTitle;
        this.tags = suite.tags;
        this.parent = suite.parent;
        /**
         * only Cucumber
         */
        this.description = suite.description;
        this.rule = suite.rule;
    }
}
exports.default = SuiteStats;
