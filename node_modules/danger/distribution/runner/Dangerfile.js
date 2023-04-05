"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contextForDanger = void 0;
/// End of Danger DSL definition
/** Creates a Danger context, this provides all of the global functions
 *  which are available to the Danger eval runtime.
 *
 * @param {DangerDSLType} dsl The DSL which is turned into `danger`
 * @returns {DangerContext} a DangerContext-like API
 */
function contextForDanger(dsl) {
    var results = {
        fails: [],
        warnings: [],
        messages: [],
        markdowns: [],
        scheduled: [],
    };
    var schedule = function (fn) { return results.scheduled && results.scheduled.push(fn); };
    var fail = function (message, file, line) { return results.fails.push({ message: message, file: file, line: line }); };
    var warn = function (message, file, line) { return results.warnings.push({ message: message, file: file, line: line }); };
    var message = function (message, opts, lineArg) {
        var file;
        var line;
        var icon;
        if (typeof opts === "string") {
            file = opts;
            line = lineArg;
        }
        else if (typeof opts === "object") {
            ;
            (file = opts.file, line = opts.line, icon = opts.icon);
        }
        results.messages.push({ message: message, file: file, line: line, icon: icon });
    };
    var markdown = function (message, file, line) {
        return results.markdowns.push({ message: message, file: file, line: line });
    };
    return {
        schedule: schedule,
        fail: fail,
        warn: warn,
        message: message,
        markdown: markdown,
        results: results,
        danger: dsl,
        peril: {},
    };
}
exports.contextForDanger = contextForDanger;
//# sourceMappingURL=Dangerfile.js.map