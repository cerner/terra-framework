"use strict";
// Please don't have includes in here that aren't inside the DSL folder, or the d.ts/flow defs break
Object.defineProperty(exports, "__esModule", { value: true });
exports.isInline = void 0;
/// End of Danger DSL definition
var isInline = function (violation) { return violation.file !== undefined && violation.line !== undefined; };
exports.isInline = isInline;
//# sourceMappingURL=Violation.js.map