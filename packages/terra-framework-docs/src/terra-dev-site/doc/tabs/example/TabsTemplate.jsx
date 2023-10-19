import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
};

const TabsTemplate = (props) => {
  const tabKey = props.id ? props.id : 'compact';
  const labelTab = (
    <Tabs.Pane label="Tab with label" key={`${tabKey}LabelTab`} id={`${tabKey}LabelTab`}>
      <TabContentTemplate label="Tab with label" id={`${tabKey}LabelTabContent`} />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key={`${tabKey}IconTab`} id={`${tabKey}IconTab`}>
      <TabContentTemplate id={`${tabKey}IconTabContent`} label="Tab with icon" />
    </Tabs.Pane>
  );
  return (
    <div className={cx('content-wrapper')} id={`${tabKey}content`}>
      <Tabs setFocusOnContent defaultActiveKey={`${tabKey}LabelTab`} id={tabKey}>
        {labelTab}
        {iconTab}
      </Tabs>
    </div>
  );
};

TabsTemplate.propTypes = propTypes;
export default TabsTemplate;
