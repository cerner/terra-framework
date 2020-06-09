import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
// import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  tabData: PropTypes.object,
  // /**
  //  * Tabs to display in menu.
  //  */
  // children: PropTypes.node,
  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: PropTypes.func,
};

const CollapsedTabs = ({ tabData, onTruncationChange }) => {
  onTruncationChange(false);
  const theme = React.useContext(ThemeContext);

  let selectedTab;
  const selectOptions = tabData.map(tab => {
    if (tab.isSelected) {
      selectedTab = tab;
    }
    // return {
    //   display: tab.label,
    //   value: tab.key,
    // };
    return <option key={`${tab.key}`} value={tab.key}>{tab.label}</option>;
  });

  const onChange = event => {
    const value = event.currentTarget.value;
    const selectedTab = tabData.find(tab => tab.key === value);
    selectedTab.onSelect(selectedTab.metaData);
  };

  return (
    <div className={cx('collapsed-tabs-container', theme.className)}>
      {/* <NativeSelect
        value={selectedTab.key}
        options={selectOptions}
        onChange={onChange}
      /> */}
      <select
        value={selectedTab.key}
        onChange={onChange}
        aria-describedby="Select a Tab from the Drop Down"
        aria-label="Tab Drop Down"
      >
        {selectOptions}
      </select>
    </div>
  );
};

CollapsedTabs.propTypes = propTypes;
export default CollapsedTabs;
