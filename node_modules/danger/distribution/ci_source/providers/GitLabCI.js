"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitLabCI = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
var GitLabCI = /** @class */ (function () {
    function GitLabCI(env) {
        this.env = env;
    }
    Object.defineProperty(GitLabCI.prototype, "name", {
        get: function () {
            return "GitLab CI";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GitLabCI.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["GITLAB_CI"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GitLabCI.prototype, "isPR", {
        get: function () {
            var mustHave = ["CI_MERGE_REQUEST_IID", "CI_PROJECT_PATH"];
            var mustBeInts = ["CI_MERGE_REQUEST_IID"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GitLabCI.prototype, "pullRequestID", {
        get: function () {
            return this.env.CI_MERGE_REQUEST_IID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GitLabCI.prototype, "repoSlug", {
        get: function () {
            return this.env.CI_MERGE_REQUEST_PROJECT_PATH || this.env.CI_PROJECT_PATH;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GitLabCI.prototype, "commitHash", {
        get: function () {
            return this.env.CI_COMMIT_SHA;
        },
        enumerable: false,
        configurable: true
    });
    return GitLabCI;
}());
exports.GitLabCI = GitLabCI;
// See https://docs.gitlab.com/ee/ci/variables/predefined_variables.html
//# sourceMappingURL=GitLabCI.js.map