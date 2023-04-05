import React, {
  useEffect, useLayoutEffect, useState, useRef, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';
import Overlay from 'terra-overlay';
import { ActiveBreakpointContext } from 'terra-breakpoints';
import FocusTrap from 'focus-trap-react';
import Popup from 'terra-popup';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import ThemeContext from 'terra-theme-context';
import Header from './header/_Header';
import CompactHeader from './header/_CompactHeader';
import DrawerMenu from './drawer-menu/_DrawerMenu';
import UtilityMenu from './utility-menu/_UtilityMenu';
import { shouldRenderCompactNavigation } from './utils/helpers';
import {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, extensionItemsPropType, utilityItemsPropType, userActionConfigPropType,
} from './utils/propTypes';
import WorkspaceLayout from './workspace-layout/WorkspaceLayout';

import styles from './ApplicationNavigation.module.scss';

const cx = classNamesBind.bind(styles);

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
   * The base id used to generate ids of navigation, utility, and extension items
   */
  id: PropTypes.string,
  /**
  * Callback function triggered on Drawer Menu state change
  */
  onDrawerMenuStateChange: PropTypes.func,
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
   * A configuration object to render an action button for user Config.
   */
  userActionConfig: userActionConfigPropType,
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
  /**
   * An ApplicationNavigation.Workspace element to be presented within the layout.
   */
  workspace: PropTypes.element,
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
  onDrawerMenuStateChange,
  onSelectExtensionItem,
  onSelectSettings,
  onSelectHelp,
  onSelectLogout,
  id,
  utilityItems,
  onSelectUtilityItem,
  notifications,
  children,
  workspace,
  userActionConfig,
}) => {
  const drawerMenuRef = useRef();
  const contentLayoutRef = useRef();
  const mainContainerRef = useRef();
  const utilityButtonPopupAnchorRef = useRef();
  // Need to capture the animation life-cycle as opposed to the open/close state.
  const drawerMenuIsVisibleRef = useRef(false);
  // FocusTrap captures the initial value of the onDeactivate callback, so need a persistent ref to the isOpen value.
  const drawerMenuIsOpenRef = useRef(false);
  const closeMenuCallbackRef = useRef();
  const renderedNavItemKeyRef = useRef(activeNavigationItemKey);
  const skipToWorkspaceActionRef = useRef();

  const [drawerMenuIsOpen, setDrawerMenuIsOpen] = useState(false);
  const [popupMenuIsOpen, setPopupMenuIsOpen] = useState(false);
  const [renderSkipToWorkspace, setRenderSkipToWorkspace] = useState(false);

  const closeMenuEvent = 'terra-application-navigation.dismiss-menu';

  // Use dot notation temporarily until hooks + enzyme support for userContext
  const activeBreakpoint = React.useContext(ActiveBreakpointContext);

  // const setDrawerMenuIsOpen = useCallback((value) => {
  //   drawerMenuIsOpenRef.current = value;
  //   setDrawerMenuIsOpen(value);
  //   if (onDrawerMenuStateChange) {
  //     onDrawerMenuStateChange(value);
  //   }
  // }, [onDrawerMenuStateChange]);

  /**
   * Given a callback function, generateMenuClosingCallback will return a new function
   * that will ensure that the various menu states are reset before the callback function
   * is executed.
   */
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

  const focusMainContentCallback = useCallback(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.focus();
    }
  }, [mainContainerRef]);

  function focusToggle() {
    const toggle = document.querySelector('[data-compact-header-toggle="true"]');
    if (toggle) {
      toggle.focus();
    }
  }

  function generateFocusToggle(wrappedFunction) {
    return (...args) => {
      wrappedFunction(...args);
      window.requestAnimationFrame(() => {
        focusToggle();
      });
    };
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
          returnFocusOnDeactivate: false,
        }}
        className={cx('drawer-menu-focus-trap-container')}
      >
        {/*
          The following div has been added to prevent a "Cannot read property 'ownerDocument' of null" error when using react-intl v5.
          See link for more info: https://github.com/focus-trap/focus-trap-react/issues/44#issuecomment-543770159
          This div could be removed with a newer version of FocusTrap
        */}
        <div
          className={cx('drawer-menu-focus-trap-container')}
        >
          <DrawerMenu
            menuClosingCallback={generateMenuClosingCallback}
            titleConfig={titleConfig}
            userConfig={userConfig}
            userActionConfig={userActionConfig}
            hero={hero}
            navigationItems={navigationItems}
            activeNavigationItemKey={activeNavigationItemKey}
            onSelectNavigationItem={onSelectNavigationItem ? generateMenuClosingCallback(onSelectNavigationItem) : undefined}
            onSelectSettings={onSelectSettings ? generateMenuClosingCallback(onSelectSettings) : undefined}
            onSelectHelp={onSelectHelp ? generateMenuClosingCallback(onSelectHelp) : undefined}
            onSelectLogout={onSelectLogout ? generateMenuClosingCallback(onSelectLogout) : undefined}
            id={id}
            utilityItems={utilityItems}
            onSelectUtilityItem={onSelectUtilityItem ? generateMenuClosingCallback(onSelectUtilityItem) : undefined}
            notifications={notifications}
          />
        </div>
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
        isContentFocusDisabled
      >
        <UtilityMenu
          menuClosingCallback={generateMenuClosingCallback}
          hero={hero}
          userConfig={userConfig}
          userActionConfig={userActionConfig}
          onSelectSettings={onSelectSettings ? generateMenuClosingCallback(onSelectSettings) : undefined}
          onSelectHelp={onSelectHelp ? generateMenuClosingCallback(onSelectHelp) : undefined}
          onSelectLogout={onSelectLogout ? generateMenuClosingCallback(onSelectLogout) : undefined}
          id={id}
          utilityItems={utilityItems}
          onSelectUtilityItem={onSelectUtilityItem ? generateMenuClosingCallback(onSelectUtilityItem) : undefined}
        />
      </Popup>
    );
  }

  function createWorkspaceAction() {
    let skipToAction;
    if (renderSkipToWorkspace) {
      skipToAction = () => {
        if (!skipToWorkspaceActionRef.current) {
          return;
        }
        skipToWorkspaceActionRef.current();
      };
    }
    return skipToAction;
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
        onSelectSkipToContent={focusMainContentCallback}
        notifications={notifications}
        isDrawerMenuOpen={drawerMenuIsOpen}
        utilityItems={utilityItems}
        activeNavigationItemKey={activeNavigationItemKey}
        userConfig={userConfig}
        hero={hero}
        onSelectNavigationItem={onSelectNavigationItem}
        onSelectUtilityItem={onSelectUtilityItem}
        onSelectSettings={onSelectSettings}
        onSelectHelp={onSelectHelp}
        onSelectLogout={onSelectLogout}
        id={id}
        skipToWorkspaceAction={createWorkspaceAction()}
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
        id={id}
        navigationItems={navigationItems}
        navigationRenderFunction={navigationRenderFunction}
        activeNavigationItemKey={activeNavigationItemKey}
        onSelectNavigationItem={onSelectNavigationItem}
        userConfig={userConfig}
        onSelectSkipToContent={focusMainContentCallback}
        notifications={notifications}
        utilityButtonPopupAnchorRef={utilityButtonPopupAnchorRef}
        onSelectUtilityButton={() => setPopupMenuIsOpen(true)}
        hero={hero}
        utilityItems={utilityItems}
        onSelectSettings={onSelectSettings}
        onSelectHelp={onSelectHelp}
        onSelectLogout={onSelectLogout}
        skipToWorkspaceAction={createWorkspaceAction()}
      />
    );
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
  useEffect(() => {
    if (closeMenuCallbackRef.current) {
      closeMenuCallbackRef.current();
      closeMenuCallbackRef.current = undefined;
    }
  });

  useEffect(() => {
    const forceCloseMenu = () => {
      setDrawerMenuIsOpen(false);
      setPopupMenuIsOpen(false);
    };

    window.addEventListener(closeMenuEvent, forceCloseMenu);

    return () => {
      window.removeEventListener(closeMenuEvent, forceCloseMenu);
    };
  }, [setDrawerMenuIsOpen]);

  useLayoutEffect(() => {
    if (activeNavigationItemKey !== renderedNavItemKeyRef.current) {
      // The timeout is necessary due to the AbstractModal's similar focus logic.
      // Without the timeout, this executes too quickly.
      setTimeout(() => {
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
  useLayoutEffect(() => {
    const contentLayoutElement = contentLayoutRef.current;

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

    return () => {
      contentLayoutElement.removeEventListener('transitionend', cleanupContentTransition);
    };
  }, [contentLayoutRef]);

  /**
   * This effect is responsible for executing the provided onDrawerMenuStateChange
   * callback when the drawer's presentation state changes.
   */
  useLayoutEffect(() => {
    if (drawerMenuIsOpen !== drawerMenuIsOpenRef.current) {
      drawerMenuIsOpenRef.current = drawerMenuIsOpen;
      if (onDrawerMenuStateChange) {
        onDrawerMenuStateChange(drawerMenuIsOpen);
      }
    }
  }, [onDrawerMenuStateChange, drawerMenuIsOpen]);

  /**
   * If the ApplicationNavigation is rendering at non-compact breakpoints, and the drawer menu is still
   * open, then it is closed here. This will trigger an new update immediately after the completion of
   * the current render.
   */
  if (drawerMenuIsOpen && !shouldRenderCompactNavigation(activeBreakpoint)) {
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

  let hiddenMainTitle;
  if (navigationItems && activeNavigationItemKey) {
    hiddenMainTitle = (
      <VisuallyHiddenText
        id="main-inner-title"
        aria-hidden
        text={navigationItems.filter((item => item.key === activeNavigationItemKey))[0].text}
      />
    );
  }

  const handleRequestClose = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setDrawerMenuIsOpen(false);
  };
  const theme = React.useContext(ThemeContext);
  const appNavClassNames = cx('application-navigation', theme.className);

  const renderMain = () => {
    const skipToCallback = workspace ? (action) => {
      skipToWorkspaceActionRef.current = action;

      if (action && !renderSkipToWorkspace) {
        setRenderSkipToWorkspace(true);
      }
    } : undefined;

    return (
      <WorkspaceLayout
        id={`${id}-workspace-layout`}
        workspace={workspace}
        skipToCallback={skipToCallback}
      >
        <main
          ref={mainContainerRef}
          tabIndex="-1"
          role="main"
          className={cx('main-container')}
          aria-labelledby={hiddenMainTitle ? 'main-inner-title' : null}
        >
          {hiddenMainTitle}
          {children}
        </main>
      </WorkspaceLayout>
    );
  };

  return (
    <div className={appNavClassNames}>
      <div
        ref={drawerMenuRef}
        className={cx('drawer-menu-container')}
        style={!drawerMenuIsVisibleRef.current && !drawerMenuIsOpen ? { display: 'none' } : undefined} // eslint-disable-line react/forbid-dom-props
        aria-hidden={!drawerMenuIsOpen ? true : null}
      >
        {renderDrawerMenu()}
      </div>
      <div
        ref={contentLayoutRef}
        className={cx('content-layout', { 'drawer-menu-is-open': drawerMenuIsOpen })}
      >
        {shouldRenderCompactNavigation(activeBreakpoint) ? renderCompactHeader() : renderHeader()}
        {renderMain()}
        <Overlay
          className={cx('overlay')}
          isOpen={drawerMenuIsOpen}
          isRelativeToContainer
          backgroundStyle="clear"
          zIndex="6000"
          onRequestClose={generateFocusToggle(handleRequestClose)}
        />
      </div>
      {renderPopupMenu()}
    </div>
  );
};

ApplicationNavigation.propTypes = propTypes;
ApplicationNavigation.defaultProps = defaultProps;

/**
 * The <main> tag rendered by ApplicationNavigation is not officially supported by legacy Internet Explorer browsers.
 * React will log warnings if we attempt to render it. However, by creating a main element here prior to rendering the component,
 * Internet Explorer is tricked into recognizing the <main> tag, and React does not warn.
 */
document.createElement('main');

export default ApplicationNavigation;
