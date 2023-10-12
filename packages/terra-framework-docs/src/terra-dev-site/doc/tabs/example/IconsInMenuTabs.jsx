import React from 'react';
import classNames from 'classnames/bind';
import Tabs from 'terra-tabs';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import IconEnvelope from 'terra-icon/lib/icon/IconEnvelope';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const IconsOnlyAndInMenuTabs = () => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} showIcon key="MenuTabSearch">
      <TabContent label="Search" id="MenuTabSearchConten"/>
    </Tabs.Pane>
  );

  const briefcaseTab = (
    // eslint-disable-next-line react/forbid-component-props
    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} showIcon key="MenuTabBriefcase">
      <TabContent label="Briefcase" id="MenuTabBriefcaseContent" />
    </Tabs.Pane>
  );

  const bookmarkTab = (
    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} showIcon key="MenuTabBookmark">
      <TabContent label="Bookmark" id="MenuTabBookmarkContent" />
    </Tabs.Pane>
  );

  const calendarTab = (
    <Tabs.Pane label="Calendar" icon={<IconCalendar />} showIcon key="MenuTabCalendar">
      <TabContent label="Calendar" id="MenuTabCalendarContent" />
    </Tabs.Pane>
  );

  const envelopeTab = (
    <Tabs.Pane label="Envelope" icon={<IconEnvelope />} showIcon key="MenuTabEnvelope">
      <TabContent label="Envelope" id="MenuTabEnvelopeContent" />
    </Tabs.Pane>
  );

  const printerTab = (
    <Tabs.Pane label="Printer" icon={<IconPrinter />} showIcon key="MenuTabPrinter">
      <TabContent label="Printer" id="MenuTabPrinterContent" />
    </Tabs.Pane>
  );

  return (
    <div className={cx('content-wrapper')}>
      <Tabs setFocusOnContent id="icons-only-menu">
        {searchTab}
        {briefcaseTab}
        {bookmarkTab}
        {calendarTab}
        {envelopeTab}
        {printerTab}
      </Tabs>
    </div>
  );
};

export default IconsOnlyAndInMenuTabs;
