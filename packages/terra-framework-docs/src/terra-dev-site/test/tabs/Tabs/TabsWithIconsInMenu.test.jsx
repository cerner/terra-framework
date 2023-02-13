/* eslint-disable react/forbid-component-props */
import React from 'react';
import classNamesBind from 'classnames/bind';
import Tabs from 'terra-tabs';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconError from 'terra-icon/lib/icon/IconError';
import TabContent from './TabContentTemplate';
import styles from './TabsTemplate.module.scss';

const cx = classNamesBind.bind(styles);

const TabsWithIconsInMenu = () => (
  <Tabs id="tabsWithIconsInMenu" responsiveTo="parent">
    <Tabs.Pane id="search" label="Search" icon={<IconSearch />} key="Search">
      <TabContent label="Search Icon" />
    </Tabs.Pane>
    <Tabs.Pane id="alert" label="Alert" icon={<IconAlert />} isIconOnly key="Alert">
      <TabContent label="Alert Icon, Icon Only" />
    </Tabs.Pane>
    <Tabs.Pane id="required" label="Required" icon={<IconRequired className={cx('red-color')} />} showIcon key="Required">
      <TabContent label="Required Icon, Show in Tab and Menu" />
    </Tabs.Pane>
    <Tabs.Pane id="warning" label="Warning" icon={<IconWarning />} isIconOnly showIcon key="Warning">
      <TabContent label="Warning Icon, Icon Only, Show in Tab and Menu" />
    </Tabs.Pane>
    <Tabs.Pane id="error" label="Error" icon={<IconError />} showIcon key="Error">
      <TabContent label="Error Icon, Show in Tab and Menu" />
    </Tabs.Pane>
    <Tabs.Pane id="information" label="Information" isDisabled icon={<IconInformation />} showIcon key="Information">
      <TabContent label="Information Icon, Disabled, Show in Tab and Menu" />
    </Tabs.Pane>
  </Tabs>
);

export default TabsWithIconsInMenu;
