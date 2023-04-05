"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ApplicationTabs = _interopRequireDefault(require("../../../tabs/ApplicationTabs"));
var _testExternalConfig = _interopRequireDefault(require("../common/testExternalConfig"));
var _demoStylesModule = _interopRequireDefault(require("./demoStyles.module.scss"));
var _default = function _default() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: _testExternalConfig.default.map(function (link) {
      return link.path;
    }),
    initialIndex: 0
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: _demoStylesModule.default['demo-header']
  }, /*#__PURE__*/_react.default.createElement(_ApplicationTabs.default, {
    id: "test-tabs",
    alignment: "end",
    links: _testExternalConfig.default
  })));
};
exports.default = _default;