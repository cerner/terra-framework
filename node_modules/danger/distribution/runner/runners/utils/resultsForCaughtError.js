"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pinpoint_1 = __importDefault(require("pinpoint"));
/** Returns Markdown results to post if an exception is raised during the danger run */
var resultsForCaughtError = function (file, contents, error) {
    var match = /(\d+:\d+)/g.exec(error.stack);
    var code;
    if (match) {
        var _a = match[0].split(":").map(function (value) { return parseInt(value, 10) - 1; }), line = _a[0], column = _a[1];
        code = (0, pinpoint_1.default)(contents, { line: line, column: column });
    }
    else {
        code = contents;
    }
    var failure = "Danger failed to run `".concat(file, "`.");
    var errorMD = "## Error ".concat(error.name, "\n```\n").concat(error.message, "\n").concat(error.stack, "\n```\n### Dangerfile\n```\n").concat(code, "\n```\n  ");
    return { fails: [{ message: failure }], warnings: [], markdowns: [{ message: errorMD }], messages: [] };
};
exports.default = resultsForCaughtError;
//# sourceMappingURL=resultsForCaughtError.js.map