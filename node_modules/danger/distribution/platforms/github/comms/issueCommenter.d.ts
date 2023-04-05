import { GitDSL } from "../../../dsl/GitDSL";
import { GitHubAPI } from "../GitHubAPI";
import { Comment } from "../../platform";
/**
 * Finds a position in given diff. This is needed for GitHub API, more on the position finder
 * can be found here: https://developer.github.com/v3/pulls/comments/#create-a-comment
 *
 * @returns {Promise<number>} A number with given position
 */
export declare const findPositionForInlineComment: (git: GitDSL, line: number, path: string) => Promise<number>;
/**
 * An object whose responsibility is to handle commenting on an issue
 * @param api
 */
export declare const GitHubIssueCommenter: (api: GitHubAPI) => {
    supportsCommenting: () => boolean;
    supportsInlineComments: () => boolean;
    /**
     * Fails the current build, if status setting succeeds
     * then return true.
     */
    updateStatus: (passed: boolean | "pending", message: string, url?: string | undefined, dangerID?: string | undefined) => Promise<boolean>;
    /**
     * Gets inline comments for current PR
     */
    getInlineComments: (dangerID: string) => Promise<Comment[]>;
    /**
     * Returns the response for the new comment
     *
     * @param {string} comment you want to post
     * @returns {Promise<any>} JSON response of new comment
     */
    createComment: (comment: string) => Promise<any>;
    /**
     * Makes an inline comment if possible. If platform can't make an inline comment with given arguments,
     * it returns a promise rejection. (e.g. platform doesn't support inline comments or line was out of diff).
     *
     * @returns {Promise<any>} JSON response of new comment
     */
    createInlineComment: (git: GitDSL, comment: string, path: string, line: number) => Promise<any>;
    createInlineReview: (git: GitDSL, comments: {
        comment: string;
        path: string;
        line: number;
    }[]) => Promise<any>;
    /**
     * Updates an inline comment if possible. If platform can't update an inline comment,
     * it returns a promise rejection. (e.g. platform doesn't support inline comments or line was out of diff).
     *
     * @returns {Promise<any>} JSON response of new comment
     */
    updateInlineComment: (comment: string, commentId: string) => Promise<any>;
    /**
     * Deletes the main Danger comment, used when you have
     * fixed all your failures.
     *
     * @returns {Promise<boolean>} did it work?
     */
    deleteMainComment: (dangerID: string) => Promise<boolean>;
    /**
     * Deletes an inline comment, used when you have
     * fixed all your failures.
     *
     * @returns {Promise<boolean>} did it work?
     */
    deleteInlineComment: (id: string) => Promise<boolean>;
    /**
     * Either updates an existing comment, or makes a new one
     *
     * @param {string} newComment string value of comment
     * @returns {Promise<boolean>} success of posting comment
     */
    updateOrCreateComment: (dangerID: string, newComment: string) => Promise<string | undefined>;
};
