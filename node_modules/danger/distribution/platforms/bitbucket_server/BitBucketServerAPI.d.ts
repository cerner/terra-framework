import * as node_fetch from "node-fetch";
import { BitBucketServerPRDSL, BitBucketServerCommit, BitBucketServerPRComment, JIRAIssue, BitBucketServerPRActivity, BitBucketServerDiff, BitBucketServerChangesValue, BitBucketServerAPIDSL } from "../../dsl/BitBucketServerDSL";
import { RepoMetaData } from "../../dsl/RepoMetaData";
import { Comment } from "../platform";
import { Env } from "../../ci_source/ci_source";
import { api as fetch } from "../../api/fetch";
export interface BitBucketRepoCredentials {
    host: string;
    username?: string;
    password?: string;
    token?: string;
}
export declare function bitbucketServerRepoCredentialsFromEnv(env: Env): BitBucketRepoCredentials;
/** This represent the BitBucketServer API */
export declare class BitBucketServerAPI implements BitBucketServerAPIDSL {
    readonly repoMetadata: RepoMetaData;
    readonly repoCredentials: BitBucketRepoCredentials;
    fetch: typeof fetch;
    private readonly d;
    private pr;
    constructor(repoMetadata: RepoMetaData, repoCredentials: BitBucketRepoCredentials);
    getPRBasePath(service?: string): string;
    getPullRequestsFromBranch: (branch: string) => Promise<BitBucketServerPRDSL[]>;
    getPullRequestInfo: () => Promise<BitBucketServerPRDSL>;
    getPullRequestCommits: () => Promise<BitBucketServerCommit[]>;
    getStructuredDiffForFile: (base: string, head: string, filename: string) => Promise<BitBucketServerDiff[]>;
    getPullRequestChanges: () => Promise<BitBucketServerChangesValue[]>;
    getPullRequestComments: () => Promise<BitBucketServerPRActivity[]>;
    getPullRequestActivities: (type?: "COMMENT" | "ACTIVITY") => Promise<BitBucketServerPRActivity[]>;
    getIssues: () => Promise<JIRAIssue[]>;
    getDangerComments: (dangerID: string) => Promise<BitBucketServerPRComment[]>;
    getDangerInlineComments: (dangerID: string) => Promise<Comment[]>;
    getFileContents: (filePath: string, repoSlug?: string | undefined, refspec?: string | undefined) => Promise<string>;
    postBuildStatus: (commitId: string, payload: {
        state: string;
        key: string;
        name: string;
        url: string;
        description: string;
    }) => Promise<any>;
    postPRComment: (comment: string) => Promise<any>;
    postInlinePRComment: (comment: string, line: number, type: string, filePath: string) => Promise<any>;
    deleteComment: ({ id, version }: {
        id: number;
        version: number;
    }) => Promise<any>;
    updateComment: ({ id, version }: {
        id: number;
        version: number;
    }, comment: string) => Promise<any>;
    private api;
    get: (path: string, headers?: any, suppressErrors?: boolean | undefined) => Promise<node_fetch.Response>;
    post: (path: string, headers?: any, body?: any, suppressErrors?: boolean | undefined) => Promise<node_fetch.Response>;
    put: (path: string, headers?: any, body?: any) => Promise<node_fetch.Response>;
    delete: (path: string, headers?: any, body?: any) => Promise<node_fetch.Response>;
}
