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
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorLines = exports.color = exports.pad = exports.getErrorsFromEvent = exports.sanitizeCaps = exports.sanitizeString = void 0;
const supportsColor = __importStar(require("supports-color"));
const constants_1 = require("./constants");
/**
 * replaces whitespaces with underscore and removes dots
 * @param  {String} str  variable to sanitize
 * @return {String}      sanitized variable
 */
function sanitizeString(str) {
    if (!str) {
        return '';
    }
    return String(str)
        .replace(/^.*\/([^/]+)\/?$/, '$1')
        .replace(/\./g, '_')
        .replace(/\s/g, '')
        .toLowerCase();
}
exports.sanitizeString = sanitizeString;
/**
 * formats capability object into sanitized string for e.g.filenames
 * @param {Object} caps  Selenium capabilities
 */
function sanitizeCaps(caps) {
    if (!caps) {
        return '';
    }
    let result;
    /**
     * mobile caps
     */
    if (caps.deviceName) {
        result = [
            sanitizeString(caps.deviceName),
            sanitizeString(caps.platformName),
            sanitizeString(caps.platformVersion),
            sanitizeString(caps.app)
        ];
    }
    else {
        result = [
            sanitizeString(caps.browserName),
            sanitizeString(caps.version || caps.browserVersion),
            sanitizeString(caps.platform || caps.platformName),
            sanitizeString(caps.app)
        ];
    }
    result = result.filter(n => n !== undefined && n !== '');
    return result.join('.');
}
exports.sanitizeCaps = sanitizeCaps;
/**
 * Takes a event emitted by a framework and extracts
 * an array of errors representing test or hook failures.
 * This exists to maintain compatibility between frameworks
 * with have a soft assertion model (Jasmine) and those that
 * have a hard assertion model (Mocha)
 * @param {*} e  An event emitted by a framework adapter
 */
function getErrorsFromEvent(e) {
    if (e.errors)
        return e.errors;
    if (e.error)
        return [e.error];
    return [];
}
exports.getErrorsFromEvent = getErrorsFromEvent;
/**
 * Pads the given `str` to `len`.
 *
 * @private
 * @param {string} str
 * @param {number} len
 * @return {string}
 */
function pad(str, len) {
    return Array(len - str.length + 1).join(' ') + str;
}
exports.pad = pad;
function color(type, content) {
    if (!supportsColor.stdout) {
        return String(content);
    }
    return `\u001b[${constants_1.COLORS[type]}m${content}\u001b[0m`;
}
exports.color = color;
/**
 * Colors lines for `str`, using the color `name`.
 *
 * @private
 * @param {string} name
 * @param {string} str
 * @return {string}
 */
function colorLines(name, str) {
    return str
        .split('\n')
        .map((str) => color(name, str))
        .join('\n');
}
exports.colorLines = colorLines;
