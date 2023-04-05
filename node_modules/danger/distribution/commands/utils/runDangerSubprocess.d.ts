import { DangerDSLJSONType } from "../../dsl/DangerDSL";
import { Executor } from "../../runner/Executor";
import { RunnerConfig } from "../ci/runner";
export declare const prepareDangerDSL: (dangerDSL: DangerDSLJSONType) => string;
export declare const addSubprocessCallArguments: (call: string[], args?: string[]) => string[];
export declare const addSubprocessCallAguments: (call: string[], args?: string[]) => string[];
export declare const runDangerSubprocess: (subprocessName: string[], dslJSON: DangerDSLJSONType, exec: Executor, config: RunnerConfig) => void;
export default runDangerSubprocess;
