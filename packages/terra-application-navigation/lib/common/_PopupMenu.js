"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _terraActionFooter = _interopRequireDefault(require("terra-action-footer"));
var _terraContentContainer = _interopRequireDefault(require("terra-content-container"));
var _terraButton = _interopRequireDefault(require("terra-button"));
var _terraActionHeader = _interopRequireDefault(require("terra-action-header"));
var _keycodeJs = require("keycode-js");
var _PopupMenuListItem = _interopRequireDefault(require("./_PopupMenuListItem"));
var _propTypes2 = require("../utils/propTypes");
var _helpers = require("../utils/helpers");
var _PopupMenuUser = _interopRequireDefault(require("./_PopupMenuUser"));
var _PopupMenuModule = _interopRequireDefault(require("./PopupMenu.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_PopupMenuModule.default);
var propTypes = {
  /**
   * Title to be placed within the popup header.
   */
  title: _propTypes.default.string,
  /**
   * The text to be assigned to the button in the footer.
   */
  footerText: _propTypes.default.string,
  /**
   * An id used to unique identify items
   */
  id: _propTypes.default.string,
  /**
   * Callback for when the footer item is selected.
   */
  onSelectFooterItem: _propTypes.default.func,
  /**
   * The custom content to be placed at the top of the content area.
   */
  customContent: _propTypes.default.node,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType,
  /**
   * An array of selectable items to be displayed within the popup.
   */
  menuItems: _propTypes.default.arrayOf(_propTypes.default.shape({
    /**
     * Data attributes to identify the rendered menuItem.
     */
    dataAttrs: _propTypes.default.object,
    /**
     * Icon to be rendered
     */
    icon: _propTypes.default.element,
    /**
     * Key used as react key, and returned in the onSelect
     */
    key: _propTypes.default.string.isRequired,
    /**
     * The id for the menuItem.
     */
    id: _propTypes.default.string,
    /**
     * Object to be returned in the onSelect
     */
    metaData: _propTypes.default.object,
    /**
     * Text display and/or aria-label
     */
    text: _propTypes.default.string.isRequired,
    /**
     * Whether or not this item is the active item.
     */
    isActive: _propTypes.default.bool,
    /**
     * The number value representing the notification count.
     */
    notificationCount: _propTypes.default.number
  })),
  /**
   * Function callback for selection of the menu item. Returns (key, metaData).
   */
  onSelectMenuItem: _propTypes.default.func,
  /**
   * Whether or not content is constrained vertically.
   */
  isHeightBounded: _propTypes.default.bool,
  /**
   * Whether or not selected states should display on the menu item.
   */
  showSelections: _propTypes.default.bool,
  /**
   * Role of the parent ul that child items should match.
   */
  role: _propTypes.default.oneOf(['list', 'menu', 'listbox'])
};
var defaultProps = {
  menuItems: [],
  isHeightBounded: false,
  showSelections: false,
  role: 'listbox'
};
var PopupMenu = function PopupMenu(_ref) {
  var title = _ref.title,
    footerText = _ref.footerText,
    id = _ref.id,
    onSelectFooterItem = _ref.onSelectFooterItem,
    onSelectMenuItem = _ref.onSelectMenuItem,
    customContent = _ref.customContent,
    userConfig = _ref.userConfig,
    menuItems = _ref.menuItems,
    isHeightBounded = _ref.isHeightBounded,
    showSelections = _ref.showSelections,
    role = _ref.role;
  var listRef = (0, _react.useRef)();
  var buttonRef = (0, _react.useRef)();
  function setButtonRef(node) {
    buttonRef.current = node;
  }
  function handleArrowDown(event) {
    if (listRef.current.hasChildNodes()) {
      var sibling = listRef.current.firstChild;
      if (sibling) {
        event.preventDefault();
        sibling.focus();
      }
    }
  }
  function handleArrowUp(event) {
    if (listRef.current.hasChildNodes()) {
      var sibling = listRef.current.lastChild;
      if (sibling) {
        event.preventDefault();
        sibling.focus();
      }
    }
  }
  function loopFocus(event) {
    if (buttonRef.current) {
      buttonRef.current.focus();
    } else if (event.nativeEvent.keyCode === _keycodeJs.KEY_UP) {
      handleArrowUp(event);
    } else if (event.nativeEvent.keyCode === _keycodeJs.KEY_DOWN) {
      handleArrowDown(event);
    }
  }
  function handleKeyDown(event) {
    if (event.nativeEvent.keyCode === _keycodeJs.KEY_DOWN) {
      handleArrowDown(event);
    }
  }
  function handleButtonKeyDown(event) {
    if (event.nativeEvent.keyCode === _keycodeJs.KEY_RETURN || event.nativeEvent.keyCode === _keycodeJs.KEY_SPACE) {
      event.preventDefault();
      event.stopPropagation();
      onSelectFooterItem();
      return;
    }
    if (event.nativeEvent.keyCode === _keycodeJs.KEY_UP) {
      handleArrowUp(event);
    } else if (event.nativeEvent.keyCode === _keycodeJs.KEY_DOWN) {
      handleArrowDown(event);
    }
  }
  var endContent;
  if (onSelectFooterItem) {
    endContent = /*#__PURE__*/_react.default.createElement(_terraButton.default, {
      id: id && (0, _helpers.logoutUtilityItemId)(id),
      text: footerText,
      onClick: onSelectFooterItem,
      onKeyDown: handleButtonKeyDown,
      refCallback: setButtonRef,
      "data-navigation-utility-item-logout": true
    });
  }
  var theme = _react.default.useContext(_terraThemeContext.default);
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
  return /*#__PURE__*/_react.default.createElement(_terraContentContainer.default, {
    header: /*#__PURE__*/_react.default.createElement(_terraActionHeader.default, {
      "aria-hidden": true,
      title: title
    }),
    footer: /*#__PURE__*/_react.default.createElement(_terraActionFooter.default, {
      end: endContent
    }),
    fill: isHeightBounded,
    className: cx('container', theme.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('content')
  }, customContent ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('custom-content-container')
  }, customContent) : undefined, userConfig ? /*#__PURE__*/_react.default.createElement(_PopupMenuUser.default, {
    userConfig: userConfig
  }) : null, /*#__PURE__*/_react.default.createElement("ul", {
    className: cx('utility-list'),
    "aria-label": title,
    ref: listRef,
    role: role,
    tabIndex: "0",
    onKeyDown: handleKeyDown
  }, menuItems.map(function (item) {
    return /*#__PURE__*/_react.default.createElement(_PopupMenuListItem.default, (0, _extends2.default)({
      id: item.id || undefined,
      key: item.key,
      onSelect: onSelectMenuItem && onSelectMenuItem.bind(null, item.key, item.metaData),
      icon: item.icon,
      text: item.text,
      notificationCount: item.notificationCount,
      showSelections: showSelections,
      isSelected: item.isActive,
      loopFocus: loopFocus,
      parentRole: role
    }, item.dataAttrs));
  }))));
};
PopupMenu.propTypes = propTypes;
PopupMenu.defaultProps = defaultProps;
var _default = PopupMenu;
exports.default = _default;