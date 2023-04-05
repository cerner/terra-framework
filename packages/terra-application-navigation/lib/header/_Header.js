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
var _Tabs = _interopRequireDefault(require("../tabs/_Tabs"));
var _Extensions = _interopRequireDefault(require("../extensions/_Extensions"));
var _UtilityMenuHeaderButton = _interopRequireDefault(require("../utility-menu/_UtilityMenuHeaderButton"));
var _propTypes2 = require("../utils/propTypes");
var _HeaderModule = _interopRequireDefault(require("./Header.module.scss"));
var cx = _bind.default.bind(_HeaderModule.default);
var propTypes = {
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: _propTypes2.titleConfigPropType,
  /**
   * Array of navigation items to render within the Header.
   */
  navigationItems: _propTypes2.navigationItemsPropType,
  /**
   * The base id used to generate ids of navigation, utility, and extension items
   */
  id: _propTypes.default.string,
  /**
   * A function to be executed for the render of each navigation item.
   */
  navigationRenderFunction: _propTypes.default.func,
  /**
   * The string identifying the currently active navigation item.
   */
  activeNavigationItemKey: _propTypes.default.string,
  /**
   * A function to be executed upon selection of a navigation item.
   */
  onSelectNavigationItem: _propTypes.default.func,
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensionItems: _propTypes2.extensionItemsPropType,
  /**
   * A function to be executed upon the selection of an extensions item.
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: _propTypes.default.func,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType,
  /**
   * A function to be executed upon selection of the Header's utility button.
   */
  onSelectUtilityButton: _propTypes.default.func,
  /**
   * A ref Object that will be provided with a reference to the Header's utility button.
   */
  utilityButtonPopupAnchorRef: _propTypes.default.shape({
    current: _propTypes.default.instanceOf(Element)
  }),
  /**
   * A function to be executed upon selection of the 'Skip to Content' button.
   */
  onSelectSkipToContent: _propTypes.default.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: _propTypes.default.object,
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
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: _propTypes2.utilityItemsPropType,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   */
  onSelectSettings: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   */
  onSelectHelp: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   */
  onSelectLogout: _propTypes.default.func
};
var defaultProps = {
  utilityItems: []
};
var Header = function Header(_ref) {
  var titleConfig = _ref.titleConfig,
    navigationItems = _ref.navigationItems,
    id = _ref.id,
    navigationRenderFunction = _ref.navigationRenderFunction,
    activeNavigationItemKey = _ref.activeNavigationItemKey,
    onSelectNavigationItem = _ref.onSelectNavigationItem,
    notifications = _ref.notifications,
    extensionItems = _ref.extensionItems,
    activeBreakpoint = _ref.activeBreakpoint,
    onSelectExtensionItem = _ref.onSelectExtensionItem,
    userConfig = _ref.userConfig,
    onSelectSkipToContent = _ref.onSelectSkipToContent,
    intl = _ref.intl,
    onSelectUtilityButton = _ref.onSelectUtilityButton,
    utilityButtonPopupAnchorRef = _ref.utilityButtonPopupAnchorRef,
    hero = _ref.hero,
    utilityItems = _ref.utilityItems,
    onSelectSettings = _ref.onSelectSettings,
    onSelectHelp = _ref.onSelectHelp,
    onSelectLogout = _ref.onSelectLogout;
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
  function renderNavigationTabs() {
    return /*#__PURE__*/_react.default.createElement(_Tabs.default, {
      navigationItems: navigationItems,
      id: id,
      activeTabKey: activeNavigationItemKey,
      onTabSelect: onSelectNavigationItem,
      notifications: notifications,
      navigationRenderFunction: navigationRenderFunction
    });
  }
  function renderExtensions() {
    if (!extensionItems || !extensionItems.length) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement(_Extensions.default, {
      extensionItems: extensionItems,
      id: id,
      activeBreakpoint: activeBreakpoint,
      onSelect: onSelectExtensionItem,
      notifications: notifications
    });
  }
  function renderUtilities() {
    if (!(utilityItems.length > 0 || userConfig || hero || onSelectHelp || onSelectLogout || onSelectSettings)) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement("div", {
      className: cx('utilities-container')
    }, /*#__PURE__*/_react.default.createElement(_UtilityMenuHeaderButton.default, {
      userConfig: userConfig,
      id: id,
      onClick: onSelectUtilityButton,
      popupAnchorRef: utilityButtonPopupAnchorRef
    }));
  }
  return /*#__PURE__*/_react.default.createElement("header", {
    role: "banner",
    className: cx('header')
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    role: "link",
    onClick: onSelectSkipToContent,
    className: cx('skip-content-button')
  }, intl.formatMessage({
    id: 'Terra.applicationNavigation.header.skipToContentTitle'
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('title-container')
  }, renderTitle()), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('main-navigation-container')
  }, renderNavigationTabs()), /*#__PURE__*/_react.default.createElement("div", {
    className: cx('extensions-container')
  }, renderExtensions()), renderUtilities());
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;
var _default = (0, _reactIntl.injectIntl)(Header);
exports.default = _default;