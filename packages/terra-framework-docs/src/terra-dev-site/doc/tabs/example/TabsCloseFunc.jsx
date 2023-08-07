import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tabs from 'terra-tabs';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
};

const TabsCloseFunc = (props) => {
  const [tabs, setTabs] = useState([]);

  const handleTabClose = (tabdata, itemKey) => {
    console.log('Closed Tabdata:', tabdata);
    console.log('Closed Tab ID2:', itemKey);
    const updatedTabs = tabs.filter((tab) => tab.key !== itemKey);
    setTabs(updatedTabs);
  };

  // Healthcare-related tabs
  const tabsExample = [
    {
      label: 'Hospitals',
      icon: <IconBriefcase />, // Replace with healthcare-related icon
      isIconOnly: false,
      key: 'Hospitals',
      content: 'Find nearby hospitals',
    },
    {
      label: 'Cardiology',
      icon: <IconSearch />, // Replace with healthcare-related icon
      isIconOnly: true,
      key: 'Cardiology',
      content: 'Cardiology department',
    },
    {
      label: 'Doctors',
      icon: <i className="fa fa-user-md" />, // Using a generic icon as a placeholder
      isIconOnly: false,
      key: 'Doctors',
      content: 'Search for doctors',
    },
    {
      label: 'Appointments',
      icon: <i className="fa fa-calendar" />, // Using a generic icon as a placeholder
      isIconOnly: false,
      key: 'Appointments',
      content: 'Manage appointments',
    },
    // Add more healthcare-related tabs here
  ];

  // Initialize the state with the tabsExample data
  useState(() => {
    setTabs(tabsExample);
  }, []);

  return (
    <div className={cx('content-wrapper')}>
      <Tabs isClosable onTabClose={handleTabClose} defaultActiveKey="Hospitals" id={props.id}>
        {tabs.map((tab) => (
          <Tabs.Pane
            label={tab.label}
            isIconOnly={tab.isIconOnly}
            icon={tab.icon}
            key={tab.key}
            id={tab.key}
          >
            <TabContentTemplate label={tab.content} id={`TabContent_${tab.key}`} />
          </Tabs.Pane>
        ))}
      </Tabs>
    </div>
  );
};

TabsCloseFunc.propTypes = propTypes;
export default TabsCloseFunc;
