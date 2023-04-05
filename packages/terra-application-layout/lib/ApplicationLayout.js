"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "RoutingMenu", {
  enumerable: true,
  get: function get() {
    return _RoutingMenu.default;
  }
});
exports.default = exports.Utils = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraNavigationLayout = _interopRequireDefault(require("terra-navigation-layout"));
var _configurationPropTypes = require("terra-navigation-layout/lib/configurationPropTypes");
var _reactRouterDom = require("react-router-dom");
var _terraModalManager = _interopRequireDefault(require("terra-modal-manager"));
var _RoutingMenu = _interopRequireDefault(require("./menu/RoutingMenu"));
var _ApplicationMenuWrapper = _interopRequireDefault(require("./menu/_ApplicationMenuWrapper"));
var _ApplicationHeader = _interopRequireDefault(require("./header/_ApplicationHeader"));
var _propTypes2 = _interopRequireDefault(require("./utils/propTypes"));
var _helpers = _interopRequireDefault(require("./utils/helpers"));
var _utilityHelpers = _interopRequireDefault(require("./utils/utilityHelpers"));
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var navigationLayoutSizes = ['default', 'tiny', 'small', 'medium', 'large', 'huge'];
var propTypes = {
  /**
   * The content to be rendered in the ApplicationLayout's extensions region. This component will be provided
   * a `layoutConfig` as props to facilitate communication with the ApplicationLayout.
   */
  extensions: _propTypes.default.element,
  /**
   * The index, or default, path of the routing configuration. The ApplicationLayout will redirect to this path
   * when the router reaches an unknown location.
   */
  indexPath: _propTypes.default.string.isRequired,
  /**
   * The configuration values for the ApplicationName component.
   */
  nameConfig: _propTypes2.default.nameConfigPropType,
  /**
   * Alignment of the header's navigation primary tabs. ( e.g start, center, end )
   */
  navigationAlignment: _propTypes2.default.navigationAlignmentPropType,
  /**
   * An array of Objects describing the ApplicationLayout's primary navigation items.
   */
  navigationItems: _propTypes2.default.navigationItemsPropType,
  /**
   * The routing configuration Object. This is very similar to the routingConfig supported by the NavigationLayout; however,
   * the ApplicationLayout only supports configuration for the `menu` and `content` regions of the layout. The '/' path is also blacklisted
   * within this configuration object, as the ApplicationLayout uses it for navigation purposes. Any configuration provided for the '/' path
   * will be disregarded.
   */
  routingConfig: _propTypes.default.shape({
    menu: _configurationPropTypes.routeConfigPropType,
    content: _configurationPropTypes.routeConfigPropType
  }).isRequired,
  /**
   * The configuration values for the ApplicationUtility component.
   */
  utilityConfig: _propTypes2.default.utilityConfigPropType
};
var defaultProps = {
  navigationItems: []
};
var ApplicationLayout = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(ApplicationLayout, _React$Component);
  var _super = _createSuper(ApplicationLayout);
  function ApplicationLayout(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationLayout);
    _this = _super.call(this, props);
    _this.state = {
      applicationLayoutRoutingConfig: ApplicationLayout.buildRoutingConfig(_this.props),
      prevProps: {
        nameConfig: props.nameConfig,
        routingConfig: props.routingConfig,
        utilityConfig: props.utilityConfig,
        navigationItems: props.navigationItems,
        indexPath: props.indexPath
      }
    };
    return _this;
  }
  (0, _createClass2.default)(ApplicationLayout, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        nameConfig = _this$props.nameConfig,
        utilityConfig = _this$props.utilityConfig,
        navigationAlignment = _this$props.navigationAlignment,
        navigationItems = _this$props.navigationItems,
        indexPath = _this$props.indexPath,
        extensions = _this$props.extensions;
      var applicationLayoutRoutingConfig = this.state.applicationLayoutRoutingConfig;
      var headerHasAnyIcons = (navigationItems || []).some(function (_ref) {
        var icon = _ref.icon;
        return icon;
      });
      var links = navigationItems ? (navigationItems || []).map(function (route, index) {
        return {
          id: "application-layout-tab-".concat(index),
          path: route.path,
          text: route.text,
          externalLink: route.externalLink,
          icon: route.icon
        };
      }) : undefined;
      var header = /*#__PURE__*/_react.default.createElement(_ApplicationHeader.default, {
        nameConfig: nameConfig,
        utilityConfig: utilityConfig,
        extensions: extensions,
        applicationLinks: {
          alignment: navigationAlignment,
          links: links
        },
        hasIcons: headerHasAnyIcons
      });
      return /*#__PURE__*/_react.default.createElement(_terraModalManager.default, null, /*#__PURE__*/_react.default.createElement(_terraNavigationLayout.default, {
        config: applicationLayoutRoutingConfig,
        header: header,
        indexPath: indexPath
      }));
    }
  }], [{
    key: "buildMenuNavigationItems",
    value:
    /**
     * Builds and returns the menu items for the PrimaryNavigationSideMenu from the navigationItems.
     */
    function buildMenuNavigationItems(props) {
      var navigationItems = props.navigationItems,
        routingConfig = props.routingConfig;
      if (!routingConfig.menu) {
        return navigationItems;
      }
      var menuPaths = Object.keys(routingConfig.menu).map(function (key) {
        return routingConfig.menu[key].path;
      });
      return navigationItems.map(function (navigationItem) {
        return {
          externalLink: navigationItem.externalLink,
          path: navigationItem.path,
          text: navigationItem.text,
          hasSubMenu: menuPaths.filter(function (menuPath) {
            return (0, _reactRouterDom.matchPath)(navigationItem.path, {
              path: menuPath
            });
          }).length > 0
        };
      });
    }

    /**
     * Builds and returns the routing configuration object for the RoutingMenu that renders the top navigation items at
     * compact breakpoints.
     */
  }, {
    key: "buildNavigationMenuConfig",
    value: function buildNavigationMenuConfig(props) {
      var menuNavigationItems = ApplicationLayout.buildMenuNavigationItems(props);
      var componentConfig = {
        componentClass: _RoutingMenu.default,
        props: {
          menuItems: menuNavigationItems
        },
        refuseRoutingStackNavigation: menuNavigationItems.length === 0
      };

      /**
       * The configuration for the primary navigation menu is specified for the
       * tiny and small breakpoints only. The menu will only be visible when the ApplicationLayout
       * is compact.
       */
      return {
        '/': {
          path: '/',
          component: {
            tiny: componentConfig,
            small: componentConfig
          }
        }
      };
    }

    /**
     * Builds and returns the routing configuration object for all menus with ApplicationMenuWrappers
     * wrapped around each component entry.
     */
  }, {
    key: "buildApplicationMenus",
    value: function buildApplicationMenus(props, originalMenuConfig) {
      var nameConfig = props.nameConfig,
        utilityConfig = props.utilityConfig,
        extensions = props.extensions;
      if (!originalMenuConfig) {
        return undefined;
      }
      var config = {};
      Object.keys(originalMenuConfig).forEach(function (menuKey) {
        var menuConfig = _objectSpread({}, originalMenuConfig[menuKey]);
        var menuComponentConfig = _objectSpread({}, menuConfig.component);

        /**
         * Every supplied menu component is wrapped with an ApplicationMenuWrapper.
         */
        navigationLayoutSizes.forEach(function (size) {
          if (!menuComponentConfig[size]) {
            return;
          }
          var componentConfig = _objectSpread({}, menuComponentConfig[size]);
          var componentProps = _objectSpread({}, componentConfig.props);

          /**
           * ApplicationMenuWrapper-specific props are injected into the props object with a prop
           * called `applicationMenuWrapperProps`.
           */
          componentProps.applicationMenuWrapperProps = {
            contentComponentClass: componentConfig.componentClass,
            nameConfig: nameConfig,
            utilityConfig: utilityConfig,
            extensions: extensions
          };
          componentConfig.props = componentProps;
          componentConfig.componentClass = _ApplicationMenuWrapper.default;
          menuComponentConfig[size] = componentConfig;
        });
        menuConfig.component = menuComponentConfig;
        config[menuKey] = menuConfig;
      });
      return config;
    }

    /**
     * Builds and returns the routing configuration object for the ApplicationLayout by injecting the RoutingMenu for top navigation
     * and ApplicationMenuWrapper's as necessary.
     */
  }, {
    key: "buildRoutingConfig",
    value: function buildRoutingConfig(props) {
      var routingConfig = props.routingConfig;
      var updatedConfig = _objectSpread(_objectSpread({}, routingConfig), {}, {
        menu: ApplicationLayout.buildApplicationMenus(props, _objectSpread(_objectSpread({}, routingConfig.menu), ApplicationLayout.buildNavigationMenuConfig(props)))
      });
      return updatedConfig;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.prevProps.nameConfig !== nextProps.nameConfig || prevState.prevProps.utilityConfig !== nextProps.utilityConfig || prevState.prevProps.routingConfig !== nextProps.routingConfig || prevState.prevProps.navigationItems !== nextProps.navigationItems || prevState.prevProps.indexPath !== nextProps.indexPath) {
        return {
          applicationLayoutRoutingConfig: ApplicationLayout.buildRoutingConfig(nextProps)
        };
      }
      return null;
    }
  }]);
  return ApplicationLayout;
}(_react.default.Component);
ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;
var _default = ApplicationLayout;
exports.default = _default;
var Utils = {
  helpers: _helpers.default,
  utilityHelpers: _utilityHelpers.default,
  propTypes: _propTypes2.default
};
exports.Utils = Utils;