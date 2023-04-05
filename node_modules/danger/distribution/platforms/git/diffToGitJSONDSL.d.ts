import { GitCommit } from "../../dsl/Commit";
import { GitJSONDSL } from "../../dsl/GitDSL";
/**
 * This function is essentially a "go from a diff to some simple structured data"
 * it's the steps needed for danger process.
 */
export declare const diffToGitJSONDSL: (diff: string, commits: GitCommit[]) => GitJSONDSL;
