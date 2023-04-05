"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var BitBucketCloudAPI_1 = require("../BitBucketCloudAPI");
var bitbucketCloudTemplate_1 = require("../../../runner/templates/bitbucketCloudTemplate");
var url_1 = require("url");
var fetchText = function (api, params) {
    return Promise.resolve({
        ok: true,
        text: function () {
            return Promise.resolve(JSON.stringify(__assign({ api: api }, params)));
        },
    });
};
describe("API testing - BitBucket Cloud", function () {
    var api;
    var jsonResult;
    var textResult;
    var expectedJSONHeaders = {
        "Content-Type": "application/json",
        Authorization: "Basic ".concat(Buffer.from("username:password").toString("base64")),
    };
    function APIFactory(username, password, uuid) {
        var api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
            type: "PASSWORD",
            username: username,
            password: password,
            uuid: uuid,
        });
        api.fetch = jest.fn().mockReturnValue({
            status: 200,
            ok: true,
            json: function () { return jsonResult(); },
            text: function () { return textResult; },
        });
        return api;
    }
    beforeEach(function () {
        api = APIFactory("username", "password", "{1234-1234-1234-1234}");
    });
    it("getPullRequestsFromBranch", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonResult = function () { return ({ isLastPage: true, values: [1] }); };
                    return [4 /*yield*/, api.getPullRequestsFromBranch("branch")];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/".concat(encodeURI("pullrequests?q=source.branch.name = \"branch\"")), { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    expect(result).toEqual([1]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("getPullRequestInfo", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonResult = function () { return ({ pr: "info" }); };
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1", { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
    it("getPullRequestCommits", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonResult = function () { return ({ next: undefined, values: ["commit"] }); };
                    return [4 /*yield*/, api.getPullRequestCommits()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/commits", { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    expect(result).toEqual(["commit"]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should not fetch commits on the second time", function () { return __awaiter(void 0, void 0, void 0, function () {
        var mockJsonResult, result2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    mockJsonResult = jest.fn().mockReturnValue({ next: undefined, values: ["commit"] });
                    jsonResult = mockJsonResult;
                    return [4 /*yield*/, api.getPullRequestCommits()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, api.getPullRequestCommits()];
                case 2:
                    result2 = _a.sent();
                    expect(mockJsonResult).toBeCalledTimes(1);
                    expect(result2).toEqual(["commit"]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("getPullRequestDiff", function () { return __awaiter(void 0, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api.fetch = fetchText;
                    return [4 /*yield*/, api.getPullRequestDiff()];
                case 1:
                    text = _a.sent();
                    expect(JSON.parse(text)).toMatchObject({
                        method: "GET",
                        api: "https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/diff",
                        headers: expectedJSONHeaders,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("getFileContents", function () { return __awaiter(void 0, void 0, void 0, function () {
        var text;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api.fetch = fetchText;
                    return [4 /*yield*/, api.getFileContents("Dangerfile.ts", api.repoMetadata.repoSlug, "a0cd")];
                case 1:
                    text = _a.sent();
                    expect(JSON.parse(text)).toMatchObject({
                        method: "GET",
                        api: "https://api.bitbucket.org/2.0/repositories/foo/bar/src/a0cd/Dangerfile.ts",
                        headers: expectedJSONHeaders,
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it("getPullRequestComments", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonResult = function () { return ({ next: undefined, values: [{ content: { raw: "Hello" } }] }); };
                    return [4 /*yield*/, api.getPullRequestComments()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments?q=deleted=false", { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    // should filtered out item that doesn't contain comment
                    expect(result).toEqual([{ content: { raw: "Hello" } }]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("getDangerInlineComments", function () { return __awaiter(void 0, void 0, void 0, function () {
        var comments;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonResult = function () { return ({
                        values: [
                            {
                                content: {
                                    raw: "\n[//]: # (danger-id-1;)\n[//]: # (  File: dangerfile.ts;\n  Line: 5;)\n\n- :warning: Hello updates\n\n\n  ",
                                },
                                id: 1234,
                                inline: {
                                    from: 5,
                                    path: "dangerfile.ts",
                                },
                                user: {
                                    uuid: "{1234-1234-1234-1234}",
                                    display_name: "name",
                                },
                            },
                            {
                                content: {
                                    raw: "FAIL! danger-id-1; ".concat((0, bitbucketCloudTemplate_1.dangerSignaturePostfix)({}, "1234")),
                                },
                                user: {
                                    display_name: "name",
                                    uuid: "{1234-1234-1234-1234}",
                                },
                            },
                            {
                                content: {
                                    raw: "not a danger comment",
                                },
                                user: {
                                    display_name: "someone",
                                    uuid: "{1234-1234-1234-1235}",
                                },
                            },
                        ],
                    }); };
                    return [4 /*yield*/, api.getDangerInlineComments("1")];
                case 1:
                    comments = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments?q=deleted=false", { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    expect(comments.length).toEqual(1);
                    expect(comments[0].ownedByDanger).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    it("getPullRequestActivities", function () { return __awaiter(void 0, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    jsonResult = function () { return ({ isLastPage: true, values: ["activity"] }); };
                    return [4 /*yield*/, api.getPullRequestActivities()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/activity", { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    expect(result).toEqual(["activity"]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("getDangerMainComments", function () { return __awaiter(void 0, void 0, void 0, function () {
        var commitID, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    commitID = "e70f3d6468f61a4bef68c9e6eaba9166b096e23c";
                    jsonResult = function () { return ({
                        isLastPage: true,
                        values: [
                            {
                                content: {
                                    raw: "FAIL! danger-id-1; ".concat((0, bitbucketCloudTemplate_1.dangerSignaturePostfix)({}, commitID)),
                                },
                                user: {
                                    display_name: "name",
                                    uuid: "{1234-1234-1234-1234}",
                                },
                            },
                            {
                                content: {
                                    raw: "\n[//]: # (danger-id-1;)\n[//]: # (  File: dangerfile.ts;\n  Line: 5;)\n\n- :warning: Hello updates\n\n\n  ",
                                },
                                id: 1234,
                                inline: {
                                    from: 5,
                                    path: "dangerfile.ts",
                                },
                                user: {
                                    uuid: "{1234-1234-1234-1234}",
                                    display_name: "name",
                                },
                            },
                            {
                                content: {
                                    raw: "not a danger comment",
                                },
                                user: {
                                    display_name: "someone",
                                    uuid: "{1234-1234-1234-1235}",
                                },
                            },
                        ],
                    }); };
                    return [4 /*yield*/, api.getDangerMainComments("1")];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments?q=deleted=false", { method: "GET", body: null, headers: expectedJSONHeaders }, undefined);
                    expect(result).toEqual([
                        {
                            content: {
                                raw: "FAIL! danger-id-1; ".concat((0, bitbucketCloudTemplate_1.dangerSignaturePostfix)({}, commitID)),
                            },
                            user: {
                                uuid: "{1234-1234-1234-1234}",
                                display_name: "name",
                            },
                        },
                    ]);
                    return [2 /*return*/];
            }
        });
    }); });
    it("postBuildStatus", function () { return __awaiter(void 0, void 0, void 0, function () {
        var payload;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    payload = {
                        state: "SUCCESSFUL",
                        key: "key",
                        name: "name",
                        url: "url",
                        description: "description...",
                    };
                    return [4 /*yield*/, api.postBuildStatus("a0cd", payload)];
                case 1:
                    _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/commit/a0cd/statuses/build", { method: "POST", body: JSON.stringify(payload), headers: expectedJSONHeaders }, undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("postPRComment", function () { return __awaiter(void 0, void 0, void 0, function () {
        var comment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    comment = "comment...";
                    return [4 /*yield*/, api.postPRComment(comment)];
                case 1:
                    _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments", {
                        method: "POST",
                        body: JSON.stringify({ content: { raw: comment } }),
                        headers: expectedJSONHeaders,
                    }, undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("deleteComment", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.deleteComment("1")];
                case 1:
                    _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments/1", { method: "DELETE", body: "{}", headers: expectedJSONHeaders }, undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("updateComment", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.updateComment("1", "Hello!")];
                case 1:
                    _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments/1", {
                        method: "PUT",
                        body: JSON.stringify({ content: { raw: "Hello!" } }),
                        headers: expectedJSONHeaders,
                    }, undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("postInlinePRComment", function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api.postInlinePRComment("comment...", 5, "dangerfile.ts")];
                case 1:
                    _a.sent();
                    expect(api.fetch).toHaveBeenCalledWith("https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1/comments", {
                        method: "POST",
                        body: JSON.stringify({ content: { raw: "comment..." }, inline: { to: 5, path: "dangerfile.ts" } }),
                        headers: expectedJSONHeaders,
                    }, undefined);
                    return [2 /*return*/];
            }
        });
    }); });
    it("should fetch accessToken", function () { return __awaiter(void 0, void 0, void 0, function () {
        var isFetchedToken, fetch, expectedAuthBody, expectedAuthHeaders, expectedOAUTHRequestHeaders, result, firstCalledBody;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
                        type: "OAUTH",
                        oauthSecret: "superSecretOAUTH",
                        oauthKey: "superOAUTHKey",
                        uuid: "{1234-1234-1234-1234}",
                    });
                    isFetchedToken = false;
                    fetch = jest.fn().mockReturnValue({
                        status: 200,
                        ok: true,
                        json: function () {
                            if (isFetchedToken === false) {
                                isFetchedToken = true;
                                return {
                                    access_token: "bla bla bla bla",
                                };
                            }
                            else {
                                return { pr: "info" };
                            }
                        },
                        text: function () { return textResult; },
                    });
                    api.fetch = fetch;
                    expectedAuthBody = new url_1.URLSearchParams();
                    expectedAuthBody.append("grant_type", "client_credentials");
                    expectedAuthHeaders = {
                        "Content-Type": "application/x-www-form-urlencoded",
                        Authorization: "Basic ".concat(Buffer.from("superOAUTHKey:superSecretOAUTH").toString("base64")),
                    };
                    expectedOAUTHRequestHeaders = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer bla bla bla bla",
                    };
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toBeCalledTimes(2);
                    expect(fetch.mock.calls[0][0]).toBe("https://bitbucket.org/site/oauth2/access_token");
                    firstCalledBody = fetch.mock.calls[0][1];
                    expect(firstCalledBody["method"]).toBe("POST");
                    expect(firstCalledBody["headers"]).toEqual(expectedAuthHeaders);
                    expect(firstCalledBody["body"].toString()).toEqual(expectedAuthBody.toString());
                    expect(api.fetch).toHaveBeenNthCalledWith(2, "https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1", { method: "GET", body: null, headers: expectedOAUTHRequestHeaders }, undefined);
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
    it("shouldn't fetch accessToken if it exists", function () { return __awaiter(void 0, void 0, void 0, function () {
        var expectedOAUTHRequestHeaders, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
                        type: "OAUTH",
                        oauthSecret: "superSecretOAUTH",
                        oauthKey: "superOAUTHKey",
                        uuid: "{1234-1234-1234-1234}",
                    });
                    api.fetch = jest.fn().mockReturnValue({
                        status: 200,
                        ok: true,
                        json: function () { return ({ pr: "info" }); },
                        text: function () { return textResult; },
                    });
                    api.accessToken = "bla bla bla bla";
                    expectedOAUTHRequestHeaders = {
                        "Content-Type": "application/json",
                        Authorization: "Bearer bla bla bla bla",
                    };
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toBeCalledTimes(1);
                    expect(api.fetch).toHaveBeenNthCalledWith(1, "https://api.bitbucket.org/2.0/repositories/foo/bar/pullrequests/1", { method: "GET", body: null, headers: expectedOAUTHRequestHeaders }, undefined);
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should fetch uuid if not exists given username", function () { return __awaiter(void 0, void 0, void 0, function () {
        var requestNo, fetch, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
                        type: "PASSWORD",
                        username: "foo",
                        password: "bar",
                    });
                    requestNo = 0;
                    fetch = jest.fn().mockReturnValue({
                        status: 200,
                        ok: true,
                        json: function () {
                            requestNo += 1;
                            if (requestNo === 1) {
                                return {
                                    uuid: "{1234-1234-1234-1234}",
                                };
                            }
                            else {
                                return { pr: "info" };
                            }
                        },
                        text: function () { return textResult; },
                    });
                    api.fetch = fetch;
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toBeCalledTimes(2);
                    expect(fetch.mock.calls[0][0]).toBe("https://api.bitbucket.org/2.0/user");
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should fetch uuid if not exists given oauth key", function () { return __awaiter(void 0, void 0, void 0, function () {
        var requestNo, fetch, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
                        type: "OAUTH",
                        oauthSecret: "superSecretOAUTH",
                        oauthKey: "superOAUTHKey",
                    });
                    requestNo = 0;
                    fetch = jest.fn().mockReturnValue({
                        status: 200,
                        ok: true,
                        json: function () {
                            requestNo += 1;
                            if (requestNo === 1) {
                                return {
                                    access_token: "bla bla bla bla",
                                };
                            }
                            else if (requestNo === 2) {
                                return {
                                    uuid: "{1234-1234-1234-1234}",
                                };
                            }
                            else {
                                return { pr: "info" };
                            }
                        },
                        text: function () { return textResult; },
                    });
                    api.fetch = fetch;
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toBeCalledTimes(3);
                    expect(fetch.mock.calls[1][0]).toBe("https://api.bitbucket.org/2.0/user");
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
    it("should fetch uuid if not exists given accessToken", function () { return __awaiter(void 0, void 0, void 0, function () {
        var requestNo, fetch, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
                        type: "OAUTH",
                        oauthSecret: "superSecretOAUTH",
                        oauthKey: "superOAUTHKey",
                    });
                    requestNo = 0;
                    fetch = jest.fn().mockReturnValue({
                        status: 200,
                        ok: true,
                        json: function () {
                            requestNo += 1;
                            if (requestNo === 1) {
                                return {
                                    uuid: "{1234-1234-1234-1234}",
                                };
                            }
                            else {
                                return { pr: "info" };
                            }
                        },
                        text: function () { return textResult; },
                    });
                    api.fetch = fetch;
                    api.accessToken = "bla bla bla bla";
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toBeCalledTimes(2);
                    expect(fetch.mock.calls[0][0]).toBe("https://api.bitbucket.org/2.0/user");
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
    it("shouldn't fetch uuid if uuid exists (from api calling)", function () { return __awaiter(void 0, void 0, void 0, function () {
        var fetch, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    api = new BitBucketCloudAPI_1.BitBucketCloudAPI({ repoSlug: "foo/bar", pullRequestID: "1" }, {
                        type: "OAUTH",
                        oauthSecret: "superSecretOAUTH",
                        oauthKey: "superOAUTHKey",
                    });
                    fetch = jest.fn().mockReturnValue({
                        status: 200,
                        ok: true,
                        json: function () {
                            return { pr: "info" };
                        },
                        text: function () { return textResult; },
                    });
                    api.fetch = fetch;
                    api.accessToken = "bla bla bla bla";
                    api.uuid = "{1234-1234-1234-1234}";
                    return [4 /*yield*/, api.getPullRequestInfo()];
                case 1:
                    result = _a.sent();
                    expect(api.fetch).toBeCalledTimes(1);
                    expect(result).toEqual({ pr: "info" });
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=_bitbucket_cloud_api.test.js.map