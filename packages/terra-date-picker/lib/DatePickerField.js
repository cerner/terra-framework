"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _terraFormField = _interopRequireDefault(require("terra-form-field"));
var _reactIntl = require("react-intl");
var _IconError = _interopRequireDefault(require("terra-icon/lib/icon/IconError"));
var _DatePicker = _interopRequireDefault(require("./DatePicker"));
var _excluded = ["datePickerId", "disabled", "inputAttributes", "error", "errorIcon", "excludeDates", "filterDate", "help", "hideRequired", "isIncomplete", "isInvalid", "isInline", "isLabelHidden", "includeDates", "intl", "label", "labelAttrs", "maxDate", "minDate", "maxWidth", "name", "onBlur", "onChange", "onChangeRaw", "onClickOutside", "onFocus", "onRequestClose", "onSelect", "required", "selectedDate", "showOptional", "value"];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
var propTypes = {
  /**
   * The DatePicker identifier. Links the htmlFor of the field to the select identifier.
   */
  datePickerId: _propTypes.default.string.isRequired,
  /**
   * Whether the date input should be disabled.
   */
  disabled: _propTypes.default.bool,
  /**
   * Error message for when the input is invalid. This will only be displayed if isInvalid is true.
   */
  error: _propTypes.default.node,
  /**
   * Error Icon to display when the input is invalid.
   */
  errorIcon: _propTypes.default.element,
  /**
   * An array of ISO 8601 string representation of the dates to disable in the picker.
   */
  excludeDates: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * A function that gets called for each date in the picker to evaluate which date should be disabled.
   * A return value of true will be enabled and false will be disabled.
   */
  filterDate: _propTypes.default.func,
  /**
   * Help element to display with the input.
   */
  help: _propTypes.default.node,
  /**
   * Whether or not to hide the required indicator on the label.
   */
  hideRequired: _propTypes.default.bool,
  /**
   * An array of ISO 8601 string representation of the dates to enable in the picker. All Other dates will be disabled.
   */
  includeDates: _propTypes.default.arrayOf(_propTypes.default.string),
  /**
   * Custom input attributes to apply to the date input. Use the name prop to set the name for the input.
   * Do not set the name in inputAttribute as it will be ignored.
   */
  inputAttributes: _propTypes.default.object,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func,
    locale: _propTypes.default.string
  }).isRequired,
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
   * Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility.
   */
  isLabelHidden: _propTypes.default.bool,
  /**
   * The label of the form control children.
   */
  label: _propTypes.default.node.isRequired,
  /**
   * Attributes to attach to the label.
   */
  labelAttrs: _propTypes.default.object,
  /**
   * An ISO 8601 string representation of the maximum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or before `12/31/2100`.
   */
  maxDate: _propTypes.default.string,
  /**
   * An ISO 8601 string representation of the minimum date that can be selected. The value must be in the `YYYY-MM-DD` format. Must be on or after `01/01/1900`
   */
  minDate: _propTypes.default.string,
  /**
   * Name of the date input. The name should be unique.
   */
  name: _propTypes.default.string.isRequired,
  /**
   * A callback function triggered when the date picker component loses focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   * The first parameter is the event. The second parameter is the metadata to describe the current state of the input value at the time when the onBlur callback is triggered.
   */
  onBlur: _propTypes.default.func,
  /**
   * A callback function to execute when a valid date is selected or entered.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChange callback is triggered.
   */
  onChange: _propTypes.default.func,
  /**
   * A callback function to execute when a change is made in the date input.
   * The first parameter is the event. The second parameter is the changed date value. The third parameter is the metadata to describe the current state of the input value at the time when the onChangeRaw callback is triggered.
   */
  onChangeRaw: _propTypes.default.func,
  /**
   * **Deprecated**, A callback function to execute when clicking outside of the picker to dismiss it. Resolves to `onRequestClose`.
   */
  onClickOutside: _propTypes.default.func,
  /**
   * A callback function triggered when the date picker component receives focus.
   * This event does not get triggered when the focus is moved from the date input to the calendar button since the focus is still within the main date picker component.
   */
  onFocus: _propTypes.default.func,
  /**
   * A callback function to execute when picker is dismissed. onRequestClose(event)
   */
  onRequestClose: _propTypes.default.func,
  /**
   * A callback function to execute when a date is selected from within the picker.
   */
  onSelect: _propTypes.default.func,
  /**
   * Whether or not the date field is required.
   */
  required: _propTypes.default.bool,
  /**
   * Set the max-width of a field using `length` or `%`.  Best practice recommendation to never exceed
   * a rendered value of 1020px. _(Note: Providing custom inline styles will take precedence.)_
   */
  maxWidth: _propTypes.default.string,
  /**
   * An ISO 8601 string representation of the initial value to show in the date input.
   * This prop name is derived from react-datepicker but is analogous to value in a form input field.
   */
  selectedDate: _propTypes.default.string,
  /**
   * Whether or not to append the 'optional' label to a non-required field label.
   */
  showOptional: _propTypes.default.bool,
  /**
   * The date value. This prop should only be used for a controlled date picker field.
   * When this prop is set a handler is needed for both the `onChange` and `onChangeRaw` props to manage the date value.
   * If both `selectedDate` and this prop are set, then `selectedDate` will have no effect.
   * The value must be in the `YYYY-MM-DD` format or the all-numeric date format based on the locale.
   */
  value: _propTypes.default.string
};
var defaultProps = {
  disabled: false,
  error: null,
  errorIcon: /*#__PURE__*/_react.default.createElement(_IconError.default, null),
  excludeDates: undefined,
  filterDate: undefined,
  help: null,
  hideRequired: false,
  includeDates: undefined,
  inputAttributes: undefined,
  isIncomplete: false,
  isInline: false,
  isInvalid: false,
  isLabelHidden: false,
  labelAttrs: {},
  maxDate: undefined,
  maxWidth: undefined,
  minDate: undefined,
  onBlur: undefined,
  onChange: undefined,
  onChangeRaw: undefined,
  onClickOutside: undefined,
  onFocus: undefined,
  onSelect: undefined,
  required: false,
  selectedDate: undefined,
  showOptional: false
};
var DatePickerField = function DatePickerField(props) {
  var datePickerId = props.datePickerId,
    disabled = props.disabled,
    inputAttributes = props.inputAttributes,
    error = props.error,
    errorIcon = props.errorIcon,
    excludeDates = props.excludeDates,
    filterDate = props.filterDate,
    help = props.help,
    hideRequired = props.hideRequired,
    isIncomplete = props.isIncomplete,
    isInvalid = props.isInvalid,
    isInline = props.isInline,
    isLabelHidden = props.isLabelHidden,
    includeDates = props.includeDates,
    intl = props.intl,
    label = props.label,
    labelAttrs = props.labelAttrs,
    maxDate = props.maxDate,
    minDate = props.minDate,
    maxWidth = props.maxWidth,
    name = props.name,
    onBlur = props.onBlur,
    onChange = props.onChange,
    onChangeRaw = props.onChangeRaw,
    onClickOutside = props.onClickOutside,
    onFocus = props.onFocus,
    onRequestClose = props.onRequestClose,
    onSelect = props.onSelect,
    required = props.required,
    selectedDate = props.selectedDate,
    showOptional = props.showOptional,
    value = props.value,
    customProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var ariaDescriptionIds = "".concat(datePickerId, "-help");
  if (error && isInvalid) {
    ariaDescriptionIds = "".concat(datePickerId, "-error ").concat(datePickerId, "-help");
  }
  var inputAriaDescriptionId = inputAttributes && inputAttributes['aria-describedby'];
  var mergedInputAttrs = inputAttributes;
  if (ariaDescriptionIds) {
    mergedInputAttrs = _objectSpread(_objectSpread({}, inputAttributes), {}, {
      'aria-describedby': inputAriaDescriptionId ? "".concat(ariaDescriptionIds, " ").concat(inputAriaDescriptionId) : ariaDescriptionIds
    });
  }
  var format = intl.formatMessage({
    id: 'Terra.datePicker.dateFormat'
  });
  var helpLabel = help ? /*#__PURE__*/_react.default.createElement("div", {
    "aria-label": "".concat(intl.formatMessage({
      id: 'Terra.datePicker.dateFormatLabel'
    }), " ").concat(format, ", ").concat(help)
  }, "(".concat(format, ")"), "\xA0", help) : /*#__PURE__*/_react.default.createElement("div", {
    "aria-label": "".concat(intl.formatMessage({
      id: 'Terra.datePicker.dateFormatLabel'
    }), " ").concat(format)
  }, "(".concat(format, ")"));
  return /*#__PURE__*/_react.default.createElement(_terraFormField.default, (0, _extends2.default)({}, customProps, {
    label: label,
    labelAttrs: labelAttrs,
    error: error,
    help: helpLabel,
    hideRequired: hideRequired,
    required: required,
    showOptional: showOptional,
    isInvalid: isInvalid,
    isInline: isInline,
    isLabelHidden: isLabelHidden,
    htmlFor: datePickerId,
    maxWidth: maxWidth
  }), /*#__PURE__*/_react.default.createElement(_DatePicker.default, {
    disabled: disabled,
    id: datePickerId,
    inputAttributes: mergedInputAttrs,
    excludeDates: excludeDates,
    filterDate: filterDate,
    useExternalFormatMask: true,
    includeDates: includeDates,
    isInvalid: isInvalid,
    isIncomplete: isIncomplete,
    maxDate: maxDate,
    minDate: minDate,
    ariaLabel: label,
    name: name,
    onBlur: onBlur,
    onChange: onChange,
    onChangeRaw: onChangeRaw,
    onRequestClose: onRequestClose,
    onClickOutside: onClickOutside,
    onFocus: onFocus,
    onSelect: onSelect,
    required: required,
    selectedDate: selectedDate,
    value: value
  }));
};
DatePickerField.propTypes = propTypes;
DatePickerField.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(DatePickerField);
exports.default = _default;