import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *  <!-- JS --!>
 *  You need to edit your `bitrise.yml` (in version control, or directly from UI) to include `yarn danger ci`.
 *
 *  You can set `is_always_run: true` to ensure that it reports even if previous steps fails
 *
 *   ```yaml
 *     workflows:
 *       <your_workflow_name>:
 *         steps:
 *         - yarn:
 *           inputs:
 *           - args: ci
 *           - command: danger
 *           is_always_run: true
 *   ```
 *
 *  Adding this to your `bitrise.yml` allows Danger to fail your build, both on the Bitrise website and within your Pull Request.
 *  With that set up, you can edit your job to add `yarn danger ci` at the build action.
 *
 * <!-- !JS --!>
 * <!-- Swift --!>
 *
 * No instructions yet, but basically:
 *
 * - Install Danger JS globally
 * - Run `swift build`
 * - Run `swift run danger-swift ci`
 *
 * <!-- !Swift --!>
 *
 *  ### Token Setup
 *
 *  You need to add the platform environment variables, to do this,
 *  go to your repo's secrets, which should look like: `https://www.bitrise.io/app/[app_id]#/workflow` and secrets tab.
 *
 *  You should make sure to check the case "Expose for Pull Requests?".
 */
export declare class Bitrise implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): any;
    get commitHash(): any;
}
