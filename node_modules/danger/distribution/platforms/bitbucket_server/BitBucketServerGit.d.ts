import { GitDSL, GitJSONDSL } from "../../dsl/GitDSL";
import { BitBucketServerJSONDSL } from "../../dsl/BitBucketServerDSL";
import { BitBucketServerAPI } from "./BitBucketServerAPI";
export default function gitDSLForBitBucketServer(api: BitBucketServerAPI): Promise<GitJSONDSL>;
export declare const bitBucketServerGitDSL: (bitBucketServer: BitBucketServerJSONDSL, json: GitJSONDSL, bitBucketServerAPI: BitBucketServerAPI) => GitDSL;
