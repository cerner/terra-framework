import { Env, CISource } from "../ci_source";
/**
 * Codemagic.io CI Integration
 *
 * Environment Variables Documented: https://docs.codemagic.io/building/environment-variables/
 * Notice a bug in the docs?: https://github.com/codemagic-ci-cd/codemagic-docs
 *
 * Need support/advice? https://slack.codemagic.io/
 */
export declare class Codemagic implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): string;
}
