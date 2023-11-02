import React from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './TabsTemplate.module.scss';

const cx = classNames.bind(styles);

const VerticalTab = () => {
  const labelTab = (
    <Tabs.Pane label="Tab with label" key="tLabelTab" id="tLabelTab">
      <TabContent label="Tab with label" />
    </Tabs.Pane>
  );

  const onlyiconTab = (
    <Tabs.Pane label="Tab with icon" isIconOnly icon={<IconBriefcase />} key="tonlyIconTab" id="tonlyIconTab">
      <TabContent label="Tab with icon" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key="tIconTab" id="tIconTab">
      <TabContent label="Tab with icon" />
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <span className={cx('custom-display', 'custom-vertical')}>
          Custom display
        </span>
      )}
      label="Custom display"
      key="tCustomTab"
      id="tCustomTab"
    >
      <TabContent label="Custom display" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Longer text tab name with label for application"
      key="tlongLabel"
      id="tlongLabel"
    >
      <TabContent label="Longer text tab name with label for application" />
    </Tabs.Pane>
  );

  const lastTab = (
    <Tabs.Pane label="Last Tab" key="tlastTab" id="tlastTab">
      <TabContent label="Last Tab" />
    </Tabs.Pane>
  );

  return (
    <div className={cx('content-container-vertical')}>
      <Tabs isDraggable fill verticalOrientation setFocusOnContent id="verticaltab">
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

export default VerticalTab;
