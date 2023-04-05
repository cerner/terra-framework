import { DangerResults } from "../../../../dsl/DangerResults";
import { GitHubPRDSL } from "../../../../dsl/GitHubDSL";
import { ExecutorOptions } from "../../../../runner/Executor";
import { Octokit as GitHubNodeAPI } from "@octokit/rest";
export interface CheckImages {
    alt: string;
    image_url: string;
    caption: string;
}
export interface CheckAnnotation {
    path: string;
    blob_href: string;
    annotation_level: "notice" | "warning" | "failure";
    message: string;
    start_line: number;
    end_line: number;
    title?: string;
    raw_details?: string;
}
export interface CheckOptions {
    name: string;
    owner: string;
    repo: string;
    head_branch: string;
    head_sha: string;
    status: "queued" | "in_progress" | "completed";
    completed_at: string;
    conclusion: "success" | "failure" | "neutral" | "cancelled" | "timed_out" | "action_required";
    /** "action_required" in a conclusion needs a details URL, but maybe this could be the CI build? */
    details_url?: string;
    output: {
        title: string;
        summary: string;
        text?: string;
        annotations: CheckAnnotation[];
        images?: CheckImages[];
    };
}
export declare const resultsToCheck: (results: DangerResults, options: ExecutorOptions, pr: GitHubPRDSL, api: GitHubNodeAPI, ciCommitHash?: string | undefined, name?: string) => Promise<CheckOptions>;
