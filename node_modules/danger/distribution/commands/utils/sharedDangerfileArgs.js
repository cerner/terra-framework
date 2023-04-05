"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = __importDefault(require("chalk"));
process.on("unhandledRejection", function (reason, _p) {
    console.log(chalk_1.default.red("Error: "), reason);
    process.exitCode = 1;
});
exports.default = (function (command) {
    return command
        .option("-v, --verbose", "Verbose output of files", false)
        .option("-t, --text-only", "Provide an STDOUT only interface, Danger will not post to your PR", false)
        .option("-d, --dangerfile [filePath | remote url]", "Specify a custom dangerfile path, remote urls only work with github")
        .option("-i, --id [danger_id]", "Specify a unique Danger ID for the Danger run")
        .option("-c, --external-ci-provider [modulePath]", "Specify custom CI provider")
        .option("-p, --process [command]", "[dev] Runs a custom sub-process instead of the Danger JS runtime")
        .option("-u, --passURLForDSL", "[dev] Use a custom URL to send the Danger DSL into the sub-process")
        .option("-f, --failOnErrors", "Fail if there are fails in the danger report", false)
        .option("--use-github-checks", "Use GitHub Checks", false)
        .option("--ignoreOutOfDiffComments", "Ignore inline-comments that are in lines which were not changed", false)
        .option("--newComment", "Makes Danger post a new comment instead of editing its previous one", false)
        .option("--removePreviousComments", "Removes all previous comment and create a new one in the end of the list", false);
});
//# sourceMappingURL=sharedDangerfileArgs.js.map