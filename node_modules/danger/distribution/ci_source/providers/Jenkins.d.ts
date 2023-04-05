import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 * Ah Jenkins, so many memories. So, if you're using Jenkins, you're hosting your own environment.
 *
 * ### GitHub
 * You will want to be using the
 * [GitHub pull request builder plugin](https://wiki.jenkins.io/display/JENKINS/GitHub+pull+request+builder+plugin)
 * in order to ensure that you have the build environment set up for PR integration.
 *
 * ### GitLab
 * You will want to be using the [GitLab Plugin](https://github.com/jenkinsci/gitlab-plugin)
 * in order to ensure that you have the build environment set up for MR integration.
 *
 * ### BitBucket Server
 * If using Bitbucket Server, ensure you are using Multibranch Pipelines or Organization Folders.
 * Danger will respect the `CHANGE_URL` and `CHANGE_ID` environment variables.
 *
 * With that set up, you can edit your job to add `[run_command]` at the build action.
 *
 * ### Pipeline
 * If you're using [pipelines](https://jenkins.io/solutions/pipeline/) you should be using the
 * [GitHub branch source plugin](https://wiki.jenkins.io/display/JENKINS/GitHub+Branch+Source+Plugin) for easy setup and handling of PRs.
 *
 * After you've set up the plugin, add a `sh '[run_command]'` line in your pipeline script and make sure that build PRs is enabled.
 *
 * ## Token Setup
 *
 * ### GitHub
 * As you own the machine, it's up to you to add the environment variable for the code review platform.
 */
export declare class Jenkins implements CISource {
    private readonly env;
    constructor(env: Env);
    private isJenkins;
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): string | undefined;
    get commitHash(): string;
}
