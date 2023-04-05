import { Env, CISource } from "../ci_source";
/**
 *
 *  ### CI Setup
 *
 *  With Drone, you run the docker images yourself, so you will want to add `[run_command]` at the end of
 *  your `.drone.yml`.
 *
 *   ``` shell
 *    build:
 *      image: golang
 *        commands:
 *          - ...
 *          - [run_command]
 *   ```
 *
 *  ### Token Setup
 *
 *  As this is self-hosted, you will need to add the `DANGER_GITHUB_API_TOKEN` to your build user's ENV. The alternative
 *  is to pass in the token as a prefix to the command `DANGER_GITHUB_API_TOKEN="123" yarn danger ci`.
 */
export declare class Drone implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
}
