import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import Tabs from 'terra-tabs';

const createTabPanes = () => {
  const tabPanes = [];
  for (let i = 0; i < 45; i += 1) {
    const tabPane = (
      <Tabs.Pane label={`Search${i}`} icon={<IconSearch />} isIconOnly key={`Search${i}`} id={`search${i}`} />
    );

    tabPanes.push(tabPane);
  }
  return tabPanes;
};

const IconOnlyTabs = () => (
  <Tabs>
    {createTabPanes()}
  </Tabs>
);

export default IconOnlyTabs;
