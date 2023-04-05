import { SharedCLI } from "../utils/sharedDangerfileArgs";
import { RunnerConfig } from "./runner";
export declare const runRunner: (app: SharedCLI, config?: RunnerConfig | undefined) => Promise<void>;
