"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ApplicationTabs = _interopRequireDefault(require("../../../tabs/ApplicationTabs"));
var _testLinkConfig = _interopRequireDefault(require("../common/testLinkConfig"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: _testLinkConfig.default.map(function (link) {
      return link.path;
    }),
    initialIndex: 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _demoStylesModule.default['demo-header']
  }, /*#__PURE__*/_react.default.createElement(_ApplicationTabs.default, {
    id: "test-tabs",
    links: _testLinkConfig.default
  })));
};
exports.default = _default;