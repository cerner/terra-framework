"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const split = require("split2");
const stream_1 = require("stream");
const constants_1 = require("./constants");
function runnerTransformStream(cid, inputStream) {
    return inputStream
        .pipe(split(/\r?\n/, line => `${line}\n`))
        .pipe(ignore(constants_1.DEBUGGER_MESSAGES))
        .pipe(map(line => `[${cid}] ${line}`));
}
exports.default = runnerTransformStream;
function ignore(patternsToIgnore) {
    return new stream_1.Transform({
        decodeStrings: false,
        transform(chunk, encoding, next) {
            if (patternsToIgnore.some(m => chunk.startsWith(m))) {
                return next();
            }
            return next(null, chunk);
        },
        final(next) {
            this.unpipe();
            next();
        },
    });
}
function map(mapper) {
    return new stream_1.Transform({
        decodeStrings: false,
        transform(chunk, encoding, next) {
            return next(null, mapper(chunk));
        },
        final(next) {
            this.unpipe();
            next();
        },
    });
}
