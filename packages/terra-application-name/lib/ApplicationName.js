"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ApplicationHeaderName", {
  enumerable: true,
  get: function get() {
    return _ApplicationHeaderName.default;
  }
});
Object.defineProperty(exports, "ApplicationMenuName", {
  enumerable: true,
  get: function get() {
    return _ApplicationMenuName.default;
  }
});
exports.default = void 0;
var _ApplicationHeaderName = _interopRequireDefault(require("./ApplicationHeaderName"));
var _ApplicationMenuName = _interopRequireDefault(require("./ApplicationMenuName"));
var ApplicationName = {
  ApplicationHeaderName: _ApplicationHeaderName.default,
  ApplicationMenuName: _ApplicationMenuName.default
};
var _default = ApplicationName;
exports.default = _default;