import React, { useState } from 'react';
import classNames from 'classnames/bind';
import IconAddPerson from 'terra-icon/lib/icon/IconAddPerson';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './TabsTemplate.module.scss';

const cx = classNames.bind(styles);

function AddTabandCloseTab() {
  let i = -1;
  const tabsExample = [];
  const [tabs, setTabs] = useState(tabsExample);
  const [activeKey, setActiveKey] = useState();

  tabsExample.push(
    {
      label: 'Patient Information',
      key: 'AddcloseLabelTab',
      content: 'Patient Information',
    },
  );

  tabsExample.push(
    {
      label: 'Add Patient',
      icon: <IconAddPerson />,
      isIconOnly: true,
      key: 'AddcloseIconTab',
      content: 'Add Patient',
    },
  );

  tabsExample.push(
    {
      label: 'TPA & Insurance',
      customDisplay: <div className={cx('custom-display')}>TPA & Insurance</div>,
      key: 'AddcloseCustomTab',
      content: 'TPA & Insurance',
    },
  );

  tabsExample.push(
    {
      label: 'Disabled Tab',
      key: 'AddcloseDisabledTab',
      icon: <IconSearch />,
      isDisabled: true,
    },
  );

  tabsExample.push(
    {
      label: 'List of Out-Patient Details Department Wise',
      key: 'AddcloselongLabel',
      content: 'List of Out-Patient Details Department Wise',
    },
  );

  tabsExample.push(
    {
      label: 'Ambulance Service',
      key: 'AddcloselastTab',
      content: 'Ambulance Service',
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

  const addMoreTabPanes = () => {
    i += 1;
    const tabsArray = tabs;
    tabsArray.push(
      {
        label: `Added New Tab_${i}`,
        isIconOnly: false,
        key: `AddTabandCloseTab_${i}`,
        content: `Added New Tab_${i}`,
        isActive: true,
      },
    );
    setActiveKey(`AddTabandCloseTab_${i}`);
    setTabs(tabsArray);
  };

  return (
    <div className={cx('content-wrapper-default')} id="tabs-container">
      <Tabs activeKey={activeKey} isClosable onSelectAddButton={addMoreTabPanes} ariaLabelAddTab="Add Tab" onTabClose={handleTabClose}>
        { tabs.map((tab) => (
          <Tabs.Pane label={tab.label} isIconOnly={tab.isIconOnly} customDisplay={tab.customDisplay} isDisabled={tab.isDisabled} icon={tab.icon} key={tab.key} id={tab.key}>
            <TabContentTemplate label={tab.content} />
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
}

export default AddTabandCloseTab;
