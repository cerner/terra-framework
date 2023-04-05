"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.URLFactory = void 0;
class RequestFactory {
    static getInstance(method, endpoint, body, isHubCommand = false) {
        var _a;
        if ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) {
            const reqModule = require('./node');
            // we either need to get the default export explicitly in the prod case, or implicitly
            // in the case of jest mocking
            const NodeJSRequest = reqModule.default || reqModule;
            return new NodeJSRequest(method, endpoint, body, isHubCommand);
        }
        const BrowserRequest = require('./browser').default;
        return new BrowserRequest(method, endpoint, body, isHubCommand);
    }
}
exports.default = RequestFactory;
class URLFactory {
    static getInstance(uri) {
        var _a;
        if ((_a = process === null || process === void 0 ? void 0 : process.versions) === null || _a === void 0 ? void 0 : _a.node) {
            const { URL } = require('url');
            return new URL(uri);
        }
        return new window.URL(uri);
    }
}
exports.URLFactory = URLFactory;
