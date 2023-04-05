/**
 * transform cucumber table to format suitable for `easy-table`
 * @param   {object[]} rows cucumber table rows
 * @returns {object[]}
 */
export declare const buildTableData: (rows: any) => any;
/**
 * returns table in string format
 * @param   {object[]} data table data
 * @returns {string}
 */
export declare const printTable: (data: any) => string;
/**
 * add indentation
 * @param {string} table printed table
 * @param {string} testIndent whitespaces
 */
export declare const getFormattedRows: (table: string, testIndent: string) => string[];
/**
 * Get Sauce Labs Authentication url
 * @param {string} user
 * @param {string} key
 * @param {string} sessionId
 */
export declare const sauceAuthenticationToken: (user: string, key: string, sessionId: string) => string;
//# sourceMappingURL=utils.d.ts.map