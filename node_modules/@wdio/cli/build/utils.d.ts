import { SevereServiceError } from 'webdriverio';
import type { Options, Capabilities, Services } from '@wdio/types';
import { ReplCommandArguments, Questionnair, SupportedPackage, OnCompleteResult, ParsedAnswers } from './types';
export declare class HookError extends SevereServiceError {
    origin: string;
    constructor(message: string, origin: string);
}
/**
 * run service launch sequences
 */
export declare function runServiceHook(launcher: Services.ServiceInstance[], hookName: keyof Services.HookFunctions, ...args: any[]): Promise<undefined>;
/**
 * Run hook in service launcher
 * @param {Array|Function} hook - can be array of functions or single function
 * @param {Object} config
 * @param {Object} capabilities
 */
export declare function runLauncherHook(hook: Function | Function[], ...args: any[]): Promise<void | any[]>;
/**
 * Run onCompleteHook in Launcher
 * @param {Array|Function} onCompleteHook - can be array of functions or single function
 * @param {*} config
 * @param {*} capabilities
 * @param {*} exitCode
 * @param {*} results
 */
export declare function runOnCompleteHook(onCompleteHook: Function | Function[], config: Options.Testrunner, capabilities: Capabilities.RemoteCapabilities, exitCode: number, results: OnCompleteResult): Promise<(0 | 1)[]>;
/**
 * get runner identification by caps
 */
export declare function getRunnerName(caps?: Capabilities.DesiredCapabilities): string;
export declare function findInConfig(config: string, type: string): RegExpMatchArray | null;
export declare function replaceConfig(config: string, type: string, name: string): string | undefined;
export declare function addServiceDeps(names: SupportedPackage[], packages: string[], update?: boolean): void;
/**
 * @todo add JSComments
 */
export declare function convertPackageHashToObject(pkg: string, hash?: string): SupportedPackage;
export declare function renderConfigurationFile(answers: ParsedAnswers): Promise<void>;
export declare const validateServiceAnswers: (answers: string[]) => Boolean | string;
export declare function getCapabilities(arg: ReplCommandArguments): {
    capabilities: {
        deviceName: string;
        platformVersion: string;
        udid: string;
        platformName: string;
        automationName: string;
        app: string;
        browserName?: undefined;
    };
} | {
    capabilities: {
        deviceName: string;
        platformVersion: string;
        udid: string;
        platformName: string;
        automationName: string;
        browserName: string;
    };
} | {
    capabilities: {
        alwaysMatch: Capabilities.Capabilities;
        firstMatch: Capabilities.Capabilities[];
        browserName?: undefined;
    };
} | {
    capabilities: {
        browserName: string;
    };
};
/**
 * Check if file exists in current work directory
 * @param {string} filename to check existance for
 */
export declare function hasFile(filename: string): boolean;
/**
 * Check if package is installed
 * @param {string} package to check existance for
 */
export declare function hasPackage(pkg: string): boolean;
/**
 * generate test files based on CLI answers
 */
export declare function generateTestFiles(answers: ParsedAnswers): Promise<void>;
export declare function getAnswers(yes: boolean): Promise<Questionnair>;
export declare function getPathForFileGeneration(answers: Questionnair): {
    destSpecRootPath: string;
    destStepRootPath: string;
    destPageObjectRootPath: string;
    relativePath: string;
};
export declare function getDefaultFiles(answers: Partial<Questionnair>, filePath: string): string;
//# sourceMappingURL=utils.d.ts.map