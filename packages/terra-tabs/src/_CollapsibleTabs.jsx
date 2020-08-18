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
    this.containerRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.moreButtonRef = React.createRef();

    this.setIsOpen = this.setIsOpen.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleHiddenBlur = this.handleHiddenBlur.bind(this);
    this.handleHiddenFocus = this.handleHiddenFocus.bind(this);
    this.handleOnMoreButtonSelect = this.handleOnMoreButtonSelect.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.wrapOnSelect = this.wrapOnSelect.bind(this);
    this.wrapOnSelectHidden = this.wrapOnSelectHidden.bind(this);
    
    this.resetCache();
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
    this.resizeObserver.observe(this.containerRef.current);
    this.handleResize(this.contentWidth);
  }

  componentDidUpdate(prevProps) {
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
    } else if (this.props.tabData.length !== prevProps.tabData.length) {
      this.resetCache();
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.containerRef.current);
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.showMoreButton = true;
    this.isOpen = false;
  }

  handleResize(width) {
    if (!this.moreButtonRef.current || !this.containerRef.current) {
      return;
    }

    const moreStyle = window.getComputedStyle(this.moreButtonRef.current, null);
    const moreMarginLeft = parseInt(moreStyle.getPropertyValue('margin-left'), 10);
    const moreMarginRight = parseInt(moreStyle.getPropertyValue('margin-right'), 10);
    const moreButtonWidth = this.moreButtonRef.current.getBoundingClientRect().width + moreMarginLeft + moreMarginRight;
    const availableWidth = width - moreButtonWidth;

    // Calculate hidden index
    const tabCount = this.props.tabData.length;
    let newHideIndex = tabCount;
    let calcMinWidth = 0;
    let showMoreButton = false;
    for (let i = 0; i < tabCount; i += 1) {
      const tab = this.containerRef.current.children[i];
      const tabStyle = window.getComputedStyle(tab, null);
      const tabMarginLeft = parseFloat(tabStyle.getPropertyValue('margin-left'));
      const tabMarginRight = parseFloat(tabStyle.getPropertyValue('margin-right'));
      const tabMinWidth = parseFloat(tabStyle.getPropertyValue('min-width'));
      calcMinWidth += (tabMinWidth + tabMarginLeft + tabMarginRight);
      if (calcMinWidth > availableWidth && !(i === tabCount - 1 && calcMinWidth <= width)) {
        newHideIndex = i;
        showMoreButton = true;
        break;
      }
    }

    if (this.showMoreButton !== showMoreButton || this.hiddenStartIndex !== newHideIndex) {
      this.showMoreButton = showMoreButton;
      this.hiddenStartIndex = newHideIndex;
      this.forceUpdate();
    }
  }

  setIsOpen(value) {
    this.isOpen = value;
    this.forceUpdate();
  }

  handleHiddenFocus(e) {
    this.setIsOpen(true);
  }

  handleHiddenBlur(e) {
    this.setIsOpen(false);
  }

  handleOnMoreButtonSelect() {
    this.setIsOpen(true);
    const element = this.dropdownRef.current.children[0];
    if (element) {
      element.focus();
    }
  }

  handleOutsideClick() {
    this.setIsOpen(false);
  }

  renderMoreButton(isHiddenActive) {
    return this.showMoreButton ? (
      <MoreButton
        isActive={isHiddenActive}
        onSelect={this.handleOnMoreButtonSelect}
        refCallback={node => this.moreButtonRef.current = node}
      />
    ) : undefined;
  }

  wrapOnSelect(onSelect) {
    return (event, metaData) => {
      this.setIsOpen(false);
      onSelect(metaData);
    };
  }

  wrapOnSelectHidden(onSelect) {
    return (event, metaData) => {
      if (this.isOpen) {
        onSelect(metaData);
      }
      this.setIsOpen(!this.isOpen);
    };
  }

  render() {
    const { tabData } = this.props;
    const theme = this.context;
    const ids = tabData.map(tab => tab.id);
    const hiddenIds = [];
    const visibleTabs = [];
    const hiddenTabs = [];
    let isHiddenSelected = false;

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
          isHiddenSelected = true;
        }
      }
    });

    return (
      <div
        className={cx('collapsible-tabs-container', { 'is-calculating': this.isCalculating }, theme.className)}
        ref={this.containerRef}
        role="tablist"
        aria-owns={hiddenIds.join(' ')}
      >
        {visibleTabs}
        <TabDropDown
          onFocus={this.handleHiddenFocus}
          onBlur={this.handleHiddenBlur}
          isOpen={this.isOpen}
          onRequestClose={this.handleOutsideClick}
          refCallback={node => this.dropdownRef.current = node}
        >
          {hiddenTabs}
        </TabDropDown>
        {this.renderMoreButton(isHiddenSelected)}
      </div>
    );
  }
}

CollapsibleTabs.propTypes = propTypes;
CollapsibleTabs.contextType = ThemeContext;

export default CollapsibleTabs;
