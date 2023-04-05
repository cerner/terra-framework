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
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _IconCaretDown = _interopRequireDefault(require("terra-icon/lib/icon/IconCaretDown"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _ApplicationTabsModule = _interopRequireDefault(require("./ApplicationTabs.module.scss"));
var _excluded = ["isHidden", "isSelected", "onKeyDown", "popup", "refCallback", "text", "ariaLabel", "icon"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_ApplicationTabsModule.default);
var propTypes = {
  /**
   * Whether or not the menu display should be hidden.
   */
  isHidden: _propTypes.default.bool,
  /**
   * Whether or not the menu display should be animated with selection.
   */
  isSelected: _propTypes.default.bool,
  /**
   * Callback func for onKeyDown.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * The terra-popup to attach to the menu display.
   */
  popup: _propTypes.default.node,
  /**
   * The display text for the display.
   */
  text: _propTypes.default.string,
  /**
   * The text label read by screenreaders.
   */
  ariaLabel: _propTypes.default.string,
  /**
   * Ref callback for menu display.
   */
  refCallback: _propTypes.default.func,
  icon: _propTypes.default.node
};
var defaultProps = {
  isSelected: false,
  isHidden: false
};
var TabMenuDisplay = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TabMenuDisplay, _React$Component);
  var _super = _createSuper(TabMenuDisplay);
  function TabMenuDisplay(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TabMenuDisplay);
    _this = _super.call(this, props);
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnBlur = _this.handleOnBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      focused: false
    };
    return _this;
  }
  (0, _createClass2.default)(TabMenuDisplay, [{
    key: "handleOnBlur",
    value: function handleOnBlur() {
      if (!this.props.popup) {
        this.setState({
          focused: false
        });
      }
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
        if (this.props.onKeyDown) {
          this.props.onKeyDown(event);
        }
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
        this.setState({
          focused: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;
      var _this$props = this.props,
        isHidden = _this$props.isHidden,
        isSelected = _this$props.isSelected,
        onKeyDown = _this$props.onKeyDown,
        popup = _this$props.popup,
        refCallback = _this$props.refCallback,
        text = _this$props.text,
        ariaLabel = _this$props.ariaLabel,
        icon = _this$props.icon,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      var hasIcon = !!icon;
      var theme = this.context;
      var displayClassNames = (0, _classnames.default)(cx('tab-menu-display', {
        'is-hidden': isHidden
      }, {
        'is-active': this.state.active
      }, {
        'is-focused': this.state.focused
      }, theme.className), customProps.className);
      var attributes = {
        'aria-current': isSelected
      };
      var moreButtonClassNames = cx('tab-inner', {
        'tab-inner-with-icon': hasIcon
      });
      return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, customProps, attributes, {
        role: "button",
        tabIndex: "0",
        "aria-haspopup": "menu",
        "aria-label": ariaLabel,
        className: displayClassNames,
        ref: function ref(node) {
          _this2.contentNode = node;
          _this2.props.refCallback(node);
        },
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onBlur: this.handleOnBlur
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: moreButtonClassNames
      }, hasIcon && /*#__PURE__*/_react.default.createElement("span", {
        className: cx('tab-menu-display-icon')
      }, icon), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('tab-menu-display-label')
      }, /*#__PURE__*/_react.default.createElement("span", null, text), /*#__PURE__*/_react.default.createElement(_IconCaretDown.default, null))), popup);
    }
  }]);
  return TabMenuDisplay;
}(_react.default.Component);
TabMenuDisplay.propTypes = propTypes;
TabMenuDisplay.defaultProps = defaultProps;
TabMenuDisplay.contextType = _terraThemeContext.default;
var _default = TabMenuDisplay;
exports.default = _default;