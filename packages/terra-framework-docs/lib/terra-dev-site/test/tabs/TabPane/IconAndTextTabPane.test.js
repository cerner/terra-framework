"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _TabPane = _interopRequireDefault(require("terra-tabs/lib/TabPane"));
var _TabPaneTestModule = _interopRequireDefault(require("./common/TabPane.test.module.scss"));
var cx = _bind.default.bind(_TabPaneTestModule.default);
var IconAndTextTabPane = function IconAndTextTabPane() {
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "tablist",
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_TabPane.default, {
    label: "Icon and Text",
    id: "iconAndText",
    icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
  }));
};
var _default = IconAndTextTabPane;
exports.default = _default;