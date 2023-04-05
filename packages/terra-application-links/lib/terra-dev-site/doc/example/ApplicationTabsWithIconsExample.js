"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraApplicationLinks = require("terra-application-links");
var _ApplicationLinksWithIconsConfig = _interopRequireDefault(require("terra-application-links/lib/terra-dev-site/doc/common/ApplicationLinksWithIconsConfig"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var cx = _bind.default.bind(_demoStylesModule.default);
var ApplicationTabsExample = function ApplicationTabsExample() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['demo-header', 'demo-header-with-icons'])
  }, /*#__PURE__*/_react.default.createElement(_terraApplicationLinks.ApplicationTabs, {
    alignment: "center",
    links: _ApplicationLinksWithIconsConfig.default
  }));
};
var _default = ApplicationTabsExample;
exports.default = _default;