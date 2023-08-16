import React, { useState } from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const ClosableTab = () => {
  const tabsExample = [];
  const [tabs, setTabs] = useState(tabsExample);

  tabsExample.push(
    {
      label: 'Doctors',
      key: 'CloseLabelTab',
      content: 'Doctor details',
    },
  );

  tabsExample.push(
    {
      label: 'Pharmacy',
      icon: <IconBriefcase />,
      isIconOnly: true,
      key: 'CloseIconTab',
      content: 'Pharmacy details',
    },
  );

  tabsExample.push(
    {
      label: 'Customized Tab',
      customDisplay: <div className={cx('custom-display')}>Customized Tab</div>,
      key: 'CloseCustomTab',
      content: 'Custom display',
    },
  );

  tabsExample.push(
    {
      label: 'Disabled Tab',
      key: 'CloseDisabledTab',
      icon: <IconSearch />,
      isDisabled: true,
    },
  );

  tabsExample.push(
    {
      label: 'List of In-Patient Details Department Wise',
      key: 'CloselongLabel',
      content: 'List for In-Patient Details Department Wise',
    },
  );

  tabsExample.push(
    {
      label: 'Appointments',
      key: 'CloselastTab',
      content: 'Appointments',
    },
  );

  const handleTabClose = (tabdata, itemKey) => {
    const tabsArray = [...tabs];
    const indexToRemove = tabsArray.findIndex(tab => tab.key === itemKey);
    if (indexToRemove !== -1) {
      tabsArray.splice(indexToRemove, 1);
      setTabs(tabsArray);
    }
  };

  return (
    <div className={cx('content-wrapper')}>
      <Tabs isClosable ariaLabelAddTab="Add Tab" onTabClose={handleTabClose}>
        { tabs.map((tab) => (
          <Tabs.Pane label={tab.label} isIconOnly={tab.isIconOnly} customDisplay={tab.customDisplay} isDisabled={tab.isDisabled} icon={tab.icon} key={tab.key} id={tab.key}>
            <TabContentTemplate label={tab.content} />
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
};

export default ClosableTab;
