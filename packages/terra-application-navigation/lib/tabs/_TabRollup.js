"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _IconCaretDown = _interopRequireDefault(require("terra-icon/lib/icon/IconCaretDown"));
var _reactIntl = require("react-intl");
var _TabCount = _interopRequireDefault(require("./_TabCount"));
var _helpers = require("../utils/helpers");
var _TabModule = _interopRequireDefault(require("./Tab.module.scss"));
var cx = _bind.default.bind(_TabModule.default);
var propTypes = {
  /**
   * Whether or not the menu display should be animated with selection.
   */
  isSelected: _propTypes.default.bool,
  /**
   * The selection callback for the tab.
   */
  onTabSelect: _propTypes.default.func,
  /**
   * The display text for the tab.
   */
  text: _propTypes.default.string,
  /**
   * Ref object that will be updated with a reference to the TabRollup's inner element.
   */
  innerRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  }),
  /**
   * Ref object that will be updated with a reference to the TabRollup's root element.
   */
  tabRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  }),
  /**
   * Should the count notification be displayed on the menu display.
   */
  hasChildNotifications: _propTypes.default.bool,
  /**
   * Whether or not the notification should pulse animate.
   */
  isPulsed: _propTypes.default.bool,
  /**
   * Boolean indicating whether or not the Tab should account for count spacing.
   */
  hasCount: _propTypes.default.bool,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var defaultProps = {
  hasCount: false,
  isPulsed: false,
  isSelected: false,
  hasChildNotifications: false
};
var TabRollup = function TabRollup(_ref) {
  var hasCount = _ref.hasCount,
    isSelected = _ref.isSelected,
    onTabSelect = _ref.onTabSelect,
    innerRef = _ref.innerRef,
    tabRef = _ref.tabRef,
    hasChildNotifications = _ref.hasChildNotifications,
    text = _ref.text,
    isPulsed = _ref.isPulsed,
    intl = _ref.intl;
  var ariaLabel = intl.formatMessage({
    id: 'Terra.applicationNavigation.tabs.rollupButtonDescription'
  });
  if (hasChildNotifications) {
    ariaLabel = "".concat(ariaLabel, " ").concat(intl.formatMessage({
      id: 'Terra.applicationNavigation.notifications.new'
    }));
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    type: "button",
    role: "button",
    tabIndex: "0",
    className: cx('tab-rollup', {
      'has-count': hasCount
    }),
    onClick: onTabSelect,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onTabSelect),
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    ref: tabRef,
    "aria-current": isSelected,
    "aria-haspopup": true,
    "data-focus-styles-enabled": true,
    "aria-label": ariaLabel
  }, /*#__PURE__*/_react.default.createElement("div", {
    "aria-hidden": true,
    className: cx('tab-inner'),
    "data-tab-menu-inner": true
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "terra-navigation-link-".concat(text),
    className: cx('tab-rollup-label'),
    ref: innerRef
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: cx('tab-rollup-text')
  }, text), hasChildNotifications && /*#__PURE__*/_react.default.createElement("span", {
    className: cx('tab-count')
  }, /*#__PURE__*/_react.default.createElement(_TabCount.default, {
    value: isPulsed ? 1 : 0,
    isRollup: true
  })), /*#__PURE__*/_react.default.createElement(_IconCaretDown.default, {
    className: cx('tab-rollup-icon')
  }))));
};
TabRollup.propTypes = propTypes;
TabRollup.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(TabRollup);
exports.default = _default;