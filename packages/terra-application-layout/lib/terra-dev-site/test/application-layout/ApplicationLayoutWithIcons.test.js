"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _reactIntl = require("react-intl");
var _terraImage = _interopRequireDefault(require("terra-image"));
var _terraAvatar = _interopRequireDefault(require("terra-avatar"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _IconTrash = _interopRequireDefault(require("terra-icon/lib/icon/IconTrash"));
var _IconFolder = _interopRequireDefault(require("terra-icon/lib/icon/IconFolder"));
var _IconSearch = _interopRequireDefault(require("terra-icon/lib/icon/IconSearch"));
var _IconPrinter = _interopRequireDefault(require("terra-icon/lib/icon/IconPrinter"));
var _IconAllergy = _interopRequireDefault(require("terra-icon/lib/icon/IconAllergy"));
var _IconPadlock = _interopRequireDefault(require("terra-icon/lib/icon/IconPadlock"));
var _IconFeatured = _interopRequireDefault(require("terra-icon/lib/icon/IconFeatured"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ApplicationLayoutCommonTestModule = _interopRequireDefault(require("./ApplicationLayoutCommon.test.module.scss"));
var _ApplicationLayout = _interopRequireWildcard(require("../../../ApplicationLayout"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationLayoutCommonTestModule.default);
var PageContent = function PageContent(_ref) {
  var contentName = _ref.contentName;
  return /*#__PURE__*/_react.default.createElement("div", null, "Page Content:", ' ', contentName);
};
PageContent.propTypes = {
  contentName: _propTypes.default.string
};
var TestExtensions = function TestExtensions() {
  return /*#__PURE__*/_react.default.createElement(_terraButton.default, {
    text: "Extensions"
  });
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
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 2'
          }
        }
      }
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 3'
          }
        }
      }
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 4'
          }
        }
      }
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 5'
          }
        }
      }
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 6'
          }
        }
      }
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: PageContent,
          props: {
            contentName: 'Page 7'
          }
        }
      }
    }
  }
};

/**
 * The navigationItems will be used to present the ApplicationLayout's navigation controls. The paths provided here must be present in
 * the routingConfig. If no navigation controls are desired, these items can be omitted.
 *
 * With standard rendering, the items will be presented as tabs within the ApplicationLayout's header.
 * With compact rendering, the items will be presented within the layout's menu region within a ApplicationLayout-managed menu.
 */
var navigationItems = [{
  path: '/page_1',
  text: 'Page 1',
  icon: /*#__PURE__*/_react.default.createElement(_IconTrash.default, null)
}, {
  path: '/page_2',
  text: 'Page 2',
  icon: /*#__PURE__*/_react.default.createElement(_IconFolder.default, null)
}, {
  path: '/page_3',
  text: 'Page 3',
  icon: /*#__PURE__*/_react.default.createElement(_IconSearch.default, null)
}, {
  path: '/page_4',
  text: 'Page 4',
  icon: /*#__PURE__*/_react.default.createElement(_IconPrinter.default, null)
}, {
  path: '/page_5',
  text: 'Page 5',
  icon: /*#__PURE__*/_react.default.createElement(_IconAllergy.default, null)
}, {
  path: '/page_6',
  text: 'Page 6',
  icon: /*#__PURE__*/_react.default.createElement(_IconPadlock.default, null)
}, {
  path: '/page_7',
  text: 'Page 7',
  icon: /*#__PURE__*/_react.default.createElement(_IconFeatured.default, null)
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
var indexPath = '/page_1';
var userAvatar = /*#__PURE__*/_react.default.createElement(_terraAvatar.default, {
  alt: "User, Test",
  initials: "TU",
  key: "user_avatar"
});
var userData = {
  name: 'User, Test',
  detail: 'User Detail',
  photo: userAvatar
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
var nameConfig = Object.freeze({
  title: 'Test Application',
  accessory: /*#__PURE__*/_react.default.createElement(_terraImage.default, {
    variant: "rounded",
    src: "https://github.com/cerner/terra-framework/raw/main/terra.png",
    alt: "App logo",
    height: "26px",
    width: "26px"
  })
});
var ApplicationLayoutTest = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationLayoutTest, _React$Component);
  var _super = _createSuper(ApplicationLayoutTest);
  function ApplicationLayoutTest(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationLayoutTest);
    _this = _super.call(this, props);
    _this.state = {
      checkboxItemEnabled: false
    };
    return _this;
  }
  (0, _createClass2.default)(ApplicationLayoutTest, [{
    key: "render",
    value: function render() {
      var intl = this.props.intl;
      var checkboxItemEnabled = this.state.checkboxItemEnabled;
      var customUtilityItems = [{
        key: 'additional-1',
        title: 'Drill-in Item',
        childKeys: ['additional-sub-1', 'additional-sub-2'],
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'additional-sub-1',
        title: 'Additional Item 1 - Sub 1',
        parentKey: 'additional-1'
      }, {
        key: 'additional-sub-2',
        title: 'Additional Item 1 - Sub 2',
        parentKey: 'additional-1'
      }, {
        key: 'checkbox-item',
        title: 'Custom Checkbox Item',
        isSelectable: true,
        isSelected: checkboxItemEnabled,
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'read-only-item',
        title: 'Custom Read-Only Item',
        id: 'readonly',
        isReadOnly: true,
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'additional-3',
        contentLocation: _ApplicationLayout.Utils.utilityHelpers.locations.FOOTER,
        title: 'Custom Footer',
        parentKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }];

      /**
       * The data provided for utilityConfig will be visible in the ApplicationLayout's header in the
       * standard rendering mode and within the menus in the compact rendering mode.
       *
       * The ApplicationLayout's Utils export provides a helper function named getDefaultUtilityConfig that will
       * generate the configuration for the standard set of utility options. If the standard configuration is not
       * desirable, an entirely custom configuration can be used instead.
       */
      var utilityConfig = Object.freeze({
        title: 'Test, User',
        accessory: userAvatar,
        menuItems: _ApplicationLayout.Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
        initialSelectedKey: _ApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU,
        onChange: function onChange() {}
      });
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true,
        id: "application-layout-test"
      }, /*#__PURE__*/_react.default.createElement(_ApplicationLayout.default, {
        nameConfig: nameConfig,
        utilityConfig: utilityConfig,
        routingConfig: routingConfig,
        navigationItems: navigationItems,
        extensions: /*#__PURE__*/_react.default.createElement(TestExtensions, null),
        indexPath: indexPath
      }));
    }
  }]);
  return ApplicationLayoutTest;
}(_react.default.Component);
ApplicationLayoutTest.propTypes = {
  intl: _propTypes.default.shape({})
};
var WrappedApplication = (0, _reactRouterDom.withRouter)((0, _reactIntl.injectIntl)(ApplicationLayoutTest));
var AppRouter = function AppRouter() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('app-router')
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(WrappedApplication, null)));
};
var _default = AppRouter;
exports.default = _default;