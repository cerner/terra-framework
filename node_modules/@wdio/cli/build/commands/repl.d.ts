import { ReplCommandArguments } from '../types';
import yargs from 'yargs';
export declare const command = "repl <option> [capabilities]";
export declare const desc = "Run WebDriver session in command line";
export declare const cmdArgs: {
    [k in keyof ReplCommandArguments]?: yargs.Options;
};
export declare const builder: (yargs: yargs.Argv<{}>) => yargs.Argv<yargs.Omit<{}, string | number> & yargs.InferredOptionTypes<import("lodash").Dictionary<yargs.Options | {
    readonly desc: "Run WebdriverIO in watch mode";
    readonly type: "boolean";
} | {
    readonly alias: "h";
    readonly desc: "automation driver host address";
    readonly type: "string";
} | {
    readonly alias: "p";
    readonly desc: "automation driver port";
    readonly type: "number";
} | {
    readonly type: "string";
    readonly desc: "path to WebDriver endpoints (default \"/\")";
} | {
    readonly alias: "u";
    readonly desc: "username if using a cloud service as automation backend";
    readonly type: "string";
} | {
    readonly alias: "k";
    readonly desc: "corresponding access key to the user";
    readonly type: "string";
} | {
    readonly alias: "l";
    readonly desc: "level of logging verbosity";
    readonly choices: readonly ["trace", "debug", "info", "warn", "error", "silent"];
} | {
    readonly desc: "stop test runner after specific amount of tests have failed";
    readonly type: "number";
} | {
    readonly desc: "shorten url command calls by setting a base url";
    readonly type: "string";
} | {
    readonly alias: "w";
    readonly desc: "timeout for all waitForXXX commands";
    readonly type: "number";
} | {
    readonly alias: "f";
    readonly desc: "defines the framework (Mocha, Jasmine or Cucumber) to run the specs";
    readonly type: "string";
} | {
    readonly alias: "r";
    readonly desc: "reporters to print out the results on stdout";
    readonly type: "array";
} | {
    readonly desc: "overwrites the specs attribute and runs the defined suite";
    readonly type: "array";
} | {
    readonly desc: "run only a certain spec file - overrides specs piped from stdin";
    readonly type: "array";
} | {
    readonly desc: "exclude certain spec file from the test run - overrides exclude piped from stdin";
    readonly type: "array";
} | {
    readonly desc: "Mocha options";
} | {
    readonly desc: "Jasmine options";
} | {
    readonly desc: "Cucumber options";
} | {
    readonly desc: "Auto compilation options";
}>>>;
export declare const handler: (argv: ReplCommandArguments) => Promise<any>;
//# sourceMappingURL=repl.d.ts.map