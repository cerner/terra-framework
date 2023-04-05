"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bitrise = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *  <!-- JS --!>
 *  You need to edit your `bitrise.yml` (in version control, or directly from UI) to include `yarn danger ci`.
 *
 *  You can set `is_always_run: true` to ensure that it reports even if previous steps fails
 *
 *   ```yaml
 *     workflows:
 *       <your_workflow_name>:
 *         steps:
 *         - yarn:
 *           inputs:
 *           - args: ci
 *           - command: danger
 *           is_always_run: true
 *   ```
 *
 *  Adding this to your `bitrise.yml` allows Danger to fail your build, both on the Bitrise website and within your Pull Request.
 *  With that set up, you can edit your job to add `yarn danger ci` at the build action.
 *
 * <!-- !JS --!>
 * <!-- Swift --!>
 *
 * No instructions yet, but basically:
 *
 * - Install Danger JS globally
 * - Run `swift build`
 * - Run `swift run danger-swift ci`
 *
 * <!-- !Swift --!>
 *
 *  ### Token Setup
 *
 *  You need to add the platform environment variables, to do this,
 *  go to your repo's secrets, which should look like: `https://www.bitrise.io/app/[app_id]#/workflow` and secrets tab.
 *
 *  You should make sure to check the case "Expose for Pull Requests?".
 */
var Bitrise = /** @class */ (function () {
    function Bitrise(env) {
        this.env = env;
    }
    Object.defineProperty(Bitrise.prototype, "name", {
        get: function () {
            return "Bitrise";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bitrise.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["BITRISE_IO"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bitrise.prototype, "isPR", {
        get: function () {
            var mustHave = ["BITRISEIO_GIT_REPOSITORY_OWNER", "BITRISEIO_GIT_REPOSITORY_SLUG"];
            var mustBeInts = ["BITRISE_PULL_REQUEST"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bitrise.prototype, "pullRequestID", {
        get: function () {
            return this.env.BITRISE_PULL_REQUEST;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bitrise.prototype, "repoSlug", {
        get: function () {
            return "".concat(this.env.BITRISEIO_GIT_REPOSITORY_OWNER, "/").concat(this.env.BITRISEIO_GIT_REPOSITORY_SLUG);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bitrise.prototype, "ciRunURL", {
        get: function () {
            return this.env.BITRISE_BUILD_URL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bitrise.prototype, "commitHash", {
        get: function () {
            return this.env.BITRISE_GIT_COMMIT;
        },
        enumerable: false,
        configurable: true
    });
    return Bitrise;
}());
exports.Bitrise = Bitrise;
// See https://devcenter.bitrise.io/builds/available-environment-variables/
//# sourceMappingURL=Bitrise.js.map