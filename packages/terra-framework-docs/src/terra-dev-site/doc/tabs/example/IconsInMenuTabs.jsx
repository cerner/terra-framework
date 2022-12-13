import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconError from 'terra-icon/lib/icon/IconError';
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

  const requiredTab = (
    // eslint-disable-next-line react/forbid-component-props
    <Tabs.Pane label="Required" icon={<IconRequired style={{ color: 'red' }} />} showIconInTabAndMenuWhenCollapsed key="Required">
      <TabContent label="Required" />
    </Tabs.Pane>
  );

  const alertTab = (
    <Tabs.Pane label="Alert" icon={<IconAlert />} showIconInTabAndMenuWhenCollapsed key="Alert">
      <TabContent label="Alert" />
    </Tabs.Pane>
  );

  const informationTab = (
    <Tabs.Pane label="Information" icon={<IconInformation />} showIconInTabAndMenuWhenCollapsed key="Information">
      <TabContent label="Information" />
    </Tabs.Pane>
  );

  const warningTab = (
    <Tabs.Pane label="Warning" icon={<IconWarning />} showIconInTabAndMenuWhenCollapsed key="Warning">
      <TabContent label="Warning" />
    </Tabs.Pane>
  );

  const errorTab = (
    <Tabs.Pane label="Error" icon={<IconError />} showIconInTabAndMenuWhenCollapsed key="Error">
      <TabContent label="Error" />
    </Tabs.Pane>
  );

  return (
    <div className={cx('content-wrapper')}>
      <Tabs responsiveTo={props.responsiveTo}>
        {searchTab}
        {requiredTab}
        {alertTab}
        {informationTab}
        {warningTab}
        {errorTab}
      </Tabs>
    </div>
  );
};

IconsOnlyAndInMenuTabs.propTypes = propTypes;

export default IconsOnlyAndInMenuTabs;
