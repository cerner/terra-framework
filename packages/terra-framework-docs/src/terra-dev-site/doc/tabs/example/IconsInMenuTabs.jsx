import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import IconEnvelope from 'terra-icon/lib/icon/IconEnvelope';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';
import Tabs from '../../../../../../terra-tabs/lib/Tabs';

const propTypes = { responsiveTo: PropTypes.string };

const cx = classNames.bind(styles);

const IconsOnlyAndInMenuTabs = (props) => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} showIconInTabAndMenuWhenCollapsed key="Search">
      <TabContent label="Search" />
    </Tabs.Pane>
  );

  const briefcaseTab = (
    // eslint-disable-next-line react/forbid-component-props
    <Tabs.Pane label="Briefcase" icon={<IconBriefcase />} showIconInTabAndMenuWhenCollapsed key="Briefcase">
      <TabContent label="Briefcase" />
    </Tabs.Pane>
  );

  const bookmarkTab = (
    <Tabs.Pane label="Bookmark" icon={<IconBookmark />} showIconInTabAndMenuWhenCollapsed key="Bookmark">
      <TabContent label="Bookmark" />
    </Tabs.Pane>
  );

  const calendarTab = (
    <Tabs.Pane label="Calendar" icon={<IconCalendar />} showIconInTabAndMenuWhenCollapsed key="Calendar">
      <TabContent label="Calendar" />
    </Tabs.Pane>
  );

  const envelopeTab = (
    <Tabs.Pane label="Envelope" icon={<IconEnvelope />} showIconInTabAndMenuWhenCollapsed key="Envelope">
      <TabContent label="Envelope" />
    </Tabs.Pane>
  );

  const printerTab = (
    <Tabs.Pane label="Printer" icon={<IconPrinter />} showIconInTabAndMenuWhenCollapsed key="Printer">
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
