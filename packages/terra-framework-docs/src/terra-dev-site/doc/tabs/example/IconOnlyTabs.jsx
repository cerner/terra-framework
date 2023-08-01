import React, { useState, useEffect } from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

let i = -1;
const IconOnlyTabs = () => {
  const tabsExample = [];
  const [tabs, setTabs] = useState(tabsExample);
  const [activeKey, setActiveKey] = useState();

  tabsExample.push(
    {
      label: 'Search',
      icon: <IconSearch />,
      isIconOnly: true,
      key: 'Search',
      content: 'label',
    },
  );
  tabsExample.push(
    {
      label: 'Briefcase',
      icon: <IconBriefcase />,
      isIconOnly: true,
      key: 'Briefcase',
      content: 'label',
    },
  );

  tabsExample.push(
    {
      label: 'Tab with Text',
      isIconOnly: false,
      key: 'TabWithText',
      content: 'label',
    },
  );
  const handleTabClose = (tabdata, itemKey) => {
    const tabsArray = tabs;
    tabsArray.splice(itemKey, 1);
    console.log('tabsArray', tabsArray);
    setTabs([...tabsArray]);
  };

  const createTabPanes = () => {
    const tabPanes = tabs.map((tabKey) => (
      <Tabs.Pane label={`Tab ${tabKey}`} key={tabKey} id={tabKey}>
        <TabContent label={`Tab ${tabKey}`} id={`Tab ${tabKey}`} />
      </Tabs.Pane>
    ));

    return tabPanes;
  };

  const addMoreTabPanes = () => {
    i += 1;
    console.log('Before', tabs);
    const tabsArray = tabs;
    tabsArray.push(
      {
        label: `Tab_${i}`,
        isIconOnly: false,
        key: `Tab_${i}`,
        content: `Tab_${i}`,
      },
    );
    setTabs(tabsArray);
    setActiveKey(`Tab_${i}`);
  };

  useEffect(() => {
    console.log('After', tabs);
  }, [tabs]);

  return (
    <div className={cx('content-wrapper')}>
      <Tabs activeKey={activeKey} onSelectAddButton={addMoreTabPanes} ariaLabelAddTab="Add Tab" isClosable onTabClose={handleTabClose}>
        {tabs.map((tab) => (
          <Tabs.Pane label={tab.label} isIconOnly={tab.isIconOnly} icon={tab.icon} key={tab.key} id={tab.key} isActive>
            <TabContent label={tab.content} id={`TabContent_${tab.key}`} />
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
};

export default IconOnlyTabs;
