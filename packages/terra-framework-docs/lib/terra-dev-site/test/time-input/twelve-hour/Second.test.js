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
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var _TimeUtil = _interopRequireDefault(require("terra-time-input/lib/TimeUtil"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var TimeInputDefault = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TimeInputDefault, _React$Component);
  var _super = _createSuper(TimeInputDefault);
  function TimeInputDefault(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TimeInputDefault);
    _this = _super.call(this, props);
    _this.state = {
      input: null
    };
    _this.handleOnChange = _this.handleOnChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(TimeInputDefault, [{
    key: "handleOnChange",
    value: function handleOnChange(event, input) {
      this.setState({
        input: input
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
        id: "time-input-value"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "Time Input:", this.state.input)), /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
        id: "timeInput",
        name: "time-input",
        onChange: this.handleOnChange,
        variant: _TimeUtil.default.FORMAT_12_HOUR,
        showSeconds: true
      }));
    }
  }]);
  return TimeInputDefault;
}(_react.default.Component);
var _default = TimeInputDefault;
exports.default = _default;