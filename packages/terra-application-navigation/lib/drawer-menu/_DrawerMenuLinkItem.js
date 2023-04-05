"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DrawerCount = _interopRequireDefault(require("./_DrawerCount"));
var _helpers = require("../utils/helpers");
var _DrawerMenuListItemModule = _interopRequireDefault(require("./DrawerMenuListItem.module.scss"));
var cx = _bind.default.bind(_DrawerMenuListItemModule.default);
var propTypes = {
  /**
   * Icon to be rendered
   */
  icon: _propTypes.default.element,
  /**
   * Text display and/or aria-label
   */
  text: _propTypes.default.string.isRequired,
  /**
    * The id for the menu list item.
   */
  id: _propTypes.default.string,
  /**
   * The number value representing the notification count.
   */
  notificationCount: _propTypes.default.number,
  /**
   * Function callback for item selection.
   */
  onSelect: _propTypes.default.func.isRequired,
  /**
   * Whether or not this item is the active item.
   */
  isSelected: _propTypes.default.bool
};
var DrawerMenuLinkItem = function DrawerMenuLinkItem(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    id = _ref.id,
    notificationCount = _ref.notificationCount,
    isSelected = _ref.isSelected,
    onSelect = _ref.onSelect;
  return /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("div", {
    id: id || undefined,
    role: "link",
    "aria-current": isSelected,
    tabIndex: "0",
    className: cx('item', {
      'is-selected': isSelected
    }, 'has-border'),
    onClick: onSelect,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelect),
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    "data-focus-styles-enabled": true
  }, icon ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('icon')
  }, icon) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('text')
  }, text), notificationCount > 0 && /*#__PURE__*/_react.default.createElement(_DrawerCount.default, {
    value: notificationCount
  })));
};
DrawerMenuLinkItem.propTypes = propTypes;
var _default = DrawerMenuLinkItem;
exports.default = _default;