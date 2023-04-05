"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraLayout = _interopRequireDefault(require("terra-layout"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ContentExample = _interopRequireDefault(require("../common/ContentExample"));
var _MenuExample = _interopRequireDefault(require("../common/MenuExample"));
var _LayoutDocExampleCommonModule = _interopRequireDefault(require("./LayoutDocExampleCommon.module.scss"));
var cx = _bind.default.bind(_LayoutDocExampleCommonModule.default);
var layout = function layout() {
  return /*#__PURE__*/_react.default.createElement(_terraLayout.default, {
    menu: /*#__PURE__*/_react.default.createElement(_MenuExample.default, null),
    menuText: "Menu",
    className: cx('layout-example')
  }, /*#__PURE__*/_react.default.createElement(_ContentExample.default, null));
};
var _default = layout;
exports.default = _default;