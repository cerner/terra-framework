import React, { useState } from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
/* eslint-disable import/no-unresolved, import/extensions */
import Tabs, { Tab, TabBar } from 'terra-tabs/lib/index';
import TabContentTemplate from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
/* eslint-enable import/no-unresolved, import/extensions */
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  tabFill: PropTypes.bool,
};

const textMapping = {
  label: 'Tab with label',
  icon: 'Tab with icon',
  custom: 'Custom display',
  long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  last: 'Last Tab',
};

const TabsTemplate = (props) => {
  const [currentTab, setCurrentTab] = useState('label');

  function handleSelect(metaData) {
    setCurrentTab(metaData.key);
  }

  const tabBar = (
    <TabBar>
      <Tab
        label="Tab with label"
        key="LabelTab"
        onSelect={handleSelect}
        metaData={{ key: 'label' }}
        isSelected={currentTab === 'label'}
      />
      <Tab
        label="Tab with icon"
        icon={<IconBriefcase />}
        key="IconTab"
        onSelect={handleSelect}
        metaData={{ key: 'icon' }}
        isSelected={currentTab === 'icon'}
      />
      <Tab
        customDisplay={(
          <div className={cx('custom-display')}>
            Custom display
          </div>
        )}
        label="Custom display"
        key="CustomTab"
        onSelect={handleSelect}
        metaData={{ key: 'custom' }}
        isSelected={currentTab === 'custom'}
      />
      <Tab
        label="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        key="longLabel"
        onSelect={handleSelect}
        metaData={{ key: 'long' }}
        isSelected={currentTab === 'long'}
      />
      <Tab
        label="Last Tab"
        key="lastTab"
        onSelect={handleSelect}
        metaData={{ key: 'last' }}
        isSelected={currentTab === 'last'}
      />
      <Tab
        label="Disabled Tab"
        icon={<IconSearch />}
        isDisabled
        key="DisabledTab"
      />
    </TabBar>
  );

  return (
    <div className={cx('content-wrapper')}>
      <Tabs
        tabFill={props.tabFill}
        tabBar={tabBar}
      >
        <TabContentTemplate label={textMapping[currentTab]} />
      </Tabs>
    </div>
  );
};

TabsTemplate.propTypes = propTypes;
export default TabsTemplate;
