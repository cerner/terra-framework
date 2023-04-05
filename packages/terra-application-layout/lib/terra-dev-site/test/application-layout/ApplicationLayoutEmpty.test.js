"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationLayoutCommonTestModule = _interopRequireDefault(require("./ApplicationLayoutCommon.test.module.scss"));
var _ApplicationLayout = _interopRequireWildcard(require("../../../ApplicationLayout"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_ApplicationLayoutCommonTestModule.default);
var PageContent = function PageContent(_ref) {
  var contentName = _ref.contentName;
  return /*#__PURE__*/_react.default.createElement("div", null, "Page Content:", ' ', contentName);
};
PageContent.propTypes = {
  contentName: _propTypes.default.string
};

/**
 * The routingConfig API matches that of the NavigationLayout. Routing specifications for the
 * menu and content regions are supported; the header region is not configurable.
 */
var routingConfig = {
  menu: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: _ApplicationLayout.RoutingMenu,
          props: {
            title: 'Page 1 Menu',
            menuItems: [{
              text: 'Item 1',
              path: '/page_1/item_1',
              hasSubMenu: true
            }, {
              text: 'Item 2',
              path: '/page_1/item_2'
            }]
          }
        }
      }
    },
    '/page_1/item_1': {
      path: '/page_1/item_1',
      component: {
        default: {
          componentClass: _ApplicationLayout.RoutingMenu,
          props: {
            title: 'Page 1 Item 1 Menu',
            menuItems: [{
              text: 'Thing 1',
              path: '/page_1/item_1/thing_1'
            }, {
              text: 'Thing 2',
              path: '/page_1/item_1/thing_2'
            }]
          }
        }
      }
    }
  },
  content: {
    '/page_1': {
      path: '/page_1',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 1'
          }
        }
      }
    }
  }
};
var indexPath = '/page_1';
var EmptyApplicationLayoutTest = function EmptyApplicationLayoutTest() {
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
    fill: true,
    id: "application-layout-test"
  }, /*#__PURE__*/_react.default.createElement(_ApplicationLayout.default, {
    routingConfig: routingConfig,
    indexPath: indexPath
  }));
};
var WrappedApplication = (0, _reactRouterDom.withRouter)(EmptyApplicationLayoutTest);
var AppRouter = function AppRouter() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('app-router')
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(WrappedApplication, null)));
};
var _default = AppRouter;
exports.default = _default;