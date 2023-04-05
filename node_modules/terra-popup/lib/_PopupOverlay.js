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
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _PopupOverlayModule = _interopRequireDefault(require("./PopupOverlay.module.scss"));
var _excluded = ["children"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_PopupOverlayModule.default);
var propTypes = {
  /**
   * @private
   * Callback function indicating a close condition was met.
   */
  onRequestClose: _propTypes.default.func,
  /**
   * The string representation of the index.
   */
  children: _propTypes.default.node
};
var defaultProps = {
  children: []
};
var PopupOverlay = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(PopupOverlay, _React$Component);
  var _super = _createSuper(PopupOverlay);
  function PopupOverlay() {
    var _this;
    (0, _classCallCheck2.default)(this, PopupOverlay);
    _this = _super.call(this);
    _this.handleOnClick = _this.handleOnClick.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(PopupOverlay, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Disable scrolling on the page when Overlay is displayed
      this.overlayStyle = document.documentElement.style.overflow;
      document.documentElement.style.overflow = 'hidden';
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      // Enable scrolling on the page since Overlay has gone away
      document.documentElement.style.overflow = this.overlayStyle;
    }
  }, {
    key: "handleOnClick",
    value: function handleOnClick(event) {
      event.stopPropagation();
      if (this.props.onRequestClose) {
        this.props.onRequestClose(event);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        children = _this$props.children,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      // Delete the closePortal prop that comes from react-portal.
      delete customProps.closePortal;
      // Delete onRequestClose prop we use to close popup.
      delete customProps.onRequestClose;
      var theme = this.context;
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
        onClick: this.handleOnClick
      }, customProps, {
        className: (0, _classnames.default)(cx('popup-overlay', theme.className), customProps.className)
      }), /*#__PURE__*/_react.default.createElement("div", {
        className: cx('inner')
      }), children));
    }
  }]);
  return PopupOverlay;
}(_react.default.Component);
PopupOverlay.propTypes = propTypes;
PopupOverlay.defaultProps = defaultProps;
PopupOverlay.contextType = _terraThemeContext.default;
var _default = PopupOverlay;
exports.default = _default;