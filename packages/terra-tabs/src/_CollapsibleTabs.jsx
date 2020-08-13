import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import MoreButton from './_MoreButton';
import TabDropDown from './TabDropDown';
import Tab from './Tab';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  tabData: PropTypes.array,
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
    this.handleOnMoreButtonSelect = this.handleOnMoreButtonSelect.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.wrapOnSelect = this.wrapOnSelect.bind(this);
    this.wrapOnSelectHidden = this.wrapOnSelectHidden.bind(this);
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
    } else if (this.props.tabData.length !== prevProps.tabData.length) {
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
    const menuButtonWidth = this.menuRef.getBoundingClientRect().width + menuMarginLeft + menuMarginRight;
    const availableWidth = width - menuButtonWidth;

    // Calculate hide index
    const tabCount = this.props.tabData.length;
    let newHideIndex = tabCount;
    let calcMinWidth = 0;
    let isMenuHidden = true;
    for (let i = 0; i < tabCount; i += 1) {
      const tab = this.container.children[i];
      const tabMarginLeft = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-left'));
      const tabMarginRight = parseFloat(window.getComputedStyle(this.menuRef, null).getPropertyValue('margin-right'));
      const minWidth = parseFloat(window.getComputedStyle(tab, null).getPropertyValue('min-width'));
      calcMinWidth += (minWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === tabCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        isMenuHidden = false;
        break;
      }
    }

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

  // TODO: clean up open state
  handleHiddenFocus(e) {
    this.setState({ isOpen: true });
  }

  handleHiddenBlur(e) {
    this.setState({ isOpen: false });
  }

  handleOnMoreButtonSelect() {
    this.setState({ isOpen: true });
    const element = this.dropdownRef.current.children[0];
    if (element) {
      element.focus();
    }
  }

  handleOutsideClick() {
    this.setState({ isOpen: false });
  }

  wrapOnSelect(onSelect) {
    return (event, metaData) => {
      this.setState({ isOpen: false });
      onSelect(metaData);
    };
  }
// clean  up
  wrapOnSelectHidden(onSelect) {
    return (event, metaData) => {
      if (this.state.isOpen) {
        this.setState({ isOpen: false });
        onSelect(metaData);
      } else {
        this.setState({ isOpen: true });
      }
    };
  }

  render() {
    const { tabData } = this.props;
    const ids = tabData.map(tab => tab.id);
    const hiddenIds = [];
    const visibleTabs = [];
    const hiddenTabs = [];
    
    // this is a wrap of onSelect
    // onSelect: this.handleOnSelect(child.props.onSelect)
    // this.handleOnSelectHidden(child.props.onSelect)

    let isMenuActive = false;
    tabData.forEach((tab, index) => {
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleTabs.push(
          <Tab
            {...tab}
            index={index}
            tabIds={ids}
            onSelect={this.wrapOnSelect(tab.onSelect)}
          />
        );
      } else {
        hiddenTabs.push(
          <Tab
            {...tab}
            index={index}
            tabIds={ids}
            onSelect={this.wrapOnSelectHidden(tab.onSelect)}
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
            isHidden
          />
        );
        hiddenIds.push(tab.id);

        if (tab.isSelected) {
          isMenuActive = true;
        }
      }
    });

    const theme = this.context;

    const menuButton = this.menuHidden ? null : (
      <MoreButton
        isActive={isMenuActive}
        onSelect={this.handleOnMoreButtonSelect}
        refCallback={this.setMenuRef}
      />
    );

    return (
      <div>
        <div
          className={cx('collapsible-tabs-container', { 'is-calculating': this.isCalculating }, theme.className)}
          ref={this.setContainer}
          role="tablist"
          aria-owns={hiddenIds.join(' ')}
        >
          {visibleTabs}
          <TabDropDown
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
            isOpen={this.state.isOpen}
            onRequestClose={this.handleOutsideClick}
            refCallback={node => this.dropdownRef.current = node}
          >
            {hiddenTabs}
          </TabDropDown>
          {menuButton}
        </div>
      </div>
    );
  }
}

CollapsibleTabs.propTypes = propTypes;
CollapsibleTabs.contextType = ThemeContext;

export default CollapsibleTabs;
