import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveElement from 'terra-responsive-element';
import CollapsibleTabs from './_CollapsibleTabs';
import CollapsedTabs from './_CollapsedTabs';

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
   * Data object for building tabs.
   */
  tabData: PropTypes.arrayOf(tabPropType).isRequired,
};

const TabBar = ({ tabData }) => {
  const [breakpoint, setBreakpoint] = useState(null);
  
  let currentTabBar;
  if (breakpoint) {
    currentTabBar = breakpoint === 'tiny' ? <CollapsedTabs tabData={tabData} /> : <CollapsibleTabs tabData={tabData} />;
  }

  return (
    <ResponsiveElement onChange={value => setBreakpoint(value)}>
      {currentTabBar}
    </ResponsiveElement>
  );
};

TabBar.propTypes = propTypes;

export default TabBar;
