"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _terraFormInput = _interopRequireDefault(require("terra-form-input"));
var _v = _interopRequireDefault(require("uuid/v4"));
var _excluded = ["value", "label", "description", "disabled", "isInvalid", "showIsInvalid"];
var propTypes = {
  /**
   * The initial value of the Input that this component wraps.
   */
  value: _propTypes.default.string,
  /**
   * The string labeling the input for assistive technologies like screen readers. This value is not rendered visually.
   * */
  label: _propTypes.default.string,
  /**
   * The string that gives a deeper understanding of the purpose and usage of the input for assistive technologies like
   * screen readers. This value is not rendered visually.
   * */
  description: _propTypes.default.string,
  /** Set to true to disable the input and mark it disabled for screen readers. */
  disabled: _propTypes.default.bool,
  /** Set to true to mark as invalid for screen readers. */
  isInvalid: _propTypes.default.bool,
  /** When true, setting isInvalid to true will also visually display the input as invalid. */
  showIsInvalid: _propTypes.default.bool
};
var defaultProps = {
  isInvalid: false,
  showIsInvalid: false
};

/**
 * This component adds accessibility features to an Input. One day these features should be merged into Input, but they
 * can't today for passivity reasons. Instead, this wrapper component can be used on new project.
 *
 * The benefits of using this component are:
 *
 *   - The label, description and value are face-up props; this helps you meet WCAG's text alternative guidelines[1].
 *   - Screen readers will read the label then the value, no matter whether the user is in read mode (screen reader is
 *     reading the page to the user) or form mode (the user is picking an input to focus on, from a list of all inputs
 *     on the page). A naive implementation of just using aria-labelledby or aria-label can cause double reading
 *     (e.g. 'Hours Hours 09') in some cases. This component solves that problem for you.
 *
 * 1 - https://www.w3.org/WAI/WCAG21/quickref/?versions=2.0#text-alternatives
 */
function AccessibleInput(props) {
  var value = props.value,
    label = props.label,
    description = props.description,
    disabled = props.disabled,
    isInvalid = props.isInvalid,
    showIsInvalid = props.showIsInvalid,
    inputProps = (0, _objectWithoutProperties2.default)(props, _excluded);
  var uuid = (0, _v.default)();
  var labelId = "".concat(uuid, "-label");
  var descriptionId = "".concat(uuid, "-description");
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, value && /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    text: label,
    id: labelId
  }), /*#__PURE__*/_react.default.createElement(_terraFormInput.default, (0, _extends2.default)({}, inputProps, {
    value: value,
    disabled: disabled,
    "aria-disabled": disabled
    // TimeInput requires us not to show isInvalid visually, but DateInput requires we do show isInvalid visually.
    ,
    isInvalid: showIsInvalid && isInvalid,
    "aria-invalid": isInvalid,
    "aria-labelledby": value ? labelId : undefined,
    "aria-label": value ? undefined : label,
    "aria-describedby": descriptionId
  })), /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    id: descriptionId,
    text: description
  }));
}
AccessibleInput.propTypes = propTypes;
AccessibleInput.defaultProps = defaultProps;
var _default = AccessibleInput;
exports.default = _default;