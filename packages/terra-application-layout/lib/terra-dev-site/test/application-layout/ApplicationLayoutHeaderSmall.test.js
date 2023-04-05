"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _ApplicationHeader = _interopRequireDefault(require("../../../header/_ApplicationHeader"));
var _ExtensionsExample = _interopRequireDefault(require("../common/ExtensionsExample"));
var ApplicationLayoutHeaderSmall = function ApplicationLayoutHeaderSmall() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_ApplicationHeader.default, {
    id: "test-header",
    layoutConfig: {
      size: 'small',
      toggleMenu: function toggleMenu() {}
    },
    nameConfig: {
      title: 'app-test-title'
    },
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
        size: 'large'
      }
    }),
    applicationLinks: {
      links: [{
        id: '123',
        path: '/something1',
        text: 'item 1'
      }, {
        id: '234',
        path: '/something2',
        text: 'item 2'
      }, {
        id: '345',
        path: '/something3',
        text: 'item 3'
      }]
    }
  }));
};
var _default = ApplicationLayoutHeaderSmall;
exports.default = _default;