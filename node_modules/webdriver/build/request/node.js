"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const https_1 = __importDefault(require("https"));
const got = __importStar(require("got"));
const index_1 = __importStar(require("./index"));
const perf_hooks_1 = require("perf_hooks");
const agents = {
    http: new http_1.default.Agent({ keepAlive: true }),
    https: new https_1.default.Agent({ keepAlive: true })
};
class NodeJSRequest extends index_1.default {
    constructor(method, endpoint, body, isHubCommand = false) {
        super(method, endpoint, body, isHubCommand);
        this.defaultAgents = agents;
    }
    async _libRequest(url, opts) {
        try {
            return (await got.default(url, opts));
        }
        catch (err) {
            if (!(err instanceof Error)) {
                throw new index_1.RequestLibError(err.message || err);
            }
            throw err;
        }
    }
    _libPerformanceNow() {
        return perf_hooks_1.performance.now();
    }
}
exports.default = NodeJSRequest;
