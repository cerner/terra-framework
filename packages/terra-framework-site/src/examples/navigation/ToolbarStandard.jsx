import React from 'react';
import Toolbar from 'terra-navigation/lib/toolbar/Toolbar';
import Menu from 'terra-menu';

const items = [
  <Menu.Item
    text="Toggle Item 1"
    key="Toggle1"
  />,
  <Menu.Item
    text="Toggle Item 2"
    key="Toggle2"
  />,
];

const logo = (
  <Toolbar.Logo
    title="Title"
    subtitle="subtitle"
  />
);

const utility = (
  <Toolbar.Utility
    contentHeight="80"
    contentWidth="240"
    menuItems={items}
    title="Utilities"
  />
);

const toolbar = () => (
  <Toolbar
    logo={logo}
    utility={utility}
  />
);

export default toolbar;
