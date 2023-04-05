import { GitDSL } from "../dsl/GitDSL";
import { Platform, Comment } from "./platform";
export interface LocalGitOptions {
    base?: string;
    staging?: boolean;
}
export declare class LocalGit implements Platform {
    readonly options: LocalGitOptions;
    readonly name: string;
    private gitDiff;
    constructor(options: LocalGitOptions);
    getGitDiff(): Promise<string>;
    validateThereAreChanges(): Promise<boolean>;
    getPlatformReviewDSLRepresentation(): Promise<any>;
    getPlatformGitRepresentation(): Promise<GitDSL>;
    getInlineComments(_: string): Promise<Comment[]>;
    supportsCommenting(): boolean;
    supportsInlineComments(): boolean;
    updateOrCreateComment(_dangerID: string, _newComment: string): Promise<string | undefined>;
    createComment(_comment: string): Promise<any>;
    createInlineComment(_git: GitDSL, _comment: string, _path: string, _line: number): Promise<any>;
    updateInlineComment(_comment: string, _commentId: string): Promise<any>;
    deleteInlineComment(_id: string): Promise<boolean>;
    deleteMainComment(): Promise<boolean>;
    editMainComment(_comment: string): Promise<boolean>;
    updateStatus(): Promise<boolean>;
    getFileContents: (path: string) => Promise<string>;
    getReviewInfo(): Promise<any>;
}
