"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateElementsArray = exports.wrapExpectedWithArray = void 0;
const wrapExpectedWithArray = (el, actual, expected) => {
    if (Array.isArray(el) && el.length > 1 && Array.isArray(actual)) {
        expected = [expected];
    }
    return expected;
};
exports.wrapExpectedWithArray = wrapExpectedWithArray;
const updateElementsArray = (success, received, refetched, full = false) => {
    if (!success) {
        return;
    }
    if (Array.isArray(received) && Array.isArray(refetched)) {
        if (full === true) {
            while (received.length > 0) {
                received.pop();
            }
        }
        if (received.length === 0) {
            for (let i = 0; i < refetched.length; i++) {
                received.push(refetched[i]);
            }
        }
    }
};
exports.updateElementsArray = updateElementsArray;
