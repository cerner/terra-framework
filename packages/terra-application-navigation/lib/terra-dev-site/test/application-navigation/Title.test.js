"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
var _FixedHeight = _interopRequireDefault(require("../common/FixedHeight"));
var _Logo = _interopRequireDefault(require("../common/Logo"));
var titleConfig = {
  title: 'Test Title'
};
var titleConfigHeadLine = {
  title: 'Test Title',
  headline: 'Test HeadLine'
};
var titleConfigSubline = {
  title: 'Test Title',
  subline: 'Test Subline'
};
var titleConfigElement = {
  title: 'Test Title',
  element: /*#__PURE__*/_react.default.createElement(_Logo.default, null)
};
var titleConfigHideTitle = {
  title: 'Test Title',
  hideTitleWithinDrawerMenu: true
};

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
var TitleTest = function TitleTest() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfig
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfigHeadLine
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfigSubline
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfigElement
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    titleConfig: titleConfigHideTitle
  })));
};
var _default = TitleTest;
exports.default = _default;