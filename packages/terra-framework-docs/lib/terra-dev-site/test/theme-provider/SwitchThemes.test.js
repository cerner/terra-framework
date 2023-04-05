"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _terraThemeProvider = _interopRequireDefault(require("terra-theme-provider"));
var _MockThemeComponent = _interopRequireDefault(require("./common/MockThemeComponent"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var SwitchThemes = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(SwitchThemes, _React$Component);
  var _super = _createSuper(SwitchThemes);
  function SwitchThemes(props) {
    var _this;
    (0, _classCallCheck2.default)(this, SwitchThemes);
    _this = _super.call(this, props);
    _this.state = {
      themeName: ''
    };
    _this.handleSelectChange = _this.handleSelectChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(SwitchThemes, [{
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      this.setState((0, _defineProperty2.default)({}, event.target.name, event.target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("form", null, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "theme"
      }, "Theme Switcher"), /*#__PURE__*/_react.default.createElement("select", {
        id: "theme",
        name: "themeName",
        value: this.state.themeName,
        onChange: this.handleSelectChange
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: ""
      }, "Default Theme"), /*#__PURE__*/_react.default.createElement("option", {
        value: "cerner-mock-theme"
      }, "Mock Theme"))), /*#__PURE__*/_react.default.createElement(_terraThemeProvider.default, {
        id: "themeProvider",
        themeName: this.state.themeName
      }, /*#__PURE__*/_react.default.createElement(_MockThemeComponent.default, {
        id: "themedComponent"
      }, "Theme Provider Test")));
    }
  }]);
  return SwitchThemes;
}(_react.default.Component);
var _default = SwitchThemes;
exports.default = _default;