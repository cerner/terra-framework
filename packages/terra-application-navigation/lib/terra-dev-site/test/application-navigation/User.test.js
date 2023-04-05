"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ApplicationNavigation = _interopRequireDefault(require("../../../ApplicationNavigation"));
var _FixedHeight = _interopRequireDefault(require("../common/FixedHeight"));
var userConfig = {
  name: 'Test Name',
  initials: 'TN'
};
var userConfigDetail = {
  name: 'Test Name',
  initials: 'TN',
  detail: 'Test Detail'
};
var userConfigSrc = {
  name: 'Test Name',
  initials: 'TN',
  imageSrc: 'test-src'
};
var userConfigImageFallbackNoInitials = {
  name: 'Test Name',
  imageSrc: 'test-src'
};
var userConfigNoInitials = {
  name: 'Test Name'
};
var UserTest = function UserTest() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    userConfig: userConfig
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    userConfig: userConfigDetail
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    userConfig: userConfigSrc
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    userConfig: userConfigNoInitials
  })), /*#__PURE__*/_react.default.createElement(_FixedHeight.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationNavigation.default, {
    userConfig: userConfigImageFallbackNoInitials
  })));
};
var _default = UserTest;
exports.default = _default;