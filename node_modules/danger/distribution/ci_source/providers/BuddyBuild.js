"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuddyBuild = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * Buddybuild has an integration for Danger JS already built-in.
 *
 * ### Token Setup
 *
 * Login to buddybuild and select your app. Go to your *App Settings* and
 * in the *Build Settings* menu on the left, choose *Environment Variables*.
 *
 * #### GitHub
 *
 * Add the `DANGER_GITHUB_API_TOKEN` to your build user's ENV.
 *
 */
var BuddyBuild = /** @class */ (function () {
    function BuddyBuild(env) {
        this.env = env;
    }
    Object.defineProperty(BuddyBuild.prototype, "name", {
        get: function () {
            return "buddybuild";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuddyBuild.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["BUDDYBUILD_BUILD_ID"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuddyBuild.prototype, "isPR", {
        get: function () {
            var mustHave = ["BUDDYBUILD_PULL_REQUEST", "BUDDYBUILD_REPO_SLUG"];
            var mustBeInts = ["BUDDYBUILD_PULL_REQUEST"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuddyBuild.prototype, "pullRequestID", {
        get: function () {
            return this.env.BUDDYBUILD_PULL_REQUEST;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BuddyBuild.prototype, "repoSlug", {
        get: function () {
            return this.env.BUDDYBUILD_REPO_SLUG;
        },
        enumerable: false,
        configurable: true
    });
    return BuddyBuild;
}());
exports.BuddyBuild = BuddyBuild;
//# sourceMappingURL=BuddyBuild.js.map