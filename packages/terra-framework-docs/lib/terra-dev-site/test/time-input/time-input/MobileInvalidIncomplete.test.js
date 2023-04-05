"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));
var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));
var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));
var _react = _interopRequireDefault(require("react"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraTimeInput = _interopRequireDefault(require("terra-time-input"));
var _TimeInputTestModule = _interopRequireDefault(require("../common/TimeInput.test.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_TimeInputTestModule.default);
var TimeInputElement = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(TimeInputElement, _React$Component);
  var _super = _createSuper(TimeInputElement);
  function TimeInputElement(props) {
    var _this;
    (0, _classCallCheck2.default)(this, TimeInputElement);
    _this = _super.call(this, props);
    if (!window.ontouchstart) {
      _this.resetontouchstart = true;
      window.ontouchstart = 'true';
    }
    return _this;
  }
  (0, _createClass2.default)(TimeInputElement, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!window.ontouchstart) {
        this.resetontouchstart = true;
        window.ontouchstart = 'true';
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.resetontouchstart) {
        delete window.ontouchstart;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('content-wrapper')
      }, /*#__PURE__*/_react.default.createElement(_terraTimeInput.default, {
        id: "timeInput",
        name: "time-input",
        value: "10:23",
        isInvalid: true,
        required: true,
        isIncomplete: true
      }));
    }
  }]);
  return TimeInputElement;
}(_react.default.Component);
exports.default = TimeInputElement;