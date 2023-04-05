#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var commander_1 = __importDefault(require("commander"));
var sharedDangerfileArgs_1 = __importDefault(require("./utils/sharedDangerfileArgs"));
var resetStatus_1 = require("./ci/resetStatus");
commander_1.default.usage("[options]").description("Reset the status of a GitHub PR to pending.");
(0, sharedDangerfileArgs_1.default)(commander_1.default).parse(process.argv);
var app = commander_1.default;
(0, resetStatus_1.runRunner)(app);
//# sourceMappingURL=danger-reset-status.js.map