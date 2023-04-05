"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs = __importStar(require("fs"));
var validateDangerfileExists = function (filePath) {
    var stat = null;
    try {
        stat = fs.statSync(filePath);
    }
    catch (error) {
        console.error("Could not find a dangerfile at ".concat(filePath, ", not running against your PR."));
        process.exitCode = 1;
    }
    if (!!stat && !stat.isFile()) {
        console.error("The resource at ".concat(filePath, " appears to not be a file, not running against your PR."));
        process.exitCode = 1;
    }
    return !!stat && stat.isFile();
};
exports.default = validateDangerfileExists;
//# sourceMappingURL=validateDangerfileExists.js.map