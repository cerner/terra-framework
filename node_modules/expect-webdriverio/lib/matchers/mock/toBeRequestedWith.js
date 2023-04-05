"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toBeRequestedWith = exports.toBeRequestedWithFn = void 0;
const utils_1 = require("../../utils");
const expectAdapter_1 = require("../../util/expectAdapter");
const jasmineUtils_1 = require("../../jasmineUtils");
const STR_LIMIT = 80;
const KEY_LIMIT = 12;
function toBeRequestedWithFn(received, requestedWith = {}, options = {}) {
    const isNot = this.isNot || false;
    const { expectation = 'called with', verb = 'be' } = this;
    return received.browser.call(async () => {
        let actual;
        const pass = await (0, utils_1.waitUntil)(async () => {
            for (const call of received.calls) {
                actual = call;
                if (methodMatcher(call.method, requestedWith.method) &&
                    statusCodeMatcher(call.statusCode, requestedWith.statusCode) &&
                    urlMatcher(call.url, requestedWith.url) &&
                    headersMatcher(call.headers, requestedWith.requestHeaders) &&
                    headersMatcher(call.responseHeaders, requestedWith.responseHeaders) &&
                    bodyMatcher(call.postData, requestedWith.postData) &&
                    bodyMatcher(call.body, requestedWith.response)) {
                    return true;
                }
            }
            return false;
        }, isNot, { ...options, wait: isNot ? 0 : options.wait });
        const message = (0, utils_1.enhanceError)('mock', minifyRequestedWith(requestedWith), minifyRequestMock(actual, requestedWith) || 'was not called', this, verb, expectation, '', options);
        return {
            pass,
            message: () => message,
        };
    });
}
exports.toBeRequestedWithFn = toBeRequestedWithFn;
const methodMatcher = (method, expected) => {
    if (typeof expected === 'undefined') {
        return true;
    }
    if (!Array.isArray(expected)) {
        expected = [expected];
    }
    return expected
        .map((m) => {
        if (typeof m !== 'string') {
            return console.error('expect.toBeRequestedWith: unsupported value passed to method ' + m);
        }
        return m.toUpperCase();
    })
        .includes(method);
};
const statusCodeMatcher = (statusCode, expected) => {
    if (typeof expected === 'undefined') {
        return true;
    }
    if (!Array.isArray(expected)) {
        expected = [expected];
    }
    return expected.includes(statusCode);
};
const urlMatcher = (url, expected) => {
    if (typeof expected === 'undefined') {
        return true;
    }
    if (typeof expected === 'function') {
        return expected(url);
    }
    return (0, jasmineUtils_1.equals)(url, expected);
};
const headersMatcher = (headers, expected) => {
    if (typeof expected === 'undefined') {
        return true;
    }
    if (typeof expected === 'function') {
        return expected(headers);
    }
    return (0, jasmineUtils_1.equals)(headers, expected);
};
const bodyMatcher = (body, expected) => {
    if (typeof expected === 'undefined') {
        return true;
    }
    if (typeof expected === 'function') {
        return expected(body);
    }
    if (typeof body === 'undefined') {
        return false;
    }
    let parsedBody = body;
    if (body instanceof Buffer) {
        parsedBody = body.toString();
    }
    if (typeof (body) === 'string' && isExpectedJsonLike(expected)) {
        parsedBody = tryParseBody(body);
        if (parsedBody === null) {
            return false;
        }
    }
    return (0, jasmineUtils_1.equals)(parsedBody, expected);
};
const isExpectedJsonLike = (expected) => {
    if (typeof expected === 'undefined') {
        return false;
    }
    const actualSample = isMatcher(expected)
        ? expected.sample
        : expected;
    return (Array.isArray(actualSample) ||
        (typeof actualSample === 'object' &&
            actualSample !== null &&
            actualSample instanceof RegExp === false));
};
const isMatcher = (filter) => {
    var _a;
    return typeof ((_a = filter.__proto__) === null || _a === void 0 ? void 0 : _a.asymmetricMatch) === 'function';
};
const tryParseBody = (jsonString, fallback = null) => {
    try {
        return typeof jsonString === 'undefined' ? fallback : JSON.parse(jsonString);
    }
    catch (_a) {
        return fallback;
    }
};
const minifyRequestMock = (requestMock, requestedWith) => {
    if (typeof requestMock === 'undefined') {
        return requestMock;
    }
    const r = {
        url: requestMock.url,
        method: requestMock.method,
        requestHeaders: requestMock.headers,
        responseHeaders: requestMock.responseHeaders,
        postData: typeof requestMock.postData === 'string' && isExpectedJsonLike(requestedWith.postData)
            ? tryParseBody(requestMock.postData, requestMock.postData)
            : requestMock.postData,
        response: typeof requestMock.body === 'string' && isExpectedJsonLike(requestedWith.response)
            ? tryParseBody(requestMock.body, requestMock.body)
            : requestMock.body,
    };
    deleteUndefinedValues(r, requestedWith);
    return minifyRequestedWith(r);
};
const minifyRequestedWith = (r) => {
    const result = {
        url: requestedWithParamToString(r.url),
        method: r.method,
        requestHeaders: requestedWithParamToString(r.requestHeaders, shortenJson),
        responseHeaders: requestedWithParamToString(r.responseHeaders, shortenJson),
        postData: requestedWithParamToString(r.postData, shortenJson),
        response: requestedWithParamToString(r.response, shortenJson),
    };
    deleteUndefinedValues(result);
    return result;
};
const requestedWithParamToString = (param, transformFn) => {
    if (typeof param === 'undefined') {
        return;
    }
    if (typeof param === 'function') {
        param = param.toString();
    }
    else if (isMatcher(param)) {
        return (param.constructor.name +
            ' ' +
            (JSON.stringify(param.sample) || ''));
    }
    else if (transformFn && typeof param === 'object' && param !== null) {
        param = transformFn(param);
    }
    if (typeof param === 'string') {
        param = shortenString(param);
    }
    return param;
};
const shortenJson = (obj, lengthLimit = STR_LIMIT * 2, keyLimit = KEY_LIMIT) => {
    if (JSON.stringify(obj).length < lengthLimit) {
        return obj;
    }
    if (Array.isArray(obj)) {
        const firstItem = typeof obj[0] === 'object' && obj[0] !== null
            ? shortenJson(obj[0], lengthLimit / 2, keyLimit / 4)
            : shortenString(JSON.stringify(obj[0]));
        return [firstItem, `... ${obj.length - 1} more items`];
    }
    const minifiedObject = {};
    const entries = Object.entries(obj);
    if (keyLimit >= 4) {
        entries.slice(0, keyLimit).forEach(([k, v]) => {
            if (typeof v === 'object' && v !== null) {
                v = shortenJson(v, lengthLimit / 2, keyLimit / 4);
            }
            else if (typeof v === 'string') {
                v = shortenString(v, 16);
            }
            minifiedObject[shortenString(k, 24)] = v;
        });
    }
    if (entries.length > keyLimit) {
        minifiedObject['...'] = `${entries.length} items in total`;
    }
    return minifiedObject;
};
const shortenString = (str, limit = STR_LIMIT) => {
    return str.length > limit ? str.substring(0, limit / 2 - 1) + '..' + str.substr(1 - limit / 2) : str;
};
const deleteUndefinedValues = (obj, baseline = obj) => {
    Object.keys(obj).forEach((k) => {
        if (typeof baseline[k] === 'undefined') {
            delete obj[k];
        }
    });
};
function toBeRequestedWith(...args) {
    return expectAdapter_1.runExpect.call(this || {}, toBeRequestedWithFn, args);
}
exports.toBeRequestedWith = toBeRequestedWith;
