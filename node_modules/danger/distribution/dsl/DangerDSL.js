"use strict";
// Please don't have includes in here that aren't inside the DSL folder, or the d.ts/flow defs break
Object.defineProperty(exports, "__esModule", { value: true });
exports.DangerDSL = void 0;
/// End of Danger DSL definition
var DangerDSL = /** @class */ (function () {
    function DangerDSL(platformDSL, git, utils, name) {
        this.git = git;
        this.utils = utils;
        switch (name) {
            case "GitHub":
            case "Fake": // Testing only
                this.github = platformDSL;
            case "BitBucketServer":
                this.bitbucket_server = platformDSL;
            case "GitLab":
                this.gitlab = platformDSL;
        }
    }
    return DangerDSL;
}());
exports.DangerDSL = DangerDSL;
//# sourceMappingURL=DangerDSL.js.map