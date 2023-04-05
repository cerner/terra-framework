"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _reactIntl = require("react-intl");
var _IconMenu = _interopRequireDefault(require("terra-icon/lib/icon/IconMenu"));
var _ToggleCount = _interopRequireDefault(require("./_ToggleCount"));
var _Extensions = _interopRequireDefault(require("../extensions/_Extensions"));
var _helpers = require("../utils/helpers");
var _propTypes2 = require("../utils/propTypes");
var _CompactHeaderModule = _interopRequireDefault(require("./CompactHeader.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_CompactHeaderModule.default);
var propTypes = {
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: _propTypes.default.string,
  /**
   * Whether or not drawer menu is open.
   */
  isDrawerMenuOpen: _propTypes.default.bool,
  /**
   * A function to be executed upon selection of the CompactHeader's menu button.
   */
  onSelectMenuButton: _propTypes.default.func,
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: _propTypes2.titleConfigPropType,
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionItems: _propTypes2.extensionItemsPropType,
  /**
   * A function to be executed upon the selection of an extensions item.
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: _propTypes.default.func,
  /**
   * A function to be executed upon selection of the 'Skip to Content' button.
   */
  onSelectSkipToContent: _propTypes.default.func,
  /**
   * Array of navigation items used to determine whether or not the Menu button should render with notifications.
   */
  navigationItems: _propTypes2.navigationItemsPropType,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: _propTypes.default.object,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: _propTypes2.utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey)`
   */
  onSelectNavigationItem: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectHelp: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: _propTypes.default.func,
  /**
   * The base id used to generate ids of navigation, utility, and extension items
   */
  id: _propTypes.default.string,
  /**
   * @private
   * The currently active breakpoint.
   */
  activeBreakpoint: _propTypes.default.string,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  }),
  /**
   * An element to render within the Header's utility menu.
   */
  hero: _propTypes.default.element,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType
};
var defaultProps = {
  extensionItems: [],
  isDrawerMenuOpen: false,
  navigationItems: [],
  utilityItems: [],
  notifications: {}
};
function buildUtilityItem(text, key, onSelect, isUtilityOpen, id) {
  return /*#__PURE__*/_react.default.createElement("li", {
    id: id && (0, _helpers.utilityItemId)(id, key),
    key: key,
    className: cx('hidden-item'),
    tabIndex: isUtilityOpen ? '0' : '-1',
    role: "option",
    "aria-selected": "false",
    onClick: onSelect,
    onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelect)
  }, text);
}
var CompactHeader = function CompactHeader(_ref) {
  var isDrawerMenuOpen = _ref.isDrawerMenuOpen,
    onSelectMenuButton = _ref.onSelectMenuButton,
    titleConfig = _ref.titleConfig,
    extensionItems = _ref.extensionItems,
    onSelectExtensionItem = _ref.onSelectExtensionItem,
    onSelectSkipToContent = _ref.onSelectSkipToContent,
    navigationItems = _ref.navigationItems,
    notifications = _ref.notifications,
    activeBreakpoint = _ref.activeBreakpoint,
    utilityItems = _ref.utilityItems,
    activeNavigationItemKey = _ref.activeNavigationItemKey,
    onSelectNavigationItem = _ref.onSelectNavigationItem,
    onSelectUtilityItem = _ref.onSelectUtilityItem,
    onSelectSettings = _ref.onSelectSettings,
    onSelectHelp = _ref.onSelectHelp,
    onSelectLogout = _ref.onSelectLogout,
    id = _ref.id,
    intl = _ref.intl,
    hero = _ref.hero,
    userConfig = _ref.userConfig;
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    navigationIsOpen = _useState2[0],
    setNavigationIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    utilitiesIsOpen = _useState4[0],
    setUtilitiesIsOpen = _useState4[1];
  var previousNotificationsRef = _react.default.useRef();
  _react.default.useEffect(function () {
    previousNotificationsRef.current = notifications;
  });
  function renderMenuButton() {
    if (!(utilityItems.length > 0 || navigationItems.length > 0 || userConfig || titleConfig || hero || onSelectHelp || onSelectLogout || onSelectSettings)) {
      return null;
    }
    var headerHasCounts = navigationItems.some(function (item) {
      return !!notifications[item.key];
    });
    var isPulsed = previousNotificationsRef.current && navigationItems.some(function (item) {
      var previousCount = previousNotificationsRef.current[item.key];
      var newCount = notifications[item.key];
      return newCount && (!previousCount || newCount > previousCount);
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      role: "button",
      className: cx('menu-button'),
      "aria-label": intl.formatMessage({
        id: 'Terra.applicationNavigation.header.menuButtonTitle'
      }),
      onClick: onSelectMenuButton,
      onBlur: _helpers.enableFocusStyles,
      onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelectMenuButton),
      onMouseDown: _helpers.disableFocusStyles,
      "data-focus-styles-enabled": true,
      "data-compact-header-toggle": true,
      "aria-expanded": isDrawerMenuOpen,
      tabIndex: "0"
    }, /*#__PURE__*/_react.default.createElement(_IconMenu.default, null), headerHasCounts && /*#__PURE__*/_react.default.createElement(_ToggleCount.default, {
      value: isPulsed ? 1 : 0
    }));
  }
  function renderTitle() {
    if (!titleConfig) {
      return null;
    }
    if (titleConfig.element) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: cx('title-element'),
        title: titleConfig.title
      }, titleConfig.element);
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, titleConfig.headline && /*#__PURE__*/_react.default.createElement("div", {
      className: cx('headline'),
      title: titleConfig.headline
    }, titleConfig.headline), /*#__PURE__*/_react.default.createElement("div", {
      className: cx('title'),
      title: titleConfig.title
    }, titleConfig.title), titleConfig.subline && /*#__PURE__*/_react.default.createElement("div", {
      className: cx('subline'),
      title: titleConfig.subline
    }, titleConfig.subline));
  }
  function renderExtensions() {
    if (!extensionItems.length) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement(_Extensions.default, {
      extensionItems: extensionItems,
      activeBreakpoint: activeBreakpoint,
      onSelect: onSelectExtensionItem,
      notifications: notifications,
      id: id
    });
  }
  function generateCloseNavFunc(onSelect) {
    return function () {
      setNavigationIsOpen(false);
      onSelect();
    };
  }
  function buildNavigationItems() {
    if (isDrawerMenuOpen || !navigationItems) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement("nav", {
      className: cx('hidden-nav', {
        'is-open': navigationIsOpen
      }),
      tabIndex: "-1",
      onFocus: function onFocus() {
        return setNavigationIsOpen(true);
      },
      onBlur: function onBlur() {
        return setNavigationIsOpen(false);
      }
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: cx('nav-inner')
    }, navigationItems.map(function (item) {
      var onSelect = onSelectNavigationItem && generateCloseNavFunc(onSelectNavigationItem.bind(null, item.key, item.metaData));
      return /*#__PURE__*/_react.default.createElement("li", {
        key: item.key
      }, /*#__PURE__*/_react.default.createElement("div", {
        id: id && (0, _helpers.navigationItemId)(id, item.key),
        role: "link",
        className: cx('hidden-item'),
        tabIndex: navigationIsOpen ? '0' : '-1',
        "aria-current": activeNavigationItemKey === item.key,
        onClick: onSelect,
        onKeyDown: (0, _helpers.generateKeyDownSelection)(onSelect),
        "aria-label": item.text
      }, /*#__PURE__*/_react.default.createElement("span", {
        "aria-hidden": true
      }, item.text)));
    })));
  }
  function generateCloseUtilsFunc(onSelect) {
    return function () {
      setUtilitiesIsOpen(false);
      onSelect();
    };
  }
  function buildUtilityItems() {
    if (isDrawerMenuOpen || !utilityItems) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement("ul", {
      role: "listbox",
      "aria-label": intl.formatMessage({
        id: 'Terra.applicationNavigation.drawerMenu.utilities'
      }),
      className: cx('hidden-utils', {
        'is-open': utilitiesIsOpen
      }),
      tabIndex: "-1",
      onFocus: function onFocus() {
        return setUtilitiesIsOpen(true);
      },
      onBlur: function onBlur() {
        return setUtilitiesIsOpen(false);
      }
    }, utilityItems.map(function (item) {
      var onSelect = onSelectUtilityItem && generateCloseUtilsFunc(onSelectUtilityItem.bind(null, item.key, item.metaData));
      return buildUtilityItem(item.text, item.key, onSelect, utilitiesIsOpen, id);
    }), onSelectSettings ? buildUtilityItem(intl.formatMessage({
      id: 'Terra.applicationNavigation.utilityMenu.settings'
    }), 'app-menu-settings', generateCloseUtilsFunc(onSelectSettings), utilitiesIsOpen, id) : null, onSelectHelp ? buildUtilityItem(intl.formatMessage({
      id: 'Terra.applicationNavigation.utilityMenu.help'
    }), 'app-menu-help', generateCloseUtilsFunc(onSelectHelp), utilitiesIsOpen, id) : null, onSelectLogout ? buildUtilityItem(intl.formatMessage({
      id: 'Terra.applicationNavigation.utilityMenu.logout'
    }), 'app-menu-logout', generateCloseUtilsFunc(onSelectLogout), utilitiesIsOpen, id) : null);
  }
  return /*#__PURE__*/_react.default.createElement("header", {
    role: "banner",
    className: cx('compact-header')
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    role: "link",
    onClick: onSelectSkipToContent,
    className: cx('skip-content-button')
  }, intl.formatMessage({
    id: 'Terra.applicationNavigation.header.skipToContentTitle'
  })), renderMenuButton(), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('title-container')
  }, renderTitle()), buildNavigationItems(), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('extensions-container')
  }, renderExtensions()), buildUtilityItems());
};
CompactHeader.propTypes = propTypes;
CompactHeader.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(CompactHeader);
exports.default = _default;