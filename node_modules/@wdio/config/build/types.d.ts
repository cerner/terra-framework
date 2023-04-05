export interface PathService {
    getcwd(): string;
    loadFile<T>(path: string): T;
    isFile(path: string): boolean;
    ensureAbsolutePath(path: string): string;
    glob(pattern: string): string[];
}
export interface ModuleRequireService {
    resolve(request: string, options?: {
        paths?: string[];
    }): string;
    require<T>(module: string): T;
}
//# sourceMappingURL=types.d.ts.map