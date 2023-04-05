"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeCommand = void 0;
const refetchElements_1 = require("./refetchElements");
async function executeCommand(el, condition, options = {}, params = [], fullRefetch = false) {
    const { isNot = false } = this;
    let elements;
    if (Array.isArray(el)) {
        elements = await (0, refetchElements_1.refetchElements)(el, options.wait, fullRefetch);
    }
    else {
        elements = [el];
    }
    if (elements.length === 0) {
        return {
            el: elements,
            success: false,
        };
    }
    const results = [];
    for (const element of elements) {
        results.push(await condition(element, ...params, options));
    }
    const values = [...new Set(results.filter(result => result.result === isNot).map(result => result.value))];
    return {
        el: Array.isArray(el) ? elements : el,
        success: results.every(result => result.result === true),
        values: values.length > 1 ? values : values[0]
    };
}
exports.executeCommand = executeCommand;
