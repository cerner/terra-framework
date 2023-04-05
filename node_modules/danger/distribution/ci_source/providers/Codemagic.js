"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Codemagic = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * Codemagic.io CI Integration
 *
 * Environment Variables Documented: https://docs.codemagic.io/building/environment-variables/
 * Notice a bug in the docs?: https://github.com/codemagic-ci-cd/codemagic-docs
 *
 * Need support/advice? https://slack.codemagic.io/
 */
var Codemagic = /** @class */ (function () {
    function Codemagic(env) {
        this.env = env;
    }
    Object.defineProperty(Codemagic.prototype, "name", {
        get: function () {
            return "Codemagic";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codemagic.prototype, "isCI", {
        get: function () {
            // Codemagic developer relations confirmed this is fine to use for this purpose
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["FCI_BUILD_ID"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codemagic.prototype, "isPR", {
        get: function () {
            var mustHave = ["FCI_PULL_REQUEST", "FCI_REPO_SLUG", "FCI_PROJECT_ID", "FCI_BUILD_ID"];
            var mustBeInts = ["BUILD_NUMBER", "FCI_PULL_REQUEST_NUMBER"];
            return ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) &&
                (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts) &&
                this.env.FCI_PULL_REQUEST === "true");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codemagic.prototype, "pullRequestID", {
        get: function () {
            return this.env.FCI_PULL_REQUEST_NUMBER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codemagic.prototype, "repoSlug", {
        get: function () {
            return this.env.FCI_REPO_SLUG;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Codemagic.prototype, "ciRunURL", {
        get: function () {
            var _a = process.env, FCI_BUILD_ID = _a.FCI_BUILD_ID, FCI_PROJECT_ID = _a.FCI_PROJECT_ID;
            return "https://codemagic.io/app/".concat(FCI_PROJECT_ID, "/build/").concat(FCI_BUILD_ID);
        },
        enumerable: false,
        configurable: true
    });
    return Codemagic;
}());
exports.Codemagic = Codemagic;
//# sourceMappingURL=Codemagic.js.map