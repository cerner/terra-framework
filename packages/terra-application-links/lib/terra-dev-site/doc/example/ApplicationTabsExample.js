"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraApplicationLinks = require("terra-application-links");
var _ApplicationLinkConfig = _interopRequireDefault(require("terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinkConfig"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var ApplicationTabsExample = function ApplicationTabsExample() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: _demoStylesModule.default['demo-header']
  }, /*#__PURE__*/_react.default.createElement(_terraApplicationLinks.ApplicationTabs, {
    alignment: "center",
    links: _ApplicationLinkConfig.default
  }));
};
var _default = ApplicationTabsExample;
exports.default = _default;