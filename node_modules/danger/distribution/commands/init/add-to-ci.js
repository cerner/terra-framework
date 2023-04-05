"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.unsure = exports.circle = exports.travis = void 0;
var interfaces_1 = require("./interfaces");
var travis = function (ui, state) { return __awaiter(void 0, void 0, void 0, function () {
    var travisLink, travisLink;
    return __generator(this, function (_a) {
        // https://travis-ci.org/artsy/eigen/settings
        if (state.repoSlug) {
            travisLink = ui.link("Travis Settings for ".concat(state.repoSlug), "https://travis-ci.org/".concat(state.repoSlug, "/settings"));
            ui.say("In order to add the environment variable, go to: " + travisLink);
        }
        else {
            travisLink = ui.link("Travis Account profile", "https://travis-ci.org/profile/");
            ui.say("In order to add the environment variable, go to: " + travisLink);
            ui.say("And find the project for this repo, click the settings cog.");
        }
        ui.say("The variable name is " +
            (0, interfaces_1.highlight)("DANGER_GITHUB_API_TOKEN") +
            " and the value is the GitHub Personal Access Token you just created.");
        if (state.isAnOSSRepo) {
            ui.say('As you have an OSS repo - make sure to have "Display value in build log" enabled.');
        }
        ui.say("Next, you need to edit your `.travis.yml` to include `yarn danger ci`. If you already have");
        ui.say("a `script:` section then we recommend adding this command at the end of the script step: `- yarn danger ci`.\n");
        ui.say("Otherwise, add a `before_script` step to the root of the `.travis.yml` with `yarn danger ci`\n");
        ui.say(" ```yaml");
        ui.say("   before_script:");
        ui.say("     - yarn danger ci");
        ui.say(" ```\n");
        ui.say("Adding this to your `.travis.yml` allows Danger to fail your build.");
        ui.say("With that set up, you can edit your job to add `yarn danger ci` at the build action.");
        return [2 /*return*/];
    });
}); };
exports.travis = travis;
var circle = function (ui, state) { return __awaiter(void 0, void 0, void 0, function () {
    var repo, circleSettings_1, circleSettings;
    return __generator(this, function (_a) {
        repo = state.repoSlug || "[Your_Repo]";
        if (state.isAnOSSRepo) {
            ui.say("Before we start, it's important to be up-front. CircleCI only really has one option to support running Danger");
            ui.say("for forks on OSS repos. It is quite a drastic option, and I want to let you know the best place to understand");
            ui.say("the ramifications of turning on a setting I'm about to advise.\n");
            ui.link("Circle CI: Fork PR builds", "https://circleci.com/docs/fork-pr-builds");
            ui.say("TLDR: If you have anything other than Danger config settings in CircleCI, then you should not turn on this setting.");
            ui.say("I'll give you a minute to read it...");
            ui.waitForReturn();
            ui.say("On danger/danger we turn on " +
                (0, interfaces_1.highlight)("Permissive building of fork pull requests") +
                " this exposes the token to Danger");
            circleSettings_1 = ui.link("Circle Settings", "https://circleci.com/gh/".concat(repo, "/edit#advanced-settings"));
            ui.say("You can find this setting at: ".concat(circleSettings_1, "."));
            ui.say("I'll hold...");
            ui.waitForReturn();
        }
        circleSettings = ui.link("Circle Env Settings", "https://circleci.com/gh/".concat(repo, "/edit#env-vars"));
        ui.say("In order to expose the environment variable, go to: ".concat(circleSettings));
        ui.say("The name is " + (0, interfaces_1.highlight)("DANGER_GITHUB_API_TOKEN") + " and the value is the GitHub Personal Access Token.");
        ui.say("With that set up, you can you add `yarn danger ci` to your `circle.yml`. If you override the default");
        ui.say("`test:` section, then add danger as an extra step. \nOtherwise add a new `pre` section to the test:\n");
        ui.say("  ``` ruby");
        ui.say("  test:");
        ui.say("    override:");
        ui.say("        - yarn danger ci");
        ui.say("  ```");
        return [2 /*return*/];
    });
}); };
exports.circle = circle;
var unsure = function (ui, _state) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        ui.say("You need to expose a token called " +
            (0, interfaces_1.highlight)("DANGER_GITHUB_API_TOKEN") +
            " and the value is the GitHub Personal Access Token.");
        ui.say("Depending on the CI system, this may need to be done on the machine (in the " +
            (0, interfaces_1.highlight)("~/.bashprofile") +
            ") or in a web UI somewhere.");
        ui.say("We have a guide for all supported CI systems on danger.systems:");
        ui.say(ui.link("Danger Systems - Getting Started", "http://danger.systems/js/guides/getting_started.html#setting-up-danger-to-run-on-your-ci"));
        return [2 /*return*/];
    });
}); };
exports.unsure = unsure;
//# sourceMappingURL=add-to-ci.js.map