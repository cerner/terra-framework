"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamCity = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
var pullRequestParser_1 = require("../../platforms/pullRequestParser");
/**
 *
 * ### CI Setup
 *
 * You need to add `DANGER_GITHUB_API_TOKEN` to the ENV for the build or machine manually.
 * Then you also need to figure out how to provide the URL for the pull request in `PULL_REQUEST_URL` ENV.
 *
 * TeamCity provides the `%teamcity.build.branch%` variable that contains something like `pull/123` that you can use:
 * ```sh
 * PULL_REQUEST_URL='https://github.com/dager/danger-js/%teamcity.build.branch%'
 * ```
 *
 */
var TeamCity = /** @class */ (function () {
    function TeamCity(env) {
        this.env = env;
    }
    Object.defineProperty(TeamCity.prototype, "name", {
        get: function () {
            return "TeamCity";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamCity.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["TEAMCITY_VERSION"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamCity.prototype, "isPR", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["PULL_REQUEST_URL"])) {
                return true;
            }
            var mustHave = ["PULL_REQUEST_URL"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamCity.prototype, "pullRequestID", {
        get: function () {
            var parts = (0, pullRequestParser_1.pullRequestParser)(this.env.PULL_REQUEST_URL || "");
            if (parts === null) {
                return "";
            }
            return parts.pullRequestNumber;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TeamCity.prototype, "repoSlug", {
        get: function () {
            var parts = (0, pullRequestParser_1.pullRequestParser)(this.env.PULL_REQUEST_URL || "");
            if (parts === null) {
                return "";
            }
            return parts.repo;
        },
        enumerable: false,
        configurable: true
    });
    return TeamCity;
}());
exports.TeamCity = TeamCity;
//# sourceMappingURL=TeamCity.js.map