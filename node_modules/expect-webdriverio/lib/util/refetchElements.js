"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refetchElements = void 0;
const options_1 = require("../options");
const config = (0, options_1.getConfig)();
const { options: DEFAULT_OPTIONS } = config;
const refetchElements = async (elements, wait = DEFAULT_OPTIONS.wait, full = false) => {
    if (elements) {
        if (wait > 0 && (elements.length === 0 || full)) {
            elements = await elements.parent[elements.foundWith](elements.selector, ...elements.props);
        }
    }
    return elements;
};
exports.refetchElements = refetchElements;
