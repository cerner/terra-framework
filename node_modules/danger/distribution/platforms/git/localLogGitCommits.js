"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logGitCommits = void 0;
var child_process_1 = require("child_process");
var delimiter = "\t";
var fieldMap = {
    hash: "%H",
    treeHash: "%T",
    abbrevParentHashes: "%P",
    authorName: "%an",
    authorEmail: "%ae",
    authorDate: "%ai",
    committerName: "%cn",
    committerEmail: "%ce",
    committerDate: "%cd",
    subject: "%s",
};
var createCommandArguments = function (options) {
    // Start constructing command
    var command = ["log", "-l0"];
    command.push("-n ".concat(options.number));
    // Start of custom format
    var prettyArgument = "--pretty=@begin@";
    // Iterating through the fields and adding them to the custom format
    if (options.fields) {
        options.fields.forEach(function (field) {
            prettyArgument += delimiter + fieldMap[field];
        });
    }
    // Close custom format
    prettyArgument += "@end@";
    command.push(prettyArgument);
    // Append branch (revision range) if specified
    if (options.branch) {
        command.push(options.branch);
    }
    return command;
};
var parseCommits = function (commits, fields) {
    return commits.map(function (rawCommit) {
        var parts = rawCommit.split("@end@");
        var commit = parts[0].split(delimiter);
        // Remove the first empty char from the array
        commit.shift();
        var parsed = {};
        commit.forEach(function (commitField, index) {
            if (!fields[index]) {
                return;
            }
            parsed[fields[index]] = commitField;
        });
        return parsed;
    });
};
var logGitCommits = function (options) {
    var commandArguments = createCommandArguments(options);
    var stdout = (0, child_process_1.execFileSync)("git", commandArguments).toString();
    var commits = stdout.split("@begin@");
    if (commits[0] === "") {
        commits.shift();
    }
    return parseCommits(commits, options.fields);
};
exports.logGitCommits = logGitCommits;
//# sourceMappingURL=localLogGitCommits.js.map