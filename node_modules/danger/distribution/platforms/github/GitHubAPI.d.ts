import { Octokit as GitHubNodeAPI } from "@octokit/rest";
import * as node_fetch from "node-fetch";
import { GitHubPRDSL, GitHubIssueComment, GitHubUser } from "../../dsl/GitHubDSL";
import { api as fetch } from "../../api/fetch";
import { RepoMetaData } from "../../dsl/RepoMetaData";
import { CheckOptions } from "./comms/checks/resultsToCheck";
export declare type APIToken = string;
/** This represent the GitHub API */
export declare class GitHubAPI {
    readonly repoMetadata: RepoMetaData;
    readonly token?: string | undefined;
    fetch: typeof fetch;
    additionalHeaders: any;
    private readonly d;
    private pr;
    constructor(repoMetadata: RepoMetaData, token?: string | undefined);
    /**
     * Bit weird, yes, but we want something that can be exposed to an end-user.
     * I wouldn't have a problem with moving this to use this API under the hood
     * but for now that's just a refactor someone can try.
     */
    getExternalAPI: (accessTokenForApp?: string | undefined) => GitHubNodeAPI;
    /**
     * Grabs the contents of an individual file on GitHub
     *
     * @param {string} path path to the file
     * @param {string} [ref] an optional sha
     * @returns {Promise<string>} text contents
     *
     */
    fileContents: (path: string, repoSlug?: string | undefined, ref?: string | undefined) => Promise<string>;
    getDangerCommentIDs: (dangerID: string) => Promise<string[]>;
    updateCommentWithID: (id: string, comment: string) => Promise<any>;
    deleteCommentWithID: (id: string) => Promise<boolean>;
    deleteInlineCommentWithID: (id: string) => Promise<boolean>;
    getUserID: () => Promise<number | undefined>;
    postPRComment: (comment: string) => Promise<any>;
    postInlinePRComment: (comment: string, commitId: string, path: string, position: number) => Promise<any>;
    postInlinePRReview: (commitId: string, comments: {
        comment: string;
        path: string;
        position: number;
    }[]) => Promise<any>;
    updateInlinePRComment: (comment: string, commentId: string) => Promise<any>;
    getPullRequestInfo: () => Promise<GitHubPRDSL>;
    getPullRequestCommits: () => Promise<any[]>;
    /**
     * Get list of commits in pull requests. This'll try to iterate all available pages
     * Until it reaches hard limit of api itself (250 commits).
     * https://developer.github.com/v3/pulls/#list-commits-on-a-pull-request
     *
     */
    getAllOfResource: (path: string) => Promise<any>;
    getUserInfo: () => Promise<GitHubUser>;
    getPullRequestComments: () => Promise<GitHubIssueComment[]>;
    getPullRequestInlineComments: (dangerID: string) => Promise<(GitHubIssueComment & {
        ownedByDanger: boolean;
    })[]>;
    getPullRequestDiff: () => Promise<string>;
    getFileContents: (path: string, repoSlug: string, ref: string) => Promise<any>;
    getPullRequests: () => Promise<any>;
    getReviewerRequests: () => Promise<any>;
    getReviews: () => Promise<any>;
    getIssue: () => Promise<any>;
    updateStatus: (passed: boolean | "pending", message: string, url?: string | undefined, dangerID?: string | undefined, ciCommitHash?: string | undefined) => Promise<any>;
    postCheckRun: (check: CheckOptions, token: string) => Promise<any>;
    private api;
    get: (path: string, headers?: any) => Promise<node_fetch.Response>;
    post: (path: string, headers?: any, body?: any, suppressErrors?: boolean | undefined) => Promise<node_fetch.Response>;
    patch: (path: string, headers?: any, body?: any, suppressErrors?: boolean | undefined) => Promise<node_fetch.Response>;
}
