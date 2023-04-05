import { Env, CISource } from "../ci_source";
/**
 *  ### CI Setup
 *
 *  You want to add `[run_command]` to your `build.sh` file to run  Danger at the
 *  end of your build.
 *
 *  ### Token Setup
 *
 *  As this is self-hosted, you will need to add the `DANGER_GITHUB_API_TOKEN` to your build user's ENV. The alternative
 *  is to pass in the token as a prefix to the command `DANGER_GITHUB_API_TOKEN="123" [run_command]`.
 */
export declare class Surf implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
}
