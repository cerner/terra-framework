import { ConfigCommandArguments, ParsedAnswers } from '../types';
import yargs from 'yargs';
export declare const command = "config";
export declare const desc = "Initialize WebdriverIO and setup configuration in your current project.";
export declare const cmdArgs: {
    readonly yarn: {
        readonly type: "boolean";
        readonly desc: "Install packages via yarn package manager.";
        readonly default: boolean;
    };
    readonly yes: {
        readonly alias: "y";
        readonly desc: "will fill in all config defaults without prompting";
        readonly type: "boolean";
        readonly default: false;
    };
};
export declare const builder: (yargs: yargs.Argv<{}>) => yargs.Argv<yargs.Omit<{}, "yarn" | "yes"> & yargs.InferredOptionTypes<{
    readonly yarn: {
        readonly type: "boolean";
        readonly desc: "Install packages via yarn package manager.";
        readonly default: boolean;
    };
    readonly yes: {
        readonly alias: "y";
        readonly desc: "will fill in all config defaults without prompting";
        readonly type: "boolean";
        readonly default: false;
    };
}>>;
export declare function handler(argv: ConfigCommandArguments): Promise<{
    success: boolean;
    parsedAnswers?: undefined;
    installedPackages?: undefined;
} | {
    success: boolean;
    parsedAnswers: ParsedAnswers;
    installedPackages: string[];
}>;
/**
 * Helper utility used in `run` and `install` command to create config if none exist
 * @param {string}   command        to be executed by user
 * @param {string}   message        to show when no config is suppose to be created
 * @param {boolean}  useYarn        parameter set to true if yarn is used
 * @param {Function} runConfigCmd   runConfig method to be replaceable for unit testing
 */
export declare function missingConfigurationPrompt(command: string, message: string, useYarn?: boolean, runConfigCmd?: (useYarn: boolean, yes: boolean, exit?: boolean) => Promise<{
    success: boolean;
    parsedAnswers?: undefined;
    installedPackages?: undefined;
} | {
    success: boolean;
    parsedAnswers: ParsedAnswers;
    installedPackages: string[];
}>): Promise<{
    success: boolean;
    parsedAnswers?: undefined;
    installedPackages?: undefined;
} | {
    success: boolean;
    parsedAnswers: ParsedAnswers;
    installedPackages: string[];
}>;
//# sourceMappingURL=config.d.ts.map