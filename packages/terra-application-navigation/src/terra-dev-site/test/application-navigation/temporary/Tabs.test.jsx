
/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import Application from 'terra-application';
import ApplicationNavigation from '../../../../ApplicationNavigation';

const navigationItems = [
  {
    key: '/page_1',
    text: 'Page 1',
    metaData: {
      test: '1',
    },
  }, {
    key: '/page_2',
    text: 'Page 2',
    metaData: {
      test: '2',
    },
  }, {
    key: '/page_3',
    text: 'Page 3',
    metaData: {
      test: '3',
    },
  }, {
    key: '/page_4',
    text: 'Page 4',
    metaData: {
      test: '4',
    },
  },
];

/* eslint-disable no-alert */
const handleItemSelection = (key, metaData) => {
  alert(`itemKey: ${key}, metaData: ${metaData.test}`);
};
/* eslint-enable no-alert */

const TabsTest = () => (
  <Application>
    <ApplicationNavigation
      navigationItems={navigationItems}
      activeNavigationItemKey="/page_1"
      onSelectNavigationItem={handleItemSelection}
    />
  </Application>
);

export default TabsTest;
