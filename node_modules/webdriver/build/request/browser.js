"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("@wdio/logger"));
const index_1 = __importDefault(require("./index"));
const ky_1 = __importDefault(require("ky"));
const log = (0, logger_1.default)('webdriver');
const UNSUPPORTED_OPTS = [
    'agent',
    'responseType',
    'searchParams',
];
class BrowserRequest extends index_1.default {
    constructor(method, endpoint, body, isHubCommand = false) {
        super(method, endpoint, body, isHubCommand);
    }
    _createOptions(options, sessionId) {
        return super._createOptions(options, sessionId, true);
    }
    async _libRequest(url, options) {
        const kyOptions = {};
        for (const opt of Object.keys(options)) {
            if (typeof options[opt] !== 'undefined' &&
                UNSUPPORTED_OPTS.includes(opt) &&
                options[opt] !== this.defaultOptions[opt]) {
                log.info(`Browser-based webdriver does not support the '${String(opt)}' option; behavior may be unexpected`);
                continue;
            }
            // @ts-expect-error
            kyOptions[opt] = options[opt];
        }
        if (options.username && options.password) {
            const encodedAuth = Buffer.from(`${options.username}:${options.password}`, 'utf8').toString('base64');
            kyOptions.headers = {
                ...kyOptions.headers,
                Authorization: `Basic ${encodedAuth}`
            };
        }
        const res = await (0, ky_1.default)(url, kyOptions);
        return {
            statusCode: res.status,
            body: await res.json(),
        };
    }
    _libPerformanceNow() {
        return performance.now();
    }
}
exports.default = BrowserRequest;
