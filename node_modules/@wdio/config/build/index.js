"use strict";
/* istanbul ignore file */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_CONFIGS = exports.ConfigParser = exports.isCloudCapability = exports.validateConfig = void 0;
const constants_1 = require("./constants");
Object.defineProperty(exports, "DEFAULT_CONFIGS", { enumerable: true, get: function () { return constants_1.DEFAULT_CONFIGS; } });
const utils_1 = require("./utils");
Object.defineProperty(exports, "validateConfig", { enumerable: true, get: function () { return utils_1.validateConfig; } });
Object.defineProperty(exports, "isCloudCapability", { enumerable: true, get: function () { return utils_1.isCloudCapability; } });
const ConfigParser_1 = __importDefault(require("./lib/ConfigParser"));
exports.ConfigParser = ConfigParser_1.default;
__exportStar(require("./types"), exports);
