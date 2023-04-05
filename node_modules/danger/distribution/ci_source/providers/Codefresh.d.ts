import { Env, CISource } from "../ci_source";
/**
 *  ### CI Setup
 *
 *  To set up Danger on Codefresh, create a freestyle step in your Codefresh yaml configuration:
 *
 *  ```yml
 *  Danger:
 *    title: Run Danger
 *    image: node:latest
 *    working_directory: ${{main_clone}}
 *    entry_point: '/bin/bash'
 *    cmd:
 *      - '-ce'
 *      - |
 *        npm install -g yarn
 *        yarn add danger --dev
 *        yarn danger ci --failOnErrors
 *    when:
 *      steps:
 *        - name: main_clone
 *          on:
 *            - success
 *  ```
 *
 *  The `failOnErrors` option is required in order to ensure that the step fails properly when Danger fails. If you don't want this behavior, you can remove this option.
 *
 *  Don't forget to add the `DANGER_GITHUB_API_TOKEN` variable to your pipeline settings so that Danger can properly post comments to your pull request.
 *
 */
export declare class Codefresh implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): any;
}
