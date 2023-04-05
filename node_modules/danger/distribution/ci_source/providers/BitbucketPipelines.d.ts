import { Env, CISource } from "../ci_source";
/**
 * ### CI Setup
 *
 * Install dependencies and add a danger step to your `bitbucket-pipelines.yml`.
 * For improving the performance, you may need to cache `node_modules`.
 *
 * ```yml
 * image: node:10.15.0
 * pipelines:
 *   pull-requests:
 *     "**":
 *       - step:
 *           caches:
 *             - node
 *           script:
 *             - export LANG="C.UTF-8"
 *             - yarn install
 *             - yarn danger ci
 * definitions:
 *   caches:
 *     node: node_modules
 * ```
 *
 * ### Token Setup
 *
 * You can add `DANGER_BITBUCKETCLOUD_USERNAME` and `DANGER_BITBUCKETCLOUD_PASSWORD`
 * or add `DANGER_BITBUCKETCLOUD_OAUTH_KEY` and `DANGER_BITBUCKETCLOUD_OAUTH_SECRET`
 * or add `DANGER_BITBUCKETCLOUD_REPO_ACCESSTOKEN`
 * -
 */
export declare class BitbucketPipelines implements CISource {
    private readonly env;
    constructor(env: Env);
    get name(): string;
    get isCI(): boolean;
    get isPR(): boolean;
    get pullRequestID(): string;
    get repoSlug(): string;
    get repoURL(): string;
}
