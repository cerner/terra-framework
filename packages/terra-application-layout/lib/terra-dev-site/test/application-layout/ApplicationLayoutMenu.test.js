"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _reactRouterDom = require("react-router-dom");
var _ApplicationMenu = _interopRequireDefault(require("../../../menu/_ApplicationMenu"));
var _ExtensionsExample = _interopRequireDefault(require("../common/ExtensionsExample"));
var _ContentExample = _interopRequireDefault(require("../common/ContentExample"));
var ApplicationLayoutMenu = function ApplicationLayoutMenu() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(_ApplicationMenu.default, {
    id: "test-menu",
    layoutConfig: {
      size: 'small'
    },
    nameConfig: {
      title: 'app-test-title'
    },
    routingStackDelegate: {},
    utilityConfig: {
      title: 'test-util-title',
      initialSelectedKey: 'test-menu',
      onChange: function onChange() {},
      menuItems: [{
        key: 'test-menu',
        contentLocation: 'body',
        title: 'test-menu-title'
      }]
    },
    extensions: /*#__PURE__*/_react.default.createElement(_ExtensionsExample.default, {
      layoutConfig: {
        size: 'small'
      }
    }),
    content: /*#__PURE__*/_react.default.createElement(_ContentExample.default, null)
  })));
};
var _default = ApplicationLayoutMenu;
exports.default = _default;