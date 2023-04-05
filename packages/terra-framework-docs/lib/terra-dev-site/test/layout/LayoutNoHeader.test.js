"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraLayout = _interopRequireDefault(require("terra-layout"));
var _TestMenu = _interopRequireDefault(require("./common/TestMenu"));
var _TestContent = _interopRequireDefault(require("./common/TestContent"));
var _TestLayoutCommonModule = _interopRequireDefault(require("./TestLayoutCommon.module.scss"));
var cx = _bind.default.bind(_TestLayoutCommonModule.default);
var LayoutNoHeader = function LayoutNoHeader() {
  return /*#__PURE__*/_react.default.createElement(_terraLayout.default, {
    className: cx('layout-test'),
    key: "layout-no-header",
    menu: /*#__PURE__*/_react.default.createElement(_TestMenu.default, null),
    menuText: "Menu Text",
    id: "test-root"
  }, /*#__PURE__*/_react.default.createElement(_TestContent.default, null));
};
var _default = LayoutNoHeader;
exports.default = _default;