import { GitDSL } from "../dsl/GitDSL";
import { Platform, Comment } from "./platform";
export declare class FakePlatform implements Platform {
    readonly name: string;
    constructor();
    getReviewInfo(): Promise<any>;
    getPlatformReviewDSLRepresentation(): Promise<any>;
    getPlatformGitRepresentation(): Promise<GitDSL>;
    getInlineComments(_: string): Promise<Comment[]>;
    supportsCommenting(): boolean;
    supportsInlineComments(): boolean;
    updateOrCreateComment(_dangerID: string, _newComment: string): Promise<string>;
    createComment(_comment: string): Promise<any>;
    createInlineComment(_git: GitDSL, _comment: string, _path: string, _line: number): Promise<any>;
    updateInlineComment(_comment: string, _commentId: string): Promise<any>;
    deleteInlineComment(_id: string): Promise<boolean>;
    deleteMainComment(): Promise<boolean>;
    updateStatus(): Promise<boolean>;
    getFileContents: (path: string) => Promise<string>;
    createInlineReview?: (git: GitDSL, comments: {
        comment: string;
        path: string;
        line: number;
    }[]) => Promise<any>;
}
