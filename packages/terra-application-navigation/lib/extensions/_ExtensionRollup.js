"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _IconExtensions = _interopRequireDefault(require("terra-icon/lib/icon/IconExtensions"));
var _ExtensionCount = _interopRequireDefault(require("./_ExtensionCount"));
var _helpers = require("../utils/helpers");
var _ExtensionRollupModule = _interopRequireDefault(require("./ExtensionRollup.module.scss"));
var cx = _bind.default.bind(_ExtensionRollupModule.default);
var propTypes = {
  /**
   * Whether or not hidden extensions have notifications.
   */
  hasChildNotifications: _propTypes.default.bool,
  /**
   * Function callback for selection of the extension rollup.
   */
  onSelect: _propTypes.default.func,
  /**
   * Callback function for the rollup node.
   */
  extensionRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  }),
  /**
   * Whether or not the notification count should pulse.
   */
  isPulsed: _propTypes.default.bool,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var defaultProps = {
  hasChildNotifications: false,
  isPulsed: false
};
var ExtensionRollup = function ExtensionRollup(_ref) {
  var hasChildNotifications = _ref.hasChildNotifications,
    isPulsed = _ref.isPulsed,
    onSelect = _ref.onSelect,
    extensionRef = _ref.extensionRef,
    intl = _ref.intl;
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "button",
    tabIndex: "0",
    className: cx('extension-rollup'),
    onClick: onSelect,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelect),
    ref: extensionRef,
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    title: intl.formatMessage({
      id: 'Terra.applicationNavigation.extensions.rollupButtonDescription'
    }),
    "aria-label": intl.formatMessage({
      id: 'Terra.applicationNavigation.extensions.rollupButtonDescription'
    }),
    "aria-haspopup": true,
    "data-focus-styles-enabled": true,
    "data-application-extension-rollup": true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('extension-rollup-inner')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('extension-rollup-image')
  }, /*#__PURE__*/_react.default.createElement(_IconExtensions.default, null)), hasChildNotifications && /*#__PURE__*/_react.default.createElement(_ExtensionCount.default, {
    isRollup: true,
    className: cx('extension-rollup-count'),
    value: isPulsed ? 1 : 0
  })));
};
ExtensionRollup.propTypes = propTypes;
ExtensionRollup.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(ExtensionRollup);
exports.default = _default;