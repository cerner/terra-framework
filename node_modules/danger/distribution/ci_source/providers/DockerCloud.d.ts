import { Env, CISource } from "../ci_source";
/**
 *
 * ### CI Setup
 *
 * You'll want to add danger to your existing `Dockerfile.test` (or whatever you
 * have chosen as your `sut` Dockerfile.)
 *
 * ```sh
 * ...
 *
 * CMD [run_command_split]
 * ```
 *
 * ### Token Setup
 *
 * #### GitHub
 *
 * Your `DANGER_GITHUB_API_TOKEN` will need to be exposed to the `sut` part of your
 * `docker-compose.yml`.  This looks similar to:
 *
 * ```
 * sut:
 *   ...
 *   environment:
 *     - DANGER_GITHUB_API_TOKEN=[my_token]
 * ```
 */
export declare class DockerCloud implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    private _prParseURL;
    get pullRequestID(): string;
    get repoSlug(): string;
    get repoURL(): string;
}
