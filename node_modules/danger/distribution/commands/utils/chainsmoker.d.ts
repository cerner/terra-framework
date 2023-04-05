export declare type Pattern = string;
export declare type Path = string;
export declare type KeyedPatterns<T> = {
    readonly [K in keyof T]: Pattern[];
};
export declare type KeyedPaths<T> = {
    readonly [K in keyof T]: Path[];
};
export declare type _MatchResult<T> = {
    readonly [K in keyof T]: boolean;
};
export declare type MatchResult<T> = _MatchResult<T> & {
    /** Returns an object containing arrays of matched files instead of the usual boolean values. */
    getKeyedPaths(): KeyedPaths<T>;
};
/** A vendored copy of the  Chainsmoker module on NPM */
export declare type Chainsmoker<T> = (...patterns: Pattern[]) => MatchResult<T>;
export default function chainsmoker<T>(keyedPaths: KeyedPaths<T>): Chainsmoker<T>;
