import { DangerContext } from "./Dangerfile";
import { CISource } from "../ci_source/ci_source";
import { CommanderStatic } from "commander";
/**
 * Reads in the JSON string converts to a dsl object and gets the change context
 * to be used for Danger.
 * @param JSONString {string} from stdin
 * @param program {any} commander
 * @returns {Promise<DangerContext>} context for danger
 */
export declare function jsonToContext(JSONString: string, program: CommanderStatic, source: CISource): Promise<DangerContext>;
