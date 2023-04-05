import { DangerDSLJSONType, DangerDSLType } from "../dsl/DangerDSL";
import { CISource } from "../ci_source/ci_source";
/**
 * Re-hydrates the JSON DSL that is passed from the host process into the full Danger DSL
 */
export declare const jsonToDSL: (dsl: DangerDSLJSONType, source: CISource) => Promise<DangerDSLType>;
