import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import { Breakpoints } from 'terra-application';
import FocusTrap from 'focus-trap-react';

import Extensions from './extensions/_Extensions';
import Header from './header/_Header';
import DrawerMenu from './drawer-menu/_DrawerMenu';
import { shouldRenderCompactNavigation } from './utils/helpers';
import {
  userConfigPropType, navigationItemsPropType, extensionConfigPropType, utilityItemsPropType,
} from './utils/propTypes';

import styles from './ApplicationNavigation.module.scss';

const cx = classNames.bind(styles);

const createExtensions = (extensionConfig, activeBreakpoint) => (
  <Extensions
    extensionConfig={extensionConfig}
    activeBreakpoint={activeBreakpoint}
  />
);

const propTypes = {
  /**
   * A string or element rendered within the ApplicationNavigation header to communicate the application's name
   * or branding.
   *
   * Strings will be truncated if they exceed their allotted space. If an element is provided, the element will
   * be allotted a space equivalent to the element's width. If that width is too large, other header controls may
   * not be left with enough space to render appropriately.
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionConfig: extensionConfigPropType,
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
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey)`
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
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
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
  navigationItems: [],
  utilityItems: [],
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
    this.renderNavigationMenu = this.renderNavigationMenu.bind(this);
    this.renderHeader = this.renderHeader.bind(this);

    this.drawerMenuRef = React.createRef();
    this.contentLayoutRef = React.createRef();

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
     * A instance property is held outside of state to manage drawer menu visibility during
     * its presentation/dismissal animations.
     */
    this.drawerMenuIsVisible = false;

    this.state = {
      drawerMenuIsOpen: false,
      extensionIsOpen: false,
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

  renderNavigationMenu() {
    const {
      userConfig,
      drawerMenuHero,
      navigationItems,
      activeNavigationItemKey,
      onSelectSettings,
      onSelectHelp,
      onSelectLogout,
      utilityItems,
      activeBreakpoint,
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
        />
      </FocusTrap>
    );
  }

  renderHeader() {
    const {
      title,
      navigationItems,
      extensionConfig,
      activeBreakpoint,
      activeNavigationItemKey,
      userConfig,
      utilityMenuHero,
      onSelectSettings,
      onSelectHelp,
      onSelectLogout,
      utilityItems,
    } = this.props;

    return (
      <Header
        activeBreakpoint={activeBreakpoint}
        title={title}
        extensions={createExtensions(extensionConfig, activeBreakpoint)}
        navigationItems={navigationItems}
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
      />
    );
  }

  render() {
    const { children } = this.props;
    const { drawerMenuIsOpen, extensionIsOpen } = this.state;

    /**
     * The drawer menu display is reset to ensure drawer menu will be visible if the menu is being presented.
     * If it's not being opened, the display will be immediately set to hidden when the drawer menu is rendered.
     */
    if (this.drawerMenuRef.current) {
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
          <main tabIndex="-1" className={cx('main-container')} data-terra-application-navigation-main>
            <Overlay
              isRelativeToContainer
              onRequestClose={event => event.stopPropagation()}
              isOpen={extensionIsOpen}
              backgroundStyle="dark"
              style={{ zIndex: '7000' }}
            />
            {children}
          </main>
          <Overlay isRelativeToContainer isOpen={drawerMenuIsOpen} backgroundStyle="clear" />
        </div>
      </div>
    );
  }
}

ApplicationNavigation.propTypes = propTypes;
ApplicationNavigation.defaultProps = defaultProps;

export default Breakpoints.withActiveBreakpoint(ApplicationNavigation);
