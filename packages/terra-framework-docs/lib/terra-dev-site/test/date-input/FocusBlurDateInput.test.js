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
var _terraDateInput = _interopRequireDefault(require("terra-date-input"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DateInputTestModule = _interopRequireDefault(require("./common/DateInput.test.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_DateInputTestModule.default);
var DateInputOnBlur = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DateInputOnBlur, _React$Component);
  var _super = _createSuper(DateInputOnBlur);
  function DateInputOnBlur(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DateInputOnBlur);
    _this = _super.call(this, props);
    _this.state = {
      blurTriggerCount: 0,
      focusTriggerCount: 0,
      value: ''
    };
    _this.handleBlur = _this.handleBlur.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleFocus = _this.handleFocus.bind((0, _assertThisInitialized2.default)(_this));
    _this.blurCount = 0;
    _this.focusCount = 0;
    return _this;
  }
  (0, _createClass2.default)(DateInputOnBlur, [{
    key: "handleBlur",
    value: function handleBlur() {
      this.blurCount += 1;
      this.setState({
        blurTriggerCount: this.blurCount
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus() {
      this.focusCount += 1;
      this.setState({
        focusTriggerCount: this.focusCount
      });
    }
  }, {
    key: "handleOnChangeFocus",
    value: function handleOnChangeFocus(event, dateString) {
      this.setState({
        value: dateString
      });
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: "date-input-value"
      }, /*#__PURE__*/_react.default.createElement("h3", null, "onBlur Trigger Count:", /*#__PURE__*/_react.default.createElement("span", {
        id: "blur-count"
      }, this.state.blurTriggerCount), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), "onFocus Trigger Count:", /*#__PURE__*/_react.default.createElement("span", {
        id: "focus-count"
      }, this.state.focusTriggerCount))), /*#__PURE__*/_react.default.createElement(_terraDateInput.default, {
        id: "dateInput",
        name: "date-input",
        value: this.state.value,
        onChange: this.handleOnChange,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus
      }));
    }
  }]);
  return DateInputOnBlur;
}(_react.default.Component);
var _default = DateInputOnBlur;
exports.default = _default;