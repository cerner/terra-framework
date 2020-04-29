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
        tabBar={(
          <TabBar>
            <Tab
              label="Search"
              onSelect={handleSelect}
              metaData={{ key: 'Search' }}
              icon={<IconSearch />}
              isIconOnly
              key="Search"
              isSelected={currentTab === 'Search'}
            />
            <Tab
              label="Briefcase"
              onSelect={handleSelect}
              metaData={{ key: 'Briefcase' }}
              icon={<IconBriefcase />}
              isIconOnly
              key="Briefcase"
              isSelected={currentTab === 'Briefcase'}
            />
            <Tab
              label="Bookmark"
              onSelect={handleSelect}
              metaData={{ key: 'Bookmark' }}
              icon={<IconBookmark />}
              isIconOnly
              key="Bookmark"
              isSelected={currentTab === 'Bookmark'}
            />
            <Tab
              label="Calendar"
              onSelect={handleSelect}
              metaData={{ key: 'Calendar' }}
              icon={<IconCalendar />}
              isIconOnly
              key="Calendar"
              isSelected={currentTab === 'Calendar'}
            />
          </TabBar>
        )}
      >
        <TabContent label={currentTab} />
      </Tabs>
    </div>
  );
};

export default IconOnlyTabs;
