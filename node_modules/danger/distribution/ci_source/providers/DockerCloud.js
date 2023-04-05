"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DockerCloud = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 *
 * ### CI Setup
 *
 * You'll want to add danger to your existing `Dockerfile.test` (or whatever you
 * have chosen as your `sut` Dockerfile.)
 *
 * ```sh
 * ...
 *
 * CMD [run_command_split]
 * ```
 *
 * ### Token Setup
 *
 * #### GitHub
 *
 * Your `DANGER_GITHUB_API_TOKEN` will need to be exposed to the `sut` part of your
 * `docker-compose.yml`.  This looks similar to:
 *
 * ```
 * sut:
 *   ...
 *   environment:
 *     - DANGER_GITHUB_API_TOKEN=[my_token]
 * ```
 */
var DockerCloud = /** @class */ (function () {
    function DockerCloud(env) {
        this.env = env;
    }
    Object.defineProperty(DockerCloud.prototype, "name", {
        get: function () {
            return "Docker Cloud";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerCloud.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["DOCKER_REPO"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerCloud.prototype, "isPR", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["PULL_REQUEST_URL"])) {
                return true;
            }
            var mustHave = ["SOURCE_REPOSITORY_URL", "PULL_REQUEST_URL"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave);
        },
        enumerable: false,
        configurable: true
    });
    DockerCloud.prototype._prParseURL = function () {
        var prUrl = this.env.PULL_REQUEST_URL || "";
        var splitSlug = prUrl.split("/");
        if (splitSlug.length === 7) {
            var owner = splitSlug[3];
            var reponame = splitSlug[4];
            var id = splitSlug[6];
            return { owner: owner, reponame: reponame, id: id };
        }
        return {};
    };
    Object.defineProperty(DockerCloud.prototype, "pullRequestID", {
        get: function () {
            var id = this._prParseURL().id;
            return id || "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerCloud.prototype, "repoSlug", {
        get: function () {
            var _a = this._prParseURL(), owner = _a.owner, reponame = _a.reponame;
            return owner && reponame ? "".concat(owner, "/").concat(reponame) : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DockerCloud.prototype, "repoURL", {
        get: function () {
            return this.env.SOURCE_REPOSITORY_URL;
        },
        enumerable: false,
        configurable: true
    });
    return DockerCloud;
}());
exports.DockerCloud = DockerCloud;
//# sourceMappingURL=DockerCloud.js.map