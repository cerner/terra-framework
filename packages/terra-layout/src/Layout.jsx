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

const COMPACT_SIZES = ['tiny', 'small'];
const isSizeCompact = size => (
  COMPACT_SIZES.indexOf(size) >= 0
);

class Layout extends React.Component {
  static stateForProps(props, currentState) {
    const isHoverMenu = props.menuType === 'hover';
    const isFixedMenu = props.menuType === 'fixed';
    const isCompactLayout = isSizeCompact(currentState.size);
    const menuIsPresent = !!props.menu;

    return Object.assign(currentState || {}, {
      isHoverMenu,
      isFixedMenu,
      isCompactLayout,
      menuIsPresent,
      menuIsOpen: menuIsPresent && (currentState.menuIsOpen || (isFixedMenu && !isCompactLayout)),
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
      this.setState(Layout.stateForProps(this.props, Object.assign({}, this.state, {
        size: newSize,
      })));
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
    const { header, menu } = this.props;
    const { size, menuIsOpen, isCompactLayout, menuIsPresent } = this.state;

    if (!header) {
      return null;
    }

    const shouldDisplayMenuToggle = isCompactLayout && menuIsPresent;

    return React.cloneElement(header, {
      layoutConfig: {
        size,
        isCompactLayout,
        toggleMenu: shouldDisplayMenuToggle && this.toggleMenu,
        menuIsOpen,
      },
    });
  }

  renderMenu() {
    const { menu, menuText } = this.props;
    const { size, menuIsOpen, menuIsPinned, isCompactLayout, isHoverMenu, menuIsPresent } = this.state;

    let menuHeader;
    if (!isCompactLayout && isHoverMenu) {
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
          isCompactLayout,
          toggleMenu: this.toggleMenu,
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
    const { children } = this.props;
    const { size, menuIsOpen, isCompactLayout, menuIsPresent } = this.state;

    if (!children) {
      return null;
    }

    return (
      <ContentContainer
        fill
        header={isCompactLayout && this.renderHeader()}
      >
        {(
          React.cloneElement(children, {
            layoutConfig: {
              size,
              isCompactLayout,
              toggleMenu: menuIsPresent && this.toggleMenu,
              menuIsOpen,
            },
          })
        )}
      </ContentContainer>
    );
  }

  render() {
    const { menuText } = this.props;
    const { menuIsOpen, menuIsPinned, size, isHoverMenu, isFixedMenu, isCompactLayout, menuIsPresent } = this.state;

    return (
      <ContentContainer
        fill
        header={!isCompactLayout && this.renderHeader()}
        {...getCustomProps(this.props, propTypes)}
      >
        <LayoutSlidePanel
          panelContent={this.renderMenu()}
          panelBehavior={menuIsPinned || (isFixedMenu && !isCompactLayout) ? 'squish' : 'overlay'}
          size={size}
          onToggle={this.toggleMenu}
          toggleText={menuText}
          isOpen={menuIsOpen}
          isToggleEnabled={menuIsPresent && (isHoverMenu || isCompactLayout)}
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
