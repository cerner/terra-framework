import { SharedCLI } from "./sharedDangerfileArgs";
import { CISource } from "../../ci_source/ci_source";
declare const getRuntimeCISource: (app: SharedCLI) => Promise<CISource | undefined>;
export default getRuntimeCISource;
