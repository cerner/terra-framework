"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screwdriver = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to your screwdriver.yaml:
 *
 * ```yml
 * jobs:
 *   danger:
 *     requires: [~pr, ~commit]
 *     steps:
 *       - setup: yarn install
 *       - danger: yarn danger ci
 *     secrets:
 *       - DANGER_GITHUB_API_TOKEN
 * ```
 *
 * ### Token Setup
 *
 * Add the `DANGER_GITHUB_API_TOKEN` to your pipeline env as a
 * [build secret](https://docs.screwdriver.cd/user-guide/configuration/secrets)
 */
var Screwdriver = /** @class */ (function () {
    function Screwdriver(env) {
        this.env = env;
    }
    Object.defineProperty(Screwdriver.prototype, "name", {
        get: function () {
            return "Screwdriver";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Screwdriver.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["SCREWDRIVER"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Screwdriver.prototype, "isPR", {
        get: function () {
            var mustHave = ["SCM_URL"];
            var mustBeInts = ["SD_PULL_REQUEST"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Screwdriver.prototype._parseRepoURL = function () {
        var repoURL = this.env.SCM_URL;
        var regexp = new RegExp("([/:])([^/]+/[^/.]+)(?:.git)?$");
        var matches = repoURL.match(regexp);
        return matches ? matches[2] : "";
    };
    Object.defineProperty(Screwdriver.prototype, "pullRequestID", {
        get: function () {
            return this.env.SD_PULL_REQUEST;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Screwdriver.prototype, "repoSlug", {
        get: function () {
            return this._parseRepoURL();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Screwdriver.prototype, "ciRunURL", {
        get: function () {
            return process.env.BUILDKITE_BUILD_URL;
        },
        enumerable: false,
        configurable: true
    });
    return Screwdriver;
}());
exports.Screwdriver = Screwdriver;
//# sourceMappingURL=Screwdriver.js.map