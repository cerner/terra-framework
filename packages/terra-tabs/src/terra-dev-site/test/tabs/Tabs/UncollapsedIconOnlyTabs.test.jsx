import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from '../../../../Tabs';
import TabContent from './TabContentTemplate';

const createTabPanes = () => {
  const tabPanes = [];
  for (let i = 0; i < 15; i += 1) {
    const tabPane = (
      <Tabs.Pane label={`Search${i}`} icon={<IconSearch />} isIconOnly key={`Search${i}`} id={`search${i}`}>
        <TabContent label={`Search${i}`} id={`searchContent${i}`} />
      </Tabs.Pane>
    );

    tabPanes.push(tabPane);
  }
  return tabPanes;
};

const IconOnlyTabs = () => (
  <Tabs id="iconOnlyTabs" responsiveTo="none">
    {createTabPanes()}
  </Tabs>
);

export default IconOnlyTabs;
