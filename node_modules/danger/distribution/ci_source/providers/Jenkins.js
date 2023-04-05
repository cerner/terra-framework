"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jenkins = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
var pullRequestParser_1 = require("../../platforms/pullRequestParser");
// https://jenkins.io/
// https://wiki.jenkins.io/display/JENKINS/Building+a+software+project#Buildingasoftwareproject-belowJenkinsSetEnvironmentVariables
/**
 * ### CI Setup
 * Ah Jenkins, so many memories. So, if you're using Jenkins, you're hosting your own environment.
 *
 * ### GitHub
 * You will want to be using the
 * [GitHub pull request builder plugin](https://wiki.jenkins.io/display/JENKINS/GitHub+pull+request+builder+plugin)
 * in order to ensure that you have the build environment set up for PR integration.
 *
 * ### GitLab
 * You will want to be using the [GitLab Plugin](https://github.com/jenkinsci/gitlab-plugin)
 * in order to ensure that you have the build environment set up for MR integration.
 *
 * ### BitBucket Server
 * If using Bitbucket Server, ensure you are using Multibranch Pipelines or Organization Folders.
 * Danger will respect the `CHANGE_URL` and `CHANGE_ID` environment variables.
 *
 * With that set up, you can edit your job to add `[run_command]` at the build action.
 *
 * ### Pipeline
 * If you're using [pipelines](https://jenkins.io/solutions/pipeline/) you should be using the
 * [GitHub branch source plugin](https://wiki.jenkins.io/display/JENKINS/GitHub+Branch+Source+Plugin) for easy setup and handling of PRs.
 *
 * After you've set up the plugin, add a `sh '[run_command]'` line in your pipeline script and make sure that build PRs is enabled.
 *
 * ## Token Setup
 *
 * ### GitHub
 * As you own the machine, it's up to you to add the environment variable for the code review platform.
 */
var Jenkins = /** @class */ (function () {
    function Jenkins(env) {
        this.env = env;
    }
    Jenkins.prototype.isJenkins = function () {
        return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["JENKINS_URL"]);
    };
    Object.defineProperty(Jenkins.prototype, "name", {
        get: function () {
            return "Jenkins";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jenkins.prototype, "isCI", {
        get: function () {
            return this.isJenkins();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jenkins.prototype, "isPR", {
        get: function () {
            var isGitHubPR = (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["ghprbPullId", "ghprbGhRepository"]) &&
                (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, ["ghprbPullId"]);
            var isGitLabMR = (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["gitlabMergeRequestIid", "gitlabMergeRequestId"]);
            var isMultiBranchPR = (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CHANGE_ID", "CHANGE_URL"]) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, ["CHANGE_ID"]);
            return this.isJenkins() && (isMultiBranchPR || isGitHubPR || isGitLabMR);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jenkins.prototype, "pullRequestID", {
        get: function () {
            return this.env.ghprbPullId || this.env.gitlabMergeRequestIid || this.env.CHANGE_ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jenkins.prototype, "repoSlug", {
        get: function () {
            if (this.env.CHANGE_URL) {
                var result = (0, pullRequestParser_1.pullRequestParser)(this.env.CHANGE_URL);
                if (!result) {
                    throw new Error("Unable to get repository path from $CHANGE_URL");
                }
                return result.repo;
            }
            return this.env.ghprbGhRepository || new URL(this.env.GIT_URL_1).pathname.replace(/^\/(.*)\.git$/, "$1");
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jenkins.prototype, "ciRunURL", {
        get: function () {
            return process.env.RUN_DISPLAY_URL || process.env.BUILD_URL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jenkins.prototype, "commitHash", {
        get: function () {
            return this.env.GIT_COMMIT;
        },
        enumerable: false,
        configurable: true
    });
    return Jenkins;
}());
exports.Jenkins = Jenkins;
//# sourceMappingURL=Jenkins.js.map