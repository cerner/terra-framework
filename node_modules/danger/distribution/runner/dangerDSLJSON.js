"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DangerDSLJSON = void 0;
/**
 * Using the input JSON create an DangerDSL
 *
 * @see DangerDSLJSONType for more detailed definition
 */
var DangerDSLJSON = /** @class */ (function () {
    /**
     * Parse the JSON and assign danger to this object
     *
     * Also add the arguments sent to the CLI
     *
     * @param JSONString DSL in JSON format
     * @param cliArgs arguments used running danger command
     */
    function DangerDSLJSON(JSONString, cliArgs) {
        var parsedString = JSON.parse(JSONString);
        Object.assign(this, parsedString.danger);
        // Merge the command line settings with the settings from the
        // original command invocation.  This is needed because some
        // commands like danger-local have options that are unknown to
        // danger-runner
        // @ts-ignore
        Object.assign(this.settings.cliArgs, cliArgs);
    }
    return DangerDSLJSON;
}());
exports.DangerDSLJSON = DangerDSLJSON;
//# sourceMappingURL=dangerDSLJSON.js.map