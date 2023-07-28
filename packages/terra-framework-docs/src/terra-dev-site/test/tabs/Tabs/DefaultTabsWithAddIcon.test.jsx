import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import Tabs from 'terra-tabs';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import TabContent from './TabContentTemplate';
import styles from './TabsTemplate.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
  containerClassName: PropTypes.string,
};

const defaultProps = {
  containerClassName: 'content-wrapper-default',
};

const DefaultTabsWithAddIcon = props => (
  <div className={cx(props.containerClassName)} id="tabs-container">
    <Tabs
      id={props.id}
      onSelectAddButton={() => alert('hi')}
      ariaLabelAddTab="Add Tab"
    >
      <Tabs.Pane label="Tab 1" key="Tab1" id="tab1">
        <TabContent label="Tab 1" id="tab1Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Tab 2" key="Tab2" id="tab2">
        <TabContent label="Tab 2" id="tab2Content" />
      </Tabs.Pane>
      <Tabs.Pane label="Disabled Tab" key="disabled" id="disabled" isDisabled />
      <Tabs.Pane label="Search" icon={<IconSearch />} isIconOnly key="Search" id="search">
        <TabContent label="Search" id="searchContent" />
      </Tabs.Pane>
    </Tabs>
  </div>
);

DefaultTabsWithAddIcon.propTypes = propTypes;
DefaultTabsWithAddIcon.defaultProps = defaultProps;
export default DefaultTabsWithAddIcon;
