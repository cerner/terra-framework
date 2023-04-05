"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraHookshot = _interopRequireDefault(require("terra-hookshot"));
var _HookshotTestDocCommonModule = _interopRequireDefault(require("./HookshotTestDocCommon.module.scss"));
var cx = _bind.default.bind(_HookshotTestDocCommonModule.default);
var HookshotContent = function HookshotContent(props) {
  return /*#__PURE__*/_react.default.createElement(_terraHookshot.default.Content, props, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('hookshot-content-wrapper')
  }, "Hookshot"));
};
var _default = HookshotContent;
exports.default = _default;