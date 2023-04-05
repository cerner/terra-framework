import { GitHubAPI } from "../GitHubAPI";
import { DangerResults } from "../../../dsl/DangerResults";
import { ExecutorOptions } from "../../../runner/Executor";
export declare const getAuthWhenUsingDangerJSApp: () => {
    appID: string;
    key: string;
    installID: string | undefined;
};
export declare const getCustomAppAuthFromEnv: () => {
    appID: string | undefined;
    key: string | undefined;
    installID: string | undefined;
};
/**
 * An object whose responsibility is to handle commenting on an issue
 * @param api
 */
export declare const GitHubChecksCommenter: (api: GitHubAPI) => {
    platformResultsPreMapper: (results: DangerResults, options: ExecutorOptions, ciCommitHash?: string | undefined) => Promise<DangerResults>;
} | undefined;
export declare const tweetSizedResultsFromResults: (results: DangerResults, checksResponse: any) => DangerResults;
