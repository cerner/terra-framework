import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './TabsTemplate.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  containerClassName: PropTypes.string,
};

const defaultProps = {
  containerClassName: 'content-wrapper-default',
};

let i = -1;

const AddNewTabs = props => {
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
      label: 'Disabled Tab',
      key: 'AddDisabledTab',
      icon: <IconBriefcase />,
      isDisabled: true,
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
        key: `AddNewTabs_${i}`,
        content: `Added New Tab_${i}`,
        isActive: true,
      },
    );
    setActiveKey(`AddNewTabs_${i}`);
    setTabs(tabsArray);
  };

  return (
    <div className={cx(props.containerClassName)} id="tabs-container">
      <Tabs activeKey={activeKey} onSelectAddButton={addMoreTabPanes} ariaLabelAddNewTabs="Add Tab">
        { tabs.map((tab) => (
          <Tabs.Pane label={tab.label} isIconOnly={tab.isIconOnly} customDisplay={tab.customDisplay} isDisabled={tab.isDisabled} icon={tab.icon} key={tab.key} id={tab.key}>
            <TabContentTemplate label={tab.content} />
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
};

AddNewTabs.propTypes = propTypes;
AddNewTabs.defaultProps = defaultProps;
export default AddNewTabs;
