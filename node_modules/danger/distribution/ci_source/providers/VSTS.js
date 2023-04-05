"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VSTS = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * You'll need to add a build step and set the custom command to `[run_command]`.
 *
 * Danger only supports using VSTS with GitHub as the repository, Danger doesn't yet support VSTS as a repository
 * platform for providing feedback
 *
 *  ### Token Setup
 *
 *  You need to add the `DANGER_GITHUB_API_TOKEN` environment variable
 */
var VSTS = /** @class */ (function () {
    function VSTS(env) {
        this.env = env;
    }
    Object.defineProperty(VSTS.prototype, "name", {
        get: function () {
            return "Visual Studio Team Services";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSTS.prototype, "isCI", {
        get: function () {
            return ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["SYSTEM_TEAMFOUNDATIONCOLLECTIONURI", "BUILD_REPOSITORY_PROVIDER"]) &&
                this.env.BUILD_REPOSITORY_PROVIDER == "GitHub");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSTS.prototype, "isPR", {
        get: function () {
            var mustHave = ["BUILD_SOURCEBRANCH", "BUILD_REPOSITORY_PROVIDER", "BUILD_REASON", "BUILD_REPOSITORY_NAME"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && this.env.BUILD_REASON == "PullRequest";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSTS.prototype, "pullRequestID", {
        get: function () {
            var match = this.env.BUILD_SOURCEBRANCH.match(/refs\/pull\/([0-9]+)\/merge/);
            if (match && match.length > 1) {
                return match[1];
            }
            return "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VSTS.prototype, "repoSlug", {
        get: function () {
            return this.env.BUILD_REPOSITORY_NAME;
        },
        enumerable: false,
        configurable: true
    });
    return VSTS;
}());
exports.VSTS = VSTS;
//# sourceMappingURL=VSTS.js.map