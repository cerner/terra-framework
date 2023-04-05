import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *
 * <!-- JS --!>
 *  You need to edit your `.travis.yml` to include `[run_command]`. If you already have
 *  a `script:` section then we recommend adding this command at the end of the script step: `- [run_command]`.
 *
 *   Otherwise, add a `before_script` step to the root of the `.travis.yml` with `[run_command]`
 *
 *   ```ruby
 *     before_script:
 *       - yarn danger ci
 *   ```
 *
 *  Adding this to your `.travis.yml` allows Danger to fail your build, both on the TravisCI website and within your Pull Request.
 *  With that set up, you can edit your job to add `[run_command]` at the build action.
 * <!-- !JS --!>
 * <!-- Swift --!>
 *
 *  Here's an example of the optimal travis setup, handling caching correctly:
 *
 *  ```yml
 *   os: osx
 *   osx_image: xcode10.1
 *
 *   cache:
 *     directories:
 *     # General SwiftPM
 *     # Danger Swift plugins, like Yams
 *     - .build
 *     - ~/.danger-swift
 *
 *   install:
 *     # Grab the latest Danger JS from npm
 *     - npm install -g danger
 *     # Compile the Danger runtime
 *     - swift build
 *
 *   script:
 *     # Run the Dangerfile.swift
 *     - swift run danger-swift ci
 *     # Test my app...
 *     - [your other commands]
 *  ```
 *
 * <!-- !Swift --!>
 *
 *  ### Token Setup
 *
 *  You need to add the `DANGER_GITHUB_API_TOKEN` environment variable, to do this,
 *  go to your repo's settings, which should look like: `https://travis-ci.org/[user]/[repo]/settings`.
 *
 *  If you have an open source project, you should ensure "Display value in build log" enabled, so that PRs from forks work.
 */
export declare class Travis implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get ciRunURL(): string;
}
