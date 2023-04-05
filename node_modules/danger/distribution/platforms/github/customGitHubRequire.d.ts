/// <reference types="node" />
export declare const dangerPrefix = "peril-downloaded-";
export interface RepresentationForURL {
    /** The path the the file aka folder/file.ts  */
    dangerfilePath: string;
    /** The branch to find the dangerfile on  */
    branch: string;
    /** An optional repo */
    repoSlug: string | undefined;
    /** The original full string, with repo etc  */
    referenceString: string;
}
/**
 * Takes a DangerfileReferenceString and lets you know where to find it globally
 * for strings like: artsy/peril-settings/settings.json@branch
 */
export declare const dangerRepresentationForPath: (value: string) => RepresentationForURL;
export declare function getGitHubFileContentsFromLocation(token: string, location: RepresentationForURL, defaultRepo: string): Promise<string>;
/**
 * This function allows you to get the contents of a file from GitHub,
 * given a token.
 * Returns either the contents or an empty string.
 */
export declare function getGitHubFileContents(token: string, repoSlug: string, path: string, ref: string | null, showError?: boolean): Promise<string>;
export declare const shouldUseGitHubOverride: (request: string, parent: NodeModule) => boolean;
export declare const customGitHubResolveRequest: (token: string) => (request: string, parent: {
    filename: string;
}) => Promise<any>;
