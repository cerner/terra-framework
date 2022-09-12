import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
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

  return (
    <div className={cx('content-wrapper')}>
      <Tabs responsiveTo={props.responsiveTo}>
        {searchTab}
        {briefcaseTab}
        {bookmarkTab}
        {calendarTab}
      </Tabs>
    </div>
  );
};

IconsOnlyAndInMenuTabs.propTypes = propTypes;

export default IconsOnlyAndInMenuTabs;
