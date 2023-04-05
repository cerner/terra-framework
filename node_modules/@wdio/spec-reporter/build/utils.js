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
exports.sauceAuthenticationToken = exports.getFormattedRows = exports.printTable = exports.buildTableData = void 0;
const easy_table_1 = __importDefault(require("easy-table"));
const Crypto = __importStar(require("crypto"));
const SEPARATOR = '│';
/**
 * transform cucumber table to format suitable for `easy-table`
 * @param   {object[]} rows cucumber table rows
 * @returns {object[]}
 */
const buildTableData = (rows) => rows.map((row) => {
    const tableRow = {};
    [...row.cells, ''].forEach((cell, idx) => {
        tableRow[idx] = (idx === 0 ? `${SEPARATOR} ` : '') + cell;
    });
    return tableRow;
});
exports.buildTableData = buildTableData;
/**
 * returns table in string format
 * @param   {object[]} data table data
 * @returns {string}
 */
const printTable = (data) => easy_table_1.default.print(data, undefined, (table) => {
    table.separator = ` ${SEPARATOR} `;
    return table.print();
});
exports.printTable = printTable;
/**
 * add indentation
 * @param {string} table printed table
 * @param {string} testIndent whitespaces
 */
const getFormattedRows = (table, testIndent) => table.split('\n').filter(Boolean).map((line) => `${testIndent}  ${line}`.trimRight());
exports.getFormattedRows = getFormattedRows;
/**
 * Get Sauce Labs Authentication url
 * @param {string} user
 * @param {string} key
 * @param {string} sessionId
 */
const sauceAuthenticationToken = (user, key, sessionId) => {
    const secret = `${user}:${key}`;
    // Create the token
    const token = Crypto
        // Calling createHmac method
        .createHmac('md5', secret)
        // Update data
        .update(sessionId)
        // Encoding to be used
        .digest('hex');
    return `?auth=${token}`;
};
exports.sauceAuthenticationToken = sauceAuthenticationToken;
