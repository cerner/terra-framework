"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bamboo = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 * ### CI Setup
 *
 * Bamboo v6.9+ provides the pull request key as an environment variable if
 * the Bamboo branch is created from a pull request.
 * However, Bamboo plan branches created as a result of a new Git branch
 * (or manually) will not have this context added for Danger to utilise:
 *
 * - Go to Plan Configuration -> Branches -> Select:
 *   - Manually
 *   - [x] **When pull request is created**
 *   - When new branch in repository is created
 *   - When new branch in repository is created and matches expression
 *
 * If you would like Bamboo to process all Git branches but still have Danger
 * function on pull requests, a simple workaround is to create a separate Bamboo
 * build plan for pull requests.
 *
 * A more complicated method could be to create a script to consult your source
 * control's API for relevant pull requests based on a branch name, and then
 * invoke Danger for each by setting the `DANGER_MANUAL_CI`,
 * `DANGER_MANUAL_GH_REPO` and `DANGER_MANUAL_PR_NUM` environment variables.
 *
 * ### Token Setup
 *
 * Set the relevant environment variables for your source control system, such
 * as `DANGER_BITBUCKETSERVER_HOST`, `DANGER_BITBUCKETSERVER_USERNAME`, and
 * `DANGER_BITBUCKETSERVER_TOKEN`.
 */
var Bamboo = /** @class */ (function () {
    function Bamboo(env) {
        this.env = env;
    }
    Object.defineProperty(Bamboo.prototype, "name", {
        get: function () {
            return "Bamboo";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["bamboo_buildPlanName", "bamboo_planRepository_repositoryUrl"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "isPR", {
        get: function () {
            var mustHave = ["bamboo_repository_pr_key", "bamboo_planRepository_repositoryUrl", "bamboo_buildPlanName"];
            var mustBeInts = ["bamboo_repository_pr_key"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "pullRequestID", {
        get: function () {
            return "".concat(this.env.bamboo_repository_pr_key);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bamboo.prototype, "repoSlug", {
        get: function () {
            //ssh://git@bt01.cliplister.com:7999/clfr30/bc3_complete.git
            // bamboo_inject_slug="projects/CLFR30/repos/bc3_complete" \
            var _a = this.env.bamboo_planRepository_repositoryUrl.match(/\/(\w+)\/([a-zA-Z0-9_\.-]+(?:.git)?)$/), project = _a[1], slug = _a[2];
            return "projects/".concat(project, "/repos/").concat(slug.replace(/\.[^.]+$/, ""));
        },
        enumerable: false,
        configurable: true
    });
    return Bamboo;
}());
exports.Bamboo = Bamboo;
//# sourceMappingURL=Bamboo.js.map