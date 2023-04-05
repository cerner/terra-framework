import { DangerResults } from "../../dsl/DangerResults";
import { DangerContext } from "../../runner/Dangerfile";
import { DangerRunner } from "./runner";
/**
 * Executes a Dangerfile at a specific path, with a context.
 * The values inside a Danger context are applied as globals to the Dangerfiles runtime.
 *
 * @param {DangerContext} dangerfileContext the global danger context
 */
export declare function createDangerfileRuntimeEnvironment(dangerfileContext: DangerContext): Promise<DangerContext>;
/**
 * Executes a Dangerfile at a specific path, with a context.
 * The values inside a Danger context are applied as globals to the Dangerfiles runtime.
 *
 * @param {string} filename the file path for the dangerfile
 * @param {string} originalContents optional, the JS pre-compiled
 * @param {DangerContext} environment the results of createDangerfileRuntimeEnvironment
 * @param {any | undefined} injectedObjectToExport an optional object for passing into default exports
 * @param {func | undefined} moduleHandler an optional func for handling module resolution
 * @returns {DangerResults} the results of the run
 */
export declare const runDangerfileEnvironment: (filenames: [string, boolean][], originalContents: (string | undefined)[] | undefined, environment: DangerContext, injectedObjectToExport?: any, moduleHandler?: ((module: any, filename: string) => string | Promise<any>) | undefined) => Promise<DangerResults>;
declare const defaultExport: DangerRunner;
export default defaultExport;
