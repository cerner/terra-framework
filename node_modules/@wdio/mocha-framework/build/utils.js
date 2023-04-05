"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadModule = void 0;
function loadModule(name, context) {
    try {
        // @ts-ignore
        module.context = context;
        require(name);
    }
    catch (err) {
        throw new Error(`Module ${name} can't get loaded. Are you sure you have installed it?\n` +
            'Note: if you\'ve installed WebdriverIO globally you need to install ' +
            'these external modules globally too!');
    }
}
exports.loadModule = loadModule;
