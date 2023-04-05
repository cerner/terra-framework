#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var sharedDangerfileArgs_1 = __importDefault(require("./utils/sharedDangerfileArgs"));
var runner_1 = require("./ci/runner");
var LocalGit_1 = require("../platforms/LocalGit");
var Fake_1 = require("../ci_source/providers/Fake");
commander_1.default
    .usage("[options]")
    .description("Runs danger without PR metadata, useful for git hooks.")
    .option("-s, --staging", "Just use staged changes.")
    .option("-b, --base [branch_name]", "Use a different base branch", "master")
    .option("-j, --outputJSON", "Outputs the resulting JSON to STDOUT")
    .allowUnknownOption(true);
(0, sharedDangerfileArgs_1.default)(commander_1.default).parse(process.argv);
var app = commander_1.default;
var base = app.base;
var localPlatform = new LocalGit_1.LocalGit({ base: base, staging: app.staging });
localPlatform.validateThereAreChanges().then(function (changes) {
    if (changes) {
        var fakeSource = new Fake_1.FakeCI(process.env);
        // By setting the custom env var we can be sure that the runner doesn't
        // try to find the CI danger is running on and use that.
        (0, runner_1.runRunner)(app, { source: fakeSource, platform: localPlatform, additionalEnvVars: { DANGER_LOCAL_NO_CI: "yep" } });
    }
    else {
        console.log("No git changes detected between head and ".concat(base, "."));
    }
});
//# sourceMappingURL=danger-local.js.map