"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlatformForEnv = void 0;
var GitHub_1 = require("./GitHub");
var GitHubAPI_1 = require("./github/GitHubAPI");
var BitBucketServer_1 = require("./BitBucketServer");
var BitBucketServerAPI_1 = require("./bitbucket_server/BitBucketServerAPI");
var BitBucketCloud_1 = require("./BitBucketCloud");
var BitBucketCloudAPI_1 = require("./bitbucket_cloud/BitBucketCloudAPI");
var GitLabAPI_1 = __importStar(require("./gitlab/GitLabAPI"));
var GitLab_1 = __importDefault(require("./GitLab"));
var chalk_1 = __importDefault(require("chalk"));
var FakePlatform_1 = require("./FakePlatform");
/**
 * Pulls out a platform for Danger to communicate on based on the environment
 * @param {Env} env The environment.
 * @param {CISource} source The existing source, to ensure they can run against each other
 * @returns {Platform} returns a platform if it can be supported
 */
function getPlatformForEnv(env, source) {
    // BitBucket Server
    if (env["DANGER_BITBUCKETSERVER_HOST"] || env["DANGER_PR_PLATFORM"] === BitBucketServer_1.BitBucketServer.name) {
        var api = new BitBucketServerAPI_1.BitBucketServerAPI({
            pullRequestID: source.pullRequestID,
            repoSlug: source.repoSlug,
        }, (0, BitBucketServerAPI_1.bitbucketServerRepoCredentialsFromEnv)(env));
        return new BitBucketServer_1.BitBucketServer(api);
    }
    // Bitbucket Cloud
    if (env["DANGER_BITBUCKETCLOUD_OAUTH_KEY"] ||
        env["DANGER_BITBUCKETCLOUD_USERNAME"] ||
        env["DANGER_BITBUCKETCLOUD_REPO_ACCESSTOKEN"] ||
        env["DANGER_PR_PLATFORM"] === BitBucketCloud_1.BitBucketCloud.name) {
        var api = new BitBucketCloudAPI_1.BitBucketCloudAPI({
            pullRequestID: source.pullRequestID,
            repoSlug: source.repoSlug,
        }, (0, BitBucketCloudAPI_1.bitbucketCloudCredentialsFromEnv)(env));
        return new BitBucketCloud_1.BitBucketCloud(api);
    }
    // GitLab
    if (env["DANGER_GITLAB_API_TOKEN"] ||
        env["DANGER_GITLAB_API_OAUTH_TOKEN"] ||
        env["DANGER_PR_PLATFORM"] === GitLab_1.default.name) {
        var api = new GitLabAPI_1.default({
            pullRequestID: source.pullRequestID,
            repoSlug: source.repoSlug,
        }, (0, GitLabAPI_1.getGitLabAPICredentialsFromEnv)(env));
        return new GitLab_1.default(api);
    }
    // GitHub Platform
    var ghToken = env["DANGER_GITHUB_API_TOKEN"] || env["GITHUB_TOKEN"];
    // They need to set the token up for GitHub actions to work
    if (env["GITHUB_EVENT_NAME"] && !ghToken) {
        console.error("You need to add GITHUB_TOKEN to your Danger action in the workflow:\n  \n    - name: Danger JS\n      uses: danger/danger-js@X.Y.Z\n      ".concat(chalk_1.default.green("env:\n        GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}"), "\n    "));
    }
    if (ghToken || env["DANGER_PR_PLATFORM"] === GitHub_1.GitHub.name) {
        if (!ghToken) {
            console.log("You don't have a DANGER_GITHUB_API_TOKEN set up, this is optional, but TBH, you want to do this");
            console.log("Check out: http://danger.systems/js/guides/the_dangerfile.html#working-on-your-dangerfile");
        }
        var api = new GitHubAPI_1.GitHubAPI(source, ghToken);
        return (0, GitHub_1.GitHub)(api);
    }
    // Support automatically returning a fake platform if you pass a Fake CI
    if (source.name === "Fake Testing CI") {
        return new FakePlatform_1.FakePlatform();
    }
    console.error("The DANGER_GITHUB_API_TOKEN/DANGER_BITBUCKETSERVER_HOST/DANGER_GITLAB_API_TOKEN environmental variable is missing");
    console.error("Without an api token, danger will be unable to comment on a PR");
    throw new Error("Cannot use authenticated API requests.");
}
exports.getPlatformForEnv = getPlatformForEnv;
//# sourceMappingURL=platform.js.map