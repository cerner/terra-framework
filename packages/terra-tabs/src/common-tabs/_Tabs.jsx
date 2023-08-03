import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import { v4 as uuid } from 'uuid';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import AddButton from './_AddButton';
import MoreButton from './_MoreButton';
import TabDropDown from './_TabDropDown';
import Tab from './_Tab';
import HiddenTab from './_HiddenTab';
import styles from './_Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label to set on the tablist element.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The label to set on the add icon element.
   */
  ariaLabelAddTab: PropTypes.string,
  /**
   * Currently active Tabs.Pane content to be displayed.
   */
  tabData: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The id string to associate to the 'tab'.
     */
    id: PropTypes.string.isRequired,
    /**
     * The id string to associate to the 'tabpanel'.
     */
    associatedPanelId: PropTypes.string.isRequired,
    /**
     * The label to display for the tab.
     */
    label: PropTypes.string.isRequired,
    /**
     * Whether or not the tab is selected.
     */
    isSelected: PropTypes.bool,
    /**
     * The function callback for selection of a tab.
     * Returns the event and metaData e.g. onSelect(event, metaData).
     */
    onSelect: PropTypes.func,
    /**
     * The metaData to return with the onSelect callback.
     */
    metaData: PropTypes.object,
  })).isRequired,
  /**
   *  @private
   * The style to be applied to the tabs
   */
  variant: PropTypes.oneOf(['workspace', 'framework']),
  /**
   * Callback function when selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onChange: PropTypes.func,
  /**
   * Callback function when add button selection has changed.
   * Parameters: 1. Event 2. Selected pane's key
   */
  onSelectAddButton: PropTypes.func,
  /**
   * Callback function when a tab is closing.
   * It receives two parameters: 1. Item key of the tab to close. 2. MetaData associated with the tab.
   */
  onClosingTab: PropTypes.func,

  /**
   * Indicates whether the tabs are closable, allowing the user to close tabs.
   */
  isClosable: PropTypes.bool.isRequired,

  /**
   * Callback function when a tab is closed.
   * It receives two parameters: 1. Item key of the closed tab. 2. MetaData associated with the closed tab.
   */
  onClose: PropTypes.func,

  /**
   * Callback function to handle changes in the tab state.
   * It receives the updated tab data after a tab is closed.
   */
  onTabStateChange: PropTypes.func,
};

