"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactIntl = require("react-intl");
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _IconError = _interopRequireDefault(require("terra-icon/lib/icon/IconError"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _DateInput = _interopRequireDefault(require("./DateInput"));
var _DateInputUtil = _interopRequireDefault(require("./DateInputUtil"));
var _DateInputFieldModule = _interopRequireDefault(require("./DateInputField.module.scss"));
var _excluded = ["dayAttributes", "disabled", "displayFormat", "error", "help", "hideRequired", "isIncomplete", "isInline", "isInvalid", "isLegendHidden", "intl", "legend", "legendAttributes", "monthAttributes", "maxWidth", "name", "onBlur", "onChange", "onFocus", "required", "showOptional", "value", "yearAttributes"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var cx = _bind.default.bind(_DateInputFieldModule.default);
var propTypes = {
  /**
   * The legend of the Date Input fieldset. Also used by assistive technologies like screen readers even if isLegendHidden is true.
   */
  legend: _propTypes.default.string.isRequired,
  /**
   * Name of the date input. The name should be unique.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * Custom input attributes to apply to the day input
   */
  dayAttributes: _propTypes.default.object,
  /**
   * Whether the date input should be disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * Can be used to set the display format. One of `month-day-year` or `day-month-year`.
   * Overrides default locale display format.
   */
  displayFormat: _propTypes.default.string,
  /**
   * Error message for when the field is invalid. This will only be displayed if isInvalid is true.
   */
  error: _propTypes.default.node,
  /**
   * Help element to display with the field.
   */
  help: _propTypes.default.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: _propTypes.default.bool,
  /**
  * Whether the field displays as Incomplete. Use when no value has been provided. _(usage note: `required` must also be set)_.
  */
  isIncomplete: _propTypes.default.bool,
  /**
   * Whether or not the field is an inline field.
   */
  isInline: _propTypes.default.bool,
  /**
  * Whether the field displays as Invalid. Use when value does not meet validation pattern.
  */
  isInvalid: _propTypes.default.bool,
  /**
   * Whether or not the legend is visible. Use this props to hide a legend while still creating it on the DOM for accessibility.
   */
  isLegendHidden: _propTypes.default.bool,
  /**
   * @private
   * Intl object injected from injectIntl
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   * Attributes to attach to the legend.
   */
  legendAttributes: _propTypes.default.object,
  /**
   * Custom select attributes to apply to the month select
   */
  monthAttributes: _propTypes.default.object,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: _propTypes.default.string,
  /**
   * A callback function triggered when the date input component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date input component.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when a date is entered.
   * The first parameter is the event. The second parameter is the changed date value.
   */
  onChange: _propTypes.default.func,
  /**
   * A callback function triggered when the date input component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date input component.
   */
  onFocus: _propTypes.default.func,
  /**
   * Whether or not the date input field is required.
   */
  required: _propTypes.default.bool,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: _propTypes.default.bool,
  /**
   * An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD.
   */
  value: _propTypes.default.string,
  /**
   * Custom input attributes to apply to the year input
   */
  yearAttributes: _propTypes.default.object
};
var defaultProps = {
  dayAttributes: {},
  disabled: false,
  displayFormat: undefined,
  error: null,
  help: null,
  hideRequired: false,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLegendHidden: false,
  legendAttributes: {},
  monthAttributes: {},
  maxWidth: undefined,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  required: false,
  showOptional: false,
  value: '',
  yearAttributes: {}
};
var DateInputField = function DateInputField(props) {
  var dayAttributes = props.dayAttributes,
    disabled = props.disabled,
    displayFormat = props.displayFormat,
    error = props.error,
    help = props.help,
    hideRequired = props.hideRequired,
    isIncomplete = props.isIncomplete,
    isInline = props.isInline,
    isInvalid = props.isInvalid,
    isLegendHidden = props.isLegendHidden,
    intl = props.intl,
    legend = props.legend,
    legendAttributes = props.legendAttributes,
    monthAttributes = props.monthAttributes,
    maxWidth = props.maxWidth,
    name = props.name,
    onBlur = props.onBlur,
    onChange = props.onChange,
    onFocus = props.onFocus,
    required = props.required,
    showOptional = props.showOptional,
    value = props.value,
    yearAttributes = props.yearAttributes,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var uniqueid = (0, _react.useRef)((0, _v.default)());
  var theme = _react.default.useContext(_terraThemeContext.default);
  var dateInputFieldClasses = (0, _classnames.default)(cx('date-input-field', {
    'is-inline': isInline
  }, theme.className), customProps.className);
  var legendClassNames = (0, _classnames.default)(cx('legend', theme.className), legendAttributes.className);

  /**
   * aria-describedby ids
   * Used to map legend, help text, and error messages with input/select elements
   */
  var helpAriaDescriptionId = "terra-date-input-field-description-help-".concat(uniqueid.current);
  var errorAriaDescriptionId = "terra-date-input-field-description-error-".concat(uniqueid.current);
  var ariaDescriptionIds = helpAriaDescriptionId;
  if (error && isInvalid) {
    ariaDescriptionIds = "".concat(errorAriaDescriptionId, " ").concat(helpAriaDescriptionId);
  }
  var customMonthAriaDescribedById = monthAttributes && monthAttributes['aria-describedby'];
  var customDayAriaDescribedById = dayAttributes && dayAttributes['aria-describedby'];
  var customYearAriaDescribedById = yearAttributes && yearAttributes['aria-describedby'];
  var monthAriaDescriptionIds = customMonthAriaDescribedById ? "".concat(ariaDescriptionIds, " ").concat(customMonthAriaDescribedById) : ariaDescriptionIds;
  var dayAriaDescriptionIds = customDayAriaDescribedById ? "".concat(ariaDescriptionIds, " ").concat(customDayAriaDescribedById) : ariaDescriptionIds;
  var yearAriaDescriptionIds = customYearAriaDescribedById ? "".concat(ariaDescriptionIds, " ").concat(customYearAriaDescribedById) : ariaDescriptionIds;
  var legendGroup = /*#__PURE__*/_react.default.createElement("legend", {
    className: cx(['legend-group', {
      'legend-group-hidden': isLegendHidden
    }])
  }, /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, legendAttributes, {
    className: legendClassNames
  }), isInvalid && /*#__PURE__*/_react.default.createElement("span", {
    className: cx('error-icon')
  }, /*#__PURE__*/_react.default.createElement(_IconError.default, null)), required && (isInvalid || !hideRequired) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": "true",
    className: cx('required')
  }, "*"), /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    text: intl.formatMessage({
      id: 'Terra.date.input.required'
    })
  })), legend, required && !isInvalid && hideRequired && /*#__PURE__*/_react.default.createElement("span", {
    className: cx('required-hidden')
  }, "*"), showOptional && !required && /*#__PURE__*/_react.default.createElement("span", {
    className: cx('optional')
  }, intl.formatMessage({
    id: 'Terra.date.input.optional'
  })), !isInvalid && /*#__PURE__*/_react.default.createElement("span", {
    className: cx('error-icon-hidden')
  })));
  var format = _DateInputUtil.default.getDateFormat({
    displayFormat: displayFormat,
    intl: intl
  });
  return /*#__PURE__*/_react.default.createElement("fieldset", (0, _extends2.default)({}, customProps, {
    className: dateInputFieldClasses
  }), legendGroup, help && /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    text: help
  }), /*#__PURE__*/_react.default.createElement(_DateInput.default
  /** The DateInput needs a label to use for the first control (date or month, depending on the locale).
   *
   * The first Input in the group has a combination label, 'Date of Birth Month', so that it's easy to pick out
   * that field out of a list of many inputs in the same view when the screen reader is in picker mode. Picker
   * mode lets the user can jump to elements in a page. Screen readers tend to present a flat list of inputs
   * without context of which the Date Input those inputs belong to, like this:
   *  ==SCREEN READER'S LIST OF FORM INPUTS TO PICK==
   *  1. Date of Birth Month
   *  2. Date
   *  3. Year
   *  4. Anniversary Month <-- easy to spot the start of this Date Input.
   *  5. Date
  */, {
    a11yLabel: legend,
    dayAttributes: _objectSpread(_objectSpread({}, dayAttributes), {
      'aria-describedby': dayAriaDescriptionIds
    }),
    disabled: disabled,
    displayFormat: displayFormat,
    isA11yControlled: true // This field is controlling the a11y features of the input.
    ,
    isIncomplete: isIncomplete,
    isInvalid: isInvalid,
    monthAttributes: _objectSpread(_objectSpread({}, monthAttributes), {
      'aria-describedby': monthAriaDescriptionIds
    }),
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    required: required,
    useExternalFormatMask: true,
    value: value,
    yearAttributes: _objectSpread(_objectSpread({}, yearAttributes), {
      'aria-describedby': yearAriaDescriptionIds
    })
  }), isInvalid && error && /*#__PURE__*/_react.default.createElement("div", {
    id: errorAriaDescriptionId,
    className: cx('error-text')
  }, error), /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": true,
    className: cx('help-text')
  }, help ? "".concat(format, " ").concat(help) : format));
};
DateInputField.propTypes = propTypes;
DateInputField.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(DateInputField);
exports.default = _default;