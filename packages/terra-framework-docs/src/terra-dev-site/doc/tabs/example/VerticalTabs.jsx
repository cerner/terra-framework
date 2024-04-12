import React from 'react';
import classNames from 'classnames/bind';
import IconAdd from 'terra-icon/lib/icon/IconAdd';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const VerticalTabs = () => {
  const labelTab = (
    <Tabs.Pane label="Medical Department" key="tLabelTab">
      <TabContent label="Medical Department" />
    </Tabs.Pane>
  );

  const onlyiconTab = (
    <Tabs.Pane label="Pharmacy Deparment" isIconOnly icon={<IconAdd />} key="tonlyIconTab">
      <TabContent label="Pharmacy Deparment" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Patient Department" icon={<IconPerson />} key="tIconTab">
      <TabContent label="Patient Department" />
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <span className={cx('custom-display')}>
          Surgical Department
        </span>
      )}
      label="Surgical Department"
      key="tCustomTab"
    >
      <TabContent label="Surgical Department" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Department of Hospital Administration"
      key="tlongLabel"
    >
      <TabContent label="Department of Hospital Administration" />
    </Tabs.Pane>
  );

  const lastTab = (
    <Tabs.Pane label="Academic Department" key="tlastTab">
      <TabContent label="Academic Department" />
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

export default VerticalTabs;
