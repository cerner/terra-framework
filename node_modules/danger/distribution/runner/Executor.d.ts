import { DangerContext } from "./Dangerfile";
import { CISource } from "../ci_source/ci_source";
import { Platform, Comment } from "../platforms/platform";
import { DangerResults, DangerInlineResults } from "../dsl/DangerResults";
import { DangerRunner } from "./runners/runner";
import { GitDSL } from "../dsl/GitDSL";
import { DangerDSL } from "../dsl/DangerDSL";
export interface ExecutorOptions {
    /** Should we do a text-only run? E.g. skipping comments */
    stdoutOnly: boolean;
    /** Should the output be submitted as a JSON string? */
    jsonOnly: boolean;
    /** Should Danger post as much info as possible */
    verbose: boolean;
    /** A unique ID to handle multiple Danger runs */
    dangerID: string;
    /** Don't send the entire JSON via STDIN, instead store it in tmp, and give the paths */
    passURLForDSL: boolean;
    /** Disable Checks support in GitHub */
    disableGitHubChecksSupport?: boolean;
    /** Fail if danger report contains failures */
    failOnErrors?: boolean;
    /** Dont add danger check to PR */
    noPublishCheck?: boolean;
    /** Ignore inline-comments that are in lines which were not changed */
    ignoreOutOfDiffComments: boolean;
    /** Makes Danger post a new comment instead of editing its previous one */
    newComment?: boolean;
    /** Removes all previous comment and create a new one in the end of the list */
    removePreviousComments?: boolean;
}
interface ExitCodeContainer {
    exitCode?: number;
}
export declare class Executor {
    readonly ciSource: CISource;
    readonly platform: Platform;
    readonly runner: DangerRunner;
    readonly options: ExecutorOptions;
    readonly process: ExitCodeContainer;
    private readonly d;
    private readonly log;
    private readonly logErr;
    constructor(ciSource: CISource, platform: Platform, runner: DangerRunner, options: ExecutorOptions, process: ExitCodeContainer);
    /**
     *  Runs all of the operations for a running just Danger
     * @param {string} file the filepath to the Dangerfile
     * @returns {Promise<DangerResults>} The results of the Danger run
     */
    runDanger(file: string, runtime: DangerContext): Promise<DangerResults>;
    /**
     * Sets up all the related objects for running the Dangerfile
     * @returns {void} It's a promise, so a void promise
     */
    dslForDanger(): Promise<DangerDSL>;
    /**
     * Handle the message aspects of running a Dangerfile
     *
     * @param {DangerResults} results a JSON representation of the end-state for a Danger run
     */
    handleResults(results: DangerResults, git?: GitDSL): Promise<void>;
    /**
     * Handle showing results inside the shell.
     *
     * @param {DangerResults} results a JSON representation of the end-state for a Danger run
     */
    handleResultsPostingToSTDOUT(results: DangerResults): Promise<void>;
    /**
     * Handle showing results inside a code review platform
     *
     * @param {DangerResults} results a JSON representation of the end-state for a Danger run
     * @param {GitDSL} git a reference to a git implementation so that inline comments find diffs to work with
     */
    handleResultsPostingToPlatform(originalResults: DangerResults, git?: GitDSL): Promise<void>;
    updatePrStatus(passed: boolean | "pending", issueURL: string | undefined, results: DangerResults, dangerID: string): Promise<void>;
    /**
     * Send inline comments
     * Returns these violations that didn't pass the validation (e.g. incorrect file/line)
     *
     * @param results Results with inline violations
     */
    sendInlineComments(results: DangerResults, git: GitDSL, previousComments: Comment[] | null): Promise<DangerResults>;
    sendInlineReview(git: GitDSL, inlineResultsForReview: DangerInlineResults[]): Promise<any>;
    sendInlineComment(git: GitDSL, inlineResults: DangerInlineResults): Promise<any>;
    updateInlineComment(inlineResults: DangerInlineResults, previousComment: Comment): Promise<any>;
    deleteInlineComment(comment: Comment): Promise<any>;
    inlineCommentTemplate(inlineResults: DangerInlineResults): string;
    /**
     * Takes an error (maybe a bad eval) and provides a DangerResults compatible object
     * @param error Any JS error
     */
    resultsForError(error: Error): {
        fails: {
            message: string;
        }[];
        warnings: never[];
        messages: never[];
        markdowns: {
            message: string;
        }[];
    };
}
export {};
