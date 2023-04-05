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
var _terraOverlay = _interopRequireDefault(require("terra-overlay"));
var _terraBreakpoints = require("terra-breakpoints");
var _focusTrapReact = _interopRequireDefault(require("focus-trap-react"));
var _terraPopup = _interopRequireDefault(require("terra-popup"));
var _terraVisuallyHiddenText = _interopRequireDefault(require("terra-visually-hidden-text"));
var _terraThemeContext = _interopRequireDefault(require("terra-theme-context"));
var _Header = _interopRequireDefault(require("./header/_Header"));
var _CompactHeader = _interopRequireDefault(require("./header/_CompactHeader"));
var _DrawerMenu = _interopRequireDefault(require("./drawer-menu/_DrawerMenu"));
var _UtilityMenu = _interopRequireDefault(require("./utility-menu/_UtilityMenu"));
var _helpers = require("./utils/helpers");
var _propTypes2 = require("./utils/propTypes");
var _ApplicationNavigationModule = _interopRequireDefault(require("./ApplicationNavigation.module.scss"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var cx = _bind.default.bind(_ApplicationNavigationModule.default);
var propTypes = {
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: _propTypes.default.object,
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
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: _propTypes2.userConfigPropType,
  /**
   * An element to render within the ApplicationNavigation menu, shifted to the drawer at the `medium` and below.
   */
  hero: _propTypes.default.element,
  /**
   * An array of configuration objects with information specifying the creation of navigation items. These items
   * are rendered within the ApplicationNavigation header at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  navigationItems: _propTypes2.navigationItemsPropType,
  /**
   * A function to be executed for the render of each navigation item.
   */
  navigationRenderFunction: _propTypes.default.func,
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
  * Callback function triggered on Drawer Menu state change
  */
  onDrawerMenuStateChange: _propTypes.default.func,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey, Object metaData)`
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
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: _propTypes2.utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectUtilityItem: _propTypes.default.func,
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: _propTypes.default.node
};
var defaultProps = {
  utilityItems: [],
  notifications: {}
};
var ApplicationNavigation = function ApplicationNavigation(_ref) {
  var titleConfig = _ref.titleConfig,
    userConfig = _ref.userConfig,
    hero = _ref.hero,
    navigationItems = _ref.navigationItems,
    onSelectNavigationItem = _ref.onSelectNavigationItem,
    activeNavigationItemKey = _ref.activeNavigationItemKey,
    navigationRenderFunction = _ref.navigationRenderFunction,
    extensionItems = _ref.extensionItems,
    onDrawerMenuStateChange = _ref.onDrawerMenuStateChange,
    onSelectExtensionItem = _ref.onSelectExtensionItem,
    onSelectSettings = _ref.onSelectSettings,
    onSelectHelp = _ref.onSelectHelp,
    onSelectLogout = _ref.onSelectLogout,
    id = _ref.id,
    utilityItems = _ref.utilityItems,
    onSelectUtilityItem = _ref.onSelectUtilityItem,
    notifications = _ref.notifications,
    children = _ref.children;
  var drawerMenuRef = (0, _react.useRef)();
  var contentLayoutRef = (0, _react.useRef)();
  var mainContainerRef = (0, _react.useRef)();
  var utilityButtonPopupAnchorRef = (0, _react.useRef)();
  // Need to capture the animation life-cycle as opposed to the open/close state.
  var drawerMenuIsVisibleRef = (0, _react.useRef)(false);
  // FocusTrap captures the initial value of the onDeactivate callback, so need a persistent ref to the isOpen value.
  var drawerMenuIsOpenRef = (0, _react.useRef)(false);
  var closeMenuCallbackRef = (0, _react.useRef)();
  var renderedNavItemKeyRef = (0, _react.useRef)(activeNavigationItemKey);
  var _useState = (0, _react.useState)(false),
    _useState2 = (0, _slicedToArray2.default)(_useState, 2),
    drawerMenuIsOpen = _useState2[0],
    setDrawerMenuIsOpen = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
    popupMenuIsOpen = _useState4[0],
    setPopupMenuIsOpen = _useState4[1];
  var closeMenuEvent = 'terra-application-navigation.dismiss-menu';

  // Use dot notation temporarily until hooks + enzyme support for userContext
  var activeBreakpoint = _react.default.useContext(_terraBreakpoints.ActiveBreakpointContext);

  /**
   * Given a callback function, generateMenuClosingCallback will return a new function
   * that will ensure that the various menu states are reset before the callback function
   * is executed.
   */
  function generateMenuClosingCallback(wrappedFunction) {
    return function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      if (!wrappedFunction) {
        return;
      }
      closeMenuCallbackRef.current = function () {
        wrappedFunction.apply(void 0, args);
      };
      setDrawerMenuIsOpen(false);
      setPopupMenuIsOpen(false);
    };
  }
  var focusMainContentCallback = (0, _react.useCallback)(function () {
    if (mainContainerRef.current) {
      mainContainerRef.current.focus();
    }
  }, [mainContainerRef]);
  function focusToggle() {
    var toggle = document.querySelector('[data-compact-header-toggle="true"]');
    if (toggle) {
      toggle.focus();
    }
  }
  function generateFocusToggle(wrappedFunction) {
    return function () {
      wrappedFunction.apply(void 0, arguments);
      window.requestAnimationFrame(function () {
        focusToggle();
      });
    };
  }
  function renderDrawerMenu() {
    if (!(0, _helpers.shouldRenderCompactNavigation)(activeBreakpoint)) {
      return null;
    }
    return /*#__PURE__*/_react.default.createElement(_focusTrapReact.default, {
      active: drawerMenuIsOpen,
      focusTrapOptions: {
        escapeDeactivates: true,
        clickOutsideDeactivates: true,
        returnFocusOnDeactivate: false
      },
      className: cx('drawer-menu-focus-trap-container')
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: cx('drawer-menu-focus-trap-container')
    }, /*#__PURE__*/_react.default.createElement(_DrawerMenu.default, {
      titleConfig: titleConfig,
      userConfig: userConfig,
      hero: hero,
      navigationItems: navigationItems,
      activeNavigationItemKey: activeNavigationItemKey,
      onSelectNavigationItem: onSelectNavigationItem ? generateMenuClosingCallback(onSelectNavigationItem) : undefined,
      onSelectSettings: onSelectSettings ? generateMenuClosingCallback(onSelectSettings) : undefined,
      onSelectHelp: onSelectHelp ? generateMenuClosingCallback(onSelectHelp) : undefined,
      onSelectLogout: onSelectLogout ? generateMenuClosingCallback(onSelectLogout) : undefined,
      id: id,
      utilityItems: utilityItems,
      onSelectUtilityItem: onSelectUtilityItem ? generateMenuClosingCallback(onSelectUtilityItem) : undefined,
      notifications: notifications
    })));
  }
  function renderPopupMenu() {
    return /*#__PURE__*/_react.default.createElement(_terraPopup.default, {
      attachmentBehavior: "push",
      contentAttachment: "top right",
      contentHeight: "auto",
      contentWidth: "320",
      isArrowDisplayed: true,
      isHeaderDisabled: true,
      isOpen: popupMenuIsOpen,
      onRequestClose: function onRequestClose() {
        return setPopupMenuIsOpen(false);
      },
      targetAttachment: "bottom center",
      targetRef: function targetRef() {
        return utilityButtonPopupAnchorRef.current;
      },
      isContentFocusDisabled: true
    }, /*#__PURE__*/_react.default.createElement(_UtilityMenu.default, {
      hero: hero,
      userConfig: userConfig,
      onSelectSettings: onSelectSettings ? generateMenuClosingCallback(onSelectSettings) : undefined,
      onSelectHelp: onSelectHelp ? generateMenuClosingCallback(onSelectHelp) : undefined,
      onSelectLogout: onSelectLogout ? generateMenuClosingCallback(onSelectLogout) : undefined,
      id: id,
      utilityItems: utilityItems,
      onSelectUtilityItem: onSelectUtilityItem ? generateMenuClosingCallback(onSelectUtilityItem) : undefined
    }));
  }
  function renderCompactHeader() {
    return /*#__PURE__*/_react.default.createElement(_CompactHeader.default, {
      activeBreakpoint: activeBreakpoint,
      titleConfig: titleConfig,
      extensionItems: extensionItems,
      onSelectExtensionItem: onSelectExtensionItem,
      navigationItems: navigationItems,
      onSelectMenuButton: function onSelectMenuButton() {
        return setDrawerMenuIsOpen(true);
      },
      onSelectSkipToContent: focusMainContentCallback,
      notifications: notifications,
      isDrawerMenuOpen: drawerMenuIsOpen,
      utilityItems: utilityItems,
      activeNavigationItemKey: activeNavigationItemKey,
      userConfig: userConfig,
      hero: hero,
      onSelectNavigationItem: onSelectNavigationItem,
      onSelectUtilityItem: onSelectUtilityItem,
      onSelectSettings: onSelectSettings,
      onSelectHelp: onSelectHelp,
      onSelectLogout: onSelectLogout,
      id: id
    });
  }
  function renderHeader() {
    return /*#__PURE__*/_react.default.createElement(_Header.default, {
      activeBreakpoint: activeBreakpoint,
      titleConfig: titleConfig,
      extensionItems: extensionItems,
      onSelectExtensionItem: onSelectExtensionItem,
      id: id,
      navigationItems: navigationItems,
      navigationRenderFunction: navigationRenderFunction,
      activeNavigationItemKey: activeNavigationItemKey,
      onSelectNavigationItem: onSelectNavigationItem,
      userConfig: userConfig,
      onSelectSkipToContent: focusMainContentCallback,
      notifications: notifications,
      utilityButtonPopupAnchorRef: utilityButtonPopupAnchorRef,
      onSelectUtilityButton: function onSelectUtilityButton() {
        return setPopupMenuIsOpen(true);
      },
      hero: hero,
      utilityItems: utilityItems,
      onSelectSettings: onSelectSettings,
      onSelectHelp: onSelectHelp,
      onSelectLogout: onSelectLogout
    });
  }

  /**
   * This effect is used to execute callbacks from the drawer and popup
   * menus after they are closed. This is similar to executing the callbacks
   * in a setState callback for the menu state, but setState callbacks do not
   * exist for the useState hook.
   *
   * The closeMenuCallbackRef value is set by the functions returned by
   * generateMenuClosingCallback.
   */
  (0, _react.useEffect)(function () {
    if (closeMenuCallbackRef.current) {
      closeMenuCallbackRef.current();
      closeMenuCallbackRef.current = undefined;
    }
  });
  (0, _react.useEffect)(function () {
    var forceCloseMenu = function forceCloseMenu() {
      setDrawerMenuIsOpen(false);
      setPopupMenuIsOpen(false);
    };
    window.addEventListener(closeMenuEvent, forceCloseMenu);
    return function () {
      window.removeEventListener(closeMenuEvent, forceCloseMenu);
    };
  }, []);
  (0, _react.useLayoutEffect)(function () {
    if (drawerMenuIsOpen !== drawerMenuIsOpenRef.current) {
      drawerMenuIsOpenRef.current = drawerMenuIsOpen;
      if (onDrawerMenuStateChange) {
        onDrawerMenuStateChange(drawerMenuIsOpen);
      }
    }
  }, [onDrawerMenuStateChange, drawerMenuIsOpen]);
  (0, _react.useLayoutEffect)(function () {
    if (activeNavigationItemKey !== renderedNavItemKeyRef.current) {
      // The timeout is necessary due to the AbstractModal's similar focus logic.
      // Without the timeout, this executes too quickly.
      setTimeout(function () {
        focusMainContentCallback();
      }, 0);
      renderedNavItemKeyRef.current = activeNavigationItemKey;
    }
  }, [activeNavigationItemKey, focusMainContentCallback]);

  /**
   * This layout effect is used to manage the visibility of the drawer menu during
   * its transition animations.
   *
   * When the drawer menu is closed, it is hidden using its display property to
   * prevent users from tabbing to it and to limit expensive reflows of its content. However, while
   * the drawerMenuIsOpen state indicates whether or not the menu is open or closed, the transitions
   * to the open/closed states are animated, leaving the component in a position where the menu must
   * continue to be visible while the menu is animating closed. Therefore, we cannot rely on the
   * drawerMenuIsOpen state alone to determine when to hide the drawer menu content.
   *
   * In this layout effect, the proper styles are applied after the transition completes, and the
   * drawerMenuIsVisibleRef value is updated so that subsequent renders of the component are
   * accurate.
   */
  (0, _react.useLayoutEffect)(function () {
    var contentLayoutElement = contentLayoutRef.current;
    if (!contentLayoutElement) {
      return undefined;
    }
    function cleanupContentTransition(event) {
      if (event.currentTarget.classList.contains(cx('drawer-menu-is-open'))) {
        drawerMenuRef.current.removeAttribute('style');
        drawerMenuIsVisibleRef.current = true;
      } else {
        drawerMenuRef.current.style.display = 'none';
        drawerMenuIsVisibleRef.current = false;
      }
    }
    contentLayoutElement.addEventListener('transitionend', cleanupContentTransition);
    return function () {
      contentLayoutElement.removeEventListener('transitionend', cleanupContentTransition);
    };
  }, [contentLayoutRef]);

  /**
   * If the ApplicationNavigation is rendering at non-compact breakpoints, and the drawer menu is still
   * open, then it is closed here. This will trigger an new update immediately after the completion of
   * the current render.
   */
  if (drawerMenuIsOpen && !(0, _helpers.shouldRenderCompactNavigation)(activeBreakpoint)) {
    setDrawerMenuIsOpen(false);
  }

  /**
   * The inline display styles are removed from the drawerMenuRef with each render. This
   * ensures that the menu is immediately visible if it is being opened. If the menu still
   * needs to be hidden, the logic below will provide the appropriate display style.
   */
  if (drawerMenuRef.current && drawerMenuIsOpen) {
    drawerMenuRef.current.removeAttribute('style');
  }
  var hiddenMainTitle;
  if (navigationItems && activeNavigationItemKey) {
    hiddenMainTitle = /*#__PURE__*/_react.default.createElement(_terraVisuallyHiddenText.default, {
      id: "main-inner-title",
      "aria-hidden": true,
      text: navigationItems.filter(function (item) {
        return item.key === activeNavigationItemKey;
      })[0].text
    });
  }
  var handleRequestClose = function handleRequestClose(event) {
    event.preventDefault();
    event.stopPropagation();
    setDrawerMenuIsOpen(false);
  };
  var theme = _react.default.useContext(_terraThemeContext.default);
  var appNavClassNames = cx('application-navigation', theme.className);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: appNavClassNames
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: drawerMenuRef,
    className: cx('drawer-menu-container'),
    style: !drawerMenuIsVisibleRef.current && !drawerMenuIsOpen ? {
      display: 'none'
    } : undefined // eslint-disable-line react/forbid-dom-props
    ,
    "aria-hidden": !drawerMenuIsOpen ? true : null
  }, renderDrawerMenu()), /*#__PURE__*/_react.default.createElement("div", {
    ref: contentLayoutRef,
    className: cx('content-layout', {
      'drawer-menu-is-open': drawerMenuIsOpen
    })
  }, (0, _helpers.shouldRenderCompactNavigation)(activeBreakpoint) ? renderCompactHeader() : renderHeader(), /*#__PURE__*/_react.default.createElement("main", {
    ref: mainContainerRef,
    tabIndex: "-1",
    role: "main",
    className: cx('main-container'),
    "aria-labelledby": hiddenMainTitle ? 'main-inner-title' : null
  }, hiddenMainTitle, children), /*#__PURE__*/_react.default.createElement(_terraOverlay.default, {
    className: cx('overlay'),
    isOpen: drawerMenuIsOpen,
    isRelativeToContainer: true,
    backgroundStyle: "clear",
    zIndex: "6000",
    onRequestClose: generateFocusToggle(handleRequestClose)
  })), renderPopupMenu());
};
ApplicationNavigation.propTypes = propTypes;
ApplicationNavigation.defaultProps = defaultProps;

/**
 * The <main> tag rendered by ApplicationNavigation is not officially supported by legacy Internet Explorer browsers.
 * React will log warnings if we attempt to render it. However, by creating a main element here prior to rendering the component,
 * Internet Explorer is tricked into recognizing the <main> tag, and React does not warn.
 */
document.createElement('main');
var _default = ApplicationNavigation;
exports.default = _default;