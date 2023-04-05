"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _IconTrash = _interopRequireDefault(require("terra-icon/lib/icon/IconTrash"));
var _IconFolder = _interopRequireDefault(require("terra-icon/lib/icon/IconFolder"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _ApplicationHeader = _interopRequireDefault(require("../../../header/_ApplicationHeader"));
var ApplicationLayoutHeader = function ApplicationLayoutHeader() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(_ApplicationHeader.default, {
    id: "test-header",
    layoutConfig: {
      size: 'large'
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
    applicationLinks: {
      links: [{
        id: '123',
        path: '/something1',
        text: 'item 1',
        icon: /*#__PURE__*/_react.default.createElement(_IconTrash.default, null)
      }, {
        id: '234',
        path: '/something2',
        text: 'item 2',
        icon: /*#__PURE__*/_react.default.createElement(_IconFolder.default, null)
      }, {
        id: '345',
        path: '/something3',
        text: 'item 3',
        icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
      }]
    }
  }));
};
var _default = ApplicationLayoutHeader;
exports.default = _default;