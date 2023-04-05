export declare const checkForNodeModules: () => void;
export declare const dirContains: (rootDir: string, dir: string) => boolean;
export declare const lookupTSConfig: (dir: string) => string | null;
export declare const typescriptify: (content: string, dir: string) => string;
export declare const babelify: (content: string, filename: string, extraPlugins: string[]) => string;
declare const _default: (code: string, filename: string, remoteFile?: boolean) => string;
export default _default;
