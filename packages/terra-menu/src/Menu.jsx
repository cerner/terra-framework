import React from 'react';
import PropTypes from 'prop-types';
import Popup from 'terra-popup';
import classNames from 'classnames/bind';
import MenuContent from './_MenuContent';
import MenuItem from './MenuItem';
import MenuItemGroup from './MenuItemGroup';
import MenuDivider from './MenuDivider';
import styles from './Menu.module.scss';
import MenuUtils from './_MenuUtils';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * List of Menu.Item(s)/Menu.ItemGroup(s)/Menu.Divider(s) to be displayed as content within the Menu.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function indicating a close condition was met, should be combined with isOpen for state management.
   */
  onRequestClose: PropTypes.func.isRequired,
  /**
   * Target element for the menu to anchor to.
   */
  targetRef: PropTypes.func.isRequired,
  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,
  /**
   * CSS classnames that are append to the arrow.
   */
  classNameArrow: PropTypes.string,
  /**
   * CSS classnames that are append to the menu content inner.
   */
  classNameContent: PropTypes.string,
  /**
   * CSS classnames that are append to the overlay.
   */
  classNameOverlay: PropTypes.string,
  /**
   * Should the menu be presented as open.
   */
  isOpen: PropTypes.bool,
  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760 or auto
   */
  contentWidth: PropTypes.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),
  /**
   * Indicates if the menu should have an center aligned arrow displayed on dropdown.
   * Otherwise, the menu will display without an arrow and right aligned.
   */
  isArrowDisplayed: PropTypes.bool,
  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/Important/red)
   * Header Title for main-menu(first-tier).
   * Header Title will only be visible if the main-menu contains at least one sub-menu.
   * `headerTitle` is expected to be provided as it is used in cases of responsive
   * behavior when Menu is bounded/fullscreen.
   */
  headerTitle: PropTypes.string,
  /**
   * ![IMPORTANT](https://badgen.net/badge/UX/Accessibility/blue)
   * Toggle for the menu display Header Title (first-tier).
   * The default value will be updated to `false` in the next major release.
   */
  showHeader: PropTypes.bool,
};

const defaultProps = {
  isArrowDisplayed: false,
  isOpen: false,
  contentWidth: '240',
  headerTitle: '',
  showHeader: true,
};

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.setPageDimensions = this.setPageDimensions.bind(this);
    this.push = this.push.bind(this);
    this.pop = this.pop.bind(this);
    this.state = {
      stack: [this],
      pageWidth: undefined,
    };
  }

  componentDidUpdate(prevProps) {
    if ((!this.props.isOpen && prevProps.isOpen) || this.props.children.length !== prevProps.children.length) {
      /* eslint-disable react/no-did-update-set-state */
      this.setState({ stack: [this] });
    }
  }

  setPageDimensions(node) {
    if (node) {
      this.pageHeight = node.clientHeight;
      if (this.props.contentWidth === 'auto') {
        this.setState({
          pageWidth: node.clientWidth,
        });
      }
    } else {
      this.pageHeight = undefined;
      this.setState({
        pageWidth: undefined,
      });
    }
  }

  pop() {
    if (this.state.stack.length > 1) {
      this.setState((prevState) => {
        const newStack = prevState.stack.slice();
        newStack.pop();
        return { stack: newStack };
      });
    }
  }

  push(item) {
    this.setState((prevState) => {
      const newStack = prevState.stack.slice();
      let updatedStack;
      if (newStack.length - 1) {
        updatedStack = newStack[0].props.children.filter((list) => list.props.subMenuItems && !list.props.isDisabled);
        updatedStack = MenuUtils.findMenuItem(updatedStack, item.key);
      }
      newStack.push(updatedStack || item);
      return { stack: newStack };
    });
  }

  render() {
    const {
      boundingRef,
      classNameArrow,
      classNameContent,
      classNameOverlay,
      onRequestClose,
      isOpen,
      children,
      targetRef,
      isArrowDisplayed,
      contentWidth,
      showHeader,
      ...customProps
    } = this.props;
    const arrowClass = cx([
      'arrow',
      { submenu: this.state.stack.length > 1 },
      classNameArrow,
    ]);

    const visiblePage = this.state.stack.length - 1;
    const slides = this.state.stack.map((item, index) => (
      <MenuContent
        // eslint-disable-next-line react/no-array-index-key
        key={`MenuPage-${index}`}
        title={item.props.text}
        onRequestNext={this.push}
        onRequestBack={this.pop}
        onRequestClose={this.props.onRequestClose}
        isHidden={index !== visiblePage}
        fixedHeight={this.pageHeight}
        fixedWidth={this.state.pageWidth}
        contentWidth={Popup.Opts.widths[contentWidth]}
        refCallback={visiblePage === 0 ? this.setPageDimensions : null}
        index={index}
        boundingRef={boundingRef}
        isFocused={index === visiblePage}
        headerTitle={this.props.headerTitle}
        showHeader={showHeader}
      >
        {item.props.children || item.props.subMenuItems}
      </MenuContent>
    ));

    return (
      <Popup
        {...customProps}
        boundingRef={boundingRef}
        isArrowDisplayed={isArrowDisplayed}
        attachmentBehavior="flip"
        contentAttachment={isArrowDisplayed ? 'top center' : 'top right'}
        contentHeight="auto"
        contentWidth={this.props.contentWidth}
        classNameArrow={arrowClass}
        classNameContent={classNameContent}
        classNameOverlay={classNameOverlay}
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        targetRef={targetRef}
        hookshotPostionFixed
        isHeaderDisabled
        isContentFocusDisabled
        popupContentRole={null}
        isMenu
      >
        {slides}
      </Popup>
    );
  }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;
Menu.Item = MenuItem;
Menu.ItemGroup = MenuItemGroup;
Menu.Divider = MenuDivider;
Menu.Opts = {
  widths: Popup.Opts.widths,
};

export default Menu;
