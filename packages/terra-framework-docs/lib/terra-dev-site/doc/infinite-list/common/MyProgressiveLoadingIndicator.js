"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraDocs = require("@cerner/terra-docs");
var _MyProgressiveLoadingIndicatorModule = _interopRequireDefault(require("./MyProgressiveLoadingIndicator.module.scss"));
var cx = _bind.default.bind(_MyProgressiveLoadingIndicatorModule.default);
var MyProgressiveLoadingIndicator = function MyProgressiveLoadingIndicator() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('indicator')
  }, /*#__PURE__*/_react.default.createElement(_terraDocs.Placeholder, {
    title: "I'm Loading More"
  }));
};
var _default = MyProgressiveLoadingIndicator;
exports.default = _default;