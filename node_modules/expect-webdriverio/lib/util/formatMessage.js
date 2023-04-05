"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberError = exports.enhanceErrorBe = exports.enhanceError = exports.not = exports.getSelectors = exports.getSelector = void 0;
const jest_matcher_utils_1 = require("jest-matcher-utils");
const jasmineUtils_1 = require("../jasmineUtils");
const EXPECTED_LABEL = 'Expected';
const RECEIVED_LABEL = 'Received';
const NOT_SUFFIX = ' [not]';
const NOT_EXPECTED_LABEL = EXPECTED_LABEL + NOT_SUFFIX;
const getSelector = (el) => {
    let result = typeof el.selector === 'string' ? el.selector : '<fn>';
    if (Array.isArray(el) && el.props.length > 0) {
        result += ', <props>';
    }
    return result;
};
exports.getSelector = getSelector;
const getSelectors = (el) => {
    const selectors = [];
    let parent;
    if (Array.isArray(el)) {
        selectors.push(`${el.foundWith}(\`${(0, exports.getSelector)(el)}\`)`);
        parent = el.parent;
    }
    else {
        parent = el;
    }
    while (parent && 'selector' in parent) {
        const selector = (0, exports.getSelector)(parent);
        const index = parent.index ? `[${parent.index}]` : '';
        selectors.push(`${parent.index ? '$' : ''}$(\`${selector}\`)${index}`);
        parent = parent.parent;
    }
    return selectors.reverse().join('.');
};
exports.getSelectors = getSelectors;
const not = (isNot) => {
    return `${isNot ? 'not ' : ''}`;
};
exports.not = not;
const enhanceError = (subject, expected, actual, context, verb, expectation, arg2 = '', { message = '', containing = false }) => {
    const { isNot = false } = context;
    subject = typeof subject === 'string' ? subject : (0, exports.getSelectors)(subject);
    let contain = '';
    if (containing) {
        contain = ' containing';
    }
    if (verb) {
        verb += ' ';
    }
    let diffString;
    if (isNot && (0, jasmineUtils_1.equals)(actual, expected)) {
        diffString = `${EXPECTED_LABEL}: ${(0, jest_matcher_utils_1.printExpected)(expected)}\n` +
            `${RECEIVED_LABEL}: ${(0, jest_matcher_utils_1.printReceived)(actual)}`;
    }
    else {
        diffString = (0, jest_matcher_utils_1.printDiffOrStringify)(expected, actual, EXPECTED_LABEL, RECEIVED_LABEL, true);
    }
    if (isNot) {
        diffString = diffString
            .replace(EXPECTED_LABEL, NOT_EXPECTED_LABEL)
            .replace(RECEIVED_LABEL, RECEIVED_LABEL + ' '.repeat(NOT_SUFFIX.length));
    }
    if (message) {
        message += '\n';
    }
    if (arg2) {
        arg2 = ` ${arg2}`;
    }
    const msg = `${message}Expect ${subject} ${(0, exports.not)(isNot)}to ${verb}${expectation}${arg2}${contain}\n\n${diffString}`;
    return msg;
};
exports.enhanceError = enhanceError;
const enhanceErrorBe = (subject, pass, context, verb, expectation, options) => {
    return (0, exports.enhanceError)(subject, (0, exports.not)(context.isNot) + expectation, (0, exports.not)(!pass) + expectation, context, verb, expectation, '', options);
};
exports.enhanceErrorBe = enhanceErrorBe;
const numberError = (options = {}) => {
    if (options.eq) {
        return options.eq;
    }
    if (options.gte && options.lte) {
        return `>= ${options.gte} && <= ${options.lte}`;
    }
    if (options.gte) {
        return `>= ${options.gte}`;
    }
    if (options.lte) {
        return ` <= ${options.lte}`;
    }
    return "no params";
};
exports.numberError = numberError;
