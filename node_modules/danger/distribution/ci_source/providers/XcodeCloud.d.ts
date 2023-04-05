import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to the custom build scripts.
 * See the Xcode Cloud documentation [here](https://developer.apple.com/documentation/xcode/writing-custom-build-scripts)
 *
 * ### Token Setup
 *
 * Setup the acesss token (for github `DANGER_GITHUB_API_TOKEN`) environment variable for your workflow.
 * See the Xcode Cloud documentation [here](https://developer.apple.com/documentation/xcode/xcode-cloud-workflow-reference#Custom-Environment-Variables)
 */
export declare class XcodeCloud implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get repoSlug(): string;
    get pullRequestID(): string;
    get commitHash(): string;
}
