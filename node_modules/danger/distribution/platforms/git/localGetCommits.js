"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localGetCommits = void 0;
var localLogGitCommits_1 = require("./localLogGitCommits");
var localGetCommits = function (base, head) {
    var options = {
        number: 100,
        branch: "".concat(base, "...").concat(head),
        fields: [
            "hash",
            "abbrevParentHashes",
            "treeHash",
            "authorName",
            "authorEmail",
            "authorDate",
            "committerName",
            "committerEmail",
            "committerDate",
            "subject",
        ],
    };
    var commits = (0, localLogGitCommits_1.logGitCommits)(options).map(function (commit) { return ({
        sha: commit.hash,
        author: {
            name: commit.authorName,
            email: commit.authorEmail,
            date: commit.authorDate,
        },
        committer: {
            name: commit.committerName,
            email: commit.committerEmail,
            date: commit.committerDate,
        },
        message: commit.subject,
        tree: commit.treeHash,
        url: "fake.danger.systems/" + commit.hash,
    }); });
    return commits;
};
exports.localGetCommits = localGetCommits;
//# sourceMappingURL=localGetCommits.js.map