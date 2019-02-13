import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Overlay from 'terra-overlay';
import { Breakpoints } from 'terra-application';
import FocusTrap from 'focus-trap-react';

import ApplicationLayoutPropTypes from './utils/propTypes';
import Helpers, { isSizeCompact } from './utils/helpers';
import UtilityHelpers from './utils/utilityHelpers';
import ExtensionDrawer from './extensions/ExtensionDrawer';
import ExtensionBar from './extensions/ExtensionBar';
import ApplicationHeader from './header/_ApplicationHeader';
import ApplicationMenu from './menu/_ApplicationMenu';

// import 'terra-base/lib/baseStyles';
import styles from './ApplicationNavigation.module.scss';

const cx = classNames.bind(styles);

const createExtensions = (extensionConfig, activeBreakpoint, extensionIsOpen, handleExtensionToggle) => (
  <ExtensionBar
    extensionConfig={extensionConfig}
    activeBreakpoint={activeBreakpoint}
    isOpen={extensionIsOpen}
    onRequestClose={handleExtensionToggle}
  />
);

const createExtensionDrawer = (extensionConfig, activeBreakpoint, extensionIsOpen, handleExtensionToggle) => {
  if (!extensionConfig || !extensionIsOpen) {
    return null;
  }

  return (
    <ExtensionDrawer
      extensionConfig={extensionConfig}
      activeBreakpoint={activeBreakpoint}
      isOpen={extensionIsOpen}
      onRequestClose={handleExtensionToggle}
    />
  );
};

const propTypes = {
  nameConfig: ApplicationLayoutPropTypes.nameConfigPropType,
  extensionConfig: ApplicationLayoutPropTypes.extensionConfigPropType,
  userConfig: PropTypes.object,
  menuHeroConfig: PropTypes.object,
  utilityHeroConfig: PropTypes.object,
  navigationAlignment: ApplicationLayoutPropTypes.navigationAlignmentPropType,
  navigationItems: ApplicationLayoutPropTypes.navigationItemsPropType,
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

class ApplicationLayout extends React.Component {
  static getDerivedStateFromProps(props, state) {
    if (state.menuIsOpen && !isSizeCompact(props.activeBreakpoint)) {
      return {
        menuIsOpen: false,
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.generateMenuClosingCallback = this.generateMenuClosingCallback.bind(this);

    this.handleTransitionEnd = this.handleTransitionEnd.bind(this);
    this.setMenuPanelNode = this.setMenuPanelNode.bind(this);
    this.handleMenuToggle = this.handleMenuToggle.bind(this);
    this.handleExtensionToggle = this.handleExtensionToggle.bind(this);
    this.renderNavigationMenu = this.renderNavigationMenu.bind(this);

    this.handleNavigationItemSelection = this.generateMenuClosingCallback('onSelectNavigationItem');
    this.handleSettingsSelection = this.generateMenuClosingCallback('onSelectSettings');
    this.handleHelpSelection = this.generateMenuClosingCallback('onSelectHelp');
    this.handleLogoutSelection = this.generateMenuClosingCallback('onSelectLogout');

    this.hideMenu = true;

    this.state = {
      menuIsOpen: false,
      extensionIsOpen: false,
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


  setMenuPanelNode(node) {
    this.menuPanelNode = node;
  }

  generateMenuClosingCallback(wrappedFunctionName) {
    return (...args) => {
      const wrappedFunction = this.props[wrappedFunctionName];

      if (!wrappedFunction) {
        return;
      }

      this.setState({
        menuIsOpen: false,
      }, () => {
        wrappedFunction(...args);
      });
    };
  }

  handleMenuToggle() {
    this.setState(state => ({
      menuIsOpen: !state.menuIsOpen,
    }));
  }

  handleExtensionToggle() {
    this.setState(state => ({
      extensionIsOpen: !state.extensionIsOpen,
    }));
  }

  handleTransitionEnd() {
    if (!this.state.menuIsOpen) {
      this.menuPanelNode.style.visibility = 'hidden';
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
      <ApplicationMenu
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
    const { menuIsOpen, extensionIsOpen } = this.state;

    const isCompact = isSizeCompact(activeBreakpoint);
    const extensions = createExtensions(extensionConfig, activeBreakpoint, extensionIsOpen, this.handleExtensionToggle);
    const extensionDrawer = createExtensionDrawer(extensionConfig, activeBreakpoint, extensionIsOpen, this.handleExtensionToggle);

    /**
     * Reset visibility to ensure menu will be visible if the menu is being opened. If it's not being opened, the visibility will
     * be immediately set to hidden when the menuPanel is re
     */
    if (this.menuPanelNode) {
      this.menuPanelNode.style.visibility = '';
    }

    return (
      <div className={cx(['application-layout-container', { 'menu-is-open': menuIsOpen }])}>
        <div className={cx('menu-panel')} aria-hidden={!menuIsOpen ? true : null} ref={this.setMenuPanelNode} style={this.hideMenu && !menuIsOpen ? { visibility: 'hidden' } : null}>
          {isCompact && navigationItems.length ? (
            <FocusTrap
              active={menuIsOpen}
              focusTrapOptions={{
                escapeDeactivates: true,
                returnFocusOnDeactivate: true,
                clickOutsideDeactivates: true,
                onDeactivate: () => {
                  if (this.state.menuIsOpen) {
                    this.setState({ menuIsOpen: false });
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
          aria-hidden={menuIsOpen ? true : null}
          ref={(ref) => { this.bodyRef = ref; }}
        >
          <ApplicationHeader
            activeBreakpoint={activeBreakpoint}
            nameConfig={nameConfig}
            extensions={extensions}
            navigationItems={navigationItems}
            navigationItemAlignment={navigationAlignment}
            activeNavigationItemKey={activeNavigationItemKey}
            onSelectNavigationItem={onSelectNavigationItem}
            onMenuToggle={navigationItems.length ? this.handleMenuToggle : undefined}
            userConfig={userConfig}
            heroConfig={utilityHeroConfig}
            onSelectSettings={onSelectSettings}
            onSelectHelp={onSelectHelp}
            onSelectLogout={onSelectLogout}
          />
          {extensionDrawer}
          <main tabIndex="-1" className={cx('content')} data-terra-application-layout-main>
            <Overlay isRelativeToContainer onRequestClose={event => event.stopPropagation()} isOpen={extensionIsOpen} backgroundStyle="dark" style={{ zIndex: '7000' }} />
            {children}
          </main>
          <Overlay isRelativeToContainer isOpen={menuIsOpen} backgroundStyle="clear" />
        </div>
      </div>
    );
  }
}

ApplicationLayout.propTypes = propTypes;
ApplicationLayout.defaultProps = defaultProps;

export default Breakpoints.withActiveBreakpoint(ApplicationLayout);

const Utils = {
  helpers: Helpers,
  utilityHelpers: UtilityHelpers,
  propTypes: ApplicationLayoutPropTypes,
};

export { Utils };
