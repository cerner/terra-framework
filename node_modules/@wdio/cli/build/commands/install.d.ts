import { InstallCommandArguments } from '../types';
import yargs from 'yargs';
export declare const command = "install <type> <name>";
export declare const desc: string;
export declare const cmdArgs: {
    readonly yarn: {
        readonly desc: "Install packages using yarn";
        readonly type: "boolean";
        readonly default: false;
    };
    readonly config: {
        readonly desc: "Location of your WDIO configuration";
        readonly default: "./wdio.conf.js";
    };
};
export declare const builder: (yargs: yargs.Argv<{}>) => yargs.Argv<{}>;
export declare function handler(argv: InstallCommandArguments): Promise<void>;
//# sourceMappingURL=install.d.ts.map