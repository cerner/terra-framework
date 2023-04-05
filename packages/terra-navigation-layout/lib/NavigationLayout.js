"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _terraLayout = _interopRequireDefault(require("terra-layout"));
var _NavigationLayoutContent = _interopRequireDefault(require("./NavigationLayoutContent"));
var _configurationPropTypes = require("./configurationPropTypes");
var _routingUtils = require("./routingUtils");
var _excluded = ["header", "children", "menu", "menuText", "config", "indexPath", "location", "match", "history", "staticContext"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var getBreakpointSize = function getBreakpointSize(queryWidth) {
  var width = queryWidth || window.innerWidth;
  var breakpoints = {
    tiny: 544,
    small: 768,
    medium: 992,
    large: 1216,
    huge: 1440
  };
  var small = breakpoints.small,
    medium = breakpoints.medium,
    large = breakpoints.large,
    huge = breakpoints.huge;
  if (width >= huge) {
    return 'huge';
  }
  if (width >= large) {
    return 'large';
  }
  if (width >= medium) {
    return 'medium';
  }
  if (width >= small) {
    return 'small';
  }
  return 'tiny';
};
var propTypes = {
  /**
   * The component to render within the NavigationLayout's `header` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `routeConfig`, and `navigationLayoutSize`.
   */
  header: _propTypes.default.element,
  /**
   * The component to render within the NavigationLayout's `menu` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `routeConfig`, and `navigationLayoutSize`.
   */
  menu: _propTypes.default.element,
  /**
   * The component to render within the NavigationLayout's `content` region. If provided, this component
   * must appropriately handle the NavigationLayout-supplied props: `routeConfig`, and `navigationLayoutSize`.
   */
  children: _propTypes.default.element,
  /**
   * The String to display in the NavigationLayout's hover-target menu disclosure.
   */
  menuText: _propTypes.default.string,
  /**
   * The configuration Object that will be used to generate the specified regions of the NavigationLayout.
   * Note: The config prop is treated as an immutable object to prevent unnecessary processing and improve performance.
   * If the configuration is changed after the first render, a new configuration object instance must be provided.
   */
  config: _configurationPropTypes.navigationLayoutConfigPropType.isRequired,
  /**
   * The index path of the consuming application's routing structure. If provided, the NavigationLayout will
   * ensure Redirects are present where necessary.
   */
  indexPath: _propTypes.default.string,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes.default.object.isRequired,
  /**
   * The match as provided by the `withRouter()` HOC.
   */
  match: _propTypes.default.object.isRequired,
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: _propTypes.default.object.isRequired,
  /**
   * The staticContext as provided by the `withRouter()` HOC. This will only be provided when
   * within a StaticRouter.
   */
  staticContext: _propTypes.default.object
};

/**
 * The NavigationLayout utilizes the Terra Layout and a configuration object to generate a routing-based application layout.
 */
var NavigationLayout = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(NavigationLayout, _React$Component);
  var _super = _createSuper(NavigationLayout);
  function NavigationLayout(props) {
    var _this;
    (0, _classCallCheck2.default)(this, NavigationLayout);
    _this = _super.call(this, props);
    _this.updateSize = _this.updateSize.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      size: getBreakpointSize(),
      processedRoutes: NavigationLayout.processRouteConfig(props.config),
      prevPropsConfig: props.config
    };
    return _this;
  }
  (0, _createClass2.default)(NavigationLayout, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('resize', this.updateSize);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateSize);
    }
  }, {
    key: "updateSize",
    value: function updateSize() {
      var newSize = getBreakpointSize();
      if (this.state.size !== newSize) {
        this.setState({
          size: newSize
        });
      }
    }
  }, {
    key: "decorateElement",
    value: function decorateElement(element, routes) {
      if (!element) {
        return null;
      }
      var size = this.state.size;
      return /*#__PURE__*/_react.default.cloneElement(element, {
        navigationLayoutRoutes: routes,
        navigationLayoutSize: size
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        header = _this$props.header,
        children = _this$props.children,
        menu = _this$props.menu,
        menuText = _this$props.menuText,
        config = _this$props.config,
        indexPath = _this$props.indexPath,
        location = _this$props.location,
        match = _this$props.match,
        history = _this$props.history,
        staticContext = _this$props.staticContext,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var _this$state = this.state,
        size = _this$state.size,
        processedRoutes = _this$state.processedRoutes;
      var headerComponent = header || /*#__PURE__*/_react.default.createElement(_NavigationLayoutContent.default, null);
      var contentComponent = children || /*#__PURE__*/_react.default.createElement(_NavigationLayoutContent.default, {
        redirectPath: indexPath
      });
      var menuComponent = menu;
      // The routes for the menu are examined for evidence of a valid component for the current location.
      // If one is not found, we do not provide one to the Layout to ensure that the Layout renders appropriately (without a menu present).
      if (!menuComponent && (0, _routingUtils.validateMatchExists)(location.pathname, processedRoutes[size].menu)) {
        menuComponent = /*#__PURE__*/_react.default.createElement(_NavigationLayoutContent.default, {
          stackNavigationIsEnabled: true
        });
      }
      return /*#__PURE__*/_react.default.createElement(_terraLayout.default, (0, _extends2.default)({}, customProps, {
        header: this.decorateElement(headerComponent, processedRoutes[size].header),
        menu: this.decorateElement(menuComponent, processedRoutes[size].menu),
        menuText: menuText
      }), this.decorateElement(contentComponent, processedRoutes[size].content));
    }
  }], [{
    key: "processRouteConfig",
    value: function processRouteConfig(config) {
      var processedRoutes = {};
      _configurationPropTypes.supportedComponentBreakpoints.forEach(function (size) {
        var processedRoutesForSize = {};
        processedRoutesForSize.header = (0, _routingUtils.reduceRouteConfig)(config.header, size);
        processedRoutesForSize.menu = (0, _routingUtils.reduceRouteConfig)(config.menu, size);
        processedRoutesForSize.content = (0, _routingUtils.reduceRouteConfig)(config.content, size);
        processedRoutes[size] = processedRoutesForSize;
      });
      return processedRoutes;
    }
  }, {
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.config !== prevState.prevPropsConfig) {
        return {
          processedRoutes: NavigationLayout.processRouteConfig(nextProps.config)
        };
      }
      return null;
    }
  }]);
  return NavigationLayout;
}(_react.default.Component);
NavigationLayout.propTypes = propTypes;
var _default = (0, _reactRouterDom.withRouter)(NavigationLayout);
exports.default = _default;