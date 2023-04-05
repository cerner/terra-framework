"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concourse = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * Concourse CI Integration
 *
 * https://concourse-ci.org/
 *
 *  ### CI Setup
 *
 *  With Concourse, you run the docker images yourself, so you will want to add `[run_command]` within one of your build jobs.
 *
 *   ``` shell
 *    build:
 *      image: golang
 *        commands:
 *          - ...
 *          - [run_command]
 *   ```
 *
 *  ### Environment Variable Setup
 *
 *  As this is self-hosted, you will need to add the `CONCOURSE` environment variable `export CONCOURSE=true` to your build environment,
 *  as well as setting environment variables for `PULL_REQUEST_ID` and `REPO_SLUG`. Assuming you are using the github pull request resource
 *  https://github.com/jtarchie/github-pullrequest-resource the id of the PR can be accessed from `git config --get pullrequest.id`.
 *
 *  ### Token Setup
 *
 *  Once again as this is self-hosted, you will need to add `DANGER_GITHUB_API_TOKEN` environment variable to the build environment.
 *  The suggested method of storing the token is within the vault - https://concourse-ci.org/creds.html
 */
var Concourse = /** @class */ (function () {
    function Concourse(env) {
        this.env = env;
    }
    Object.defineProperty(Concourse.prototype, "name", {
        get: function () {
            return "Concourse";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Concourse.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CONCOURSE"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Concourse.prototype, "isPR", {
        get: function () {
            var mustHave = ["PULL_REQUEST_ID", "REPO_SLUG"];
            var mustBeInts = ["PULL_REQUEST_ID"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Concourse.prototype, "pullRequestID", {
        get: function () {
            return this.env.PULL_REQUEST_ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Concourse.prototype, "repoSlug", {
        get: function () {
            return this.env.REPO_SLUG;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Concourse.prototype, "ciRunURL", {
        get: function () {
            return this.env.BUILD_URL;
        },
        enumerable: false,
        configurable: true
    });
    return Concourse;
}());
exports.Concourse = Concourse;
//# sourceMappingURL=Concourse.js.map