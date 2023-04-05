import { Env, CISource } from "../ci_source";
/**
 * CI Setup
 *
 * In CodeBuild, make sure to correctly forward CODEBUILD_BUILD_ID, CODEBUILD_SOURCE_VERSION, CODEBUILD_SOURCE_REPO_URL and DANGER_GITHUB_API_TOKEN.
 *
 * Token Setup
 *
 * Add your `DANGER_GITHUB_API_TOKEN` to your project. Edit -> Environment -> Additional configuration -> Create a parameter
 *
 * Note that currently, there seems to be no totally reliable way to get the branch
 * name from CodeBuild. Sometimes `CODEBUILD_SOURCE_VERSION` contains the
 * PR number in the format pr/123, but not always. Other times it may contain
 * a commit hash. `CODEBUILD_WEBHOOK_TRIGGER` will contain the pr number on the
 * same format, but only for the first event, for subsequent events it should
 * contain the branch number in the format branch/my-branch. So here we attempt
 * to determine the PR number from one of the environment variables and if
 * unsuccessful fall back to calling the API to find the PR for the branch.
 */
export declare class CodeBuild implements CISource {
    private readonly env;
    private default;
    constructor(env: Env);
    setup(): Promise<any>;
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get repoURL(): string;
    private _isPRRequest;
    private _prParseUrl;
    private _getPrId;
}
