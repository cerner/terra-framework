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
var _bind = _interopRequireDefault(require("classnames/bind"));
var _TimeInputDocCommonModule = _interopRequireDefault(require("./TimeInputDocCommon.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TimeInputDocCommonModule.default);
var timeInput = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(timeInput, _React$Component);
  var _super = _createSuper(timeInput);
  function timeInput(props) {
    var _this;
    (0, _classCallCheck2.default)(this, timeInput);
    _this = _super.call(this, props);
    _this.state = {
      time: '12:37:14'
    };
    _this.handleTimeChange = _this.handleTimeChange.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(timeInput, [{
    key: "handleTimeChange",
    value: function handleTimeChange(event, time) {
      this.setState({
        time: time
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("p", null, "Time Provided:", /*#__PURE__*/_react.default.createElement("span", {
        className: cx('time-wrapper')
      }, this.state.time)), /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
        name: "time-input-value",
        value: this.state.time,
        onChange: this.handleTimeChange,
        showSeconds: true
      }));
    }
  }]);
  return timeInput;
}(_react.default.Component);
var _default = timeInput;
exports.default = _default;