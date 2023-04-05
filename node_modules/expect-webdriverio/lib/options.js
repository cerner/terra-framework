"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultOptions = exports.getConfig = void 0;
const DEFAULT_OPTIONS = {
    wait: 2000,
    interval: 100,
};
let mode = 'jest';
let expectLib;
if (global.expectWdio) {
    expectLib = global.expectWdio;
}
else if (global.jasmine && !((_a = global.expect) === null || _a === void 0 ? void 0 : _a.extend)) {
    expectLib = global.jasmine;
    mode = 'jasmine';
}
else {
    expectLib = global.expect;
}
if (!expectLib._expectWebdriverio) {
    expectLib._expectWebdriverio = { options: { ...DEFAULT_OPTIONS }, mode };
}
const getConfig = () => expectLib._expectWebdriverio;
exports.getConfig = getConfig;
const setDefaultOptions = (options = {}) => {
    Object.entries(options).forEach(([key, value]) => {
        if (key in DEFAULT_OPTIONS) {
            expectLib._expectWebdriverio.options[key] = value;
        }
    });
};
exports.setDefaultOptions = setDefaultOptions;
