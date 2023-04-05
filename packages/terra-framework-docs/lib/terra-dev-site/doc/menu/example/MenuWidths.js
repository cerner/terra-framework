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
var _BasicMenu = _interopRequireDefault(require("./BasicMenu"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var MenuWidths = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MenuWidths, _React$Component);
  var _super = _createSuper(MenuWidths);
  function MenuWidths(props) {
    var _this;
    (0, _classCallCheck2.default)(this, MenuWidths);
    _this = _super.call(this, props);
    _this.handleSelectChange = _this.handleSelectChange.bind((0, _assertThisInitialized2.default)(_this));
    _this.state = {
      menuWidth: undefined
    };
    return _this;
  }
  (0, _createClass2.default)(MenuWidths, [{
    key: "handleSelectChange",
    value: function handleSelectChange(event) {
      this.setState({
        menuWidth: event.target.value
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
        htmlFor: "menuWidth"
      }, "Select menu width "), /*#__PURE__*/_react.default.createElement("select", {
        id: "menuWidth",
        name: "menuWidth",
        value: this.state.menuWidth,
        onChange: this.handleSelectChange
      }, /*#__PURE__*/_react.default.createElement("option", {
        value: undefined
      }, "Default"), /*#__PURE__*/_react.default.createElement("option", {
        key: "160",
        value: "160"
      }, "160"), /*#__PURE__*/_react.default.createElement("option", {
        key: "240",
        value: "240"
      }, "240"), /*#__PURE__*/_react.default.createElement("option", {
        key: "320",
        value: "320"
      }, "320"), /*#__PURE__*/_react.default.createElement("option", {
        key: "640",
        value: "640"
      }, "640"), /*#__PURE__*/_react.default.createElement("option", {
        key: "960",
        value: "960"
      }, "960"), /*#__PURE__*/_react.default.createElement("option", {
        key: "1280",
        value: "1280"
      }, "1280"), /*#__PURE__*/_react.default.createElement("option", {
        key: "1760",
        value: "1760"
      }, "1760"), /*#__PURE__*/_react.default.createElement("option", {
        key: "auto",
        value: "auto"
      }, "Auto")), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement(_BasicMenu.default, {
        contentWidth: this.state.menuWidth
      }));
    }
  }]);
  return MenuWidths;
}(_react.default.Component);
var _default = MenuWidths;
exports.default = _default;