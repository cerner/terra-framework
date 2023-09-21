import React from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const IconOnlyTabs = () => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search">
      <TabContent label="Search">
        Users need to know what is going on, and get appropriate feedback during interaction. For example, users need confirmation messages when actions are completed, such as when forms are submitted. Also, error messages must provide clear directions rather than confuse users. People with some cognitive and learning disabilities, who may be easily confused by unexpected behavior and unclear error messages. People with partial sight and blindness, who rely on notifications, instructions, and errors messages to understand the context and interactions. Content is more usable for people who are new to the particular website or application.
      </TabContent>
    </Tabs.Pane>
  );

  const briefcaseTab = (
    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} isIconOnly key="Briefcase">
      <TabContent label="Briefcase" />
    </Tabs.Pane>
  );

  const bookmarkTab = (
    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} isIconOnly key="Bookmark">
      <TabContent label="Bookmark" />
    </Tabs.Pane>
  );

  const calendarTab = (
    <Tabs.Pane label="Calendar" icon={<IconCalendar />} isIconOnly key="Calendar">
      <TabContent label="Calendar" />
    </Tabs.Pane>
  );

  const briefcaseTab1 = (
    <Tabs.Pane label="Briefcase1" icon={<IconBriefcase />} isIconOnly key="Briefcase1">
      <TabContent label="Briefcase" />
    </Tabs.Pane>
  );

  const bookmarkTab1 = (
    <Tabs.Pane label="Bookmark1" icon={<IconBookmark />} isIconOnly key="Bookmar1k">
      <TabContent label="Bookmark" />
    </Tabs.Pane>
  );

  const calendarTab1 = (
    <Tabs.Pane label="Calendar1" icon={<IconCalendar />} isIconOnly key="Calendar1">
      <TabContent label="Calendar" />
    </Tabs.Pane>
  );

  return (
    <div className={cx('content-wrapper')}>
      <Tabs fill verticalOrientation setFocusOnContent>
        {searchTab}
        {briefcaseTab}
        {bookmarkTab}
        {calendarTab}
        {briefcaseTab1}
        {bookmarkTab1}
        {calendarTab1}
      </Tabs>
    </div>
  );
};

export default IconOnlyTabs;
