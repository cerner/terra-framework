import { GitLabDSL, GitLabMRChange } from "../../dsl/GitLabDSL";
import { GitDSL, GitJSONDSL } from "../../dsl/GitDSL";
import GitLabAPI from "./GitLabAPI";
export declare const gitLabGitDSL: (gitlab: GitLabDSL, json: GitJSONDSL, gitlabAPI: GitLabAPI) => GitDSL;
export declare const gitlabChangesToDiff: (changes: GitLabMRChange[]) => string;
