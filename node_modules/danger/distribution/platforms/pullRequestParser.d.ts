export interface PullRequestParts {
    pullRequestNumber: string;
    repo: string;
    platform: string;
}
export declare function pullRequestParser(address: string): PullRequestParts | null;
