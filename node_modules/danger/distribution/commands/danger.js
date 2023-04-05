#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var chalk_1 = __importDefault(require("chalk"));
var package_json_1 = require("../../package.json");
process.on("unhandledRejection", function (reason, _p) {
    console.log(chalk_1.default.red("Error: "), reason);
    process.exitCode = 1;
});
// Provides the root node to the command-line architecture
commander_1.default
    .version(package_json_1.version)
    .command("init", "Helps you get started with Danger")
    .command("ci", "Runs Danger on CI")
    .command("process", "Like `ci` but lets another process handle evaluating a Dangerfile")
    .command("pr", "Runs your local Dangerfile against an existing GitHub PR. Will not post on the PR")
    .command("runner", "Runs a dangerfile against a DSL passed in via STDIN [You probably don't need this]")
    .command("local", "Runs danger standalone on a repo, useful for git hooks")
    .command("reset-status", "Set the status of a PR to pending when a new CI run starts")
    .on("--help", function () {
    console.log("\n");
    console.log("  Docs:");
    console.log("");
    console.log("    -> Getting started:");
    console.log("       http://danger.systems/js/guides/getting_started.html");
    console.log("");
    console.log("    -> The Dangerfile");
    console.log("       http://danger.systems/js/guides/the_dangerfile.html");
    console.log("");
    console.log("    -> API Reference");
    console.log("       http://danger.systems/js/reference.html");
});
commander_1.default.parse(process.argv);
//# sourceMappingURL=danger.js.map