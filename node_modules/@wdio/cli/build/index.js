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
exports.run = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const yargs_1 = __importDefault(require("yargs/yargs"));
const helpers_1 = require("yargs/helpers");
const launcher_1 = __importDefault(require("./launcher"));
const run_1 = require("./commands/run");
const constants_1 = require("./constants");
const DEFAULT_CONFIG_FILENAME = 'wdio.conf.js';
const DESCRIPTION = [
    'The `wdio` command allows you run and manage your WebdriverIO test suite.',
    'If no command is provided it calls the `run` command by default, so:',
    '',
    '$ wdio wdio.conf.js',
    '',
    'is the same as:',
    '$ wdio run wdio.conf.js',
    '',
    'For more information, visit: https://webdriver.io/docs/clioptions'
];
const run = async () => {
    const argv = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
        .commandDir('commands')
        .example('wdio run wdio.conf.js --suite foobar', 'Run suite on testsuite "foobar"')
        .example('wdio run wdio.conf.js --spec ./tests/e2e/a.js --spec ./tests/e2e/b.js', 'Run suite on specific specs')
        .example('wdio run wdio.conf.js --spec ./tests/e2e/a.feature:5', 'Run scenario by line number')
        .example('wdio run wdio.conf.js --spec ./tests/e2e/a.feature:5:10', 'Run scenarios by line number')
        .example('wdio run wdio.conf.js --spec ./tests/e2e/a.feature:5:10 --spec ./test/e2e/b.feature', 'Run scenarios by line number in single feature and another complete feature')
        .example('wdio install reporter spec', 'Install @wdio/spec-reporter')
        .example('wdio repl chrome -u <SAUCE_USERNAME> -k <SAUCE_ACCESS_KEY>', 'Run repl in Sauce Labs cloud')
        .updateStrings({ 'Commands:': `${DESCRIPTION.join('\n')}\n\nCommands:` })
        .epilogue(constants_1.CLI_EPILOGUE);
    /**
     * parse CLI arguments according to what run expects, without this adding
     * `--spec ./test.js` results in propagating the spec parameter as a
     * string while in reality is should be parsed into a array of strings
     */
    if (!process.argv.find((arg) => arg === '--help')) {
        argv.options(run_1.cmdArgs);
    }
    /**
     * The only way we reach this point is if the user runs the binary without a command (i.e. wdio wdio.conf.js)
     * We can safely assume that if this is the case, the user is trying to execute the `run` command as it
     * was previous to https://github.com/webdriverio/webdriverio/pull/4402
     *
     * Since the `run` command verifies if the configuration file exists before executing
     * we don't have to check that again here.
     */
    const params = await argv.parse();
    const supportedCommands = fs_1.default
        .readdirSync(path_1.default.join(__dirname, 'commands'))
        .map((file) => file.slice(0, -3));
    if (params._ && !params._.find((param) => supportedCommands.includes(param))) {
        const args = {
            ...params,
            configPath: path_1.default.resolve(process.cwd(), params._[0] && params._[0].toString() || DEFAULT_CONFIG_FILENAME)
        };
        return (0, run_1.handler)(args).catch(async (err) => {
            const output = await new Promise((resolve) => ((0, yargs_1.default)((0, helpers_1.hideBin)(process.argv)).parse('--help', (err, argv, output) => resolve(output))));
            console.error(`${output}\n\n${err.stack}`);
            /* istanbul ignore if */
            if (!process.env.JEST_WORKER_ID) {
                process.exit(1);
            }
        });
    }
};
exports.run = run;
exports.default = launcher_1.default;
__exportStar(require("./types"), exports);
