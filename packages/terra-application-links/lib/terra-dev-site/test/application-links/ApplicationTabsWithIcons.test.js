"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationTabs = _interopRequireDefault(require("../../../tabs/ApplicationTabs"));
var _testLinksWithIconsConfig = _interopRequireDefault(require("../common/testLinksWithIconsConfig"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var cx = _bind.default.bind(_demoStylesModule.default);
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: _testLinksWithIconsConfig.default.map(function (link) {
      return link.path;
    }),
    initialIndex: 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx(['demo-header', 'demo-header-with-icons'])
  }, /*#__PURE__*/_react.default.createElement(_ApplicationTabs.default, {
    id: "test-tabs",
    links: _testLinksWithIconsConfig.default
  })));
};
exports.default = _default;