"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Surf = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 *  ### CI Setup
 *
 *  You want to add `[run_command]` to your `build.sh` file to run  Danger at the
 *  end of your build.
 *
 *  ### Token Setup
 *
 *  As this is self-hosted, you will need to add the `DANGER_GITHUB_API_TOKEN` to your build user's ENV. The alternative
 *  is to pass in the token as a prefix to the command `DANGER_GITHUB_API_TOKEN="123" [run_command]`.
 */
var Surf = /** @class */ (function () {
    function Surf(env) {
        this.env = env;
    }
    Object.defineProperty(Surf.prototype, "name", {
        get: function () {
            return "surf-build";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Surf.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["SURF_REPO", "SURF_NWO"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Surf.prototype, "isPR", {
        get: function () {
            return this.isCI;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Surf.prototype, "pullRequestID", {
        get: function () {
            var key = "SURF_PR_NUM";
            return (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, [key]) ? this.env[key] : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Surf.prototype, "repoSlug", {
        get: function () {
            return this.env["SURF_NWO"];
        },
        enumerable: false,
        configurable: true
    });
    return Surf;
}());
exports.Surf = Surf;
//# sourceMappingURL=Surf.js.map