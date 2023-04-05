"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dangerfilePath = void 0;
var fs_1 = require("fs");
var process_1 = require("process");
/**
 * Returns a the typical Dangerfile, depending on it's location
 * taking into account whether it JS or TS by whether those exists.
 *
 * Will throw if it isn't found.
 */
function dangerfilePath(program) {
    if (program.dangerfile) {
        return program.dangerfile;
    }
    if ((0, fs_1.existsSync)("dangerfile.ts")) {
        return "dangerfile.ts";
    }
    if ((0, fs_1.existsSync)("dangerfile.js")) {
        return "dangerfile.js";
    }
    if ((0, fs_1.existsSync)("Dangerfile.ts")) {
        return "Dangerfile.ts";
    }
    if ((0, fs_1.existsSync)("Dangerfile.js")) {
        return "Dangerfile.js";
    }
    throw new Error("Could not find a 'dangerfile.js' or 'dangerfile.ts' in the current working directory (".concat((0, process_1.cwd)(), ")."));
}
exports.dangerfilePath = dangerfilePath;
//# sourceMappingURL=fileUtils.js.map