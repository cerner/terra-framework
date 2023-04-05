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
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-header"
            }, "Header");
          }
        }
      }
    }
  },
  menu: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-menu"
            }, "Menu");
          }
        }
      }
    }
  },
  content: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: function componentClass() {
            return /*#__PURE__*/_react.default.createElement("div", {
              className: "test-content"
            }, "Content");
          }
        }
      }
    }
  }
};
var NavigationLayoutBasic = function NavigationLayoutBasic() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: ['/'],
    initialIndex: 0
  }, /*#__PURE__*/_react.default.createElement(_terraNavigationLayout.default, {
    config: config,
    menuText: "Menu",
    id: "test-root"
  }));
};
var _default = NavigationLayoutBasic;
exports.default = _default;