import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import CollapsibleTabs from './_CollapsibleTabs';
import CollapsedTabs from './_CollapsedTabs';
import Tab from './Tab';

// TODO: Roll into single prop type file
const tabPropType = PropTypes.shape({
  /**
     * The id of the tab to be used in mapping.
     */
    id: PropTypes.string.isRequired,
    /**
     * The id of the tab pane element associated to this tab.
     */
    associatedPaneId: PropTypes.string.isRequired,
    /**
     * Icon to be displayed on the tab.
     */
    icon: PropTypes.element,
    /**
     * Text to be displayed on the tab.
     */
    label: PropTypes.string.isRequired,
    /**
     * A custom display for the tab. Component will fallback to label text when collapsed into the menu.
     */
    customDisplay: PropTypes.node,
    /**
     * Indicates if the pane should be disabled.
     */
    isDisabled: PropTypes.bool,
    /**
     * Indicates if the pane label should only display the icon. When tab collapses into menu the label text will be used.
     */
    isIconOnly: PropTypes.bool,
    /**
     * Indicates if the tab is currently selected.
     */
    isSelected: PropTypes.bool,
    /**
     * Callback function triggering on selection.
     */
    onSelect: PropTypes.func,
    /**
     * Object to be returned in the onSelect.
     */
    metaData: PropTypes.object,
  });

const propTypes = {
  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   * @private
   */
  onTruncationChange: PropTypes.func,
  /**
   * Data object for building tabs.
   */
  tabData: PropTypes.arrayOf(tabPropType).isRequired,
};

const getTabs = (data, ids) => {
  return data.map((tab, index) => <Tab {...tab} index={index} tabIds={ids} />);
};

const TabBar = ({ onTruncationChange, tabData }) => {
  const [breakpoint, setBreakpoint] = useState(null);
  const ids = tabData.map(tab => tab.id);
  const tabs = getTabs(tabData, ids);
  
  let currentTabBar;
  if (breakpoint) {
    if (breakpoint === 'tiny') {
      currentTabBar = (
        <CollapsedTabs
          onTruncationChange={onTruncationChange}
          tabData={tabData}
        />
      );
    } else {
      currentTabBar = (
        <CollapsibleTabs
          onTruncationChange={onTruncationChange}
          variant="structural"
          ids={ids}
        >
          {tabs}
        </CollapsibleTabs>
      );
    }
  }

  return (
    <ResponsiveElement onChange={value => setBreakpoint(value)}>
      {currentTabBar}
    </ResponsiveElement>
  );
};

TabBar.propTypes = propTypes;

export default TabBar;
