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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeProvider = _interopRequireDefault(require("terra-theme-provider"));
var _MockThemeComponent = _interopRequireDefault(require("./MockThemeComponent"));
var _DefaultThemeProviderModule = _interopRequireDefault(require("./DefaultThemeProvider.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DefaultThemeProviderModule.default);
var DefaultThemeProvider = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DefaultThemeProvider, _React$Component);
  var _super = _createSuper(DefaultThemeProvider);
  function DefaultThemeProvider(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DefaultThemeProvider);
    _this = _super.call(this, props);
    _this.state = {
      theme: ''
    };
    _this.handleThemeChange = _this.handleThemeChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DefaultThemeProvider, [{
    key: "handleThemeChange",
    value: function handleThemeChange(e) {
      this.setState({
        theme: e.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      var themeSwitcher;
      function supportsCSSVars() {
        // This eslint rule complains of the lack of .CSS support in IE, which is exactly what this line is intended to detect.
        // eslint-disable-next-line compat/compat
        return window.CSS && window.CSS.supports && window.CSS.supports('(--fake-var: 0)');
      }
      if (supportsCSSVars()) {
        themeSwitcher = /*#__PURE__*/_react.default.createElement("div", {
          className: cx('theme-switcher-wrapper')
        }, /*#__PURE__*/_react.default.createElement("label", {
          htmlFor: "theme"
        }, " Theme: "), /*#__PURE__*/_react.default.createElement("select", {
          id: "theme",
          value: this.state.theme,
          onChange: this.handleThemeChange
        }, /*#__PURE__*/_react.default.createElement("option", {
          value: ""
        }, "Default"), /*#__PURE__*/_react.default.createElement("option", {
          value: "cerner-mock-theme"
        }, "Mock Theme")));
      } else {
        themeSwitcher = /*#__PURE__*/_react.default.createElement("div", null);
      }
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, themeSwitcher), /*#__PURE__*/_react.default.createElement(_terraThemeProvider.default, {
        themeName: this.state.theme
      }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_MockThemeComponent.default, null, "Themable component"))));
    }
  }]);
  return DefaultThemeProvider;
}(_react.default.Component);
var _default = DefaultThemeProvider;
exports.default = _default;