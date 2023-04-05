"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _IconCheckmark = _interopRequireDefault(require("terra-icon/lib/icon/IconCheckmark"));
var _keycodeJs = require("keycode-js");
var _PopupCount = _interopRequireDefault(require("./_PopupCount"));
var _helpers = require("../utils/helpers");
var _PopupMenuListItemModule = _interopRequireDefault(require("./PopupMenuListItem.module.scss"));
var _excluded = ["icon", "text", "id", "notificationCount", "onSelect", "showSelections", "isSelected", "loopFocus", "parentRole"];
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PopupMenuListItemModule.default);
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
   * The id for the item.
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
  isSelected: _propTypes.default.bool,
  /**
   * Whether or not selected states should display on the menu item.
   */
  showSelections: _propTypes.default.bool,
  /**
   * Function callback for item when no sibling is present.
   */
  loopFocus: _propTypes.default.func,
  /**
   * Role of the parent ul that the child item should match.
   */
  parentRole: _propTypes.default.oneOf(['list', 'menu', 'listbox'])
};
var PopupMenuListItem = function PopupMenuListItem(_ref) {
  var icon = _ref.icon,
    text = _ref.text,
    id = _ref.id,
    notificationCount = _ref.notificationCount,
    onSelect = _ref.onSelect,
    showSelections = _ref.showSelections,
    isSelected = _ref.isSelected,
    loopFocus = _ref.loopFocus,
    parentRole = _ref.parentRole,
    customProps = (0, _objectWithoutProperties2.default)(_ref, _excluded);
  var itemRef = (0, _react.useRef)();
  function nextFocus(event, sibling) {
    if (sibling) {
      sibling.focus();
    } else {
      loopFocus(event);
    }
  }
  function handleKeyDown(event) {
    if (event.nativeEvent.keyCode === _keycodeJs.KEY_RETURN || event.nativeEvent.keyCode === _keycodeJs.KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelect();
      return;
    }
    if (event.nativeEvent.keyCode === _keycodeJs.KEY_DOWN) {
      event.preventDefault();
      event.stopPropagation();
      nextFocus(event, itemRef.current.nextSibling);
    } else if (event.nativeEvent.keyCode === _keycodeJs.KEY_UP) {
      event.preventDefault();
      event.stopPropagation();
      nextFocus(event, itemRef.current.previousSibling);
    }
  }
  var ariaSpread = {};
  if (parentRole === 'list') {
    ariaSpread['aria-current'] = showSelections && isSelected;
  } else if (parentRole === 'listbox') {
    ariaSpread.role = 'option';
  } else {
    ariaSpread.role = 'menuitemcheckbox';
  }

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return /*#__PURE__*/_react.default.createElement("li", (0, _extends2.default)({}, ariaSpread, customProps, {
    tabIndex: "0",
    className: cx('item'),
    onClick: onSelect,
    onKeyDown: handleKeyDown,
    onBlur: _helpers.enableFocusStyles,
    onMouseDown: _helpers.disableFocusStyles,
    "data-focus-styles-enabled": true,
    ref: itemRef,
    id: id || undefined
  }), showSelections ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('selection-icon')
  }, isSelected ? /*#__PURE__*/_react.default.createElement(_IconCheckmark.default, null) : null) : null, icon ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('icon')
  }, icon) : null, /*#__PURE__*/_react.default.createElement("div", {
    role: "link",
    className: cx('text')
  }, text), /*#__PURE__*/_react.default.createElement(_PopupCount.default, {
    isHidden: !notificationCount,
    value: notificationCount || 0,
    isInline: true,
    className: cx('extension-row-count')
  }));
};
PopupMenuListItem.propTypes = propTypes;
var _default = PopupMenuListItem;
exports.default = _default;