let addTabId;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.moreButtonRef = React.createRef();
    this.addButtonRef = React.createRef();
    this.state = {
      tabData: this.props.tabData,
    };

    this.setIsOpen = this.setIsOpen.bind(this);
    this.resetCache = this.resetCache.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleHiddenBlur = this.handleHiddenBlur.bind(this);
    this.handleHiddenFocus = this.handleHiddenFocus.bind(this);
    this.handleMoreButtonBlur = this.handleMoreButtonBlur.bind(this);
    this.handleMoreButtonSelect = this.handleMoreButtonSelect.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
    this.wrapOnSelect = this.wrapOnSelect.bind(this);
    this.wrapOnSelectHidden = this.wrapOnSelectHidden.bind(this);
    this.wrapOnClose = this.wrapOnClose.bind(this);
    this.wrapOnAddButton = this.wrapOnAddButton.bind(this);
    this.resetCache();
  }

  componentDidMount() {
    this.resizeObserver = new ResizeObserver(() => {
      if (!this.isCalculating) {
        this.animationFrameID = window.requestAnimationFrame(() => {
          // Resetting the cache so that all elements will be rendered face-up for width calculations
          this.resetCache();
          this.forceUpdate();
        });
      }
    });
    this.resizeObserver.observe(this.containerRef.current);
    this.resizeObserver.observe(this.containerRef.current.parentNode);
    this.handleResize();
  }

  componentDidUpdate(prevProps) {
    const newActiveKey = this.props.tabData.map(child => child.isSelected);
    const prevActiveKey = prevProps.tabData.map(child => child.isSelected);
    const isActiveKeyUpdate = JSON.stringify(newActiveKey) !== JSON.stringify(prevActiveKey);
    if (this.isCalculating) {
      this.isCalculating = false;
      this.handleResize(this.contentWidth);
      if (isActiveKeyUpdate) {
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ tabData: this.props.tabData });
      }
    } else if (this.props.tabData.length !== prevProps.tabData.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ tabData: this.props.tabData });
      this.resetCache();
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameID);
    this.resizeObserver.disconnect(this.containerRef.current);
  }

  handleResize() {
    if (!this.moreButtonRef.current || !this.containerRef.current) {
      return;
    }

    // NOTE: get width from bounding client rect instead of resize observer, zoom throws off safari.
    const { width } = this.containerRef.current.parentNode.getBoundingClientRect();
    const addtab = this.addButtonRef.current.getBoundingClientRect().width;

    const moreStyle = window.getComputedStyle(this.moreButtonRef.current, null);
    const moreMarginLeft = parseInt(moreStyle.getPropertyValue('margin-left'), 10);
    const moreMarginRight = parseInt(moreStyle.getPropertyValue('margin-right'), 10);
    const moreButtonWidth = this.moreButtonRef.current.getBoundingClientRect().width + moreMarginLeft + moreMarginRight;
    const availableWidth = width - moreButtonWidth - addtab;

    // Calculate hidden index
    const tabCount = this.state.tabData.length;
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

  handleHiddenFocus() {
    this.setIsOpen(true);
  }

  handleHiddenBlur(event) {
    // The check for dropdown.contains(activeElement) is necessary to prevent IE11 from closing dropdown on click of scroll bar in certain contexts.
    if (this.dropdownRef.current && this.dropdownRef.current.contains(document.activeElement)) {
      if (this.dropdownRef.current === document.activeElement) {
        event.currentTarget.focus();
      }
      return;
    }
    this.setIsOpen(false);
  }

  handleMoreButtonBlur(event) {
    if (event.currentTarget === document.activeElement) {
      return;
    }
    this.handleHiddenBlur(event);
  }

  handleMoreButtonSelect() {
    this.setIsOpen(true);
  }

  handleOutsideClick(event) {
    if (event.type === 'mousedown' && (this.moreButtonRef.current === event.currentTarget || this.moreButtonRef.current.contains(event.currentTarget))) {
      return;
    }
    this.setIsOpen(false);
  }

  setIsOpen(value) {
    this.isOpen = value;
    this.forceUpdate();
  }

  resetCache() {
    this.animationFrameID = null;
    this.hiddenStartIndex = -1;
    this.isCalculating = true;
    this.showMoreButton = true;
    this.isOpen = false;
  }

  positionDropDown() {
    if (!this.dropdownRef.current || !this.moreButtonRef.current) {
      return;
    }
    const CommonTabsStyle = window.getComputedStyle(this.containerRef.current.parentNode.parentNode, null);
    const CommonTabsLeftBorderWidth = parseInt(CommonTabsStyle.getPropertyValue('border-left-width'), 10);

    const moreRect = this.moreButtonRef.current.getBoundingClientRect();
    const dropdownRect = this.dropdownRef.current.getBoundingClientRect();
    const containerRect = this.containerRef.current.getBoundingClientRect();
    const CommonTabsRect = this.containerRef.current.parentNode.parentNode.getBoundingClientRect();

    // calculate Offset
    const parentOffset = containerRect.left - CommonTabsRect.left;
    const leftEdge = moreRect.left - containerRect.left - CommonTabsLeftBorderWidth;

    let offset;
    const isRTL = document.getElementsByTagName('html')[0].getAttribute('dir') === 'rtl';
    if (isRTL) {
      offset = parentOffset + leftEdge;
    } else {
      const widthDelta = moreRect.width - dropdownRect.width;
      offset = parentOffset + leftEdge + widthDelta;
    }

    this.dropdownRef.current.style.left = `${offset}px`;
  }

  wrapOnSelect(onSelect) {
    return (itemKey, metaData) => {
      const updatedTabData = this.state.tabData.map((tab) => ({
        ...tab,
        isSelected: tab.itemKey === itemKey,
      }));
      this.setState({ tabData: updatedTabData }, () => {
        this.setIsOpen(false);
        onSelect(itemKey, metaData);
      });
    };
  }

  wrapOnSelectHidden(onSelect) {
    return (itemKey, metaData) => {
      if (this.isOpen) {
        const updatedTabData = this.state.tabData.map((tab) => ({
          ...tab,
          isSelected: tab.id === itemKey,
        }));
        this.setState({ tabData: updatedTabData }, () => {
          onSelect(itemKey, metaData);
          this.setIsOpen(!this.isOpen);
        });
      }
    };
  }

  wrapOnAddButton() {
    console.log('Sam Text', this.state.tabData);
    console.log('hiddenStartIndex', this.hiddenStartIndex);
    // const element = document.getElementById(this.state.tabData.id[this.state.tabData.id.length - 1]);
    // element.focus();
    if (this.props.onSelectAddButton) {
      this.props.onSelectAddButton();
    }
    console.log('Sam Text', this.state.tabData);
  }

  wrapOnClose(onClose) {
    return (itemKey, metaData, event) => {
      this.setIsOpen(false);
      let removedTabIndex = -1;
      const updatedTabData = this.state.tabData
        .map((tab, index) => {
          if (tab.itemKey === itemKey && tab.isSelected === true) {
            removedTabIndex = index;
          }
          return { ...tab, originalIndex: index };
        })
        .filter((tab) => tab.itemKey !== itemKey)
        .map((tab, index) => {
          if (tab.isSelected === true) {
          }
          return {
            ...tab,
          };
        });

      if (!updatedTabData.some((tab) => tab.isSelected === true) && updatedTabData.length > 0 && removedTabIndex !== 0 && updatedTabData[removedTabIndex - 1].isDisabled != true) {
        if (updatedTabData[removedTabIndex - 1].isSelected !== undefined) {
          updatedTabData[removedTabIndex - 1].isSelected = true;
        }
      } else if (!updatedTabData.some((tab) => tab.isSelected === true) && updatedTabData.length > 0 && removedTabIndex !== 0 && updatedTabData[removedTabIndex - 1].isDisabled == true) {
        if (updatedTabData[removedTabIndex - 2]?.isSelected !== undefined) {
          updatedTabData[removedTabIndex - 2].isSelected = true;
        }
      } else if (removedTabIndex >= 0 && removedTabIndex < updatedTabData.length) {
        if (updatedTabData[removedTabIndex]?.isSelected !== undefined) {
          updatedTabData[removedTabIndex].isSelected = true;
        }
      }
      this.props.onTabStateChange(updatedTabData, itemKey, event);
      this.setState({ tabData: updatedTabData });
      onClose(itemKey, metaData);
    };
  }

  render() {
    addTabId = uuid();
    const {
      ariaLabel, variant, onChange, onSelectAddButton, ariaLabelAddTab,
    } = this.props;
    const theme = this.context;
    const enabledTabs = this.state.tabData.filter(tab => !tab.isDisabled);
    const ids = enabledTabs.map(tab => tab.id);
    const hiddenIds = [];
    const visibleTabs = [];
    const hiddenTabs = [];
    const moreIds = ids;
    if (onSelectAddButton) { moreIds.push(addTabId); }
    let isHiddenSelected = false;

    let enabledTabsIndex = -1;
    this.state.tabData.forEach((tab, index) => {
      if (!tab.isDisabled) {
        enabledTabsIndex += 1;
      }
      if (enabledTabsIndex < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleTabs.push(
          <Tab
            {...tab}
            key={tab.id}
            index={!tab.isDisabled ? enabledTabsIndex : -1}
            tabIds={ids}
            icon={tab.icon}
            customDisplay={tab.customDisplay}
            onSelect={this.wrapOnSelect(tab.onSelect)}
            zIndex={tab.isSelected ? this.state.tabData.length : this.state.tabData.length - index}
            isIconOnly={tab.isIconOnly}
            variant={variant}
            onChange={onChange}
            setDropdownOpen={this.handleHiddenFocus}
            hiddenStartIndex={this.hiddenStartIndex}
            showIcon={tab.showIcon}
            onClosingTab={this.wrapOnClose(tab.onClose)}
          />,
        );
      } else {
        hiddenTabs.push(
          <HiddenTab
            {...tab}
            key={tab.id}
            index={!tab.isDisabled ? enabledTabsIndex : -1}
            tabIds={ids}
            onSelect={this.wrapOnSelectHidden(tab.onSelect)}
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
            onChange={onChange}
            icon={tab.icon}
            showIcon={tab.showIcon}
            onClosingTab={this.wrapOnClose(tab.onClose)}
          />,
        );
        hiddenIds.push(tab.id);

        if (tab.isSelected) {
          isHiddenSelected = true;
        }
        if (index === this.state.tabData.length - 1 && onSelectAddButton) {
          hiddenTabs.push(
            <HiddenTab
              id={addTabId}
              data-focus-styles-enabled
              itemKey={addTabId}
              label={ariaLabelAddTab}
              index={this.state.tabData.length}
              showIcon
              icon={<IconAdd a11yLabel={ariaLabelAddTab} />}
              tabIds={moreIds}
              onSelect={this.wrapOnAddButton}
              onFocus={this.handleHiddenFocus}
              onBlur={this.handleHiddenBlur}
              onChange={onChange}
              showAddButton
            />,
          );
        }
      }
    });

    if (this.showMoreButton && this.dropdownRef.current) {
      this.positionDropDown();
    }

    let attrs;
    if (this.isCalculating) {
      attrs = {
        'data-tab-is-calculating': 'true',
      };
    }
    const commonTabsClassNames = cx('tab-container', theme.className);
    const commonTabsContainerClassNames = cx('container', theme.className);
    const commonDivClassNames = cx('divcontainer', theme.className);

    return (
      <div className={commonTabsContainerClassNames}>
        <div
          {...attrs}
          className={commonTabsClassNames}
          ref={this.containerRef}
          role="tablist"
          aria-label={ariaLabel}
          aria-orientation="horizontal"
          aria-owns={hiddenIds.join(' ')}
        >
          {visibleTabs}
          {this.showMoreButton ? (
            <MoreButton
              isOpen={this.isOpen}
              hiddenIndex={this.hiddenStartIndex}
              isActive={isHiddenSelected}
              zIndex={this.state.tabData.length - this.hiddenStartIndex}
              onBlur={this.handleMoreButtonBlur}
              onSelect={this.handleMoreButtonSelect}
              refCallback={node => { this.moreButtonRef.current = node; }}
              tabIds={ids}
              variant={variant}
            />
          ) : undefined}
          <TabDropDown
            onFocus={this.handleHiddenFocus}
            onBlur={this.handleHiddenBlur}
            isOpen={this.isOpen}
            onRequestClose={this.handleOutsideClick}
            refCallback={node => { this.dropdownRef.current = node; }}
          >
            {hiddenTabs}
          </TabDropDown>
        </div>
        <div className={commonDivClassNames} ref={this.addButtonRef}>
          {(!this.showMoreButton && onSelectAddButton) && (
          <AddButton
            id={addTabId}
            addAriaLabel={ariaLabelAddTab}
            index={enabledTabsIndex + 1}
            onSelect={this.wrapOnAddButton}
            tabIds={moreIds}
            isSelected={false}
          />
          )}

        </div>
      </div>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.contextType = ThemeContext;

export default Tabs;
