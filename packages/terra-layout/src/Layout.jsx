import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';

import LayoutSlidePanel from './_LayoutSlidePanel';
import MenuHeader from './_MenuHeader';
import {
  getBreakpointSize,
  getCustomProps,
} from './utilities';

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
   * String used to decorate menu controls.
   */
  menuText: PropTypes.string,

  menuType: PropTypes.oneOf(['hover', 'fixed']),

  /**
   * Element to be placed within the main content section of the layout.
   */
  children: PropTypes.element,
};

const defaultProps = {
  menuType: 'hover',
};

class Layout extends React.Component {
  static stateForProps(props, currentState) {
    const isHoverMenu = currentState.size === 'medium';
    const isFixedMenu = currentState.size === 'large' || currentState.size === 'huge';
    const isOverlayMenu = currentState.size === 'tiny' || currentState.size === 'small';
    const menuIsPresent = !!props.menu;

    return Object.assign({}, currentState || {}, {
      isHoverMenu,
      isFixedMenu,
      isOverlayMenu,
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
    const { size, menuIsOpen, isOverlayMenu, menuIsPresent } = this.state;

    if (!header) {
      return null;
    }

    const shouldAllowMenuToggle = isOverlayMenu && menuIsPresent;

    return React.cloneElement(header, {
      layoutConfig: {
        size,
        toggleMenu: shouldAllowMenuToggle && this.toggleMenu,
        menuIsOpen,
      },
    });
  }

  renderMenu() {
    const { menu, menuText } = this.props;
    const { size, menuIsOpen, menuIsPinned, isOverlayMenu, isHoverMenu, menuIsPresent } = this.state;

    const shouldAllowMenuToggle = isOverlayMenu && menuIsPresent;

    let menuHeader;
    if (isHoverMenu) {
      menuHeader = (
        <MenuHeader
          text={menuText}
          togglePin={this.togglePin}
          isPinned={menuIsPinned}
        />
      );
    }

    let menuContent;
    if (menuIsPresent) {
      menuContent = React.cloneElement(menu, {
        layoutConfig: {
          size,
          toggleMenu: shouldAllowMenuToggle && this.toggleMenu,
          menuIsOpen,
        },
      });
    }

    return (
      <ContentContainer
        fill
        header={menuHeader}
      >
        {menuContent}
      </ContentContainer>
    );
  }

  renderContent() {
    const { header, children } = this.props;
    const { size, menuIsOpen, isOverlayMenu, menuIsPresent } = this.state;

    const shouldAllowMenuToggle = isOverlayMenu && menuIsPresent && !header;

    if (!children) {
      return null;
    }

    return (
      <ContentContainer
        fill
        header={isOverlayMenu && this.renderHeader()}
      >
        {(
          React.cloneElement(children, {
            layoutConfig: {
              size,
              toggleMenu: shouldAllowMenuToggle && this.toggleMenu,
              menuIsOpen,
            },
          })
        )}
      </ContentContainer>
    );
  }

  render() {
    const { menuText } = this.props;
    const { menuIsOpen, menuIsPinned, size, isHoverMenu, isFixedMenu, isOverlayMenu, menuIsPresent } = this.state;

    return (
      <ContentContainer
        fill
        header={!isOverlayMenu && this.renderHeader()}
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
Layout.defaultProps = defaultProps;

export default Layout;
