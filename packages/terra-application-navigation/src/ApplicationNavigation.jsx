import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import { Breakpoints } from 'terra-application';
import FocusTrap from 'focus-trap-react';

import Header from './header/_Header';
import CompactHeader from './header/_CompactHeader';
import DrawerMenu from './drawer-menu/_DrawerMenu';
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
  onSelectExtensionItem: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An element to render within the ApplicationNavigation popup utility menu at larger breakpoints.
   */
  drawerMenuHero: PropTypes.element,
  /**
   * An element to render within the ApplicationNavigation drawer menu at smaller breakpoints.
   */
  utilityMenuHero: PropTypes.element,
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
  onSelectNavigationItem: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
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
  onSelectUtilityItem: PropTypes.func, // eslint-disable-line react/no-unused-prop-types
  /**
   * A collection of child elements to render within the ApplicationNavigation body.
   */
  children: PropTypes.node,
  /**
   * @private
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
};

const defaultProps = {
  utilityItems: [],
  notifications: {},
};

class ApplicationNavigation extends React.Component {
  static getDerivedStateFromProps(props, state) {
    /**
     * If the drawer menu is visible and we are transitioning to a breakpoint in which the drawer menu
     * should not be rendered, the drawer menu state is reset.
     */
    if (state.drawerMenuIsOpen && !shouldRenderCompactNavigation(props.activeBreakpoint)) {
      return {
        drawerMenuIsOpen: false,
      };
    }

    return null;
  }

  static generateMenuClosingCallback(componentInstance, wrappedFunctionName) {
    return (...args) => {
      /**
       * The functions are retrieved from props during each execution to ensure
       * the most current value is used.
       */
      const wrappedFunction = componentInstance.props[wrappedFunctionName];

      if (!wrappedFunction) {
        return;
      }

      componentInstance.setState({
        drawerMenuIsOpen: false,
      }, () => {
        wrappedFunction(...args);
      });
    };
  }

  constructor(props) {
    super(props);

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleDrawerMenuFocusTrapDeactivation = this.handleDrawerMenuFocusTrapDeactivation.bind(this);
    this.handleSkipToContent = this.handleSkipToContent.bind(this);

    this.renderNavigationMenu = this.renderNavigationMenu.bind(this);
    this.renderHeader = this.renderHeader.bind(this);

    this.drawerMenuRef = React.createRef();
    this.contentLayoutRef = React.createRef();
    this.mainContainerRef = React.createRef();

    /**
     * The popup utility menu and the drawer menu should both be dismissed upon the selection of any item
     * within them. Handlers are generated for each prop to ensure that the appropriate menu state is set
     * upon item selection.
     */
    this.handleNavigationItemSelection = ApplicationNavigation.generateMenuClosingCallback(this, 'onSelectNavigationItem');
    this.handleSettingsSelection = ApplicationNavigation.generateMenuClosingCallback(this, 'onSelectSettings');
    this.handleHelpSelection = ApplicationNavigation.generateMenuClosingCallback(this, 'onSelectHelp');
    this.handleLogoutSelection = ApplicationNavigation.generateMenuClosingCallback(this, 'onSelectLogout');
    this.handleUtilityItemSelection = ApplicationNavigation.generateMenuClosingCallback(this, 'onSelectUtilityItem');

    /**
     * An instance property is held outside of state to manage drawer menu visibility during
     * its presentation/dismissal animations.
     */
    this.drawerMenuIsVisible = false;

    this.state = {
      drawerMenuIsOpen: false,
    };
  }

  componentDidMount() {
    if (this.contentLayoutRef.current) {
      this.contentLayoutRef.current.addEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.contentLayoutRef.current) {
      this.contentLayoutRef.current.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  handleMenuToggle() {
    this.setState(state => ({
      drawerMenuIsOpen: !state.drawerMenuIsOpen,
    }));
  }

  handleTransitionEnd() {
    if (!this.state.drawerMenuIsOpen) {
      this.drawerMenuRef.current.style.display = 'none';
      this.drawerMenuIsVisible = false;
    } else {
      this.drawerMenuIsVisible = true;
    }
  }

  handleDrawerMenuFocusTrapDeactivation() {
    if (this.state.drawerMenuIsOpen) {
      this.setState({ drawerMenuIsOpen: false });
    }
  }

  handleSkipToContent() {
    if (this.mainContainerRef.current) {
      this.mainContainerRef.current.focus();
    }
  }

  renderNavigationMenu() {
    const {
      titleConfig,
      userConfig,
      drawerMenuHero,
      navigationItems,
      activeNavigationItemKey,
      onSelectSettings,
      onSelectHelp,
      onSelectLogout,
      utilityItems,
      activeBreakpoint,
      notifications,
    } = this.props;
    const { drawerMenuIsOpen } = this.state;

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
          onDeactivate: this.handleDrawerMenuFocusTrapDeactivation,
        }}
        className={cx('drawer-menu-focus-trap-container')}
      >
        <DrawerMenu
          titleConfig={titleConfig}
          userConfig={userConfig}
          hero={drawerMenuHero}
          navigationItems={navigationItems}
          activeNavigationItemKey={activeNavigationItemKey}
          onSelectNavigationItem={this.handleNavigationItemSelection}
          onSelectSettings={onSelectSettings ? this.handleSettingsSelection : undefined}
          onSelectHelp={onSelectHelp ? this.handleHelpSelection : undefined}
          onSelectLogout={onSelectLogout ? this.handleLogoutSelection : undefined}
          utilityItems={utilityItems}
          onSelectUtilityItem={this.handleUtilityItemSelection}
          notifications={notifications}
        />
      </FocusTrap>
    );
  }

  renderHeader() {
    const {
      titleConfig,
      navigationItems,
      navigationRenderFunction,
      extensionItems,
      onSelectExtensionItem,
      activeBreakpoint,
      activeNavigationItemKey,
      userConfig,
      utilityMenuHero,
      onSelectSettings,
      onSelectHelp,
      onSelectLogout,
      utilityItems,
      notifications,
    } = this.props;
    if (shouldRenderCompactNavigation(activeBreakpoint)) {
      return (
        <CompactHeader
          activeBreakpoint={activeBreakpoint}
          titleConfig={titleConfig}
          extensionItems={extensionItems}
          onSelectExtensionItem={onSelectExtensionItem}
          navigationItems={navigationItems}
          onSelectToggle={this.handleMenuToggle}
          onSelectSkipToContent={this.handleSkipToContent}
          notifications={notifications}
        />
      );
    }

    return (
      <Header
        activeBreakpoint={activeBreakpoint}
        titleConfig={titleConfig}
        extensionItems={extensionItems}
        onSelectExtensionItem={onSelectExtensionItem}
        navigationItems={navigationItems}
        navigationRenderFunction={navigationRenderFunction}
        activeNavigationItemKey={activeNavigationItemKey}
        onSelectNavigationItem={this.handleNavigationItemSelection}
        onMenuToggle={this.handleMenuToggle}
        userConfig={userConfig}
        hero={utilityMenuHero}
        onSelectSettings={onSelectSettings}
        onSelectHelp={onSelectHelp}
        onSelectLogout={onSelectLogout}
        utilityItems={utilityItems}
        onSelectUtilityItem={this.handleUtilityItemSelection}
        onSelectSkipToContent={this.handleSkipToContent}
        notifications={notifications}
      />
    );
  }

  render() {
    const { children } = this.props;
    const { drawerMenuIsOpen } = this.state;

    /**
     * The drawer menu display is reset to ensure drawer menu will be visible if the menu is being presented.
     * If it's not being opened, the display will be immediately hidden when the drawer menu is rendered.
     */
    if (this.drawerMenuRef.current && drawerMenuIsOpen) {
      this.drawerMenuRef.current.style.display = '';
    }

    return (
      <div className={cx('application-navigation')}>
        <div
          ref={this.drawerMenuRef}
          className={cx('drawer-menu-container')}
          aria-hidden={!drawerMenuIsOpen ? true : null}
          style={this.drawerMenuIsVisible || drawerMenuIsOpen ? undefined : { display: 'none' }}
        >
          {this.renderNavigationMenu()}
        </div>
        <div
          ref={this.contentLayoutRef}
          className={cx('content-layout', { 'drawer-menu-is-open': drawerMenuIsOpen })}
          aria-hidden={drawerMenuIsOpen ? true : null}
        >
          {this.renderHeader()}
          <main
            ref={this.mainContainerRef}
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
      </div>
    );
  }
}

ApplicationNavigation.propTypes = propTypes;
ApplicationNavigation.defaultProps = defaultProps;

export default Breakpoints.withActiveBreakpoint(ApplicationNavigation);
