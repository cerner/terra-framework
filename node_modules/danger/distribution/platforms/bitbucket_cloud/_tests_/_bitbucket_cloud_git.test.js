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
exports.requestWithFixturedContent = exports.requestWithFixturedJSON = void 0;
/* eslint-disable jest/no-export */
var BitBucketCloudGit_1 = require("../BitBucketCloudGit");
var BitBucketCloud_1 = require("../../BitBucketCloud");
var BitBucketCloudAPI_1 = require("../BitBucketCloudAPI");
var Fake_1 = require("../../../ci_source/providers/Fake");
var fs_1 = require("fs");
var path_1 = require("path");
var BitBucketCloudGit_2 = require("../BitBucketCloudGit");
var dslGenerator_1 = require("../../../runner/dslGenerator");
var fixtures = (0, path_1.resolve)(__dirname, "..", "..", "_tests", "fixtures");
/** Returns a fixture. */
var loadFixture = function (path) { return (0, fs_1.readFileSync)((0, path_1.join)(fixtures, path), {}).toString().replace(/\r/g, ""); };
/** Returns JSON from the fixtured dir */
var requestWithFixturedJSON = function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, function () {
                return Promise.resolve(JSON.parse(loadFixture(path)));
            }
            /** Returns arbitrary text value from a request */
        ];
    });
}); };
exports.requestWithFixturedJSON = requestWithFixturedJSON;
/** Returns arbitrary text value from a request */
var requestWithFixturedContent = function (path) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, function () {
                return Promise.resolve(loadFixture(path));
            }
            /**
             * HACKish: Jest on Windows seems to include some additional
             * whitespace that differs from non-Windows snapshot output,
             * so we strip these until we can better-address the issue.
             */
        ];
    });
}); };
exports.requestWithFixturedContent = requestWithFixturedContent;
/**
 * HACKish: Jest on Windows seems to include some additional
 * whitespace that differs from non-Windows snapshot output,
 * so we strip these until we can better-address the issue.
 */
