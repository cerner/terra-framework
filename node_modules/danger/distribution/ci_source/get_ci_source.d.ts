import { Env, CISource } from "./ci_source";
/**
 * Gets a CI Source from the current environment, by asking all known
 * sources if they can be represented in this environment.
 * @param {Env} env The environment.
 * @returns {?CISource} a CI source if it's OK, otherwise Danger can't run.
 */
export declare function getCISourceForEnv(env: Env): CISource | undefined;
/**
 * Gets a CI Source from externally provided provider module.
 * Module must implement CISource interface, and should export it as default
 * @export
 * @param {Env} env The environment.
 * @param {string} modulePath relative path to CI provider
 * @returns {Promise<?CISource>} a CI source if module loaded successfully, undefined otherwise
 */
export declare function getCISourceForExternal(env: Env, modulePath: string): Promise<CISource | undefined>;
/**
 * Gets a CI Source.
 * @export
 * @param {Env} env The environment.
 * @param {string} modulePath relative path to CI provider
 * @returns {Promise<?CISource>} a CI source if module loaded successfully, undefined otherwise
 */
export declare function getCISource(env: Env, modulePath: string | undefined): Promise<CISource | undefined>;
