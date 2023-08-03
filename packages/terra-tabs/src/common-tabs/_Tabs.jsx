/* eslint-disable class-methods-use-this */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import ResizeObserver from 'resize-observer-polyfill';
import { v4 as uuid } from 'uuid';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
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
  /**
  * Whether or not the tab is draggable.
  */
  isDraggable: PropTypes.bool,
  /**
  * Callback function triggered when tab is drag and dropped .
  */
  onTabOrderChange: PropTypes.func,
};

let addTabId;
let addButtonToggle = false;
let closeButtonToggle = false;

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.containerRef = React.createRef();
    this.dropdownRef = React.createRef();
    this.moreButtonRef = React.createRef();
    this.addButtonRef = React.createRef();
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
    this.wrapOnSelectHidden = this.wrapOnSelectHidden.bind(this);
    this.wrapOnAddButton = this.wrapOnAddButton.bind(this);
    this.positionDropDown = this.positionDropDown.bind(this);
    this.handleDragEnd = this.handleDragEnd.bind(this);
    this.handleDragStart = this.handleDragStart.bind(this);
    this.reorder = this.reorder.bind(this);
    this.resetCache();
    this.state = {
      visibleTabData: this.props.tabData,
    };
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
    const prevTab = prevProps.tabData.find((tab) => tab.isSelected === true);
    const currTab = this.props.tabData.find((tab) => tab.isSelected === true);

    // Allow dynamic addition of tabs.
    if (this.state.visibleTabData.length !== this.props.tabData.length) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ visibleTabData: this.props.tabData });
    }
    // Allow Active Styles to be applied when tab is selected.
    if (prevTab && currTab && prevTab.id !== currTab.id) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState(prevArray => {
        const newArray = [...prevArray.visibleTabData];
        const prevTabData = newArray.find(tab => tab.id === prevTab.id);
        const currTabData = newArray.find(tab => tab.id === currTab.id);
        prevTabData.isSelected = false;
        currTabData.isSelected = true;
        return { visibleTabData: newArray };
      });
      const element = document.getElementById(currTab.id);
      if (element && addButtonToggle) {
        element.focus();
        addButtonToggle = false;
      }
    }
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

  handleResize() {
    if (!this.moreButtonRef.current || !this.containerRef.current) {
      return;
    }

    // NOTE: get width from bounding client rect instead of resize observer, zoom throws off safari.
    const { width } = this.containerRef.current.parentNode.getBoundingClientRect();

    const moreStyle = window.getComputedStyle(this.moreButtonRef.current, null);
    const moreMarginLeft = parseInt(moreStyle.getPropertyValue('margin-left'), 10);
    const moreMarginRight = parseInt(moreStyle.getPropertyValue('margin-right'), 10);
    const moreButtonWidth = this.moreButtonRef.current.getBoundingClientRect().width + moreMarginLeft + moreMarginRight;
    const availableWidth = width - moreButtonWidth;

    // Calculate hidden index
    const tabCount = this.state.visibleTabData.length;
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

  handleDragStart() {
    const tablist = document.querySelectorAll('[data-terra-drag-focus="true"]');
    tablist.forEach((list) => {
      list.setAttribute('data-terra-drag-focus', 'false');
    });
  }

  handleDragEnd(result) {
    const tablist = document.querySelectorAll('[data-terra-drag-focus="false"]');
    tablist.forEach((list) => {
      list.setAttribute('data-terra-drag-focus', 'true');
    });
    if (!result.destination) {
      return;
    }
    this.setState((prevState) => {
      const items = this.reorder(
        prevState.visibleTabData,
        result.source.index,
        result.destination.index,
      );
      return { visibleTabData: items };
    });
    if (this.props.onTabOrderChange) {
      this.props.onTabOrderChange(result);
    }
  }

  setIsOpen(value) {
    this.isOpen = value;
    this.forceUpdate();
  }

  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

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
      const updatedTabData = this.state.visibleTabData.map((tab) => ({
        ...tab,
        isSelected: tab.itemKey === itemKey,
      }));
      this.setState({ visibleTabData: updatedTabData }, () => {
        this.setIsOpen(false);
        onSelect(itemKey, metaData);
      });
    };
  }

  wrapOnSelectHidden(onSelect) {
    return (itemKey, metaData) => {
      if (this.isOpen) {
        const updatedTabData = this.state.visibleTabData.map((tab) => ({
          ...tab,
          isSelected: tab.id === itemKey,
        }));
        this.setState({ visibleTabData: updatedTabData }, () => {
          onSelect(itemKey, metaData);
          this.setIsOpen(!this.isOpen);
        });
      }
    };
  }

  wrapOnClose(onClose) {
    return (itemKey, metaData, event) => {
      this.setIsOpen(false);
      let removedTabIndex = -1;
      const updatedTabData = this.state.visibleTabData
        .map((tab, index) => {
          if (tab.itemKey === itemKey && tab.isSelected === true) {
            removedTabIndex = index;
          }
          return { ...tab, originalIndex: index };
        })
        .filter((tab) => tab.itemKey !== itemKey);

      if (!updatedTabData.some((tab) => tab.isSelected === true) && updatedTabData.length > 0 && removedTabIndex !== 0 && updatedTabData[removedTabIndex - 1].isDisabled !== true) {
        if (updatedTabData[removedTabIndex - 1].isSelected !== undefined) {
          updatedTabData[removedTabIndex - 1].isSelected = true;
        }
      } else if (!updatedTabData.some((tab) => tab.isSelected === true) && updatedTabData.length > 0 && removedTabIndex !== 0 && updatedTabData[removedTabIndex - 1].isDisabled === true) {
        if (updatedTabData[removedTabIndex - 2]?.isSelected !== undefined) {
          updatedTabData[removedTabIndex - 2].isSelected = true;
        }
      } else if (removedTabIndex >= 0 && removedTabIndex < updatedTabData.length) {
        if (updatedTabData[removedTabIndex]?.isSelected !== undefined) {
          updatedTabData[removedTabIndex].isSelected = true;
        }
      }
      this.props.onTabStateChange(updatedTabData, itemKey, event);
      closeButtonToggle = true;
      this.setState({ visibleTabData: updatedTabData });
      onClose(itemKey, metaData);
    };
  }

  wrapOnAddButton() {
    if (this.props.onSelectAddButton) {
      addButtonToggle = true;
      this.props.onSelectAddButton();
    }
  }

  render() {
    addTabId = uuid();
    const {
      ariaLabel, variant, onChange, onSelectAddButton, ariaLabelAddTab, isDraggable,
    } = this.props;
    const theme = this.context;
    const enabledTabs = this.state.visibleTabData.filter(tab => !tab.isDisabled);
    const ids = enabledTabs.map(tab => tab.id);
    const hiddenIds = [];
    const visibleTabs = [];
    const hiddenTabs = [];
    const moreIds = ids;
    if (onSelectAddButton) { moreIds.push(addTabId); }
    let isHiddenSelected = false;

    let enabledTabsIndex = -1;
    this.state.visibleTabData.forEach((tab, index) => {
      if (!tab.isDisabled) {
        enabledTabsIndex += 1;
      }
      if (index < this.hiddenStartIndex || this.hiddenStartIndex < 0) {
        visibleTabs.push(
          <Tab
            {...tab}
            key={tab.id}
            index={!tab.isDisabled ? enabledTabsIndex : -1}
            tabIds={ids}
            icon={tab.icon}
            customDisplay={tab.customDisplay}
            onSelect={this.wrapOnSelect(tab.onSelect)}
            zIndex={tab.isSelected ? this.state.visibleTabData.length : this.state.visibleTabData.length - index}
            isIconOnly={tab.isIconOnly}
            variant={variant}
            onChange={onChange}
            setDropdownOpen={this.handleHiddenFocus}
            hiddenStartIndex={this.hiddenStartIndex}
            showIcon={tab.showIcon}
            onClosingTab={this.wrapOnClose(tab.onClose)}
            isDraggable={isDraggable}
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
            isDisabled={tab.isDisabled}
          />,
        );
        hiddenIds.push(tab.id);

        if (tab.isSelected) {
          isHiddenSelected = true;
        }
        if (index === this.state.visibleTabData.length - 1 && onSelectAddButton) {
          hiddenTabs.push(
            <HiddenTab
              id={addTabId}
              data-focus-styles-enabled
              itemKey={addTabId}
              label={ariaLabelAddTab}
              index={this.state.visibleTabData.length}
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
    window['__react-beautiful-dnd-disable-dev-warnings'] = true;

    if (isDraggable) {
      return (
        <DragDropContext onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}>
          <Droppable className={commonTabsClassNames} droppableId="tab-list" direction="horizontal">
            {(provided) => (
              <div
                {...attrs}
                {...provided.droppableProps}
                ref={(el) => {
                  provided.innerRef(el);
                  this.containerRef.current = el; // Store the reference to the container element
                }}
                className={commonTabsClassNames}
                role="tablist"
                aria-label={ariaLabel}
                aria-orientation="horizontal"
                aria-owns={hiddenIds.join(' ')}
                data-terra-drag-focus
              >
                {visibleTabs}
                {provided.placeholder}
                {this.showMoreButton ? (
                  <MoreButton
                    isOpen={this.isOpen}
                    hiddenIndex={this.hiddenStartIndex}
                    isActive={isHiddenSelected}
                    zIndex={this.state.visibleTabData.length - this.hiddenStartIndex}
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
            )}
          </Droppable>
        </DragDropContext>
      );
    }

    const commonTabsContainerClassNames = cx('container', theme.className);
    const commonDivClassNames = cx('divcontainer', theme.className);

    return (
      <div className={commonTabsContainerClassNames}>
        <div
          {...attrs}
          ref={this.containerRef}
          className={commonTabsClassNames}
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
              zIndex={this.state.visibleTabData.length - this.hiddenStartIndex}
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
