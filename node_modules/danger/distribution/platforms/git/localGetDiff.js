"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localGetDiff = void 0;
var debug_1 = require("../../debug");
var child_process_1 = require("child_process");
var d = (0, debug_1.debug)("localGetDiff");
var useCommittedDiffArgs = function (base, head) { return [
    "diff",
    "--src-prefix='a/' --dst-prefix='b/'",
    "".concat(base, "...").concat(head),
]; };
var useStagingChanges = function () { return ["diff", "--src-prefix='a/' --dst-prefix='b/'", "--staged"]; };
var localGetDiff = function (base, head, staging) {
    if (staging === void 0) { staging = false; }
    return new Promise(function (done) {
        var args = staging ? useStagingChanges() : useCommittedDiffArgs(base, head);
        var stdout = "";
        var child = (0, child_process_1.spawn)("git", args, { env: process.env });
        d("> git", args.join(" "));
        child.stdout.on("data", function (chunk) {
            stdout += chunk;
        });
        child.stderr.on("data", function (data) {
            console.error("Could not get diff from git between ".concat(base, " and ").concat(head));
            throw new Error(data.toString());
        });
        child.on("close", function (code) {
            if (code === 0) {
                done(stdout);
            }
        });
    });
};
exports.localGetDiff = localGetDiff;
//# sourceMappingURL=localGetDiff.js.map