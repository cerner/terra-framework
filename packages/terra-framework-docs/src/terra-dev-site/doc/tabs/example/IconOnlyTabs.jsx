import React from 'react';
import classNames from 'classnames/bind';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import PropTypes from 'prop-types';
import IconCalendar from 'terra-icon/lib/icon/IconCalendar';
import Tabs from 'terra-tabs';
import TabContent from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);
const propTypes = {
  id: PropTypes.string,
};
const IconOnlyTabs = (props) => {
  const searchTab = (
    <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search">
      <TabContent label="Search" />
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

  return (
    <div className={cx('content-wrapper')}>
      <Tabs id={props.id} setFocusOnContent>
        {searchTab}
        {briefcaseTab}
        {bookmarkTab}
        {calendarTab}
      </Tabs>
    </div>
  );
};
IconOnlyTabs.propTypes = propTypes;
export default IconOnlyTabs;
