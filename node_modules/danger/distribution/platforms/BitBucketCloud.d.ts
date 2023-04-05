import { GitJSONDSL, GitDSL } from "../dsl/GitDSL";
import { BitBucketCloudPRDSL, BitBucketCloudJSONDSL, BitBucketCloudDSL } from "../dsl/BitBucketCloudDSL";
import { BitBucketCloudAPI } from "./bitbucket_cloud/BitBucketCloudAPI";
import { Platform, Comment } from "./platform";
export declare class BitBucketCloud implements Platform {
    readonly api: BitBucketCloudAPI;
    private readonly d;
    name: string;
    constructor(api: BitBucketCloudAPI);
    /**
     * Get the Code Review description metadata
     *
     * @returns {Promise<any>} JSON representation
     */
    getReviewInfo: () => Promise<BitBucketCloudPRDSL>;
    /**
     * Get the Code Review diff representation
     *
     * @returns {Promise<GitDSL>} the git DSL
     */
    getPlatformGitRepresentation: () => Promise<GitJSONDSL>;
    /**
     * Returns the `bitbucket_cloud` object on the Danger DSL
     *
     * @returns {Promise<BitBucketCloudJSONDSL>} JSON response of the DSL
     */
    getPlatformReviewDSLRepresentation: () => Promise<BitBucketCloudJSONDSL>;
    supportsCommenting(): boolean;
    supportsInlineComments(): boolean;
    /**
     * Returns the response for the new comment
     *
     * @param {string} comment you want to post
     * @returns {Promise<any>} JSON response of new comment
     */
    createComment: (comment: string) => Promise<any>;
    /**
     * Deletes the main Danger comment, used when you have
     * fixed all your failures.
     *
     * @returns {Promise<boolean>} did it work?
     */
    deleteMainComment: (dangerID: string) => Promise<boolean>;
    /**
     * Either updates an existing comment, or makes a new one
     *
     * @param {string} dangerID the UUID for the run
     * @param {string} newComment string value of comment
     * @returns {Promise<string>} the URL for the comment
     */
    updateOrCreateComment(dangerID: string, newComment: string): Promise<string | undefined>;
    getInlineComments: (dangerID: string) => Promise<Comment[]>;
    createInlineComment: (git: GitDSL, comment: string, path: string, line: number) => Promise<any>;
    updateInlineComment: (comment: string, commentId: string) => Promise<any>;
    deleteInlineComment: (commentId: string) => Promise<boolean>;
    updateStatus: (passed: boolean | "pending", message: string, url?: string | undefined, dangerID?: string | undefined, ciCommitHash?: string | undefined) => Promise<boolean>;
    getFileContents: (filePath: string, repoSlug?: string | undefined, ref?: string | undefined) => Promise<string>;
}
export declare const bitbucketCloudJSONToBitBucketCloudDSL: (bitbucket: BitBucketCloudJSONDSL, api: BitBucketCloudAPI) => BitBucketCloudDSL;
