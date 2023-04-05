"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _bind = _interopRequireDefault(require("classnames/bind"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _TimeInputModule = _interopRequireDefault(require("./TimeInput.module.scss"));
var propTypes = {
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }).isRequired
};
var cx = _bind.default.bind(_TimeInputModule.default);

/**
 * TimeSpacer is a localized, accessible string to put between inputs for hours, minutes and seconds, usually ':'.
 *
 * You get two benefits from using this component rather than a hard-coded string:
 * 1) Localize once, use many times.
 * 2) Screen readers won't read your time 09:33 as "oh-nine, COLON, thirty-three", because the spacer is hidden from
 * screen readers.
 */
function TimeSpacer(props) {
  // description: 'The symbol between hours and minutes, or between minutes and seconds.',
  var spacer = props.intl.formatMessage({
    id: 'Terra.timeInput.timeSpacer'
  });
  return /*#__PURE__*/_react.default.createElement("span", {
    // Elements like this time spacer should not be read by screen readers because they have no meaning when placed
    // between two inputs.
    "aria-hidden": true,
    className: cx('time-spacer')
  }, spacer);
}
TimeSpacer.propTypes = propTypes;
var _default = (0, _reactIntl.injectIntl)(TimeSpacer);
exports.default = _default;