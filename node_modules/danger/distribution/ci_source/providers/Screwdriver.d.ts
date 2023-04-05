import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to your screwdriver.yaml:
 *
 * ```yml
 * jobs:
 *   danger:
 *     requires: [~pr, ~commit]
 *     steps:
 *       - setup: yarn install
 *       - danger: yarn danger ci
 *     secrets:
 *       - DANGER_GITHUB_API_TOKEN
 * ```
 *
 * ### Token Setup
 *
 * Add the `DANGER_GITHUB_API_TOKEN` to your pipeline env as a
 * [build secret](https://docs.screwdriver.cd/user-guide/configuration/secrets)
 */
export declare class Screwdriver implements CISource {
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
