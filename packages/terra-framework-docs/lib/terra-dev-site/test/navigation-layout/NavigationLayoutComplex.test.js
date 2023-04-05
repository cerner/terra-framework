"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _terraNavigationLayout = _interopRequireDefault(require("terra-navigation-layout"));
var config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
              className: "test-header"
            }, "Header"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
              to: "/page1",
              className: "page-1-link"
            }, "Page 1"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
              to: "/page2",
              className: "page-2-link"
            }, "Page 2"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
              to: "/page3",
              className: "page-3-link"
            }, "Page 3"));
          }
        }
      }
    }
  },
  menu: {
    '/page1': {
      path: '/page1',
      component: {
        tiny: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-menu"
            }, "Tiny Menu");
          }
        },
        medium: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-menu"
            }, "Medium Menu");
          }
        },
        huge: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-menu"
            }, "Huge Menu");
          }
        }
      }
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-menu"
            }, "Menu");
          }
        },
        huge: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-menu-huge"
            }, "Huge Menu");
          }
        }
      }
    }
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "page-1-content"
            }, "Page 1 Content");
          }
        }
      }
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "page-2-content"
            }, "Page 2 Content");
          }
        }
      }
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "page-3-content"
            }, "Page 3 Content");
          }
        }
      }
    }
  }
};
var NavigationLayoutComplex = function NavigationLayoutComplex() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: ['/page1', '/page2', '/page3'],
    initialIndex: 0
  }, /*#__PURE__*/_react.default.createElement(_terraNavigationLayout.default, {
    config: config,
    menuText: "Menu",
    id: "test-root"
  }));
};
var _default = NavigationLayoutComplex;
exports.default = _default;