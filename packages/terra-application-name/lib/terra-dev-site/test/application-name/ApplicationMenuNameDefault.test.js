"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraImage = _interopRequireDefault(require("terra-image"));
var _ApplicationMenuName = _interopRequireDefault(require("../../../ApplicationMenuName"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var _terra = _interopRequireDefault(require("./terra.png"));
var cx = _bind.default.bind(_demoStylesModule.default);
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_ApplicationMenuName.default, {
    id: "default",
    title: "Title",
    accessory: /*#__PURE__*/_react.default.createElement(_terraImage.default, {
      alt: "terra accessory",
      variant: "rounded",
      src: _terra.default,
      className: cx('demo-image-container')
    })
  }));
};
exports.default = _default;