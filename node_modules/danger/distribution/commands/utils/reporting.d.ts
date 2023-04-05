import { DangerResults } from "../../dsl/DangerResults";
export declare const markdownCode: (string: string) => string;
export declare const resultsWithFailure: (failure: string, moreMarkdown?: string | undefined) => DangerResults;
export declare const mergeResults: (left: DangerResults, right: DangerResults) => DangerResults;
