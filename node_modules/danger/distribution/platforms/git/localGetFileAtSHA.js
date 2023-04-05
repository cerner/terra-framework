"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localGetFileAtSHA = void 0;
var debug_1 = require("../../debug");
var child_process_1 = require("child_process");
var d = (0, debug_1.debug)("localGetFileAtSHA");
var localGetFileAtSHA = function (path, _repo, sha) {
    return new Promise(function (done) {
        var call = "git show ".concat(sha, ":\"").concat(path, "\"");
        d(call);
        (0, child_process_1.exec)(call, function (err, stdout, _stderr) {
            if (err) {
                console.error("Could not get the file ".concat(path, " from git at ").concat(sha));
                console.error(err);
                return;
            }
            done(stdout);
        });
    });
};
exports.localGetFileAtSHA = localGetFileAtSHA;
//# sourceMappingURL=localGetFileAtSHA.js.map