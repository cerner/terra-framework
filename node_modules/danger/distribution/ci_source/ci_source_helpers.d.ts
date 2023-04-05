import { Env } from "./ci_source";
import { RepoMetaData } from "../dsl/RepoMetaData";
/**
 * Validates that all ENV keys exist and have a length
 * @param {Env} env The environment.
 * @param {[string]} keys Keys to ensure existence of
 * @returns {bool} true if they exist, false if not
 */
export declare function ensureEnvKeysExist(env: Env, keys: string[]): boolean;
/**
 * Validates that all ENV keys exist and can be turned into ints
 * @param {Env} env The environment.
 * @param {[string]} keys Keys to ensure existence and number-ness of
 * @returns {bool} true if they are all good, false if not
 */
export declare function ensureEnvKeysAreInt(env: Env, keys: string[]): boolean;
/**
 * Retrieves the current pull request open for this branch from an API
 * @param {Env} env The environment
 * @param {string} branch The branch to find pull requests for
 * @returns {number} The pull request ID, if any.  Otherwise 0 (Github starts from #1).
 * If there are multiple pull requests open for a branch, returns the first.
 */
export declare function getPullRequestIDForBranch(metadata: RepoMetaData, env: Env, branch: string): Promise<number>;
