"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _ExtensionCount = _interopRequireDefault(require("./_ExtensionCount"));
var _helpers = require("../utils/helpers");
var _ExtensionModule = _interopRequireDefault(require("./Extension.module.scss"));
var cx = _bind.default.bind(_ExtensionModule.default);
var propTypes = {
  /**
   * The icon to display for the associated extension action.
   */
  icon: _propTypes.default.element.isRequired,
  /**
   * The number of notifications to be displayed for the extension.
   */
  notificationCount: _propTypes.default.number,
  /**
   * Function callback for selection of the extension. Return (metaData).
   */
  onSelect: _propTypes.default.func,
  /**
   * The text display for the extension, either the aria label or the inline text.
   */
  text: _propTypes.default.string.isRequired,
  /**
    * The id for the extension item.
    */
  id: _propTypes.default.string
};
var defaultProps = {
  notificationCount: 0
};
var Extension = function Extension(_ref) {
  var notificationCount = _ref.notificationCount,
    icon = _ref.icon,
    text = _ref.text,
    id = _ref.id,
    onSelect = _ref.onSelect;
  var validatedValue = notificationCount;
  if (notificationCount > 99) {
    validatedValue = '99+';
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    id: id,
    role: "button",
    tabIndex: "0",
    className: cx('extension'),
    onClick: onSelect,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelect),
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    "data-focus-styles-enabled": true,
    "aria-label": validatedValue ? "".concat(text, " ").concat(validatedValue) : text
  }, /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": true,
    className: cx('extension-inner')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('extension-image'),
    title: text
  }, icon), notificationCount > 0 && /*#__PURE__*/_react.default.createElement(_ExtensionCount.default, {
    value: notificationCount,
    className: cx('extension-count')
  })));
};
Extension.propTypes = propTypes;
Extension.defaultProps = defaultProps;
var _default = Extension;
exports.default = _default;