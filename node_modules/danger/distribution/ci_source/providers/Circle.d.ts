import { Env, CISource } from "../ci_source";
/**
 *  ### CI Setup
 *
 *  For setting up Circle CI, we recommend turning on "Only Build pull requests." in "Advanced Setting." Without this enabled,
 *  it is _really_ tricky for Danger to know whether you are in a pull request or not, as the environment metadata
 *  isn't reliable.
 *
 * <!-- JS --!>
 *  With that set up, you can you add `yarn danger ci` to your `circle.yml`. If you override the default
 *  `test:` section, then add it as an extra step to the list.
 *
 *  ```yml
 *   - run:
 *       name: Danger
 *       command: yarn danger ci
 *  ```
 * <!-- !JS --!>
 * <!-- Swift --!>
 *
 *  Add some build steps to make Danger Swift work:
 *
 *  ```yml
 *   - run:
 *       name: Installing Danger JS
 *       command: npm install -g danger
 *   - run:
 *       name: Compiling Danger
 *       command: swift build
 *   - run:
 *       name: Running Danger Swift
 *       command: swift run danger-swift ci
 *  ```
 *
 * We'd also recommend adding both `.build` and `~/.danger-swift` to your build cache too.
 *
 * <!-- !Swift --!>
 *
 *  ### Token Setup
 *
 *  There is no difference here for OSS vs Closed, add your `DANGER_GITHUB_API_TOKEN` to the Environment variable settings page.
 *
 */
export declare class Circle implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    private _prParseURL;
    get pullRequestID(): string;
    get repoSlug(): string;
    get repoURL(): string;
    get ciRunURL(): any;
    get commitHash(): string;
}
