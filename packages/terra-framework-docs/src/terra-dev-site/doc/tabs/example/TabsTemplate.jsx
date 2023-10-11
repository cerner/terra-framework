import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconBriefcase from 'terra-icon/lib/icon/IconBriefcase';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';
import TabContentTemplate from './TabContentTemplate';
import styles from './common/TabExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  id: PropTypes.string,
};

const TabsTemplate = (props) => {
  const labelKey = props.id ? props.id : 'compact';
  const labelTab = (
    <Tabs.Pane label="Tab with label" key={`${labelKey}LabelTab`}>
      <TabContentTemplate label="Tab with label" />
    </Tabs.Pane>
  );

  const iconTab = (
    <Tabs.Pane label="Tab with icon" icon={<IconBriefcase />} key={`${labelKey}IconTab`}>
      <TabContentTemplate label="Tab with icon" />
    </Tabs.Pane>
  );

  const customTab = (
    <Tabs.Pane
      customDisplay={(
        <div className={cx('custom-display')}>
          Custom display
        </div>
      )}
      label="Custom display"
      key={`${labelKey}CustomTab`}
    >
      <TabContentTemplate label="Custom display" />
    </Tabs.Pane>
  );

  const longLabel = (
    <Tabs.Pane
      label="Longer text tab name with label for application"
      key={`${labelKey}longLabel`}
    >
      <TabContentTemplate label="Longer text tab name with label for application" />
    </Tabs.Pane>
  );

  const lastTab = (
    <Tabs.Pane label="Last Tab" key={`${labelKey}lastTab`}>
      <TabContentTemplate label="Last Tab" />
    </Tabs.Pane>
  );

  const disabledTab = (
    <Tabs.Pane label="Disabled Tab" icon={<IconSearch />} isDisabled key={`${labelKey}DisabledTab`} />
  );
  return (
    <div className={cx('content-wrapper')}>
      <Tabs setFocusOnContent defaultActiveKey={`${labelKey}LabelTab`} id={props.id}>
        {labelTab}
        {iconTab}
        {customTab}
        {disabledTab}
        {longLabel}
        {lastTab}
      </Tabs>
    </div>
  );
};

TabsTemplate.propTypes = propTypes;
export default TabsTemplate;
