"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeLastListener = void 0;
function removeLastListener(target, eventName) {
    const listener = target.listeners(eventName).reverse()[0];
    if (listener) {
        target.removeListener(eventName, listener);
    }
}
exports.removeLastListener = removeLastListener;
