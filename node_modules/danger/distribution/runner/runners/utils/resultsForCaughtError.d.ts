import { DangerResults } from "../../../dsl/DangerResults";
/** Returns Markdown results to post if an exception is raised during the danger run */
declare const resultsForCaughtError: (file: string, contents: string, error: Error) => DangerResults;
export default resultsForCaughtError;
