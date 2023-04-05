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
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
var _DatePicker = _interopRequireDefault(require("./DatePicker"));
var _excluded = ["endDate", "endName", "startDate", "startName", "onChange"];
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var propTypes = {
  /**
   * An ISO 8601 string representation of the default end date for a date range.
   */
  endDate: _propTypes.default.string,
  /**
   * Name of the endDate input. The name should be unique.
   */
  endName: _propTypes.default.string.isRequired,
  /**
   * An ISO 8601 string representation of the selected start date.
   */
  startDate: _propTypes.default.string,
  /**
   * Name of the startDate input. The name should be unique.
   */
  startName: _propTypes.default.string.isRequired,
  /**
   * A callback function to execute when a valid date is selected or entered. The parameters in the function are event, start date, end date.
   */
  onChange: _propTypes.default.func
};
var defaultProps = {
  endDate: undefined,
  startDate: undefined,
  onChange: undefined
};
var DateRange = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(DateRange, _React$Component);
  var _super = _createSuper(DateRange);
  function DateRange(props) {
    var _this;
    (0, _classCallCheck2.default)(this, DateRange);
    _this = _super.call(this, props);
    _this.state = {
      startDate: props.startDate,
      endDate: props.endDate
    };
    _this.handleChangeStart = _this.handleChangeStart.bind((0, _assertThisInitialized2.default)(_this));
    _this.handleChangeEnd = _this.handleChangeEnd.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }
  (0, _createClass2.default)(DateRange, [{
    key: "handleChange",
    value: function handleChange(event, _ref) {
      var _ref$startDate = _ref.startDate,
        startDate = _ref$startDate === void 0 ? this.state.startDate : _ref$startDate,
        _ref$endDate = _ref.endDate,
        endDate = _ref$endDate === void 0 ? this.state.endDate : _ref$endDate;
      var startDateForRange = startDate;
      var endDateForRange = endDate;
      if ((0, _momentTimezone.default)(startDateForRange).isAfter((0, _momentTimezone.default)(endDateForRange))) {
        var _ref2 = [endDateForRange, startDateForRange];
        startDateForRange = _ref2[0];
        endDateForRange = _ref2[1];
      }
      this.setState({
        startDate: startDateForRange,
        endDate: endDateForRange
      });
      if (this.props.onChange) {
        this.props.onChange(event, startDateForRange, endDateForRange);
      }
    }
  }, {
    key: "handleChangeStart",
    value: function handleChangeStart(event, startDate) {
      this.handleChange(event, {
        startDate: startDate
      });
    }
  }, {
    key: "handleChangeEnd",
    value: function handleChangeEnd(event, endDate) {
      this.handleChange(event, {
        endDate: endDate
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        endDate = _this$props.endDate,
        endName = _this$props.endName,
        startDate = _this$props.startDate,
        startName = _this$props.startName,
        onChange = _this$props.onChange,
        customProps = (0, _objectWithoutProperties2.default)(_this$props, _excluded);
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "terra-DatePicker-range"
      }, /*#__PURE__*/_react.default.createElement(_DatePicker.default, (0, _extends2.default)({}, customProps, {
        selectedDate: this.state.startDate,
        isStartDateRange: true,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        name: startName,
        onChange: this.handleChangeStart
      })), /*#__PURE__*/_react.default.createElement(_DatePicker.default, (0, _extends2.default)({}, customProps, {
        selectedDate: this.state.endDate,
        isEndDateRange: true,
        startDate: this.state.startDate,
        endDate: this.state.endDate,
        name: endName,
        onChange: this.handleChangeEnd
      })));
    }
  }]);
  return DateRange;
}(_react.default.Component);
DateRange.propTypes = propTypes;
DateRange.defaultProps = defaultProps;
var _default = DateRange;
exports.default = _default;