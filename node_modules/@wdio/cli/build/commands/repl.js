"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.cmdArgs = exports.desc = exports.command = void 0;
const lodash_pickby_1 = __importDefault(require("lodash.pickby"));
const webdriverio_1 = require("webdriverio");
const utils_1 = require("@wdio/utils");
const run_1 = require("./run");
const utils_2 = require("../utils");
const constants_1 = require("../constants");
const IGNORED_ARGS = [
    'bail', 'framework', 'reporters', 'suite', 'spec', 'exclude',
    'mochaOpts', 'jasmineOpts', 'cucumberOpts', 'autoCompileOpts'
];
exports.command = 'repl <option> [capabilities]';
exports.desc = 'Run WebDriver session in command line';
exports.cmdArgs = {
    platformVersion: {
        alias: 'v',
        desc: 'Version of OS for mobile devices',
        type: 'string',
    },
    deviceName: {
        alias: 'd',
        desc: 'Device name for mobile devices',
        type: 'string',
    },
    udid: {
        alias: 'u',
        desc: 'UDID of real mobile devices',
        type: 'string',
    }
};
const builder = (yargs) => {
    return yargs
        .options((0, lodash_pickby_1.default)({ ...exports.cmdArgs, ...run_1.cmdArgs }, (_, key) => !IGNORED_ARGS.includes(key)))
        .example('$0 repl firefox --path /', 'Run repl locally')
        .example('$0 repl chrome -u <SAUCE_USERNAME> -k <SAUCE_ACCESS_KEY>', 'Run repl in Sauce Labs cloud')
        .example('$0 repl android', 'Run repl browser on launched Android device')
        .example('$0 repl "./path/to/your_app.app"', 'Run repl native app on iOS simulator')
        .example('$0 repl ios -v 11.3 -d "iPhone 7" -u 123432abc', 'Run repl browser on iOS device with capabilities')
        .example('$0 repl "./path/to/wdio.config.js" 0 -p 9515', 'Run repl using the first capability from the capabilty array in wdio.config.js')
        .example('$0 repl "./path/to/wdio.config.js" "myChromeBrowser" -p 9515', 'Run repl using a named multiremote capabilities in wdio.config.js')
        .epilogue(constants_1.CLI_EPILOGUE)
        .help();
};
exports.builder = builder;
const handler = async (argv) => {
    const caps = (0, utils_2.getCapabilities)(argv);
    /**
     * runner option required to wrap commands within Fibers context
     */
    const execMode = utils_1.hasWdioSyncSupport ? { runner: 'local' } : {};
    const client = await (0, webdriverio_1.remote)({ ...argv, ...caps, ...execMode });
    // @ts-ignore
    global.$ = client.$.bind(client);
    // @ts-ignore
    global.$$ = client.$$.bind(client);
    global.browser = client;
    await client.debug();
    return client.deleteSession();
};
exports.handler = handler;
