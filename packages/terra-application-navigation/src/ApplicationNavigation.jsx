import React, {
  useEffect, useLayoutEffect, useState, useRef, useContext,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import { Breakpoints } from 'terra-application';
import FocusTrap from 'focus-trap-react';
import Popup from 'terra-popup';

import Header from './header/_Header';
import CompactHeader from './header/_CompactHeader';
import DrawerMenu from './drawer-menu/_DrawerMenu';
import UtilityMenu from './utility-menu/_UtilityMenu';
import { shouldRenderCompactNavigation } from './utils/helpers';
import {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, extensionItemsPropType, utilityItemsPropType,
} from './utils/propTypes';

import styles from './ApplicationNavigation.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object,
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionItems: extensionItemsPropType,
  /**
   * A function to be executed upon the selection of an extensions item.
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An element to render within the ApplicationNavigation menu, shifted to the drawer at the `medium` and below.
   */
  hero: PropTypes.element,
  /**
   * An array of configuration objects with information specifying the creation of navigation items. These items
   * are rendered within the ApplicationNavigation header at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  navigationItems: navigationItemsPropType,
  /**
   * A function to be executed for the render of each navigation item.
   */
  navigationRenderFunction: PropTypes.func,
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey, Object metaData)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: PropTypes.node,
};

const defaultProps = {
  utilityItems: [],
  notifications: {},
};

