import { Octokit } from "@octokit/rest";
interface MemFSVolume {
    toJSON(): any;
}
/**
 * The config for creating a branch. Noting the repo,
 * base branch (what should it work from), the new branch
 * and the message for the generated commit. The commit's
 * author will be whomever the API is authenticated with.
 */
export interface BranchCreationConfig {
    /** The danger in danger/danger-js */
    owner: string;
    /** The danger-js in danger/danger-js */
    repo: string;
    /** Base branch to start working from, null is implied to be `heads/master` */
    fullBaseBranch?: string;
    /** The ref in the URL must `heads/branch`, not just `branch`. */
    fullBranchReference: string;
    /** Message for the commit */
    message: string;
}
/** Basically a filename to file contents map */
interface FileMap {
    [filename: string]: string;
}
/**
 * Creates a bunch of blobs, wraps them in a tree, updates a reference from a memfs volume
 */
export declare const memFSToGitHubCommits: (api: Octokit, volume: MemFSVolume, settings: BranchCreationConfig) => Promise<void>;
/**
 * Creates a bunch of blobs, wraps them in a tree, updates a reference from a map of files to contents
 */
export declare const filepathContentsMapToUpdateGitHubBranch: (api: Octokit, fileMap: FileMap, settings: BranchCreationConfig) => Promise<void>;
/**
 * A Git tree object creates the hierarchy between files in a Git repository. To create a tree
 * we need to make a list of blobs (which represent changes to the FS)
 *
 * We want to build on top of the tree that already exists at the last sha
 *
 * https://developer.github.com/v3/git/trees/
 */
export declare const createTree: (api: Octokit, settings: BranchCreationConfig) => (fileMap: FileMap, baseSha: string) => Promise<any>;
/**
 * A Git commit is a snapshot of the hierarchy (Git tree) and the contents of the files (Git blob) in a Git repository
 *
 * https://developer.github.com/v3/git/commits/
 */
export declare const createACommit: (api: Octokit, settings: BranchCreationConfig) => (treeSha: string, parentSha: string) => Promise<any>;
/**
 * A Git reference (git ref) is just a file that contains a Git commit SHA-1 hash. When referring
 * to a Git commit, you can use the Git reference, which is an easy-to-remember name, rather than
 * the hash. The Git reference can be rewritten to point to a new commit.
 *
 * https://developer.github.com/v3/git/refs/#git-references
 */
export declare const updateReference: (api: Octokit, settings: BranchCreationConfig) => (newSha: string) => Promise<any>;
export {};
