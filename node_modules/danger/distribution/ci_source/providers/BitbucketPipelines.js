"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitbucketPipelines = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to your `bitbucket-pipelines.yml`.
 * For improving the performance, you may need to cache `node_modules`.
 *
 * ```yml
 * image: node:10.15.0
 * pipelines:
 *   pull-requests:
 *     "**":
 *       - step:
 *           caches:
 *             - node
 *           script:
 *             - export LANG="C.UTF-8"
 *             - yarn install
 *             - yarn danger ci
 * definitions:
 *   caches:
 *     node: node_modules
 * ```
 *
 * ### Token Setup
 *
 * You can add `DANGER_BITBUCKETCLOUD_USERNAME` and `DANGER_BITBUCKETCLOUD_PASSWORD`
 * or add `DANGER_BITBUCKETCLOUD_OAUTH_KEY` and `DANGER_BITBUCKETCLOUD_OAUTH_SECRET`
 * or add `DANGER_BITBUCKETCLOUD_REPO_ACCESSTOKEN`
 * -
 */
var BitbucketPipelines = /** @class */ (function () {
    function BitbucketPipelines(env) {
        this.env = env;
    }
    Object.defineProperty(BitbucketPipelines.prototype, "name", {
        get: function () {
            return "bitbucketPipelines";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitbucketPipelines.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["BITBUCKET_BUILD_NUMBER"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitbucketPipelines.prototype, "isPR", {
        get: function () {
            var mustHave = ["BITBUCKET_GIT_HTTP_ORIGIN", "BITBUCKET_REPO_OWNER", "BITBUCKET_REPO_SLUG"];
            var mustBeInts = ["BITBUCKET_PR_ID"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitbucketPipelines.prototype, "pullRequestID", {
        get: function () {
            return this.env.BITBUCKET_PR_ID;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitbucketPipelines.prototype, "repoSlug", {
        get: function () {
            return "".concat(this.env.BITBUCKET_REPO_FULL_NAME);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BitbucketPipelines.prototype, "repoURL", {
        get: function () {
            return this.env.BITBUCKET_GIT_HTTP_ORIGIN;
        },
        enumerable: false,
        configurable: true
    });
    return BitbucketPipelines;
}());
exports.BitbucketPipelines = BitbucketPipelines;
//# sourceMappingURL=BitbucketPipelines.js.map