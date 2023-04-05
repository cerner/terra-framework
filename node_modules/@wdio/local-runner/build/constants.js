"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BUFFER_OPTIONS = exports.DEBUGGER_MESSAGES = exports.SHUTDOWN_TIMEOUT = void 0;
exports.SHUTDOWN_TIMEOUT = 5000;
exports.DEBUGGER_MESSAGES = [
    'Debugger listening on',
    'Debugger attached',
    'Waiting for the debugger'
];
exports.BUFFER_OPTIONS = {
    initialSize: (1000 * 1024),
    incrementAmount: (100 * 1024) // grow by 10 kilobytes each time buffer overflows.
};
