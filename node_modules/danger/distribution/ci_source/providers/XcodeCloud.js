"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.XcodeCloud = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to the custom build scripts.
 * See the Xcode Cloud documentation [here](https://developer.apple.com/documentation/xcode/writing-custom-build-scripts)
 *
 * ### Token Setup
 *
 * Setup the acesss token (for github `DANGER_GITHUB_API_TOKEN`) environment variable for your workflow.
 * See the Xcode Cloud documentation [here](https://developer.apple.com/documentation/xcode/xcode-cloud-workflow-reference#Custom-Environment-Variables)
 */
var XcodeCloud = /** @class */ (function () {
    function XcodeCloud(env) {
        this.env = env;
    }
    Object.defineProperty(XcodeCloud.prototype, "name", {
        get: function () {
            return "Xcode Cloud";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XcodeCloud.prototype, "isCI", {
        get: function () {
            var mustHave = ["CI", "CI_XCODEBUILD_ACTION"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && this.env.CI == "TRUE";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XcodeCloud.prototype, "isPR", {
        get: function () {
            var mustHave = ["CI_PULL_REQUEST_NUMBER", "CI_PULL_REQUEST_TARGET_REPO"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XcodeCloud.prototype, "repoSlug", {
        get: function () {
            return this.env.CI_PULL_REQUEST_TARGET_REPO;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XcodeCloud.prototype, "pullRequestID", {
        get: function () {
            return this.env.CI_PULL_REQUEST_NUMBER;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XcodeCloud.prototype, "commitHash", {
        get: function () {
            return this.env.CI_COMMIT;
        },
        enumerable: false,
        configurable: true
    });
    return XcodeCloud;
}());
exports.XcodeCloud = XcodeCloud;
//# sourceMappingURL=XcodeCloud.js.map