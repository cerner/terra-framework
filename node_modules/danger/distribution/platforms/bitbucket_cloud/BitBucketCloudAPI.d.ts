import * as node_fetch from "node-fetch";
import { Env } from "../../ci_source/ci_source";
import { api as fetch } from "../../api/fetch";
import { BitBucketCloudPRDSL, BitBucketCloudCommit, BitBucketCloudPRActivity, BitBucketCloudPRComment, BitBucketCloudAPIDSL } from "../../dsl/BitBucketCloudDSL";
import { Comment } from "../platform";
import { RepoMetaData } from "../../dsl/RepoMetaData";
export declare type BitBucketCloudCredentials = {
    /** Unique ID for this user, must be wrapped with brackets */
    uuid?: string;
} & (BitBucketCloudCredentialsOAuth | BitBucketCloudCredentialsPassword | BitBucketCloudCredentialsRepoAccessToken);
interface BitBucketCloudCredentialsOAuth {
    type: "OAUTH";
    oauthKey: string;
    oauthSecret: string;
}
interface BitBucketCloudCredentialsPassword {
    type: "PASSWORD";
    username: string;
    password: string;
}
interface BitBucketCloudCredentialsRepoAccessToken {
    type: "REPO_ACCESS_TOKEN";
    accessToken: string;
}
export declare function bitbucketCloudCredentialsFromEnv(env: Env): BitBucketCloudCredentials;
export declare class BitBucketCloudAPI implements BitBucketCloudAPIDSL {
    readonly repoMetadata: RepoMetaData;
    readonly credentials: BitBucketCloudCredentials;
    fetch: typeof fetch;
    accessToken: string | undefined;
    uuid: string | undefined;
    private readonly d;
    private pr;
    private commits;
    private baseURL;
    private oauthURL;
    constructor(repoMetadata: RepoMetaData, credentials: BitBucketCloudCredentials);
    getBaseRepoURL(): string;
    getPRURL(): string;
    getPullRequestsFromBranch: (branch: string) => Promise<BitBucketCloudPRDSL[]>;
    getPullRequestInfo: () => Promise<BitBucketCloudPRDSL>;
    getPullRequestCommits: () => Promise<BitBucketCloudCommit[]>;
    getPullRequestDiff: () => Promise<string>;
    getPullRequestComments: () => Promise<BitBucketCloudPRComment[]>;
    getPullRequestActivities: () => Promise<BitBucketCloudPRActivity[]>;
    getFileContents: (filePath: string, repoSlug?: string | undefined, ref?: string | undefined) => Promise<string>;
    getDangerMainComments: (dangerID: string) => Promise<BitBucketCloudPRComment[]>;
    getDangerInlineComments: (dangerID: string) => Promise<Comment[]>;
    postBuildStatus: (commitId: string, payload: {
        state: "SUCCESSFUL" | "FAILED" | "INPROGRESS" | "STOPPED";
        key: string;
        name: string;
        url: string;
        description: string;
    }) => Promise<any>;
    postPRComment: (comment: string) => Promise<any>;
    postInlinePRComment: (comment: string, line: number, filePath: string) => Promise<any>;
    deleteComment: (id: string) => Promise<void>;
    updateComment: (id: string, comment: string) => Promise<any>;
    private api;
    private performAPI;
    get: (url: string, headers?: any, suppressErrors?: boolean | undefined) => Promise<node_fetch.Response>;
    post: (url: string, headers?: any, body?: any, suppressErrors?: boolean | undefined) => Promise<node_fetch.Response>;
    put: (url: string, headers?: any, body?: any) => Promise<node_fetch.Response>;
    delete: (url: string, headers?: any, body?: any) => Promise<node_fetch.Response>;
}
export {};
