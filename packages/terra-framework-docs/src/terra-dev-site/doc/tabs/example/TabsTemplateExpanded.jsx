import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  tabFill: PropTypes.bool,
};

const TabsTemplate = (props) => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="ExpandedLabelTab">
      <TabContentTemplate label="Tab with label" id="ExpandedLabelTab" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="ExpandedIconTab">
      <TabContentTemplate label="Tab with icon" id="ExpandedIconTabContent" />
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <div className={cx('custom-display')}>
          Custom display
        </div>
      )}
      label="Custom display"
      key="ExpandedCustomTab"
    >
      <TabContentTemplate id="ExpandedCustomTabContent" label="Custom display" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Longer text tab name with label for application"
      key="ExpandedlongLabel"
    >
      <TabContentTemplate id="ExpandedlongLabelContent" label="Longer text tab name with label for application" />
    </Tabs.Pane>
  );

  const lastTab = (
    <Tabs.Pane label="Last Tab" key="ExpandedlastTab">
      <TabContentTemplate id="ExpandedlastTabContent" label="Last Tab" />
    </Tabs.Pane>
  );

  const disabledTab = (
    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key="ExpandedDisabledTab" />
  );

  return (
    <div className={cx('content-wrapper')}>
      <Tabs setFocusOnContent defaultActiveKey="ExpandedLabelTab" tabFill={props.tabFill} id="icon-in-menu">
        {labelTab}
        {iconTab}
        {customTab}
        {disabledTab}
        {longLabel}
        {lastTab}
      </Tabs>
    </div>
  );
};

TabsTemplate.propTypes = propTypes;

const TabExpanded = () => (
  <TabsTemplate tabFill id="expanded" />
);
export default TabExpanded;
