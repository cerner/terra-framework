import { Env, CISource } from "../ci_source";
/**
 * Nevercode.io CI Integration
 *
 * Environment Variables Documented: https://developer.nevercode.io/v1.0/docs/environment-variables-files
 *
 * Note: The company that runs Nevercode is migrating all customers
 *        to their new service Codemagic.io in Spring of 2021
 *        - billing is migrated through Customer Support
 *        - the CI Configuration is managed in your repo instead of in a web-dashboard.
 *
 * TODO @fbartho delete this integration when it's fully offline.
 */
export declare class Nevercode implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): string | undefined;
}
