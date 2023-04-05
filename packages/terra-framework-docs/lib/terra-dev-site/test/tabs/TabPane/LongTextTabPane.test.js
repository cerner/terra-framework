"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _TabPane = _interopRequireDefault(require("terra-tabs/lib/TabPane"));
var _TabPaneTestModule = _interopRequireDefault(require("./common/TabPane.test.module.scss"));
var cx = _bind.default.bind(_TabPaneTestModule.default);
var LongTextTabPane = function LongTextTabPane() {
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "tablist",
    className: cx('content-wrapper')
  }, /*#__PURE__*/_react.default.createElement(_TabPane.default, {
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat eros quis erat tincidunt, id scelerisque magna ultricies. Vivamus pellentesque.",
    id: "longText"
  }));
};
var _default = LongTextTabPane;
exports.default = _default;