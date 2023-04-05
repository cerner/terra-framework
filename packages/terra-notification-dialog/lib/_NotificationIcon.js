"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames = _interopRequireDefault(require("classnames"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _NotificationIconModule = _interopRequireDefault(require("./NotificationIcon.module.scss"));
var cx = _bind.default.bind(_NotificationIconModule.default);
var propTypes = {
  /**
   * The variant of notification to be rendered. This renders the icon corresponding to the variant concept.
   */
  variant: _propTypes.default.oneOf(['hazard-high', 'hazard-medium', 'hazard-low', 'error', 'custom']).isRequired,
  /**
   * The class name for the custom icon to be used for a notification when `variant="custom"`.
   */
  iconClassName: _propTypes.default.string
};
var NotificationDialogIcon = function NotificationDialogIcon(_ref) {
  var variant = _ref.variant,
    iconClassName = _ref.iconClassName;
  var theme = _react.default.useContext(_terraThemeContext.default);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('icon-container', theme.className)
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: (0, _classnames.default)(cx(['icon', "".concat(variant, "-icon")], (0, _defineProperty2.default)({}, "".concat(iconClassName), variant === 'custom')))
  }));
};
NotificationDialogIcon.propTypes = propTypes;
var _default = NotificationDialogIcon;
exports.default = _default;