var stripWhitespaceForSnapshot = function (str) {
    return str.replace(/\s/g, "");
};
var pullRequestInfoFilename = "bitbucket_cloud_pr.json";
describe("the dangerfile gitDSL - BitBucket Cloud", function () {
    var bbc = {};
    var gitJSONDSL = {};
    var bbcDSL = {};
    var gitDSL = {};
    beforeEach(function () { return __awaiter(void 0, void 0, void 0, function () {
        var api, _a, _b, _c, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI(new Fake_1.FakeCI({}), {
                        username: "username",
                        password: "password",
                        uuid: "{1234-1234-1234-1234}",
                        type: "PASSWORD",
                    });
                    bbc = new BitBucketCloud_1.BitBucketCloud(api);
                    _a = api;
                    return [4 /*yield*/, (0, exports.requestWithFixturedJSON)(pullRequestInfoFilename)];
                case 1:
                    _a.getPullRequestInfo = _f.sent();
                    _b = api;
                    return [4 /*yield*/, (0, exports.requestWithFixturedJSON)("bitbucket_cloud_comments.json")];
                case 2:
                    _b.getPullRequestComments = _f.sent();
                    _c = api;
                    return [4 /*yield*/, (0, exports.requestWithFixturedJSON)("bitbucket_cloud_commits.json")];
                case 3:
                    _c.getPullRequestCommits = _f.sent();
                    _d = api;
                    return [4 /*yield*/, (0, exports.requestWithFixturedJSON)("bitbucket_cloud_activities.json")];
                case 4:
                    _d.getPullRequestActivities = _f.sent();
                    _e = api;
                    return [4 /*yield*/, (0, exports.requestWithFixturedContent)("bitbucket_cloud_diff.diff")];
                case 5:
                    _e.getPullRequestDiff = _f.sent();
                    api.getFileContents = function (path, repoSlug, ref) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, JSON.stringify({ path: path, repoSlug: repoSlug, ref: ref })];
                    }); }); };
                    return [4 /*yield*/, bbc.getPlatformGitRepresentation()];
                case 6:
                    gitJSONDSL = _f.sent();
                    return [4 /*yield*/, bbc.getPlatformReviewDSLRepresentation()];
                case 7:
                    bbcDSL = _f.sent();
                    gitDSL = (0, BitBucketCloudGit_2.bitBucketCloudGitDSL)(bbcDSL, gitJSONDSL, bbc.api);
                    return [2 /*return*/];
            }
        });
    }); });
    it("sets the modified/created/deleted", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect(gitJSONDSL.modified_files).toEqual([
                "CHANGELOG.md",
                "data/schema.graphql",
                "data/schema.json",
                "externals/metaphysics",
                "lib/__mocks__/react-relay.js",
                "lib/components/artist/about.js",
                "lib/components/gene/header.js",
                "lib/containers/__tests__/__snapshots__/gene-tests.js.snap",
                "lib/containers/__tests__/gene-tests.js",
                "lib/containers/gene.js",
                "tsconfig.json",
            ]);
            expect(gitJSONDSL.created_files).toEqual([
                "lib/components/gene/about.js",
                "lib/components/gene/biography.js",
                "lib/components/related_artists/index.js",
                "lib/components/related_artists/related_artist.js",
            ]);
            expect(gitJSONDSL.deleted_files).toEqual([
                "lib/components/artist/related_artists/index.js",
                "lib/components/artist/related_artists/related_artist.js",
                "lib/components/gene/about_gene.js",
            ]);
            return [2 /*return*/];
        });
    }); });
    it("shows the diff for a specific file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var diff;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.diffForFile("tsconfig.json")];
                case 1:
                    diff = (_a.sent()).diff;
                    expect(stripWhitespaceForSnapshot(diff)).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should include `before` text content of the file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var before;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.diffForFile("tsconfig.json")];
                case 1:
                    before = (_a.sent()).before;
                    expect(stripWhitespaceForSnapshot(before)).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should include `after` text content of the file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var after;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.diffForFile("tsconfig.json")];
                case 1:
                    after = (_a.sent()).after;
                    expect(stripWhitespaceForSnapshot(after)).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should include `added` text content of the file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var added;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.diffForFile("tsconfig.json")];
                case 1:
                    added = (_a.sent()).added;
                    expect(stripWhitespaceForSnapshot(added)).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it("should include `removed` text content of the file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var removed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.diffForFile("tsconfig.json")];
                case 1:
                    removed = (_a.sent()).removed;
                    expect(stripWhitespaceForSnapshot(removed)).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it("resolves to `null` for files not in modified_files", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.diffForFile("fuhqmahgads.json")];
                case 1:
                    result = (_a.sent());
                    expect(result).toBeNull();
                    return [2 /*return*/];
            }
        });
    }); });
    it("shows the structured diff for a specific file", function () { return __awaiter(void 0, void 0, void 0, function () {
        var chunks;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, gitDSL.structuredDiffForFile("tsconfig.json")];
                case 1:
                    chunks = (_a.sent()).chunks;
                    expect(chunks).toMatchSnapshot();
                    return [2 /*return*/];
            }
        });
    }); });
    it("sets up commit data correctly", function () { return __awaiter(void 0, void 0, void 0, function () {
        var exampleCommit;
        return __generator(this, function (_a) {
            exampleCommit = {
                author: {
                    date: "2019-05-13T13:24:53+00:00",
                    email: "foo@bar.com",
                    name: "Hello Core",
                },
                committer: {
                    date: "2019-05-13T13:24:53+00:00",
                    email: "foo@bar.com",
                    name: "Hello Core",
                },
                message: "Merged in develop (pull request #174)\n\nDevelop to SIT\n\nApproved-by: Hello Core <foo@bar.com>\n",
                parents: ["77fdf99fcc08dce8bd49c9aedfc7442f2bd40bde", "a584f1256b8522cfce4ccc33dfbf157590a6044d"],
                sha: "7f73207cea935b2fd07a76028484c20eb18422ba",
                tree: null,
                url: "https://bitbucket.org/foo/bar/commits/7f73207cea935b2fd07a76028484c20eb18422ba",
            };
            expect(gitDSL.head).toBe("007bf2423436");
            expect(gitDSL.base).toBe("8a2eb414cb5d");
            expect(gitDSL.commits[0]).toEqual(exampleCommit);
            return [2 /*return*/];
        });
    }); });
    it("writes a JSON DSL fixture", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            expect.assertions(1);
            expect(function () { return __awaiter(void 0, void 0, void 0, function () {
                var fakeSource, dataSent;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fakeSource = new Fake_1.FakeCI({});
                            return [4 /*yield*/, (0, dslGenerator_1.jsonDSLGenerator)(bbc, fakeSource, {})];
                        case 1:
                            dataSent = _a.sent();
                            dataSent.settings.github.accessToken = "12345";
                            (0, fs_1.writeFileSync)((0, path_1.join)(fixtures, "bbc-dsl-input.json"), JSON.stringify(dataSent, null, "  "), "utf8");
                            return [2 /*return*/];
                    }
                });
            }); }).not.toThrow();
            return [2 /*return*/];
        });
    }); });
});
describe("bitBucketCloudRawAndDateToGitCommitAuthor", function () {
    var date = "2019-05-13T11:41:13+00:00";
    it("should convert name doesn't contain space correctly", function () {
        var raw = "Foo <foo@bar.com>";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: "Foo",
            email: "foo@bar.com",
            date: date,
        });
    });
    it("should convert name contains one space correctly", function () {
        var raw = "Foo Bar <foo@bar.com>";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: "Foo Bar",
            email: "foo@bar.com",
            date: date,
        });
    });
    it("should convert name contains multiple space correctly", function () {
        var raw = "Foo Bar Foo Bar Foo <foo@bar.com>";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: "Foo Bar Foo Bar Foo",
            email: "foo@bar.com",
            date: date,
        });
    });
    it("should convert name contains special characters correctly", function () {
        var raw = "Foo Bar < Foo  @Bar >Foo <foo@bar.com>";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: "Foo Bar < Foo  @Bar >Foo",
            email: "foo@bar.com",
            date: date,
        });
    });
    it("should convert email contains multiple dot correctly", function () {
        var raw = "Foo Bar <foo@bar.hello.com>";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: "Foo Bar",
            email: "foo@bar.hello.com",
            date: date,
        });
    });
    it("should put raw into name if it couldn't convert", function () {
        var raw = "Foo Bar";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: raw,
            email: "",
            date: date,
        });
    });
    it("should put only name if it couldn't find an email", function () {
        var raw = "Foo Bar <>";
        expect((0, BitBucketCloudGit_1.bitBucketCloudRawAndDateToGitCommitAuthor)(raw, date)).toEqual({
            name: "Foo Bar",
            email: "",
            date: date,
        });
    });
});
//# sourceMappingURL=_bitbucket_cloud_git.test.js.map