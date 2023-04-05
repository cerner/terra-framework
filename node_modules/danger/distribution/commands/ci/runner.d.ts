import { Platform } from "../../platforms/platform";
import { SharedCLI } from "../utils/sharedDangerfileArgs";
import { CISource } from "../../ci_source/ci_source";
export interface RunnerConfig {
    /** The CI source that could come from the command */
    source: CISource;
    /** A platform which could come for us come from the command */
    platform: Platform;
    /** Additional env vars which are passed through to the subprocess */
    additionalEnvVars: object;
}
export declare const runRunner: (app: SharedCLI, config?: Partial<RunnerConfig> | undefined) => Promise<void>;
