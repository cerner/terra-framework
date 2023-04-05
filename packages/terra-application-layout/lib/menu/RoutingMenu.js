"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _terraNavigationSideMenu = _interopRequireDefault(require("terra-navigation-side-menu"));
var _RoutingStackDelegate = _interopRequireDefault(require("terra-navigation-layout/lib/RoutingStackDelegate"));
var _propTypes2 = _interopRequireDefault(require("../utils/propTypes"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * The title to render within the RoutingMenu's header.
   */
  title: _propTypes.default.string,
  /**
   * The array of routing shapes to be rendered as menu items within the RoutingMenu.
   */
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    text: _propTypes.default.string.isRequired,
    path: _propTypes.default.string.isRequired,
    hasSubMenu: _propTypes.default.bool
  })),
  /**
   * The Object of layout-related APIs provided to the components of the Layout.
   */
  layoutConfig: _propTypes2.default.layoutConfigPropType.isRequired,
  /**
   * The Object containing RoutingStack APIs provided to children of the RoutingStack. This is
   * used to render a Back button upon presence of a `showParent` implementation.
   */
  routingStackDelegate: _RoutingStackDelegate.default.propType.isRequired,
  /**
   * The location from the router context. This prop is provided by the `withRouter` HOC-generator.
   */
  location: _propTypes.default.shape({
    pathname: _propTypes.default.string
  }).isRequired
};
var routingMenuRootMenuKey = 'routingMenuRootMenuKey';
var RoutingMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(RoutingMenu, _React$Component);
  var _super = _createSuper(RoutingMenu);
  function RoutingMenu(props) {
    var _this;
    (0, _classCallCheck2.default)(this, RoutingMenu);
    _this = _super.call(this, props);
    _this.handleMenuChange = _this.handleMenuChange.bind((0, _assertThisInitialized2.default)(_this));

    /**
     * The menuItems are checked against the current location at initialization to ensure the
     * the desired selection styles are present.
     */
    _this.state = {
      selectedChildKey: RoutingMenu.getSelectedChildKey(props.location.pathname, props.menuItems),
      prevPropsLocationPathName: props.location.pathname,
      prevPropsMenuItems: props.menuItems
    };
    return _this;
  }
  (0, _createClass2.default)(RoutingMenu, [{
    key: "handleMenuChange",
    value: function handleMenuChange(event, data) {
      var _this$props = this.props,
        routingStackDelegate = _this$props.routingStackDelegate,
        layoutConfig = _this$props.layoutConfig;
      var routeFunc;
      if (data.metaData.externalLink) {
        routeFunc = function routeFunc() {
          return window.open(data.metaData.externalLink.path, data.metaData.externalLink.target || '_blank');
        };
      } else {
        this.setState({
          selectedChildKey: data.selectedChildKey
        });
        routeFunc = function routeFunc() {
          return routingStackDelegate.show({
            path: data.metaData.path
          });
        };
      }

      /**
       * If the menuItem does not indicate the presence of a subsequent menu, it is assumed that a terminal
       * menu item has been selected. If the `toggleMenu` function is defined on the layoutConfig, then it is called
       * to close the menu before navigating.
       */
      if (!data.metaData.hasSubMenu && layoutConfig.toggleMenu) {
        return layoutConfig.toggleMenu().then(function () {
          routeFunc();
        });
      }

      /**
       * Otherwise, the layout is left alone and navigation occurs immediately.
       */
      return Promise.resolve().then(function () {
        return routeFunc();
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        title = _this$props2.title,
        routingStackDelegate = _this$props2.routingStackDelegate,
        menuItems = _this$props2.menuItems;
      var selectedChildKey = this.state.selectedChildKey;

      /**
       * The items using the simplified RoutingMenu menuItem API must be converted into the NavigationSideMenu's API.
       */
      var processedMenuItems = RoutingMenu.buildSideMenuItems(menuItems);

      /**
       * The RoutingMenu then constructs a menuItem that will act as the main page and render the menuItems as child items.
       * If there is no title and no `showParent` implementation present, the isRootMenu flag is set on the item to hide
       * the header altogether.
       */
      processedMenuItems.push({
        key: routingMenuRootMenuKey,
        text: title || '',
        childKeys: processedMenuItems.map(function (item) {
          return item.key;
        }),
        isRootMenu: !routingStackDelegate.showParent && !title
      });
      return /*#__PURE__*/_react.default.createElement(_terraNavigationSideMenu.default, {
        menuItems: processedMenuItems,
        onChange: this.handleMenuChange,
        routingStackBack: routingStackDelegate.showParent,
        selectedMenuKey: routingMenuRootMenuKey,
        selectedChildKey: selectedChildKey,
        "data-routing-menu": true
      });
    }
  }], [{
    key: "buildSideMenuItems",
    value:
    /**
     * This function converts the given menuItems from the RoutingMenu API to the NavigationSideMenu API.
     * The path is used to uniquely identify the item within the NavigationSideMenu. The path and hasSubMenu
     * values are set as metaData on the item so that `handleMenuChange` will have easy access to those values.
     * @param {Array} menuItems is the Array of menuItem objects as specified by the RoutingMenu's proptype definition.
     */
    function buildSideMenuItems(menuItems) {
      return menuItems.map(function (item) {
        return {
          key: item.path,
          text: item.text,
          hasSubMenu: !!item.hasSubMenu,
          metaData: {
            path: item.path,
            externalLink: item.externalLink,
            hasSubMenu: !!item.hasSubMenu
          }
        };
      });
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.location.pathname !== prevState.prevPropsLocationPathName || nextProps.menuItems !== prevState.prevPropsMenuItems) {
        /**
         * The selectedChildKey is re-evaluated when new props are received to keep the internal state consistent.
         */
        return {
          prevPropsLocationPathName: nextProps.location.pathname,
          prevPropsMenuItems: nextProps.menuItems,
          selectedChildKey: RoutingMenu.getSelectedChildKey(nextProps.location.pathname, nextProps.menuItems)
        };
      }
      return null;
    }

    /**
     * This function compares the given path against the paths of the given menuItems. If a match
     * (partial or otherwise) is detected, that path is returned. If no match is detected, `undefined` is returned.
     * @param {String} path is the path to be matched against
     * @param {Array} menuItems is the Array of menuItem objects as specified by the RoutingMenu's proptype definition.
     */
  }, {
    key: "getSelectedChildKey",
    value: function getSelectedChildKey(path, menuItems) {
      for (var i = 0, itemCount = menuItems.length; i < itemCount; i += 1) {
        var navItem = menuItems[i];
        if (navItem.path && (0, _reactRouterDom.matchPath)(path, {
          path: navItem.path
        })) {
          return navItem.path;
        }
      }
      return undefined;
    }
  }]);
  return RoutingMenu;
}(_react.default.Component);
RoutingMenu.propTypes = propTypes;
var _default = (0, _reactRouterDom.withRouter)(RoutingMenu);
exports.default = _default;