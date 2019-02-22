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
  userConfigPropType, heroConfigPropType, navigationItemsPropType, navigationAlignmentPropType, extensionConfigPropType, nameConfigPropType,
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
  nameConfig: nameConfigPropType,
  extensionConfig: extensionConfigPropType,
  userConfig: userConfigPropType,
  menuHeroConfig: heroConfigPropType,
  utilityHeroConfig: heroConfigPropType,
  navigationAlignment: navigationAlignmentPropType,
  navigationItems: navigationItemsPropType,
  activeNavigationItemKey: PropTypes.string,
  onSelectNavigationItem: PropTypes.func,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
  children: PropTypes.node,
  /**
   * @private
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
};

const defaultProps = {
  navigationItems: [],
};

class ApplicationNavigation extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.drawerMenuIsOpen && !shouldRenderCompactNavigation(props.activeBreakpoint)) {
      return {
        drawerMenuIsOpen: false,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.generateMenuClosingCallback = this.generateMenuClosingCallback.bind(this);

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.setDrawerMenuNode = this.setDrawerMenuNode.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.renderNavigationMenu = this.renderNavigationMenu.bind(this);

    this.handleNavigationItemSelection = this.generateMenuClosingCallback('onSelectNavigationItem');
    this.handleSettingsSelection = this.generateMenuClosingCallback('onSelectSettings');
    this.handleHelpSelection = this.generateMenuClosingCallback('onSelectHelp');
    this.handleLogoutSelection = this.generateMenuClosingCallback('onSelectLogout');

    this.hideMenu = true;

    this.state = {
      drawerMenuIsOpen: false,
    };
  }

  componentDidMount() {
    if (this.bodyRef) {
      this.bodyRef.addEventListener('transitionend', this.handleTransitionEnd);
    }
  }

  componentWillUnmount() {
    if (this.bodyRef) {
      this.bodyRef.removeEventListener('transitionend', this.handleTransitionEnd);
    }
  }


  setDrawerMenuNode(node) {
    this.drawerMenuNode = node;
  }

  generateMenuClosingCallback(wrappedFunctionName) {
    return (...args) => {
      const wrappedFunction = this.props[wrappedFunctionName];

      if (!wrappedFunction) {
        return;
      }

      this.setState({
        drawerMenuIsOpen: false,
      }, () => {
        wrappedFunction(...args);
      });
    };
  }

  handleMenuToggle() {
    this.setState(state => ({
      drawerMenuIsOpen: !state.drawerMenuIsOpen,
    }));
  }

  handleTransitionEnd() {
    if (!this.state.drawerMenuIsOpen) {
      this.drawerMenuNode.style.visibility = 'hidden';
      this.hideMenu = true;
    } else {
      this.hideMenu = false;
    }
  }

  renderNavigationMenu() {
    const {
      userConfig, menuHeroConfig, navigationItems, activeNavigationItemKey,
      onSelectSettings, onSelectHelp, onSelectLogout,
    } = this.props;

    return (
      <DrawerMenu
        userConfig={userConfig}
        heroConfig={menuHeroConfig}
        navigationItems={navigationItems}
        activeNavigationItemKey={activeNavigationItemKey}
        onSelectNavigationItem={this.handleNavigationItemSelection}
        onSelectSettings={onSelectSettings ? this.handleSettingsSelection : undefined}
        onSelectHelp={onSelectHelp ? this.handleHelpSelection : undefined}
        onSelectLogout={onSelectLogout ? this.handleLogoutSelection : undefined}
      />
    );
  }

  render() {
    const {
      nameConfig, navigationAlignment, navigationItems, extensionConfig, activeBreakpoint, children, activeNavigationItemKey, onSelectNavigationItem, userConfig, utilityHeroConfig, onSelectSettings, onSelectHelp, onSelectLogout,
    } = this.props;
    const { drawerMenuIsOpen, extensionIsOpen } = this.state;

    const extensions = createExtensions(extensionConfig, activeBreakpoint);

    /**
     * Reset visibility to ensure drawer menu will be visible if the menu is being presented. If it's not being opened, the visibility will
     * be immediately set to hidden when the menuPanel is re
     */
    if (this.drawerMenuNode) {
      this.drawerMenuNode.style.visibility = '';
    }

    return (
      <div className={cx(['application-layout-container', { 'menu-is-open': drawerMenuIsOpen }])}>
        <div className={cx('menu-panel')} aria-hidden={!drawerMenuIsOpen ? true : null} ref={this.setDrawerMenuNode} style={this.hideMenu && !drawerMenuIsOpen ? { visibility: 'hidden' } : null}>
          {shouldRenderCompactNavigation(activeBreakpoint) ? (
            <FocusTrap
              active={drawerMenuIsOpen}
              focusTrapOptions={{
                escapeDeactivates: true,
                returnFocusOnDeactivate: true,
                clickOutsideDeactivates: true,
                onDeactivate: () => {
                  if (this.state.drawerMenuIsOpen) {
                    this.setState({ drawerMenuIsOpen: false });
                  }
                },
              }}
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              {this.renderNavigationMenu()}
            </FocusTrap>
          ) : undefined}
        </div>
        <div
          className={cx('body')}
          aria-hidden={drawerMenuIsOpen ? true : null}
          ref={(ref) => { this.bodyRef = ref; }}
        >
          <Header
            activeBreakpoint={activeBreakpoint}
            nameConfig={nameConfig}
            extensions={extensions}
            navigationItems={navigationItems}
            navigationItemAlignment={navigationAlignment}
            activeNavigationItemKey={activeNavigationItemKey}
            onSelectNavigationItem={onSelectNavigationItem}
            onMenuToggle={this.handleMenuToggle}
            userConfig={userConfig}
            heroConfig={utilityHeroConfig}
            onSelectSettings={onSelectSettings}
            onSelectHelp={onSelectHelp}
            onSelectLogout={onSelectLogout}
          />
          <main tabIndex="-1" className={cx('content')} data-terra-application-layout-main>
            <Overlay isRelativeToContainer onRequestClose={event => event.stopPropagation()} isOpen={extensionIsOpen} backgroundStyle="dark" style={{ zIndex: '7000' }} />
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
