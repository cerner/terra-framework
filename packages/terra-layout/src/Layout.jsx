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
  /**
   * Element to be placed within the main content section of the layout.
   */
  children: PropTypes.element,
};

const COMPACT_SIZES = ['tiny', 'small'];
const isSizeCompact = size => (
  COMPACT_SIZES.indexOf(size) >= 0
);

class Layout extends React.Component {
  constructor(props) {
    super(props);

    this.toggleMenu = this.toggleMenu.bind(this);
    this.togglePin = this.togglePin.bind(this);
    this.updateSize = this.updateSize.bind(this);
    this.isCompactLayout = this.isCompactLayout.bind(this);
    this.renderHeader = this.renderHeader.bind(this);
    this.renderMenu = this.renderMenu.bind(this);
    this.renderContent = this.renderContent.bind(this);

    this.state = {
      menuIsOpen: false,
      menuIsPinned: false,
      size: getBreakpointSize(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      menuIsOpen: !!nextProps.menu && this.state.menuIsOpen,
      menuIsPinned: !!nextProps.menu && this.state.menuIsPinned,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    const newSize = getBreakpointSize();

    if (this.state.size !== newSize) {
      const newMenuIsPinned = !!this.props.menu && !isSizeCompact(newSize) && this.state.menuIsPinned;
      const newMenuIsOpen = !!this.props.menu && this.state.menuIsOpen && newMenuIsPinned;

      this.setState({
        size: newSize,
        menuIsOpen: newMenuIsOpen,
        menuIsPinned: newMenuIsPinned,
      });
    }
  }

  toggleMenu() {
    if (!this.state.menuIsPinned) {
      this.setState({
        menuIsOpen: !this.state.menuIsOpen,
      });
    }
  }

  togglePin() {
    this.setState({
      menuIsPinned: !this.state.menuIsPinned,
    });
  }

  isCompactLayout() {
    return isSizeCompact(this.state.size);
  }

  renderHeader() {
    const { header, menu } = this.props;
    const { size, menuIsOpen } = this.state;

    if (!header) {
      return null;
    }

    const isCompactLayout = this.isCompactLayout();
    const shouldDisplayMenuToggle = isCompactLayout && !!menu;

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
    const { size, menuIsOpen, menuIsPinned } = this.state;
    const isCompactLayout = this.isCompactLayout();

    let menuHeader;
    if (!isCompactLayout) {
      menuHeader = (
        <MenuHeader
          text={menuText}
          togglePin={!isCompactLayout && this.togglePin}
          isPinned={!isCompactLayout && menuIsPinned}
        />
      );
    }

    let menuContent;
    if (menu) {
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
    const { size, menuIsOpen } = this.state;

    if (!children) {
      return null;
    }

    const isCompactLayout = this.isCompactLayout();

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
              toggleMenu: this.toggleMenu,
              menuIsOpen,
            },
          })
        )}
      </ContentContainer>
    );
  }

  render() {
    const { menu, menuText } = this.props;
    const { menuIsOpen, menuIsPinned, size } = this.state;

    return (
      <ContentContainer
        fill
        header={!this.isCompactLayout() && this.renderHeader()}
        {...getCustomProps(this.props, propTypes)}
      >
        <LayoutSlidePanel
          panelContent={this.renderMenu()}
          panelBehavior={menuIsPinned ? 'squish' : 'overlay'}
          size={size}
          onToggle={this.toggleMenu}
          toggleText={menuText}
          isOpen={menuIsOpen}
          isToggleEnabled={!!menu}
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
