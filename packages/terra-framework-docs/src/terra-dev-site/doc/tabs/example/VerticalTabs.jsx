import React from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const VerticalTabs = () => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="tLabelTab">
      <TabContent label="Tab with label" />
    </Tabs.Pane>
  );

  const onlyiconTab = (
    <Tabs.Pane label="Tab with icon" isIconOnly icon={<IconBriefcase />} key="tonlyIconTab">
      <TabContent label="Tab with icon" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="tIconTab">
      <TabContent label="Tab with icon" />
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
      key="tCustomTab"
    >
      <TabContent label="Custom display" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Longer text tab name with label for application"
      key="tlongLabel"
    >
      <TabContent label="Longer text tab name with label for application" />
    </Tabs.Pane>
  );

  const lastTab = (
    <Tabs.Pane label="Last Tab" key="tlastTab">
      <TabContent label="Last Tab" />
    </Tabs.Pane>
  );

  return (
    <div className={cx('content-container-vertical')}>
      <Tabs isDraggable fill verticalOrientation setFocusOnContent ariaLabelAddTab="Add Tab">
        {onlyiconTab}
        {labelTab}
        {iconTab}
        {customTab}
        {longLabel}
        {lastTab}
      </Tabs>
    </div>
  );
};

export default VerticalTabs;
