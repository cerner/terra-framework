import React from 'react';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import IconCalculator from 'terra-icon/lib/icon/IconCalculator';
import IconPerson from 'terra-icon/lib/icon/IconPerson';
import IconNotification from 'terra-icon/lib/icon/IconNotification';
import Tabs from '../../../../Tabs';
import TabContent from './TabContentTemplate';

const IconOnlyTabs = () => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search" id="search">
      <TabContent label="Search" id="searchContent" />
    </Tabs.Pane>
  );

  const briefcaseTab = (
    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} isIconOnly key="Briefcase" id="briefcase">
      <TabContent label="Briefcase" id="briefcaseContent" />
    </Tabs.Pane>
  );

  const bookmarkTab = (
    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} isIconOnly key="Bookmark" id="bookmark">
      <TabContent label="Bookmark" id="bookmarkContent" />
    </Tabs.Pane>
  );

  const calendarTab = (
    <Tabs.Pane label="Calendar" icon={<IconCalendar />} isIconOnly key="Calendar" id="calendar">
      <TabContent label="Calendar" id="calendarContent" />
    </Tabs.Pane>
  );

  const calculatorTab = (
    <Tabs.Pane label="Calculator" icon={<IconCalculator />} isIconOnly key="Calculator" id="calculator">
      <TabContent label="Calculator" id="calculatorContent" />
    </Tabs.Pane>
  );

  const personTab = (
    <Tabs.Pane label="Person" icon={<IconPerson />} isIconOnly key="Person" id="person">
      <TabContent label="Person" id="PersonContent" />
    </Tabs.Pane>
  );

  const notificationTab = (
    <Tabs.Pane label="Notification" icon={<IconNotification />} isIconOnly key="Notification" id="notification">
      <TabContent label="Notification" id="notificationContent" />
    </Tabs.Pane>
  );

  return (
    <Tabs id="iconOnlyTabs" responsiveTo="none">
      {searchTab}
      {briefcaseTab}
      {bookmarkTab}
      {calendarTab}
      {calculatorTab}
      {personTab}
      {notificationTab}
    </Tabs>
  );
};

export default IconOnlyTabs;
