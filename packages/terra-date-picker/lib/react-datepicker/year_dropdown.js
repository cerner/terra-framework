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
var _reactIntl = require("react-intl");
var _year_dropdown_options = _interopRequireDefault(require("./year_dropdown_options"));
var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));
var _date_utils = require("./date_utils");
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var WrappedYearDropdownOptions = (0, _reactOnclickoutside.default)(_year_dropdown_options.default);
var YearDropdown = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(YearDropdown, _React$Component);
  var _super = _createSuper(YearDropdown);
  function YearDropdown() {
    var _this;
    (0, _classCallCheck2.default)(this, YearDropdown);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      dropdownVisible: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSelectOptions", function () {
      var minYear = (0, _date_utils.getYear)(_this.props.minDate);
      var maxYear = (0, _date_utils.getYear)(_this.props.maxDate);
      var options = [];
      for (var i = minYear; i <= maxYear; i++) {
        options.push( /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, i));
      }
      return options;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelectChange", function (e) {
      _this.onChange(e.target.value);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSelectMode", function () {
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.datePicker.yearLabel"
      }, function (label) {
        return /*#__PURE__*/_react.default.createElement("select", {
          onClick: _this.props.onClick,
          onKeyDown: _this.props.onKeyDown,
          "aria-label": label,
          value: _this.props.year,
          className: cx('react-datepicker-year-select'),
          onChange: _this.onSelectChange
        }, _this.renderSelectOptions());
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderReadView", function (visible) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "read",
        style: {
          visibility: visible ? 'visible' : 'hidden'
        },
        className: cx('react-datepicker-year-read-view'),
        onClick: function onClick(event) {
          return _this.toggleDropdown(event);
        }
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: cx('react-datepicker-year-read-view--down-arrow')
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: cx('react-datepicker-year-read-view--selected-year')
      }, _this.props.year));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderDropdown", function () {
      return /*#__PURE__*/_react.default.createElement(WrappedYearDropdownOptions, {
        key: "dropdown",
        ref: "options",
        year: _this.props.year,
        onChange: _this.onChange,
        onCancel: _this.toggleDropdown,
        minDate: _this.props.minDate,
        maxDate: _this.props.maxDate,
        scrollableYearDropdown: _this.props.scrollableYearDropdown,
        yearDropdownItemNumber: _this.props.yearDropdownItemNumber
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderScrollMode", function () {
      var dropdownVisible = _this.state.dropdownVisible;
      var result = [_this.renderReadView(!dropdownVisible)];
      if (dropdownVisible) {
        result.unshift(_this.renderDropdown());
      }
      return result;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (year) {
      _this.toggleDropdown();
      if (year === _this.props.year) return;
      _this.props.onChange(year);
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleDropdown", function (event) {
      _this.setState({
        dropdownVisible: !_this.state.dropdownVisible
      }, function () {
        if (_this.props.adjustDateOnChange) {
          _this.handleYearChange(_this.props.date, event);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleYearChange", function (date, event) {
      _this.onSelect(date, event);
      _this.setOpen();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSelect", function (date, event) {
      if (_this.props.onSelect) {
        _this.props.onSelect(date, event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "setOpen", function () {
      if (_this.props.setOpen) {
        _this.props.setOpen(true);
      }
    });
    return _this;
  }
  (0, _createClass2.default)(YearDropdown, [{
    key: "render",
    value: function render() {
      var renderedDropdown;
      switch (this.props.dropdownMode) {
        case 'scroll':
          renderedDropdown = this.renderScrollMode();
          break;
        case 'select':
          renderedDropdown = this.renderSelectMode();
          break;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.props.refCallback,
        className: cx(['react-datepicker-year-dropdown-container', "react-datepicker-year-dropdown-container--".concat(this.props.dropdownMode)])
      }, renderedDropdown);
    }
  }]);
  return YearDropdown;
}(_react.default.Component);
exports.default = YearDropdown;
(0, _defineProperty2.default)(YearDropdown, "propTypes", {
  /**
   * Prop to change date when a valid date is selected.
   */
  adjustDateOnChange: _propTypes.default.bool,
  /**
   * Whether the year dropdowns should be in the scroll or select mode..
   */
  dropdownMode: _propTypes.default.oneOf(['scroll', 'select']).isRequired,
  /**
   * Maximum value of date that can be entered or selected.
   */
  maxDate: _propTypes.default.object,
  /**
   * Minimum value of date that can be entered or selected.
   */
  minDate: _propTypes.default.object,
  /**
   * A callback function to execute when a valid date is entered.
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * Prop to allow scrollable year dropdown.
   */
  scrollableYearDropdown: _propTypes.default.bool,
  /**
   * The selected or entered year to show in date input.
   */
  year: _propTypes.default.number.isRequired,
  /**
   * Number of years to show in the dropdown.
   */
  yearDropdownItemNumber: _propTypes.default.number,
  /**
   * The selected or entered valid date value.
   */
  date: _propTypes.default.object,
  /**
   * A callback function to execute when a valid year is selected.
   */
  onSelect: _propTypes.default.func,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: _propTypes.default.func,
  /**
   * A callback function to execute when the year dropdown is open.
   */
  setOpen: _propTypes.default.func,
  /**
   * Callback to invoke when navigated using mouse.
   */
  onClick: _propTypes.default.func,
  /**
   * Callback to invoke when navigated using keyboard.
   */
  onKeyDown: _propTypes.default.func
});