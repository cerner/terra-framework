import { GitDSL, GitJSONDSL } from "../../dsl/GitDSL";
import { GitHubDSL } from "../../dsl/GitHubDSL";
import { GitHubAPI } from "../github/GitHubAPI";
export default function gitDSLForGitHub(api: GitHubAPI): Promise<GitJSONDSL>;
export declare const gitHubGitDSL: (github: GitHubDSL, json: GitJSONDSL, githubAPI?: GitHubAPI | undefined) => GitDSL;
export declare const emptyGitJSON: () => GitJSONDSL;
