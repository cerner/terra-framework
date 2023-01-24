import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tabs from 'terra-tabs';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import IconEnvelope from 'terra-icon/lib/icon/IconEnvelope';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const propTypes = { responsiveTo: PropTypes.string };

const cx = classNames.bind(styles);

const IconsOnlyAndInMenuTabs = (props) => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} showIcon key="Search">
      <TabContent label="Search" />
    </Tabs.Pane>
  );

  const briefcaseTab = (
    // eslint-disable-next-line react/forbid-component-props
    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} showIcon key="Briefcase">
      <TabContent label="Briefcase" />
    </Tabs.Pane>
  );

  const bookmarkTab = (
    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} showIcon key="Bookmark">
      <TabContent label="Bookmark" />
    </Tabs.Pane>
  );

  const calendarTab = (
    <Tabs.Pane label="Calendar" icon={<IconCalendar />} showIcon key="Calendar">
      <TabContent label="Calendar" />
    </Tabs.Pane>
  );

  const envelopeTab = (
    <Tabs.Pane label="Envelope" icon={<IconEnvelope />} showIcon key="Envelope">
      <TabContent label="Envelope" />
    </Tabs.Pane>
  );

  const printerTab = (
    <Tabs.Pane label="Printer" icon={<IconPrinter />} showIcon key="Printer">
      <TabContent label="Printer" />
    </Tabs.Pane>
  );

  return (
    <div className={cx('content-wrapper')}>
      <Tabs responsiveTo={props.responsiveTo}>
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

IconsOnlyAndInMenuTabs.propTypes = propTypes;

export default IconsOnlyAndInMenuTabs;
