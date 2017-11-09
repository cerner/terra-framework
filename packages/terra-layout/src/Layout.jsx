import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';

import LayoutSlidePanel from './_LayoutSlidePanel';
import {
  getBreakpointSize,
  getCustomProps,
} from './LayoutUtils';

const propTypes = {
  /**
   * Element to be placed within the header section of the layout.
   */
  header: PropTypes.element,
  /**
   * Element to be placed within the menu section of the layout. If not set, Layout-provided menu controls will be hidden.
   */
  menu: PropTypes.element,
  /**
   * String used to decorate menu hover control.
   */
  menuText: PropTypes.string,
  /**
   * Element to be placed within the main content section of the layout.
   */
  children: PropTypes.element,
};

class Layout extends React.Component {
  static stateForProps(props, currentState) {
    const isFixedMenu = currentState.size === 'large' || currentState.size === 'huge';
    const isHoverMenu = currentState.size === 'medium';
    const isToggleMenu = currentState.size === 'tiny' || currentState.size === 'small';

    const menuIsPresent = !!props.menu;

    return Object.assign({}, currentState || {}, {
      isHoverMenu,
      isFixedMenu,
      isToggleMenu,
      menuIsPresent,
      menuIsOpen: menuIsPresent && (currentState.menuIsOpen || isFixedMenu),
      menuIsPinned: menuIsPresent && currentState.menuIsPinned && isHoverMenu,
    });
  }

  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.togglePin = this.togglePin.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = Layout.stateForProps(props, {
      size: getBreakpointSize(),
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillReceiveProps(nextProps) {
    this.setState(Layout.stateForProps(nextProps, this.state));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    const newSize = getBreakpointSize();

    if (this.state.size !== newSize) {
      this.setState(Layout.stateForProps(this.props, {
        size: newSize,
      }));
    }
  }

  toggleMenu() {
    this.setState({
      menuIsOpen: !this.state.menuIsOpen,
    });
  }

  togglePin() {
    this.setState({
      menuIsPinned: !this.state.menuIsPinned,
    });
  }

  renderHeader() {
    const { header } = this.props;
    const { size, menuIsOpen, isToggleMenu, menuIsPresent } = this.state;

    if (!header) {
      return null;
    }

    const shouldAllowMenuToggle = isToggleMenu && menuIsPresent;

    return React.cloneElement(header, {
      layoutConfig: {
        size,
        toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
        menuIsOpen,
      },
    });
  }

  renderMenu() {
    const { menu } = this.props;
    const { size, menuIsOpen, menuIsPinned, isToggleMenu, isHoverMenu, menuIsPresent } = this.state;
    const shouldAllowMenuToggle = isToggleMenu && menuIsPresent;

    if (!menuIsPresent) {
      return null;
    }

    return React.cloneElement(menu, {
      layoutConfig: {
        size,
        toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
        menuIsOpen,
        togglePin: isHoverMenu ? this.togglePin : undefined,
        menuIsPinned,
      },
    });
  }

  renderContent() {
    const { children } = this.props;
    const { size, menuIsOpen, isToggleMenu, menuIsPresent } = this.state;
    const shouldAllowMenuToggle = isToggleMenu && menuIsPresent;

    return (
      <ContentContainer
        fill
        header={isToggleMenu && this.renderHeader()}
        style={{ outline: 'none' }}
      >
        {children ?
          React.cloneElement(children, {
            layoutConfig: {
              size,
              toggleMenu: shouldAllowMenuToggle ? this.toggleMenu : undefined,
              menuIsOpen,
            },
          }) : null
        }
      </ContentContainer>
    );
  }

  render() {
    const { menuText } = this.props;
    const { menuIsOpen, menuIsPinned, size, isHoverMenu, isFixedMenu, isToggleMenu, menuIsPresent } = this.state;

    return (
      <ContentContainer
        fill
        header={!isToggleMenu && this.renderHeader()}
        {...getCustomProps(this.props, propTypes)}
      >
        <LayoutSlidePanel
          panelContent={this.renderMenu()}
          panelBehavior={menuIsPinned || isFixedMenu ? 'squish' : 'overlay'}
          size={size}
          onToggle={this.toggleMenu}
          toggleText={menuText}
          isOpen={menuIsOpen}
          isToggleEnabled={menuIsPresent && isHoverMenu}
          isAnimated
        >
          {this.renderContent()}
        </LayoutSlidePanel>
      </ContentContainer>
    );
  }
}

Layout.propTypes = propTypes;

export default Layout;
