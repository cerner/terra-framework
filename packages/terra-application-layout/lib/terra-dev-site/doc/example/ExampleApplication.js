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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraApplicationLayout = _interopRequireWildcard(require("terra-application-layout"));
var _ApplicationContent = _interopRequireDefault(require("terra-application-layout/lib/terra-dev-site/doc/common/ApplicationContent"));
var _ApplicationMenu = _interopRequireDefault(require("terra-application-layout/lib/terra-dev-site/doc/common/ApplicationMenu"));
var _UtilityOption = _interopRequireDefault(require("terra-application-layout/lib/terra-dev-site/doc/common/UtilityOption"));
var _ApplicationExtensions = _interopRequireDefault(require("terra-application-layout/lib/terra-dev-site/doc/common/ApplicationExtensions"));
var _henry = _interopRequireDefault(require("terra-application-layout/lib/terra-dev-site/doc/common/henry.jpg"));
var _ApplicationLayoutExampleCommonModule = _interopRequireDefault(require("./ApplicationLayoutExampleCommon.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationLayoutExampleCommonModule.default);

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
          componentClass: _ApplicationMenu.default,
          props: {
            baseUrl: '/page_1',
            menuName: 'Page 1 Menu',
            includeNestedMenu: true
          }
        }
      }
    },
    '/page_1/nested': {
      path: '/page_1/nested',
      component: {
        default: {
          componentClass: _ApplicationMenu.default,
          props: {
            baseUrl: '/page_1/nested',
            menuName: 'Nested Menu'
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
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_1',
            contentName: 'Page 1'
          }
        }
      }
    },
    '/page_2': {
      path: '/page_2',
      component: {
        default: {
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_2',
            contentName: 'Page 2',
            noMenu: true
          }
        }
      }
    },
    '/page_3': {
      path: '/page_3',
      component: {
        default: {
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_3',
            contentName: 'Page 3',
            showDummyContent: true
          }
        }
      }
    },
    '/page_4': {
      path: '/page_4',
      component: {
        default: {
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_4',
            contentName: 'Page 4',
            showDummyContent: true
          }
        }
      }
    },
    '/page_5': {
      path: '/page_5',
      component: {
        default: {
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_5',
            contentName: 'Page 5',
            showDummyContent: true
          }
        }
      }
    },
    '/page_6': {
      path: '/page_6',
      component: {
        default: {
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_6',
            contentName: 'Page 6',
            showDummyContent: true
          }
        }
      }
    },
    '/page_7': {
      path: '/page_7',
      component: {
        default: {
          componentClass: _ApplicationContent.default,
          props: {
            basePath: '/page_7',
            contentName: 'Page 7',
            showDummyContent: true
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
  text: 'Page 1'
}, {
  path: '/page_2',
  text: 'Page 2'
}, {
  path: '/page_3',
  text: 'Page 3'
}, {
  path: '/page_4',
  text: 'Page 4'
}, {
  path: '/page_5',
  text: 'Page 5'
}, {
  path: '/page_6',
  text: 'Page 6'
}, {
  path: '/page_7',
  text: 'Page 7'
}];

/**
 * The indexPath will be given to the NavigationLayout to set up the appropriate redirects. If users attempt to navigate to a path unsupported
 * by the routingConfig, they will be redirected to this route. This path should therefore be present in the routingConfig.
 */
var indexPath = '/page_1/item_0';

/**
 * Any component type can be used for the userData photo; however, the Avatar is an appropriate choice.
 */
var userAvatar = /*#__PURE__*/_react.default.createElement(_terraAvatar.default, {
  image: _henry.default,
  initials: "HS",
  alt: "Swanson, Henry",
  key: "user_avatar"
});

/**
 * The userData information will be used to construct the User Information utility menu item that is created by
 * the default utility configuration generated by `getDefaultUtilityItems`.
 */
var userData = {
  name: 'Swanson, Henry',
  detail: 'Henry Swanson\'s my name, and excitement\'s my game.',
  photo: userAvatar
};

/**
 * The data provided for nameConfig will be visible in the ApplicationLayout's header, as well
 * as in any menus at the tiny and small breakpoints.
 */
var nameConfig = Object.freeze({
  title: 'Example Application',
  accessory: /*#__PURE__*/_react.default.createElement(_terraImage.default, {
    variant: "rounded",
    src: "https://github.com/cerner/terra-framework/raw/main/terra.png",
    alt: "App logo",
    height: "26px",
    width: "26px"
  })
});
var ExampleApplication = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ExampleApplication, _React$Component);
  var _super = _createSuper(ExampleApplication);
  function ExampleApplication(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ExampleApplication);
    _this = _super.call(this, props);
    _this.state = {
      checkboxItemEnabled: false
    };
    return _this;
  }
  (0, _createClass2.default)(ExampleApplication, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        intl = _this$props.intl,
        location = _this$props.location;
      var checkboxItemEnabled = this.state.checkboxItemEnabled;
      var customUtilityItems = [{
        key: 'additional-1',
        title: 'Drill-in Item',
        childKeys: ['additional-sub-1', 'additional-sub-2'],
        parentKey: _terraApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
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
        isReadOnly: false,
        parentKey: _terraApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'readonly-item',
        title: 'Custom ReadOnly Item',
        isSelectable: true,
        isReadOnly: true,
        parentKey: _terraApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
      }, {
        key: 'additional-3',
        contentLocation: _terraApplicationLayout.Utils.utilityHelpers.locations.FOOTER,
        title: 'Custom Footer',
        parentKey: _terraApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU
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
        title: 'Swanson, Henry',
        accessory: userAvatar,
        menuItems: _terraApplicationLayout.Utils.utilityHelpers.getDefaultUtilityItems(intl, userData, customUtilityItems),
        initialSelectedKey: _terraApplicationLayout.Utils.utilityHelpers.defaultKeys.MENU,
        onChange: function onChange(event, itemData, disclose) {
          /**
           * This function will be called when items are selected within the utility menu.
           * The disclose parameter is provided for convenience, but any presentation method
           * could be used to handle that menu content selection.
           */

          /**
           * For the checkbox item, we maintain its selection state locally and show no disclosure.
           */
          if (itemData.key === 'checkbox-item') {
            _this2.setState({
              checkboxItemEnabled: !checkboxItemEnabled
            });
            return;
          }

          /**
           * For everything else, we can present a custom modal component for that content.
           */
          disclose({
            preferredType: 'modal',
            size: 'small',
            content: {
              key: itemData.key,
              component: /*#__PURE__*/_react.default.createElement(_UtilityOption.default, {
                name: itemData.key
              })
            }
          });
        }
      });
      return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
        fill: true,
        header: /*#__PURE__*/_react.default.createElement("h3", null, "Router Location: ".concat(location.pathname))
      }, /*#__PURE__*/_react.default.createElement(_terraApplicationLayout.default, {
        nameConfig: nameConfig,
        utilityConfig: utilityConfig,
        routingConfig: routingConfig,
        navigationItems: navigationItems,
        extensions: /*#__PURE__*/_react.default.createElement(_ApplicationExtensions.default, null),
        indexPath: indexPath
      }));
    }
  }]);
  return ExampleApplication;
}(_react.default.Component);
ExampleApplication.propTypes = {
  intl: _propTypes.default.shape({}),
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string
  })
};
var WrappedApplication = (0, _reactRouterDom.withRouter)((0, _reactIntl.injectIntl)(ExampleApplication));
var AppRouter = function AppRouter() {
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('height-for-docs-only')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('app-router')
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.MemoryRouter, null, /*#__PURE__*/_react.default.createElement(WrappedApplication, null))));
};
var _default = AppRouter;
exports.default = _default;