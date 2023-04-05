"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = void 0;
var ci_source_helpers_1 = require("../ci_source_helpers");
/**
 *  ### CI Setup
 *
 *  For setting up Circle CI, we recommend turning on "Only Build pull requests." in "Advanced Setting." Without this enabled,
 *  it is _really_ tricky for Danger to know whether you are in a pull request or not, as the environment metadata
 *  isn't reliable.
 *
 * <!-- JS --!>
 *  With that set up, you can you add `yarn danger ci` to your `circle.yml`. If you override the default
 *  `test:` section, then add it as an extra step to the list.
 *
 *  ```yml
 *   - run:
 *       name: Danger
 *       command: yarn danger ci
 *  ```
 * <!-- !JS --!>
 * <!-- Swift --!>
 *
 *  Add some build steps to make Danger Swift work:
 *
 *  ```yml
 *   - run:
 *       name: Installing Danger JS
 *       command: npm install -g danger
 *   - run:
 *       name: Compiling Danger
 *       command: swift build
 *   - run:
 *       name: Running Danger Swift
 *       command: swift run danger-swift ci
 *  ```
 *
 * We'd also recommend adding both `.build` and `~/.danger-swift` to your build cache too.
 *
 * <!-- !Swift --!>
 *
 *  ### Token Setup
 *
 *  There is no difference here for OSS vs Closed, add your `DANGER_GITHUB_API_TOKEN` to the Environment variable settings page.
 *
 */
var Circle = /** @class */ (function () {
    function Circle(env) {
        this.env = env;
    }
    Object.defineProperty(Circle.prototype, "name", {
        get: function () {
            return "Circle CI";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "isCI", {
        get: function () {
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CIRCLE_BUILD_NUM"]);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "isPR", {
        get: function () {
            if ((0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CI_PULL_REQUEST"]) || (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, ["CIRCLE_PULL_REQUEST"])) {
                return true;
            }
            var mustHave = ["CIRCLE_CI_API_TOKEN", "CIRCLE_PROJECT_USERNAME", "CIRCLE_PROJECT_REPONAME", "CIRCLE_BUILD_NUM"];
            return (0, ci_source_helpers_1.ensureEnvKeysExist)(this.env, mustHave) && (0, ci_source_helpers_1.ensureEnvKeysAreInt)(this.env, ["CIRCLE_PR_NUMBER"]);
        },
        enumerable: false,
        configurable: true
    });
    Circle.prototype._prParseURL = function () {
        var prUrl = this.env.CI_PULL_REQUEST || this.env.CIRCLE_PULL_REQUEST || "";
        var splitSlug = prUrl.split("/");
        if (splitSlug.length === 7) {
            var owner = splitSlug[3];
            var reponame = splitSlug[4];
            var id = splitSlug[6];
            return { owner: owner, reponame: reponame, id: id };
        }
        return {};
    };
    Object.defineProperty(Circle.prototype, "pullRequestID", {
        get: function () {
            if (this.env.CIRCLE_PR_NUMBER) {
                return this.env.CIRCLE_PR_NUMBER;
            }
            else {
                var id = this._prParseURL().id;
                return id || "";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "repoSlug", {
        get: function () {
            var _a = this._prParseURL(), owner = _a.owner, reponame = _a.reponame;
            return owner && reponame ? "".concat(owner, "/").concat(reponame) : "";
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "repoURL", {
        get: function () {
            return this.env.CIRCLE_REPOSITORY_URL;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "ciRunURL", {
        get: function () {
            return this.env["CIRCLE_BUILD_URL"];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "commitHash", {
        get: function () {
            return this.env.CIRCLE_SHA1;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
exports.Circle = Circle;
//# sourceMappingURL=Circle.js.map