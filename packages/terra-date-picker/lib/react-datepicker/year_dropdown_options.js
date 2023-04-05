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
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
function generateYears(year, noOfYear, minDate, maxDate) {
  var list = [];
  for (var i = 0; i < 2 * noOfYear + 1; i++) {
    var newYear = year + noOfYear - i;
    var isInRange = true;
    if (minDate) {
      isInRange = minDate.year() <= newYear;
    }
    if (maxDate && isInRange) {
      isInRange = maxDate.year() >= newYear;
    }
    if (isInRange) {
      list.push(newYear);
    }
  }
  return list;
}
var YearDropdownOptions = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(YearDropdownOptions, _React$Component);
  var _super = _createSuper(YearDropdownOptions);
  function YearDropdownOptions(props) {
    var _this;
    (0, _classCallCheck2.default)(this, YearDropdownOptions);
    _this = _super.call(this, props);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderOptions", function () {
      var selectedYear = _this.props.year;
      var options = _this.state.yearsList.map(function (year) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-year-option'),
          key: year,
          ref: year,
          onClick: _this.onChange.bind((0, _assertThisInitialized2.default)(_this), year)
        }, selectedYear === year ? /*#__PURE__*/_react.default.createElement("span", {
          className: cx('react-datepicker-year-option--selected')
        }, "\u2713") : '', year);
      });
      var minYear = _this.props.minDate.year();
      var maxYear = _this.props.maxDate.year();
      if (!maxYear || !_this.state.yearsList.find(function (year) {
        return year === maxYear;
      })) {
        options.unshift( /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-year-option'),
          ref: 'upcoming',
          key: 'upcoming',
          onClick: _this.incrementYears
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: cx(['react-datepicker-navigation', 'react-datepicker-navigation--years', 'react-datepicker-navigation--years-upcoming'])
        })));
      }
      if (!minYear || !_this.state.yearsList.find(function (year) {
        return year === minYear;
      })) {
        options.push( /*#__PURE__*/_react.default.createElement("div", {
          className: cx('react-datepicker-year-option'),
          ref: 'previous',
          key: 'previous',
          onClick: _this.decrementYears
        }, /*#__PURE__*/_react.default.createElement("a", {
          className: cx(['react-datepicker-navigation', 'react-datepicker-navigation--years', 'react-datepicker-navigation--years-previous'])
        })));
      }
      return options;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (year) {
      _this.props.onChange(year);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleClickOutside", function () {
      _this.props.onCancel();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "shiftYears", function (amount) {
      var years = _this.state.yearsList.map(function (year) {
        return year + amount;
      });
      _this.setState({
        yearsList: years
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "incrementYears", function () {
      return _this.shiftYears(1);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "decrementYears", function () {
      return _this.shiftYears(-1);
    });
    var yearDropdownItemNumber = props.yearDropdownItemNumber,
      scrollableYearDropdown = props.scrollableYearDropdown;
    var noOfYear = yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);
    _this.state = {
      yearsList: generateYears(_this.props.year, noOfYear, _this.props.minDate, _this.props.maxDate)
    };
    return _this;
  }
  (0, _createClass2.default)(YearDropdownOptions, [{
    key: "render",
    value: function render() {
      var dropdownClass = cx({
        'react-datepicker-year-dropdown': true,
        'react-datepicker-year-dropdown--scrollable': this.props.scrollableYearDropdown
      });
      return /*#__PURE__*/_react.default.createElement("div", {
        className: dropdownClass
      }, this.renderOptions());
    }
  }]);
  return YearDropdownOptions;
}(_react.default.Component);
exports.default = YearDropdownOptions;
(0, _defineProperty2.default)(YearDropdownOptions, "propTypes", {
  /**
   * Minimum value of date that can be selected.
   */
  minDate: _propTypes.default.object,
  /**
   * Maximum value of date that can be selected.
   */
  maxDate: _propTypes.default.object,
  /**
   * A callback function to execute when user clicks outside.
   */
  onCancel: _propTypes.default.func.isRequired,
  /**
   * A callback function to execute when a valid date is selected .
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   *Specifies whether or not a scrollable year dropdown is displayed.
   */
  scrollableYearDropdown: _propTypes.default.bool,
  /**
   * The selected or entered year to show in date input.
   */
  year: _propTypes.default.number.isRequired,
  /**
   * Number of years to show in the dropdown.
   */
  yearDropdownItemNumber: _propTypes.default.number
});