import { Violation } from "../dsl/Violation";
/**
 * The representation of what running a Dangerfile generates.
 * This needs to be passed between processes, so data only please.
 */
export interface DangerResults {
    /**
     * Failed messages
     */
    fails: Violation[];
    /**
     * Messages for info
     */
    warnings: Violation[];
    /**
     * A set of messages to show inline
     */
    messages: Violation[];
    /**
     * Markdown messages to attach at the bottom of the comment
     */
    markdowns: Violation[];
    github?: {
        /**
         * Markdown text which gets added as a summary in the first
         * page which you see when you click through to the PR results.
         *
         * https://github.blog/2022-05-09-supercharging-github-actions-with-job-summaries/ */
        stepSummary?: string;
    };
    /** Meta information about the runtime evaluation */
    meta?: {
        /** E.g. "dangerJS", or "Danger Swift" */
        runtimeName: string;
        /** e.g. "https://danger.systems/js" */
        runtimeHref: string;
    };
}
export interface DangerRuntimeContainer extends DangerResults {
    /**
     * Asynchronous functions to be run after parsing
     */
    scheduled?: any[];
}
export interface DangerInlineResults {
    /**
     * Path to the file
     */
    file: string;
    /**
     * Line in the file
     */
    line: number;
    /**
     * Failed messages
     */
    fails: string[];
    /**
     * Messages for info
     */
    warnings: string[];
    /**
     * A set of messages to show inline
     */
    messages: string[];
    /**
     * Markdown messages to attach at the bottom of the comment
     */
    markdowns: string[];
}
export declare const emptyDangerResults: {
    fails: never[];
    warnings: never[];
    messages: never[];
    markdowns: never[];
};
export declare function validateResults(results: DangerResults): void;
/** Returns only the inline violations from Danger results */
export declare function inlineResults(results: DangerResults): DangerResults;
/** Returns only the main-comment comments violations from Danger results */
export declare function regularResults(results: DangerResults): DangerResults;
/** Concat all the violations into a new results */
export declare function mergeResults(results1: DangerResults, results2: DangerResults): DangerResults;
/** Sorts all of the results according to their files and lines */
export declare function sortInlineResults(inlineResults: DangerInlineResults[]): DangerInlineResults[];
export declare function sortResults(results: DangerResults): DangerResults;
export declare const emptyResults: () => DangerResults;
export declare const isEmptyResults: (results: DangerResults) => boolean;
export declare const isMarkdownOnlyResults: (results: DangerResults) => boolean;
export declare function resultsIntoInlineResults(results: DangerResults): DangerInlineResults[];
export declare function inlineResultsIntoResults(inlineResults: DangerInlineResults): DangerResults;
