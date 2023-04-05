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
var CustomDisplayTabPane = function CustomDisplayTabPane() {
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "tablist",
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_TabPane.default, {
    label: "Custom Display",
    id: "customDisplay",
    customDisplay: /*#__PURE__*/_react.default.createElement("div", {
      id: "customDisplayContent"
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: cx('custom-display-content')
    }, "Custom Display"), /*#__PURE__*/_react.default.createElement(_IconSearch.default, null))
  }));
};
var _default = CustomDisplayTabPane;
exports.default = _default;