"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.template = void 0;
var buildHeader = function (headers) {
    return "| ".concat(headers.join(" | "), " |\n") + "| ".concat(headers.map(function (_) { return "---"; }).join(" | "), " |");
};
var buildRow = function (row) { return "| ".concat(row.join(" | "), " |"); };
var buildRows = function (rows) { return rows.map(buildRow).join("\n"); };
function template(headers, rows) {
    return "".concat(buildHeader(headers), "\n") + "".concat(buildRows(rows));
}
exports.template = template;
//# sourceMappingURL=markdownTableTemplate.js.map