const ApplicationNavigation = ({
  titleConfig,
  userConfig,
  hero,
  navigationItems,
  onSelectNavigationItem,
  activeNavigationItemKey,
  navigationRenderFunction,
  extensionItems,
  onSelectExtensionItem,
  onSelectSettings,
  onSelectHelp,
  onSelectLogout,
  utilityItems,
  onSelectUtilityItem,
  notifications,
  children,
}) => {
  const drawerMenuRef = useRef();
  const contentLayoutRef = useRef();
  const mainContainerRef = useRef();
  const utilityButtonPopupAnchorRef = useRef();
  const drawerMenuIsVisibleRef = useRef(false);
  const closeMenuCallbackRef = useRef();

  const [drawerMenuIsOpen, setDrawerMenuIsOpen] = useState(false);
  const [popupMenuIsOpen, setPopupMenuIsOpen] = useState(false);

  const activeBreakpoint = useContext(Breakpoints.ActiveBreakpointContext);

  function generateMenuClosingCallback(wrappedFunction) {
    return (...args) => {
      if (!wrappedFunction) {
        return;
      }

      closeMenuCallbackRef.current = () => { wrappedFunction(...args); };
      setDrawerMenuIsOpen(false);
      setPopupMenuIsOpen(false);
    };
  }

  function focusMainContent() {
    mainContainerRef.current.setAttribute('tabindex', '-1');
    mainContainerRef.current.focus();
    mainContainerRef.current.removeAttribute('tabindex');
  }

  function renderDrawerMenu() {
    if (!shouldRenderCompactNavigation(activeBreakpoint)) {
      return null;
    }

    return (
      <FocusTrap
        active={drawerMenuIsOpen}
        focusTrapOptions={{
          escapeDeactivates: true,
          clickOutsideDeactivates: true,
          returnFocusOnDeactivate: true,
          onDeactivate: () => setDrawerMenuIsOpen(false),
        }}
        className={cx('drawer-menu-focus-trap-container')}
      >
        <DrawerMenu
          titleConfig={titleConfig}
          userConfig={userConfig}
          hero={hero}
          navigationItems={navigationItems}
          activeNavigationItemKey={activeNavigationItemKey}
          onSelectNavigationItem={onSelectNavigationItem ? generateMenuClosingCallback(onSelectNavigationItem) : undefined}
          onSelectSettings={onSelectSettings ? generateMenuClosingCallback(onSelectSettings) : undefined}
          onSelectHelp={onSelectHelp ? generateMenuClosingCallback(onSelectHelp) : undefined}
          onSelectLogout={onSelectLogout ? generateMenuClosingCallback(onSelectLogout) : undefined}
          utilityItems={utilityItems}
          onSelectUtilityItem={onSelectUtilityItem ? generateMenuClosingCallback(onSelectUtilityItem) : undefined}
          notifications={notifications}
        />
      </FocusTrap>
    );
  }

  function renderPopupMenu() {
    return (
      <Popup
        attachmentBehavior="push"
        contentAttachment="top right"
        contentHeight="auto"
        contentWidth="320"
        isArrowDisplayed
        isHeaderDisabled
        isOpen={popupMenuIsOpen}
        onRequestClose={() => setPopupMenuIsOpen(false)}
        targetAttachment="bottom center"
        targetRef={() => utilityButtonPopupAnchorRef.current}
      >
        <UtilityMenu
          hero={hero}
          userConfig={userConfig}
          onSelectSettings={onSelectSettings ? generateMenuClosingCallback(onSelectSettings) : undefined}
          onSelectHelp={onSelectHelp ? generateMenuClosingCallback(onSelectHelp) : undefined}
          onSelectLogout={onSelectLogout ? generateMenuClosingCallback(onSelectLogout) : undefined}
          utilityItems={utilityItems}
          onSelectUtilityItem={onSelectUtilityItem ? generateMenuClosingCallback(onSelectUtilityItem) : undefined}
        />
      </Popup>
    );
  }

  function renderCompactHeader() {
    return (
      <CompactHeader
        activeBreakpoint={activeBreakpoint}
        titleConfig={titleConfig}
        extensionItems={extensionItems}
        onSelectExtensionItem={onSelectExtensionItem}
        navigationItems={navigationItems}
        onSelectMenuButton={() => setDrawerMenuIsOpen(true)}
        onSelectSkipToContent={focusMainContent}
        notifications={notifications}
      />
    );
  }

  function renderHeader() {
    return (
      <Header
        activeBreakpoint={activeBreakpoint}
        titleConfig={titleConfig}
        extensionItems={extensionItems}
        onSelectExtensionItem={onSelectExtensionItem}
        navigationItems={navigationItems}
        navigationRenderFunction={navigationRenderFunction}
        activeNavigationItemKey={activeNavigationItemKey}
        onSelectNavigationItem={onSelectNavigationItem}
        userConfig={userConfig}
        onSelectSkipToContent={focusMainContent}
        notifications={notifications}
        utilityButtonPopupAnchorRef={utilityButtonPopupAnchorRef}
        onSelectUtilityButton={() => setPopupMenuIsOpen(true)}
      />
    );
  }

  /**
   * This effect is used to execute callbacks from the drawer and popup
   * menus after they are closed. This is similar to executing the callbacks
   * in a setState callback for the menu state, but setState callbacks do not
   * exist for the useState hook.
   */
  useEffect(() => {
    if (closeMenuCallbackRef.current) {
      closeMenuCallbackRef.current();
      closeMenuCallbackRef.current = undefined;
    }
  });

  /**
   * This layout effect is used to manage the visibility of the drawer menu during
   * its transition animation. The drawer menu should not be hidden until its transition to
   * a closed state completes. drawerMenuIsVisibleRef is used keep track of this
   * visibility state separate from the drawerMenuIsOpen state managed by the component during
   * each render.
   */
  useLayoutEffect(() => {
    if (!contentLayoutRef.current) {
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

    contentLayoutRef.current.addEventListener('transitionend', cleanupContentTransition);

    return () => {
      contentLayoutRef.current.removeEventListener('transitionend', cleanupContentTransition);
    };
  }, [contentLayoutRef.current]);

  /**
   * If the ApplicationNavigation is rendering at non-compact breakpoints, and the drawer menu is still
   * open, then it is closed here. This will trigger an new render after this render completes.
   */
  if (drawerMenuIsOpen && !shouldRenderCompactNavigation(activeBreakpoint)) {
    setDrawerMenuIsOpen(false);
  }

  /**
   * The drawer menu's inline display style is reset to ensure the drawer menu will be visible if the drawer menu
   * is animating into view. The drawerMenuRef's inline display style will be set below if the drawer menu is
   * either closed or otherwise should not be visible.
   */
  if (drawerMenuRef.current && drawerMenuIsOpen) {
    drawerMenuRef.current.style.display = '';
  }

  return (
    <div className={cx('application-navigation')}>
      <div
        ref={drawerMenuRef}
        className={cx(['drawer-menu-container', { 'is-hidden': !drawerMenuIsVisibleRef.current && !drawerMenuIsOpen }])}
        aria-hidden={!drawerMenuIsOpen ? true : null}
      >
        {renderDrawerMenu()}
      </div>
      <div
        ref={contentLayoutRef}
        className={cx('content-layout', { 'drawer-menu-is-open': drawerMenuIsOpen })}
        aria-hidden={drawerMenuIsOpen ? true : null}
      >
        {shouldRenderCompactNavigation(activeBreakpoint) ? renderCompactHeader() : renderHeader()}
        <main
          ref={mainContainerRef}
          tabIndex="-1"
          className={cx('main-container')}
        >
          {children}
        </main>
        <Overlay
          isOpen={drawerMenuIsOpen}
          isRelativeToContainer
          backgroundStyle="clear"
        />
      </div>
      {renderPopupMenu()}
    </div>
  );
};

ApplicationNavigation.propTypes = propTypes;
ApplicationNavigation.defaultProps = defaultProps;

export default ApplicationNavigation;
