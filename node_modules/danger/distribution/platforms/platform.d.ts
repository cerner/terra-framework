import { CISource, Env } from "../ci_source/ci_source";
import { GitDSL, GitJSONDSL } from "../dsl/GitDSL";
import { DangerResults } from "../dsl/DangerResults";
import { ExecutorOptions } from "../runner/Executor";
import { DangerRunner } from "../runner/runners/runner";
/** A type that represents the downloaded metadata about a code review session */
export declare type Metadata = any;
/** A type that represents a comment */
export declare type Comment = {
    /**
     *  UUID for the comment
     *
     */
    id: string;
    /**
     * Textual representation of comment
     *
     */
    body: string;
    /**
     * Was this posted by the account Danger has access to?
     */
    ownedByDanger: boolean;
};
export interface Platform extends PlatformCommunicator {
    /** Mainly for logging and error reporting */
    readonly name: string;
    getReviewInfo: () => Promise<any>;
    /** Pulls in the platform specific metadata for code review runs in JSON format */
    getPlatformReviewDSLRepresentation: () => Promise<any>;
    /** Pulls in the platform specific metadata for event runs */
    getPlatformReviewSimpleRepresentation?: () => Promise<any>;
    /** Pulls in the Code Review Diff, and offers a succinct user-API for it */
    getPlatformGitRepresentation: () => Promise<GitJSONDSL>;
    /** Get the contents of a file at a path */
    getFileContents: (path: string, slug?: string, ref?: string) => Promise<string>;
    /** Optional: Wrap the danger evaluation with some of your code */
    executeRuntimeEnvironment?: (start: DangerRunner["runDangerfileEnvironment"], dangerfilePath: string, environment: any) => Promise<void>;
}
export interface PlatformCommunicator {
    /** Basically, should a chance for async platform side-effects before passing the results into the comment section of danger issue create/update/deleter */
    platformResultsPreMapper?: (results: DangerResults, options: ExecutorOptions, ciCommitHash?: string) => Promise<DangerResults>;
    /** Can it update comments? */
    supportsCommenting: () => boolean;
    /** Does the platform support inline comments? */
    supportsInlineComments: () => boolean;
    /** Allows the platform to do whatever it wants, instead of using the default commenting system  */
    handlePostingResults?: (results: DangerResults, options: ExecutorOptions) => void;
    /** Gets inline comments for current PR */
    getInlineComments: (dangerID: string) => Promise<Comment[]>;
    /** Creates a comment on the PR */
    createComment: (dangerID: string, body: string) => Promise<any>;
    /** Creates an inline comment on the PR if possible */
    createInlineComment: (git: GitDSL, comment: string, path: string, line: number) => Promise<any>;
    /** Updates an inline comment */
    updateInlineComment: (comment: string, commentId: string) => Promise<any>;
    /** Delete an inline comment */
    deleteInlineComment: (commentId: string) => Promise<boolean>;
    /** Create a review with inline comments */
    createInlineReview?: (git: GitDSL, comments: {
        comment: string;
        path: string;
        line: number;
    }[]) => Promise<any>;
    /** Delete the main Danger comment */
    deleteMainComment: (dangerID: string) => Promise<boolean>;
    /** Replace the main Danger comment, returning the URL to the issue */
    updateOrCreateComment: (dangerID: string, newComment: string) => Promise<string | undefined>;
    /** Sets the current PR's status */
    updateStatus: (passed: boolean | "pending", message: string, url?: string, dangerID?: string, commitHash?: string) => Promise<boolean>;
}
/**
 * Pulls out a platform for Danger to communicate on based on the environment
 * @param {Env} env The environment.
 * @param {CISource} source The existing source, to ensure they can run against each other
 * @returns {Platform} returns a platform if it can be supported
 */
export declare function getPlatformForEnv(env: Env, source: CISource): Platform;
