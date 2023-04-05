"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _bind = _interopRequireDefault(require("classnames/bind"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _IconSettings = _interopRequireDefault(require("terra-icon/lib/icon/IconSettings"));
var _IconQuestionOutline = _interopRequireDefault(require("terra-icon/lib/icon/IconQuestionOutline"));
var _reactIntl = require("react-intl");
var _DrawerMenuTitle = _interopRequireDefault(require("./_DrawerMenuTitle"));
var _DrawerMenuLinkItem = _interopRequireDefault(require("./_DrawerMenuLinkItem"));
var _DrawerMenuListItem = _interopRequireDefault(require("./_DrawerMenuListItem"));
var _DrawerMenuUser = _interopRequireDefault(require("./_DrawerMenuUser"));
var _DrawerMenuFooterButton = _interopRequireDefault(require("./_DrawerMenuFooterButton"));
var _propTypes2 = require("../utils/propTypes");
var _helpers = require("../utils/helpers");
var _DrawerMenuModule = _interopRequireDefault(require("./DrawerMenu.module.scss"));
var cx = _bind.default.bind(_DrawerMenuModule.default);
var propTypes = {
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: _propTypes2.titleConfigPropType,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType,
  /**
   * A hero element to render within the DrawerMenu.
   */
  hero: _propTypes.default.element,
  /**
   * An array of configuration objects with information specifying the creation of navigation items.
   */
  navigationItems: _propTypes2.navigationItemsPropType,
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: _propTypes.default.string,
  /**
   * The base id used to generate ids of navigation, utility, and extension items
   */
  id: _propTypes.default.string,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey)`
   */
  onSelectNavigationItem: _propTypes.default.func,
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
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   */
  utilityItems: _propTypes2.utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: _propTypes.default.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: _propTypes.default.object,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: _propTypes.default.shape({
    formatMessage: _propTypes.default.func
  })
};
var defaultProps = {
  navigationItems: [],
  utilityItems: []
};
var DrawerMenu = function DrawerMenu(_ref) {
  var titleConfig = _ref.titleConfig,
    userConfig = _ref.userConfig,
    hero = _ref.hero,
    navigationItems = _ref.navigationItems,
    activeNavigationItemKey = _ref.activeNavigationItemKey,
    onSelectNavigationItem = _ref.onSelectNavigationItem,
    onSelectSettings = _ref.onSelectSettings,
    onSelectHelp = _ref.onSelectHelp,
    onSelectLogout = _ref.onSelectLogout,
    id = _ref.id,
    utilityItems = _ref.utilityItems,
    onSelectUtilityItem = _ref.onSelectUtilityItem,
    notifications = _ref.notifications,
    intl = _ref.intl;
  var titleComponent = titleConfig && !(titleConfig.element || titleConfig.hideTitleWithinDrawerMenu) ? /*#__PURE__*/_react.default.createElement(_DrawerMenuTitle.default, {
    titleConfig: titleConfig
  }) : undefined;
  var userComponent = userConfig ? /*#__PURE__*/_react.default.createElement(_DrawerMenuUser.default, {
    userConfig: userConfig,
    variant: hero ? 'small' : 'large'
  }) : undefined;
  var logoutButton = onSelectLogout ? /*#__PURE__*/_react.default.createElement("div", {
    className: cx('footer')
  }, /*#__PURE__*/_react.default.createElement(_DrawerMenuFooterButton.default, {
    id: id && (0, _helpers.logoutUtilityItemId)(id),
    onClick: onSelectLogout,
    text: intl.formatMessage({
      id: 'Terra.applicationNavigation.utilityMenu.logout'
    }),
    "data-navigation-drawer-item-logout": true
  })) : undefined;
  var hasNavItems = navigationItems.length;
  var hasUtils = utilityItems.length || onSelectSettings || onSelectHelp;
  var hasItems = hasNavItems || hasUtils;
  var navItems;
  if (hasNavItems) {
    navItems = /*#__PURE__*/_react.default.createElement("div", {
      role: "navigation"
    }, /*#__PURE__*/_react.default.createElement("ul", {
      className: cx('navigation-item-list'),
      "aria-label": intl.formatMessage({
        id: 'Terra.applicationNavigation.drawerMenu.navigation'
      })
    }, navigationItems.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_DrawerMenuLinkItem.default, {
        id: id && (0, _helpers.navigationItemId)(id, item.key),
        key: item.key,
        text: item.text,
        notificationCount: notifications[item.key],
        onSelect: onSelectNavigationItem && onSelectNavigationItem.bind(null, item.key, item.metaData),
        isSelected: item.key === activeNavigationItemKey,
        icon: item.icon
      });
    })));
  }
  var utilities;
  if (hasUtils) {
    utilities = /*#__PURE__*/_react.default.createElement("ul", {
      className: cx('utility-item-list'),
      role: "listbox",
      "aria-label": intl.formatMessage({
        id: 'Terra.applicationNavigation.drawerMenu.utilities'
      })
    }, utilityItems.map(function (item) {
      return /*#__PURE__*/_react.default.createElement(_DrawerMenuListItem.default, {
        id: id && (0, _helpers.utilityItemId)(id, item.key),
        key: item.key,
        text: item.text,
        icon: item.icon,
        onSelect: onSelectUtilityItem && onSelectUtilityItem.bind(null, item.key, item.metaData)
      });
    }), onSelectSettings ? /*#__PURE__*/_react.default.createElement(_DrawerMenuListItem.default, {
      id: id && (0, _helpers.settingsUtilityItemId)(id),
      text: intl.formatMessage({
        id: 'Terra.applicationNavigation.utilityMenu.settings'
      }),
      icon: /*#__PURE__*/_react.default.createElement(_IconSettings.default, null),
      onSelect: onSelectSettings,
      "data-navigation-drawer-item-settings": true
    }) : null, onSelectHelp ? /*#__PURE__*/_react.default.createElement(_DrawerMenuListItem.default, {
      id: id && (0, _helpers.helpUtilityItemId)(id),
      text: intl.formatMessage({
        id: 'Terra.applicationNavigation.utilityMenu.help'
      }),
      icon: /*#__PURE__*/_react.default.createElement(_IconQuestionOutline.default, null),
      onSelect: onSelectHelp,
      "data-navigation-drawer-item-help": true
    }) : null);
  }
  var theme = _react.default.useContext(_terraThemeContext.default);
  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return /*#__PURE__*/_react.default.createElement("div", {
    className: cx('drawer-container', theme.className)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('drawer-menu'),
    role: hasItems ? 'dialog' : null,
    tabIndex: 0,
    "data-navigation-drawer-menu": true
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('vertical-overflow-container')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('header')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: cx('header-background-fill')
  }, titleComponent, hero, userComponent)), navItems, utilities), logoutButton));
};
DrawerMenu.propTypes = propTypes;
DrawerMenu.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(DrawerMenu);
exports.default = _default;