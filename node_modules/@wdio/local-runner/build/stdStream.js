"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stream_1 = require("stream");
const utils_1 = require("./utils");
class RunnerStream extends stream_1.Transform {
    constructor() {
        super();
        /**
         * Remove events that are automatically created by Writable stream
         */
        this.on('pipe', () => {
            (0, utils_1.removeLastListener)(this, 'close');
            (0, utils_1.removeLastListener)(this, 'drain');
            (0, utils_1.removeLastListener)(this, 'error');
            (0, utils_1.removeLastListener)(this, 'finish');
            (0, utils_1.removeLastListener)(this, 'unpipe');
        });
    }
    _transform(chunk, encoding, callback) {
        callback(undefined, chunk);
    }
    _final(callback) {
        this.unpipe();
        callback();
    }
}
exports.default = RunnerStream;
