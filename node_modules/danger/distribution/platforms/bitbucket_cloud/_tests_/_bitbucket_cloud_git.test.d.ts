/** Returns JSON from the fixtured dir */
export declare const requestWithFixturedJSON: (path: string) => Promise<() => Promise<any>>;
/** Returns arbitrary text value from a request */
export declare const requestWithFixturedContent: (path: string) => Promise<() => Promise<string>>;
