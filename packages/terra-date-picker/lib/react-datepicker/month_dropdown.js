"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
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
var _month_dropdown_options = _interopRequireDefault(require("./month_dropdown_options"));
var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));
var utils = _interopRequireWildcard(require("./date_utils"));
var _react_datepickerModule = _interopRequireDefault(require("./stylesheets/react_datepicker.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
var cx = _bind.default.bind(_react_datepickerModule.default);
var WrappedMonthDropdownOptions = (0, _reactOnclickoutside.default)(_month_dropdown_options.default);
var MonthDropdown = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2.default)(MonthDropdown, _React$Component);
  var _super = _createSuper(MonthDropdown);
  function MonthDropdown() {
    var _this;
    (0, _classCallCheck2.default)(this, MonthDropdown);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "state", {
      dropdownVisible: false
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSelectOptions", function (monthNames) {
      return monthNames.map(function (M, i) {
        return /*#__PURE__*/_react.default.createElement("option", {
          key: i,
          value: i
        }, M);
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderSelectMode", function (monthNames) {
      return /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
        id: "Terra.datePicker.monthLabel"
      }, function (label) {
        return /*#__PURE__*/_react.default.createElement("select", {
          onKeyDown: _this.props.onKeyDown,
          onClick: _this.props.onClick,
          "aria-label": label,
          value: _this.props.month,
          className: cx('react-datepicker-month-select'),
          onChange: function onChange(e) {
            return _this.onChange(e.target.value);
          }
        }, _this.renderSelectOptions(monthNames));
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderReadView", function (visible, monthNames) {
      return /*#__PURE__*/_react.default.createElement("div", {
        key: "read",
        style: {
          visibility: visible ? 'visible' : 'hidden'
        },
        className: cx('react-datepicker-month-read-view'),
        onClick: _this.toggleDropdown
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: cx('react-datepicker-month-read-view--down-arrow')
      }), /*#__PURE__*/_react.default.createElement("span", {
        className: cx('react-datepicker-month-read-view--selected-month')
      }, monthNames[_this.props.month]));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderDropdown", function (monthNames) {
      return /*#__PURE__*/_react.default.createElement(WrappedMonthDropdownOptions, {
        key: "dropdown",
        ref: "options",
        month: _this.props.month,
        monthNames: monthNames,
        onChange: _this.onChange,
        onCancel: _this.toggleDropdown
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "renderScrollMode", function (monthNames) {
      var dropdownVisible = _this.state.dropdownVisible;
      var result = [_this.renderReadView(!dropdownVisible, monthNames)];
      if (dropdownVisible) {
        result.unshift(_this.renderDropdown(monthNames));
      }
      return result;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (month) {
      _this.toggleDropdown();
      if (month !== _this.props.month) {
        _this.props.onChange(month);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "toggleDropdown", function () {
      return _this.setState({
        dropdownVisible: !_this.state.dropdownVisible
      });
    });
    return _this;
  }
  (0, _createClass2.default)(MonthDropdown, [{
    key: "render",
    value: function render() {
      var _this2 = this;
      var localeData = utils.getLocaleDataForLocale(this.props.locale);
      var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (M) {
        return utils.getMonthInLocale(localeData, utils.newDate({
          M: M
        }), _this2.props.dateFormat);
      });
      var renderedDropdown;
      switch (this.props.dropdownMode) {
        case 'scroll':
          renderedDropdown = this.renderScrollMode(monthNames);
          break;
        case 'select':
          renderedDropdown = this.renderSelectMode(monthNames);
          break;
      }
      return /*#__PURE__*/_react.default.createElement("div", {
        ref: this.props.refCallback,
        className: cx(['react-datepicker-month-dropdown-container', "react-datepicker-month-dropdown-container--".concat(this.props.dropdownMode)])
      }, renderedDropdown);
    }
  }]);
  return MonthDropdown;
}(_react.default.Component);
exports.default = MonthDropdown;
(0, _defineProperty2.default)(MonthDropdown, "propTypes", {
  /**
   * Whether the month dropdowns should be in the scroll or select mode..
   */
  dropdownMode: _propTypes.default.oneOf(['scroll', 'select']).isRequired,
  /**
   * Name of locale data for different international formatting.
   */
  locale: _propTypes.default.string,
  /**
   * Format of the date selected.
   */
  dateFormat: _propTypes.default.string.isRequired,
  /**
   * Month value picked by user.
   */
  month: _propTypes.default.number.isRequired,
  /**
   * A callback function to execute when user selects a month.
   */
  onChange: _propTypes.default.func.isRequired,
  /**
   * Callback ref to pass into the dom element.
   */
  refCallback: _propTypes.default.func,
  /**
   * Callback to invoke when navigated using mouse.
   */
  onClick: _propTypes.default.func,
  /**
   * Callback to invoke when navigated using keyboard.
   */
  onKeyDown: _propTypes.default.func
});