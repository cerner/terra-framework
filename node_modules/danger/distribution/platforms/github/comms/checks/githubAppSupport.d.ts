/** Generates a temporary access token for an app's installation, 5m long */
export declare const getAccessTokenForInstallation: (appID: string, installationID: number, key: string) => Promise<string>;
