"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://regex101.com/r/Jxa3KX/4
var requirePattern = /(const|let|var)(.|\n)*? require\(('|")danger('|")\);?$/gm;
//  https://regex101.com/r/hdEpzO/3
var es6Pattern = /import((?!from)(?!require)(.|\n))*?(from|require\()\s?('|")danger('|")\)?;?$/gm;
/**
 * This produces a closure that can be passed to string.replace
 * It preserves the passed in code, adding simple comments.
 *
 * This should keep line numbers the same when errors get thrown parsing dangerfiles!
 */
var nNewLinesReplacer = function (comment) { return function (substring) {
    return substring
        .split("\n")
        .map(function (chunk, index) {
        return index === 0 ? comment + " " + chunk : "// " + chunk;
    })
        .join("\n");
}; };
var importReplacer = nNewLinesReplacer("// Removed" /* import will be the next word!*/);
var requireReplacer = nNewLinesReplacer("// Removed require; Original: ");
/**
 * Updates a Dangerfile to remove the import for Danger
 * @param {string} contents the file path for the dangerfile
 * @returns {string} the revised Dangerfile
 */
exports.default = (function (contents) {
    return contents.replace(es6Pattern, importReplacer).replace(requirePattern, requireReplacer);
});
//# sourceMappingURL=cleanDangerfile.js.map