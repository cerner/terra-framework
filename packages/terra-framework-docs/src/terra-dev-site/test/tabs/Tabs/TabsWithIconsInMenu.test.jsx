/* eslint-disable react/forbid-component-props */
import React from 'react';
import Tabs from 'terra-tabs';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconRequired from 'terra-icon/lib/icon/IconRequired';
import IconAlert from 'terra-icon/lib/icon/IconAlert';
import IconInformation from 'terra-icon/lib/icon/IconInformation';
import IconWarning from 'terra-icon/lib/icon/IconWarning';
import IconError from 'terra-icon/lib/icon/IconError';
import TabContent from './TabContentTemplate';

const TabsWithIconsInMenu = () => (
  <Tabs id="tabsWithIconsInMenu" responsiveTo="parent">
    <Tabs.Pane id="search" label="Search" icon={<IconSearch />} key="Search">
      <TabContent label="Search Icon" />
    </Tabs.Pane>
    <Tabs.Pane id="required" label="Required" icon={<IconRequired style={{ color: 'red' }} />} isIconOnly key="Required">
      <TabContent label="Required Icon, Icon Only" />
    </Tabs.Pane>
    <Tabs.Pane id="alert" label="Alert" icon={<IconAlert />} showIconInTabAndMenuWhenCollapsed key="Alert">
      <TabContent label="Alert Icon, Show in Tab and Menu" />
    </Tabs.Pane>
    <Tabs.Pane id="warning" label="Warning" icon={<IconWarning />} isIconOnly showIconInTabAndMenuWhenCollapsed key="Warning">
      <TabContent label="Warning Icon, Icon Only, Show in Tab and Menu" />
    </Tabs.Pane>
    <Tabs.Pane id="error" label="Error" icon={<IconError />} showIconInTabAndMenuWhenCollapsed key="Error">
      <TabContent label="Error Icon, Show in Tab and Menu" />
    </Tabs.Pane>
    <Tabs.Pane id="information" label="Information" isDisabled icon={<IconInformation />} showIconInTabAndMenuWhenCollapsed key="Information">
      <TabContent label="Information Icon, Disabled, Show in Tab and Menu" />
    </Tabs.Pane>
  </Tabs>
);

export default TabsWithIconsInMenu;
