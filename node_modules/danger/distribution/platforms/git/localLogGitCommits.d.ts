declare const fieldMap: {
    hash: string;
    treeHash: string;
    abbrevParentHashes: string;
    authorName: string;
    authorEmail: string;
    authorDate: string;
    committerName: string;
    committerEmail: string;
    committerDate: string;
    subject: string;
};
export declare type GitLogOptions = {
    number: number;
    branch: string;
    fields: ReadonlyArray<Partial<keyof typeof fieldMap>>;
};
export declare type GitLogCommit = {
    hash: string;
    treeHash: string;
    abbrevParentHashes: string;
    authorName: string;
    authorEmail: string;
    authorDate: string;
    committerName: string;
    committerEmail: string;
    committerDate: string;
    subject: string;
};
export declare const logGitCommits: (options: GitLogOptions) => GitLogCommit[];
export {};
