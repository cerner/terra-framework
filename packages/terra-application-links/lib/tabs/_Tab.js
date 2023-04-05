"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _reactRouterDom = require("react-router-dom");
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _ApplicationTabsModule = _interopRequireDefault(require("./ApplicationTabs.module.scss"));
var _excluded = ["externalLink", "history", "location", "onTabClick", "path", "text", "icon"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationTabsModule.default);
var propTypes = {
  /**
   * The optional external link. Executes on window.open();
   */
  externalLink: _propTypes.default.shape({
    path: _propTypes.default.string.isRequired,
    target: _propTypes.default.string
  }),
  /**
   * The history as provided by the `withRouter()` HOC.
   */
  history: _propTypes.default.object.isRequired,
  /**
   * The location as provided by the `withRouter()` HOC.
   */
  location: _propTypes.default.object.isRequired,
  /**
   * The path to push to the route.
   */
  path: _propTypes.default.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: _propTypes.default.string.isRequired,
  /**
   * The click callback of the tab.
   */
  onTabClick: _propTypes.default.func,
  /**
   * The display icon for the tab
   */
  icon: _propTypes.default.node
};
var ApplicationTab = /*#__PURE__*/function (_Component) {
  (0, _inherits2.default)(ApplicationTab, _Component);
  var _super = _createSuper(ApplicationTab);
  function ApplicationTab(props) {
    var _this;
    (0, _classCallCheck2.default)(this, ApplicationTab);
    _this = _super.call(this, props);
    _this.state = {
      active: false,
      focused: false
    };
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnBlur = _this.handleOnBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.isCurrentPath = _this.isCurrentPath.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(ApplicationTab, [{
    key: "handleOnBlur",
    value: function handleOnBlur() {
      this.setState({
        focused: false
      });
    }
  }, {
    key: "handleKeyDown",
    value: function handleKeyDown(event) {
      // Add active state to FF browsers
      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        this.setState({
          active: true
        });
      }

      // Add focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE || event.nativeEvent.keyCode === KeyCode.KEY_RETURN) {
        this.setState({
          focused: true
        });
        event.preventDefault();
        this.handleOnClick(event);
      }
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(event) {
      // Remove active state from FF broswers
      if (event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        this.setState({
          active: false
        });
      }

      // Apply focus styles for keyboard navigation
      if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
        event.preventDefault();
        event.stopPropagation();
        this.setState({
          focused: true
        });
      }
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      if (this.props.externalLink) {
        window.open(this.props.externalLink.path, this.props.externalLink.target || '_blank');
        if (this.props.onTabClick) {
          this.props.onTabClick(event);
        }
        return;
      }
      if (!this.isCurrentPath()) {
        this.props.history.push(this.props.path);
      } else if (this.props.onTabClick) {
        this.props.onTabClick(event);
      }
    }
  }, {
    key: "isCurrentPath",
    value: function isCurrentPath() {
      return !!(0, _reactRouterDom.matchPath)(this.props.location.pathname, {
        path: this.props.path
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        externalLink = _this$props.externalLink,
        history = _this$props.history,
        location = _this$props.location,
        onTabClick = _this$props.onTabClick,
        path = _this$props.path,
        text = _this$props.text,
        icon = _this$props.icon,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var _this$state = this.state,
        active = _this$state.active,
        focused = _this$state.focused;
      var isCollapsed = false;
      var hasIcon = !!icon;
      var isCurrent = this.isCurrentPath();
      var theme = this.context;
      var tabClassNames = (0, _classnames.default)(cx('tab', {
        'tab-with-icon': hasIcon
      }, {
        'is-disabled': isCurrent && !isCollapsed
      }, {
        'is-active': active
      }, {
        'is-focused': focused
      }, theme.className), customProps.className);
      var tabAttr = {
        'aria-current': isCurrent
      };
      var childrenClassNames = cx('tab-inner', {
        'tab-inner-with-icon': hasIcon
      });
      var ChildElement = hasIcon ? 'div' : 'span';
      return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, customProps, tabAttr, {
        role: "link",
        type: "button",
        tabIndex: "0",
        className: tabClassNames,
        onClick: this.handleOnClick,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onBlur: this.handleOnBlur
      }), /*#__PURE__*/_react.default.createElement(ChildElement, {
        className: childrenClassNames
      }, hasIcon && /*#__PURE__*/_react.default.createElement("span", {
        className: cx('tab-icon')
      }, icon), /*#__PURE__*/_react.default.createElement("span", {
        className: cx('tab-label')
      }, text)));
    }
  }]);
  return ApplicationTab;
}(_react.Component);
ApplicationTab.propTypes = propTypes;
ApplicationTab.contextType = _terraThemeContext.default;
var _default = ApplicationTab;
exports.default = _default;