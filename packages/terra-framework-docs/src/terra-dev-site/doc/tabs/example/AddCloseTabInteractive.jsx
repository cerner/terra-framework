import React, { useState } from 'react';
import classNames from 'classnames/bind';
import IconAddPerson from 'terra-icon/lib/icon/IconAddPerson';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import Radio from 'terra-form-radio';
import Field from 'terra-form-field';
import Input from 'terra-form-input';
import Fieldset from 'terra-form-fieldset';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

let i = -1;

const AddCloseTabInteractive = () => {
  const tabsExample = [];
  const [tabs, setTabs] = useState(tabsExample);
  const [activeKey, setActiveKey] = useState();

  tabsExample.push(
    {
      label: 'Patient Information',
      key: 'AddcloseInteractiveLabelTab',
      content: 'Patient Information',
      children:
  <>
    <Radio id="default-radio" labelText="Default Radio" name="default" disabled />
    <Radio id="default1-radio" labelText="Default Radio" name="default" />
  </>,
    },
  );

  tabsExample.push(
    {
      label: 'Add Patient',
      icon: <IconAddPerson />,
      isIconOnly: true,
      key: 'AddcloseInteractiveIconTab',
      children:
  <>
    <div>
      <Fieldset
        type="checkbox"
        legend="Give your full name here"
        name="children_present"
        value="children_present"
        error="All fields must be filled out"
        required
      >
        <Field label="First" isInline required htmlFor="first">
          <Input id="first" type="text" name="first" defaultValue="" />
        </Field>
        <Field label="Middle" isInline required htmlFor="middle">
          <Input id="middle" type="text" name="middle" defaultValue="" />
        </Field>
        <Field label="Last" isInline required htmlFor="last">
          <Input id="last" type="text" name="last" defaultValue="" />
        </Field>
      </Fieldset>
    </div>
  </>,
    },
  );

  tabsExample.push(
    {
      label: 'TPA & Insurance',
      customDisplay: <div className={cx('custom-display')}>TPA & Insurance</div>,
      key: 'AddcloseInteractiveCustomTab',
      content: 'TPA & Insurance',
      children:
  <>
    <Radio id="default-radio" labelText="Default Radio" name="default" disabled />
    <Radio id="default1-radio" labelText="Default Radio" name="default" />
  </>,
    },
  );

  tabsExample.push(
    {
      label: 'Disabled Tab',
      key: 'AddcloseInteractiveDisabledTab',
      icon: <IconSearch />,
      isDisabled: true,
    },
  );

  tabsExample.push(
    {
      label: 'List of Out-Patient Details Department Wise',
      key: 'AddcloseInteractivelongLabel',
      content: 'List of Out-Patient Details Department Wise',
    },
  );

  tabsExample.push(
    {
      label: 'Ambulance Service',
      key: 'AddcloseInteractivelastTab',
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
        key: `AddcloseInteractiveTab_${i}`,
        content: `Added New Tab_${i}`,
        isActive: true,
      },
    );
    setActiveKey(`AddcloseInteractiveTab_${i}`);
    setTabs(tabsArray);
  };

  const handleSelection = (event, selectedKey) => {
    if (selectedKey !== activeKey) {
      setActiveKey(selectedKey);
    }
  };

  return (
    <div className={cx('content-wrapper')}>
      <Tabs onChange={handleSelection} activeKey={activeKey} isClosable onSelectAddButton={addMoreTabPanes} ariaLabelAddTab="Add Tab" onTabClose={handleTabClose}>
        { tabs.map((tab) => (
          <Tabs.Pane label={tab.label} isIconOnly={tab.isIconOnly} customDisplay={tab.customDisplay} isDisabled={tab.isDisabled} icon={tab.icon} key={tab.key} id={tab.key}>
            <TabContentTemplate label={tab.content}>
              {tab.children}
            </TabContentTemplate>
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
};

export default AddCloseTabInteractive;
