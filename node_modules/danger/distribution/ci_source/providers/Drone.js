"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drone = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 *
 *  ### CI Setup
 *
 *  With Drone, you run the docker images yourself, so you will want to add `[run_command]` at the end of
 *  your `.drone.yml`.
 *
 *   ``` shell
 *    build:
 *      image: golang
 *        commands:
 *          - ...
 *          - [run_command]
 *   ```
 *
 *  ### Token Setup
 *
 *  As this is self-hosted, you will need to add the `DANGER_GITHUB_API_TOKEN` to your build user's ENV. The alternative
 *  is to pass in the token as a prefix to the command `DANGER_GITHUB_API_TOKEN="123" yarn danger ci`.
 */
var Drone = /** @class */ (function () {
    function Drone(env) {
        this.env = env;
    }
    Object.defineProperty(Drone.prototype, "name", {
        get: function () {
            return "Drone";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["DRONE"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "isPR", {
        get: function () {
            var mustHave = ["DRONE", "DRONE_PULL_REQUEST", "DRONE_REPO"];
            var mustBeInts = ["DRONE_PULL_REQUEST"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, mustBeInts);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "pullRequestID", {
        get: function () {
            return this.env.DRONE_PULL_REQUEST;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Drone.prototype, "repoSlug", {
        get: function () {
            return this.env.DRONE_REPO;
        },
        enumerable: false,
        configurable: true
    });
    return Drone;
}());
exports.Drone = Drone;
//# sourceMappingURL=Drone.js.map