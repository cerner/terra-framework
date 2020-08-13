import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  tabData: PropTypes.array,
};

const CollapsedTabs = ({ tabData }) => {
  const theme = React.useContext(ThemeContext);

  let selectedTab;
  const selectOptions = tabData.map(tab => {
    if (tab.isSelected) {
      selectedTab = tab;
    }
    return { value: tab.key, display: tab.label };
  });

  const onChange = event => {
    const value = event.currentTarget.value;
    const selectedTab = tabData.find(tab => tab.key === value);
    selectedTab.onSelect(selectedTab.metaData);
  };

  return (
    <div className={cx('collapsed-tabs-container', theme.className)}>
      <NativeSelect
        attrs={{ 'aria-controls': selectedTab.associatedPaneId }}
        ariaDescribedBy="Select a Tab from the Drop Down"
        ariaLabel="Tab Drop Down"
        id={selectedTab.id}
        isFilterStyle
        onChange={onChange}
        options={selectOptions}
        value={selectedTab.key}
      />
    </div>
  );
};

CollapsedTabs.propTypes = propTypes;
export default CollapsedTabs;
