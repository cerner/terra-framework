"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _PageContentModule = _interopRequireDefault(require("./PageContent.module.scss"));
/* eslint-disable */

var cx = _bind.default.bind(_PageContentModule.default);
var PageContent = function PageContent(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('outer')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('inner')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('center')
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: cx('button')
  }, title), /*#__PURE__*/_react.default.createElement("div", null, subtitle))));
};
var _default = PageContent;
exports.default = _default;