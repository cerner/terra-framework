import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import MenuButton from './_TabMenu';
import TabDropDown from './TabDropDown';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Tabs to be displayed in the collapsible tab bar.
   */
  children: PropTypes.node.isRequired,
  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: PropTypes.func,
  ids: PropTypes.array,
};

class CollapsibleTabs extends React.Component {
  constructor(props) {
    super(props);
    this.setContainer = this.setContainer.bind(this);
    this.setMenuRef = this.setMenuRef.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleSelectionAnimation = this.handleSelectionAnimation.bind(this);
    this.handleHiddenBlur = this.handleHiddenBlur.bind(this);
    this.handleHiddenFocus = this.handleHiddenFocus.bind(this);
    this.handleOnMenuButtonSelect = this.handleOnMenuButtonSelect.bind(this);
    this.handleOnSelect = this.handleOnSelect.bind(this);
    this.handleOnSelectHidden = this.handleOnSelectHidden.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.dropdownRef = React.createRef();
    this.resetCache();
    this.state = { isOpen : false };
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver((entries) => {
      this.contentWidth = entries[0].contentRect.width;
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.container);
    this.handleResize(this.contentWidth);
    this.handleSelectionAnimation();
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    } else if (React.Children.count(this.props.children) !== React.Children.count(prevProps.children)) {
      this.resetCache();
      this.forceUpdate();
    } else {
      this.handleSelectionAnimation();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.container);
    this.container = null;
  }

  setContainer(node) {
    if (node === null) { return; } // Ref callbacks happen on mount and unmount, element will be null on unmount
    this.container = node;
  }

  setMenuRef(node) {
    if (node === null) { return; }
    this.menuRef = node;
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.menuHidden = false;
  }

  handleResize(width) {
    const menuMarginLeft = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'), 10);
    const menuMarginRight = parseInt(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'), 10);
    const menuToggleWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
    const availableWidth = width - menuToggleWidth;

    // Calculate hide index
    const childrenCount = React.Children.count(this.props.children);
    let newHideIndex = childrenCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < this.props.children.length; i += 1) {
      const tab = this.container.children[i];
      const tabMarginLeft = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'));
      const tabMarginRight = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'));
      const minWidth = parseFloat(window.getComputedStyle(tab, null).getPropertyValue('min-width'));
      calcMinWidth += (minWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === childrenCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

    // Calculate if label will be truncated
    let isLabelTruncated = false;
    let calcWidth = 0;
    for (let i = 0; i < newHideIndex; i += 1) {
      const tab = this.container.children[i];
      calcWidth += tab.getBoundingClientRect().width;
      if ((isMenuHidden && calcWidth > width) || (!isMenuHidden && calcWidth > availableWidth)) {
        isLabelTruncated = true;
        break;
      }
    }

    this.props.onTruncationChange(isLabelTruncated);

    if (this.menuHidden !== isMenuHidden || this.hiddenStartIndex !== newHideIndex) {
      this.menuHidden = isMenuHidden;
      this.hiddenStartIndex = newHideIndex;
      this.forceUpdate();
    }
  }

  handleSelectionAnimation() {
    if (this.selectionBar && window.getComputedStyle(this.selectionBar, null).getPropertyValue('transition-property').includes('transform')) {
      const selectedTab = this.container.querySelector('[aria-selected="true]');
      if (selectedTab) {
        const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
        const tabRect = selectedTab.getBoundingClientRect();
        const barWidth = tabRect.width;
        let barLeft = tabRect.left - this.container.getBoundingClientRect().left;
        if (isRTL) {
          barLeft = tabRect.right - this.container.getBoundingClientRect().right;
        }

        this.selectionBar.style.width = `${barWidth}px`;
        this.selectionBar.style.transform = `translate3d(${barLeft}px,0,0)`;
      }
    }
  }

  handleHiddenFocus(e) {
    // console.log('focus');
    // // this.setState({ isOpen: true });

    // if (e.currentTarget.contains(e.relatedTarget)) {
    //   // focus is leaving the container so do something interesting here
    //   this.setState({ isOpen: true });
    // }
    // if (!this.dropdownRef.current.contains(e.currentTarget.contains(e.relatedTarget)) {
    //   // focus is leaving the container so do something interesting here
    //   this.setState({ isOpen: false });
    // }
    this.setState({ isOpen: true });
  }

  handleHiddenBlur(e) {
    // console.log('blur');
    // // this.setState({ isOpen: false });

    // if (!this.dropdownRef.current.contains(e.currentTarget.contains(e.relatedTarget)) {
    //   // focus is leaving the container so do something interesting here
      this.setState({ isOpen: false });
    // }
  }

  handleOnMenuButtonSelect() {
    this.setState({ isOpen: true });
    const element = document.getElementById(this.props.ids[this.hiddenStartIndex]);
    if (element) {
      element.focus();
    }
  }

  handleOnSelect(onSelect) {
    return (event, metaData) => {
      this.setState({ isOpen: false });
      onSelect(metaData);
    };
  }

  handleOnSelectHidden(onSelect) {
    return (event, metaData) => {
      if (this.state.isOpen) {
        this.setState({ isOpen: false });
        onSelect(metaData);
      } else {
        this.setState({ isOpen: true });
      }
    };
  }

  handleOutsideClick() {
    this.setState({ isOpen: false });
  }

  render() {
    const visibleChildren = [];
    const hiddenChildren = [];
    const hiddenChildIds = [];
    let isMenuActive = false;;
    React.Children.forEach(this.props.children, (child, index) => {
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleChildren.push(React.cloneElement(child, { onSelect: this.handleOnSelect(child.props.onSelect) }));
      } else {
        const hiddenChild = React.cloneElement(child, {
          isHidden: true,
          onFocus: this.handleHiddenFocus,
          onBlur: this.handleHiddenBlur,
          onSelect: this.handleOnSelectHidden(child.props.onSelect),
        });
        hiddenChildren.push(hiddenChild);
        hiddenChildIds.push(child.id);

        if (child.props.isSelected) {
          isMenuActive = true;
        }
      }
    });
    const theme = this.context;

    const menuButton = this.menuHidden ? null : (
      <MenuButton
        isActive={isMenuActive}
        onSelect={this.handleOnMenuButtonSelect}
        refCallback={this.setMenuRef}
        ids={this.props.ids}
      />
    );

    // const headerTitle = <heading className={cx('title')}>{this.props.selectedTab.label}</heading>;

    return (
      <div>
        <div
          className={cx('collapsible-tabs-container', { 'is-calculating': this.isCalculating }, theme.className)}
          ref={this.setContainer}
          role="tablist"
          aria-owns={hiddenChildIds.join(' ')}
        >
          {visibleChildren}
          <TabDropDown
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
            isOpen={this.state.isOpen}
            onRequestClose={this.handleOutsideClick}
            refCallback={node => this.dropdownRef.current = node}
          >
            {hiddenChildren}
          </TabDropDown>
          {menuButton}
        </div>
        {/* {headerTitle} */}
      </div>
    );
  }
}

CollapsibleTabs.propTypes = propTypes;
CollapsibleTabs.contextType = ThemeContext;

export default CollapsibleTabs;
