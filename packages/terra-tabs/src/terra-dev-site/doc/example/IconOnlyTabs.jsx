import React, { useState } from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
/* eslint-disable import/no-unresolved, import/extensions */
import Tabs, { Tab, TabBar } from 'terra-tabs/lib/index';
import TabContent from 'terra-tabs/lib/terra-dev-site/doc/example/TabContentTemplate';
/* eslint-enable import/no-unresolved, import/extensions */
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const IconOnlyTabs = () => {
  const [currentTab, setCurrentTab] = useState('Search');

  function handleSelect(metaData) {
    setCurrentTab(metaData.key);
  }

  return (
    <div className={cx('content-wrapper')}>
      <Tabs
        tabData={[
          {
            id: 'tab-search',
            associatedPaneId: 'tab-search-pane',
            label: 'Search',
            onSelect: handleSelect,
            metaData: { key: 'Search' },
            icon: <IconSearch />,
            isIconOnly: true,
            key: 'Search',
            isSelected: currentTab === 'Search',
          },
          {
            id: 'tab-briefcase',
            associatedPaneId: 'tab-briefcase-pane',
            label: 'Briefcase',
            onSelect: handleSelect,
            metaData: { key: 'Briefcase' },
            icon: <IconBriefcase />,
            isIconOnly: true,
            key: 'Briefcase',
            isSelected: currentTab === 'Briefcase',
          },
          {
            id: 'tab-bookmark',
            associatedPaneId: 'tab-bookmark-pane',
            label: 'Bookmark',
            onSelect: handleSelect,
            metaData: { key: 'Bookmark' },
            icon: <IconBookmark />,
            isIconOnly: true,
            key: 'Bookmark',
            isSelected: currentTab === 'Bookmark',
          },
          {
            id: 'tab-calendar',
            associatedPaneId: 'tab-calendar-pane',
            label: 'Calendar',
            onSelect: handleSelect,
            metaData: { key: 'Calendar' },
            icon: <IconCalendar />,
            isIconOnly: true,
            key: 'Calendar',
            isSelected: currentTab === 'Calendar',
          },
        ]}
      >
        <TabContent label={currentTab} />
      </Tabs>
    </div>
  );
};

export default IconOnlyTabs;
