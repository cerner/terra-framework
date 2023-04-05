"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactRouterDom = require("react-router-dom");
var _terraNavigationLayout = _interopRequireDefault(require("terra-navigation-layout"));
var _HeaderExample = _interopRequireDefault(require("./HeaderExample"));
var _MenuExample = _interopRequireDefault(require("./MenuExample"));
var _Page1Content = _interopRequireDefault(require("./Page1Content"));
var _Page2Content = _interopRequireDefault(require("./Page2Content"));
var _Page3Content = _interopRequireDefault(require("./Page3Content"));
var _Page1Menu = _interopRequireDefault(require("./Page1Menu"));
var _Page2Menu = _interopRequireDefault(require("./Page2Menu"));
var _NavigationLayoutDocCommonModule = _interopRequireDefault(require("./NavigationLayoutDocCommon.module.scss"));
var cx = _bind.default.bind(_NavigationLayoutDocCommonModule.default);

// If changing config, ensure NavigationLayoutStandardConfig.md is updated to match
var config = {
  header: {
    '/': {
      path: '/',
      component: {
        default: {
          componentClass: _HeaderExample.default
        }
      }
    }
  },
  menu: {
    '/': {
      path: '/',
      component: {
        tiny: {
          componentClass: _MenuExample.default
        },
        small: {
          componentClass: _MenuExample.default
        }
      }
    },
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: _Page1Menu.default
        }
      }
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: _Page2Menu.default
        }
      }
    }
  },
  content: {
    '/page1': {
      path: '/page1',
      component: {
        default: {
          componentClass: _Page1Content.default
        }
      }
    },
    '/page2': {
      path: '/page2',
      component: {
        default: {
          componentClass: _Page2Content.default
        }
      }
    },
    '/page3': {
      path: '/page3',
      component: {
        default: {
          componentClass: _Page3Content.default
        }
      }
    }
  }
};
var NavigationLayoutStandard = (0, _reactRouterDom.withRouter)(function (_ref) {
  var location = _ref.location;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h3", null, "Features"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "Contains 3 different primary routes: /page1, /page2, and /page3"), /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, "/page1 - Has content, inner routes, and an associated menu"), /*#__PURE__*/_react.default.createElement("li", null, "/page2 - Has content and an associated menu"), /*#__PURE__*/_react.default.createElement("li", null, "/page3 - Has only content")), /*#__PURE__*/_react.default.createElement("li", null, "Has a Header that is rendered for all routes (matched to `/` path)"), /*#__PURE__*/_react.default.createElement("li", null, "Header provides links to other primary routes for breakpoints `medium`, `large`, and `huge`"), /*#__PURE__*/_react.default.createElement("li", null, "When size is `tiny` or `small`, a new Menu is presented to expose links to primary routes (the Header hides its links at these sizes)"), /*#__PURE__*/_react.default.createElement("li", null, "Page menus expose navigation to parent menus"), /*#__PURE__*/_react.default.createElement("li", null, "Page content and menus expose Layout-provided functionality")), /*#__PURE__*/_react.default.createElement("h3", null, "Browser Location: ".concat(location.pathname)), /*#__PURE__*/_react.default.createElement(_terraNavigationLayout.default, {
    config: config,
    menuText: "Example Menu",
    className: cx('example-menu')
  }));
});
var NavigationLayoutRouter = function NavigationLayoutRouter() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, {
    initialEntries: ['/page1', '/page1/item1', '/page1/item2', '/page2', 'page3'],
    initialIndex: 0
  }, /*#__PURE__*/_react.default.createElement(NavigationLayoutStandard, null));
};
var _default = NavigationLayoutRouter;
exports.default = _default;