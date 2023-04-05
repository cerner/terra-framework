/**
 * Returns a the typical Dangerfile, depending on it's location
 * taking into account whether it JS or TS by whether those exists.
 *
 * Will throw if it isn't found.
 */
export declare function dangerfilePath(program: any): string;
