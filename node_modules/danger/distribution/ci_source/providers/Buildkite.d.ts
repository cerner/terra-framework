import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *
 * With BuildKite you run the server yourself, so you will want to run it as a part of your build process.
 * It is common to have build steps, so we would recommend adding this to your script:
 *
 *  ``` shell
 *   echo "--- Running Danger"
 *   [run_command]
 *  ```
 *
 * ### Token Setup
 *
 * #### GitHub
 *
 * As this is self-hosted, you will need to add the API tokens to your build user's ENV. The alternative
 * is to pass in the token as a prefix to the command `DANGER_GITHUB_API_TOKEN="123" [run_command]`.
 */
export declare class Buildkite implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    private _parseRepoURL;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): string | undefined;
}
