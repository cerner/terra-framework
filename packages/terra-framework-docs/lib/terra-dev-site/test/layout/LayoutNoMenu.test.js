"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraLayout = _interopRequireDefault(require("terra-layout"));
var _TestHeader = _interopRequireDefault(require("./common/TestHeader"));
var _TestContent = _interopRequireDefault(require("./common/TestContent"));
var _TestLayoutCommonModule = _interopRequireDefault(require("./TestLayoutCommon.module.scss"));
var cx = _bind.default.bind(_TestLayoutCommonModule.default);
var LayoutNoMenu = function LayoutNoMenu() {
  return /*#__PURE__*/_react.default.createElement(_terraLayout.default, {
    className: cx('layout-test'),
    key: "layout-no-menu",
    header: /*#__PURE__*/_react.default.createElement(_TestHeader.default, null),
    id: "test-root"
  }, /*#__PURE__*/_react.default.createElement(_TestContent.default, null));
};
var _default = LayoutNoMenu;
exports.default = _default;