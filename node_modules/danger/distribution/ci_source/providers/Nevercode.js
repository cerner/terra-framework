"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nevercode = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * Nevercode.io CI Integration
 *
 * Environment Variables Documented: https://developer.nevercode.io/v1.0/docs/environment-variables-files
 *
 * Note: The company that runs Nevercode is migrating all customers
 *        to their new service Codemagic.io in Spring of 2021
 *        - billing is migrated through Customer Support
 *        - the CI Configuration is managed in your repo instead of in a web-dashboard.
 *
 * TODO @fbartho delete this integration when it's fully offline.
 */
var Nevercode = /** @class */ (function () {
    function Nevercode(env) {
        this.env = env;
    }
    Object.defineProperty(Nevercode.prototype, "name", {
        get: function () {
            return "Nevercode";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nevercode.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["NEVERCODE"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nevercode.prototype, "isPR", {
        get: function () {
            var mustHave = ["NEVERCODE_PULL_REQUEST", "NEVERCODE_REPO_SLUG"];
            var mustBeInts = ["NEVERCODE_GIT_PROVIDER_PULL_REQUEST", "NEVERCODE_PULL_REQUEST_NUMBER"];
            return ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) &&
                (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts) &&
                this.env.NEVERCODE_PULL_REQUEST == "true");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nevercode.prototype, "pullRequestID", {
        get: function () {
            return this.env.NEVERCODE_PULL_REQUEST_NUMBER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nevercode.prototype, "repoSlug", {
        get: function () {
            return this.env.NEVERCODE_REPO_SLUG;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Nevercode.prototype, "ciRunURL", {
        get: function () {
            return process.env.NEVERCODE_BUILD_URL;
        },
        enumerable: false,
        configurable: true
    });
    return Nevercode;
}());
exports.Nevercode = Nevercode;
//# sourceMappingURL=Nevercode.js.map