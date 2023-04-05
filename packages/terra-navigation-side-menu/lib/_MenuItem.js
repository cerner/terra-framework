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
var _reactIntl = require("react-intl");
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var KeyCode = _interopRequireWildcard(require("keycode-js"));
var _IconChevronRight = _interopRequireDefault(require("terra-icon/lib/icon/IconChevronRight"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _MenuItemModule = _interopRequireDefault(require("./MenuItem.module.scss"));
var _excluded = ["hasChevron", "intl", "isSelected", "text"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_MenuItemModule.default);
var propTypes = {
  /**
   * Whether or not the menu item should display a disclosure indicator.
   * */
  hasChevron: _propTypes.default.bool,
  /**
   * @private
   * Internationalization object with translation APIs. Provided by `injectIntl`.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired,
  /**
   * Whether or not the menu item is selection.
   * */
  isSelected: _propTypes.default.bool,
  /**
   * Callback function triggered when key is pressed.
   */
  onKeyDown: _propTypes.default.func,
  /**
   * Callback function triggered when key is released.
   */
  onKeyUp: _propTypes.default.func,
  /**
   * Text display for the menu item.
   * */
  text: _propTypes.default.string
};
var MenuItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuItem, _React$Component);
  var _super = _createSuper(MenuItem);
  function MenuItem(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuItem);
    _this = _super.call(this, props);
    _this.state = {
      active: false,
      focused: false
    };
    _this.handleKeyDown = _this.handleKeyDown.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleOnBlur = _this.handleOnBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.textRender = _this.textRender.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(MenuItem, [{
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
      }
      if (this.props.onKeyDown) {
        this.props.onKeyDown(event);
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
      if (this.props.onKeyUp) {
        this.props.onKeyUp(event);
      }
    }
  }, {
    key: "textRender",
    value: function textRender() {
      var _this$props = this.props,
        intl = _this$props.intl,
        isSelected = _this$props.isSelected,
        text = _this$props.text;
      var selected = intl.formatMessage({
        id: 'Terra.navigation.side.menu.selected'
      });
      if (isSelected) {
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, text, /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
          text: selected
        }));
      }
      return text;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        hasChevron = _this$props2.hasChevron,
        intl = _this$props2.intl,
        isSelected = _this$props2.isSelected,
        text = _this$props2.text,
        customProps = (0, _objectWithoutProperties2.default)(_this$props2, _excluded);
      var theme = this.context;
      var itemClassNames = (0, _classnames.default)(cx('menu-item', {
        'is-selected': isSelected
      }, {
        'is-active': this.state.active
      }, {
        'is-focused': this.state.focused
      }, theme.className), customProps.className);
      return /*#__PURE__*/_react.default.createElement("li", {
        className: cx('list-item'),
        role: "none"
      }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        role: "menuitem"
      }, customProps, {
        tabIndex: "0",
        className: itemClassNames,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onBlur: this.handleOnBlur,
        "aria-haspopup": hasChevron
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('title')
      }, this.textRender()), hasChevron && /*#__PURE__*/_react.default.createElement("span", {
        className: cx('chevron')
      }, /*#__PURE__*/_react.default.createElement(_IconChevronRight.default, null))));
    }
  }]);
  return MenuItem;
}(_react.default.Component);
MenuItem.propTypes = propTypes;
MenuItem.contextType = _terraThemeContext.default;
var _default = (0, _reactIntl.injectIntl)(MenuItem);
exports.default = _default;