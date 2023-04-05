#! /usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
var commander_1 = __importDefault(require("commander"));
var platform_1 = require("../platforms/platform");
var Executor_1 = require("../runner/Executor");
var runDangerSubprocess_1 = __importStar(require("./utils/runDangerSubprocess"));
var sharedDangerfileArgs_1 = __importDefault(require("./utils/sharedDangerfileArgs"));
var getRuntimeCISource_1 = __importDefault(require("./utils/getRuntimeCISource"));
var inline_1 = __importDefault(require("../runner/runners/inline"));
var dslGenerator_1 = require("../runner/dslGenerator");
var debug_1 = require("../debug");
var d = (0, debug_1.debug)("process");
var subprocessName;
var deprecationWarning = chalk_1.default.bold("Semi-deprecated, as ci/pr/local all support --process");
commander_1.default
    .usage("[options] <process_name>")
    .description(deprecationWarning +
    "\n\nDoes a Danger run, but instead of handling the execution of a Dangerfile it will pass the DSL " +
    "into another process expecting the process to eventually return results back as JSON. If you don't " +
    "provide another process, then it will output to STDOUT.")
    .on("--help", function () {
    console.log("\n");
    console.log("  Docs:");
    console.log("");
    console.log("    -> Danger Process:");
    console.log("       http://danger.systems/js/usage/danger-process.html");
})
    .allowUnknownOption(true);
(0, sharedDangerfileArgs_1.default)(commander_1.default);
commander_1.default.action(function (process_name) { return (subprocessName = process_name); }).parse(process.argv);
// The dynamic nature of the program means typecasting a lot
// use this to work with dynamic properties
var app = commander_1.default;
if (process.env["DANGER_VERBOSE"] || app.verbose) {
    global.verbose = true;
}
(0, getRuntimeCISource_1.default)(app).then(function (source) {
    // This does not set a failing exit code
    if (source && !source.isPR) {
        console.log("Skipping Danger due to this run not executing on a PR.");
    }
    // The optimal path
    if (source && source.isPR) {
        var platform_2 = (0, platform_1.getPlatformForEnv)(process.env, source);
        if (!platform_2) {
            console.log(chalk_1.default.red("Could not find a source code hosting platform for ".concat(source.name, ".")));
            console.log("Platform '".concat(source.name, "' is not supported with Danger JS, if you want other platforms, consider the Ruby version or help out."));
            process.exitCode = 1;
        }
        if (platform_2) {
            (0, dslGenerator_1.jsonDSLGenerator)(platform_2, source, app).then(function (dangerJSONDSL) {
                if (!subprocessName) {
                    //  Just pipe it out to the CLI
                    var processInput = (0, runDangerSubprocess_1.prepareDangerDSL)(dangerJSONDSL);
                    process.stdout.write(processInput);
                }
                else {
                    d("Sending input To ".concat(subprocessName, ": "), dangerJSONDSL);
                    var runConfig = {
                        source: source,
                        platform: platform_2,
                        additionalEnvVars: {},
                    };
                    var execConfig = {
                        stdoutOnly: app.textOnly,
                        verbose: app.verbose,
                        jsonOnly: false,
                        dangerID: app.id || "Danger",
                        passURLForDSL: app.passURLForDSL || false,
                        disableGitHubChecksSupport: !app.useGithubChecks,
                        failOnErrors: app.failOnErrors,
                        ignoreOutOfDiffComments: app.ignoreOutOfDiffComments,
                    };
                    d("Exec config: ", execConfig);
                    d("Run config: ", runConfig);
                    var exec = new Executor_1.Executor(source, platform_2, inline_1.default, execConfig, process);
                    (0, runDangerSubprocess_1.default)([subprocessName], dangerJSONDSL, exec, runConfig);
                }
            });
        }
    }
});
//# sourceMappingURL=danger-process.js.map