"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactRouterDom = require("react-router-dom");
var _RoutingStackDelegate = _interopRequireDefault(require("./RoutingStackDelegate"));
var _configurationPropTypes = require("./configurationPropTypes");
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * The routing configuration from which Routes will be generated.
   */
  routes: _configurationPropTypes.processedRoutesPropType,
  /**
   * Flag to enable navigation within the RoutingStack. If true, functions will be exposed to the Routes that
   * will allow for traversal up to parent paths.
   */
  navEnabled: _propTypes.default.bool,
  /**
   * The current react-router location. Provided by the `withRouter()` HOC.
   */
  location: _propTypes.default.object,
  /**
   * The current react-router history. Provided by the `withRouter()` HOC.
   */
  history: _propTypes.default.object,
  /**
   * Any additional Routes that will be inserted after the configuration-generated Routes. Generally used
   * to insert custom Redirects or fallback Routes.
   */
  children: _propTypes.default.node,
  /**
   * Any additional props that should be propagated to the generated Route components.
   */
  ancestorProps: _propTypes.default.object
};
var RoutingStack = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(RoutingStack, _React$Component);
  var _super = _createSuper(RoutingStack);
  function RoutingStack(props) {
    var _this;
    (0, _classCallCheck2.default)(this, RoutingStack);
    _this = _super.call(this, props);
    _this.updateStackLocation = _this.updateStackLocation.bind((0, _assertThisInitialized2.default)(_this));
    _this.createRoutes = _this.createRoutes.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      stackLocation: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(RoutingStack, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({
          // The stackLocation must be reset upon rerendering to be in sync with any navigation that may have occurred.
          stackLocation: undefined
        });
      }
    }
  }, {
    key: "updateStackLocation",
    value: function updateStackLocation(path) {
      this.setState({
        stackLocation: {
          pathname: path
        }
      });
    }
  }, {
    key: "createRoutes",
    value: function createRoutes(routes) {
      var _this2 = this;
      var _this$props = this.props,
        navEnabled = _this$props.navEnabled,
        location = _this$props.location,
        history = _this$props.history,
        ancestorProps = _this$props.ancestorProps;
      var stackLocation = this.state.stackLocation;
      if (!routes || !routes.length) {
        return undefined;
      }
      return routes.map(function (routeData) {
        var delegateData = {
          location: stackLocation || location
        };
        delegateData.show = function (_ref) {
          var path = _ref.path;
          if ((0, _reactRouterDom.matchPath)(location.pathname, {
            path: path
          })) {
            _this2.updateStackLocation(path);
          } else {
            history.push(path);
          }
        };
        if (routeData.parentPaths && routeData.parentPaths.length) {
          delegateData.parentPaths = routeData.parentPaths.reduce(function (matchingPaths, path) {
            var match = (0, _reactRouterDom.matchPath)(location.pathname, {
              path: path
            });
            if (match) {
              matchingPaths.push(match.url);
            }
            return matchingPaths;
          }, []);
          if (navEnabled && delegateData.parentPaths.length) {
            delegateData.showParent = function () {
              _this2.updateStackLocation(delegateData.parentPaths[delegateData.parentPaths.length - 1]);
            };
            if (delegateData.parentPaths.length > 1) {
              delegateData.showRoot = function () {
                _this2.updateStackLocation(delegateData.parentPaths[0]);
              };
            }
          }
        }
        var ComponentClass = routeData.componentClass;
        return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
          path: routeData.path,
          key: routeData.path,
          render: function render() {
            return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
              location: _this2.props.location,
              render: function render() {
                return /*#__PURE__*/_react.default.createElement(ComponentClass, (0, _extends2.default)({}, ancestorProps, routeData.componentProps, {
                  routingStackDelegate: _RoutingStackDelegate.default.create(delegateData)
                }));
              }
            });
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        routes = _this$props2.routes,
        location = _this$props2.location,
        children = _this$props2.children;
      return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Switch, {
        location: this.state.stackLocation || location
      }, this.createRoutes(routes), children);
    }
  }]);
  return RoutingStack;
}(_react.default.Component);
RoutingStack.propTypes = propTypes;
var _default = (0, _reactRouterDom.withRouter)(RoutingStack);
exports.default = _default;