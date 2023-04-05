"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _DrawerCount = _interopRequireDefault(require("./_DrawerCount"));
var _helpers = require("../utils/helpers");
var _DrawerMenuListItemModule = _interopRequireDefault(require("./DrawerMenuListItem.module.scss"));
var _excluded = ["icon", "text", "id", "notificationCount", "isSelected", "onSelect"];
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
   * The id value for the utility menu list item.
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
var DrawerMenuListItem = function DrawerMenuListItem(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    id = _ref.id,
    notificationCount = _ref.notificationCount,
    isSelected = _ref.isSelected,
    onSelect = _ref.onSelect,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, customProps, {
    id: id || undefined,
    role: "option",
    "aria-selected": isSelected,
    tabIndex: "0",
    className: cx('item', {
      'is-selected': isSelected
    }),
    onClick: onSelect,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelect),
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    "data-focus-styles-enabled": true
  }), icon ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('icon')
  }, icon) : null, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('text')
  }, text), notificationCount > 0 && /*#__PURE__*/_react.default.createElement(_DrawerCount.default, {
    value: notificationCount
  }));
};
DrawerMenuListItem.propTypes = propTypes;
var _default = DrawerMenuListItem;
exports.default = _default;