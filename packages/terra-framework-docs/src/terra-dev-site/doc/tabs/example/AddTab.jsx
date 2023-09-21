import React, { useState } from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

let i = -1;

const AddTab = () => {
  const tabsExample = [];
  const [tabs, setTabs] = useState(tabsExample);
  const [activeKey, setActiveKey] = useState();

  tabsExample.push(
    {
      label: 'Self Registration',
      key: 'AddLabelTab',
      content: 'Self Registration',
    },
  );

  tabsExample.push(
    {
      label: 'Find A Doctor',
      icon: <IconSearch />,
      isIconOnly: true,
      key: 'AddIconTab',
      content: 'Find A Doctor',
    },
  );

  tabsExample.push(
    {
      label: 'View Specialities',
      customDisplay: <div className={cx('custom-display')}>View Specialities</div>,
      key: 'AddCustomTab',
      content: 'View Specialities',
    },
  );

  tabsExample.push(
    {
      label: 'Pharmacy',
      key: 'AddDisabledTab',
      icon: <IconBriefcase />,
    },
  );

  tabsExample.push(
    {
      label: 'Billing, Insurance & Payment',
      key: 'AddlongLabel',
      content: 'Billing, Insurance & Payment',
    },
  );

  tabsExample.push(
    {
      label: 'Lab Medicine',
      key: 'AddlastTab',
      content: 'Lab Medicine',
    },
  );

  const addMoreTabPanes = () => {
    i += 1;
    const tabsArray = tabs;
    tabsArray.push(
      {
        label: `Added New Tab_${i}`,
        isIconOnly: false,
        key: `AddTab_${i}`,
        content: `Added New Tab_${i}`,
        isActive: true,
      },
    );
    setActiveKey(`AddTab_${i}`);
    setTabs(tabsArray);
  };

  const handleSelection = (event, selectedKey) => {
    if (selectedKey !== activeKey) {
      setActiveKey(selectedKey);
    }
  };

  return (
    <div className={cx('content-wrapper')}>
      <Tabs onChange={handleSelection} isDraggable setFocusOnContent activeKey={activeKey} onSelectAddButton={addMoreTabPanes} ariaLabelAddTab="Add Tab">
        { tabs.map((tab) => (
          <Tabs.Pane label={tab.label} isIconOnly={tab.isIconOnly} customDisplay={tab.customDisplay} isDisabled={tab.isDisabled} icon={tab.icon} key={tab.key} id={tab.key}>
            <TabContentTemplate label={tab.content} />
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
};

export default AddTab;
