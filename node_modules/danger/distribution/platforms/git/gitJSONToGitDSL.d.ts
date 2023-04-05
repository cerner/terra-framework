import parseDiff from "parse-diff";
import { GitDSL, GitJSONDSL } from "../../dsl/GitDSL";
export interface GitJSONToGitDSLConfig {
    /** This is used in getFileContents to figure out your repo  */
    repo?: string;
    /** Whether to diff only files from the staging area */
    staging?: boolean;
    /** The sha things are going into */
    baseSHA: string;
    /** The sha which we're merging */
    headSHA: string;
    /** A promise which will return the string content of a file at a sha */
    getFileContents: (path: string, repo: string | undefined, sha: string) => Promise<string>;
    /** A promise which will return the diff string content for a file between shas */
    getFullDiff?: (base: string, head: string, staging?: boolean) => Promise<string>;
    getStructuredDiffForFile?: (base: string, head: string, filename: string) => Promise<GitStructuredDiff>;
}
export declare type GitStructuredDiff = Pick<parseDiff.File, "chunks" | "from" | "to">[];
export declare type Changes = parseDiff.Change[];
export declare const gitJSONToGitDSL: (gitJSONRep: GitJSONDSL, config: GitJSONToGitDSLConfig) => GitDSL;
