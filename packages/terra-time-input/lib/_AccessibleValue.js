"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var propTypes = {
  /**
   * This is examined to determine whether readThis should be read or not. If value is undefined or falsy, then
   * readThis will not be read. If value has not changed, or is set for the first time, then readThis will be read. If
   * value is changed to another non-falsy value then readThis will be read.
   */
  value: _propTypes.default.string,
  /**
   * This is what will be read when value is not falsy.
   */
  readThis: _propTypes.default.string
};

/**
 * Use this component to provide a value to screen reader in a more natural fashion.
 *
 * You get these benefits by using this component:
 * - The value will be announced only when it is changed. An undefined value is never read.
 * - Less conditional rendering in the controlling component. No need to check for a value, or a change to the value.
 */
function AccessibleValue(props) {
  var _useState = (0, _react.useState)(undefined),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    role = _useState2[0],
    setRole = _useState2[1];
  var _useState3 = (0, _react.useState)(undefined),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    ariaLive = _useState4[0],
    setAriaLive = _useState4[1];
  var _useState5 = (0, _react.useState)(props.value),
    _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];

  // We want the reader to read a changed or set value at the earliest possible opportunity.
  // See https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Live_Regions#roles_with_implicit_live_region_attributes.
  //
  // FUTURE: If this convention spreads to more Terra controls consider using a package
  // like https://www.npmjs.com/package/react-aria-live to allow broadcasting across an entire frontend?
  // useEffect(() => {
  var makeStatus = function makeStatus() {
    setRole('status');
    setAriaLive('polite');
    setValue(props.value);
  };
  var reset = function reset() {
    setRole(undefined);
    setAriaLive(undefined);
    setValue(undefined);
  };
  if (props.value && !value) {
    makeStatus();
  } else if (props.value && value && props.value !== value) {
    makeStatus();
  } else if (!props.value && value) {
    reset();
  }
  return /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
    "aria-hidden": !props.value,
    text: props.readThis,
    "aria-live": ariaLive,
    role: role
  });
}
AccessibleValue.propTypes = propTypes;
var _default = AccessibleValue;
exports.default = _default;