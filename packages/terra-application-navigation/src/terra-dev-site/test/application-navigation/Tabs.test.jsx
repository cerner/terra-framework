
/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';

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
  }, {
    key: '/page_5',
    text: 'Page 5',
    metaData: {
      test: '5',
    },
  }, {
    key: '/page_6',
    text: 'Page 6',
    metaData: {
      test: '6',
    },
  }, {
    key: '/page_7',
    text: 'Page 7',
    metaData: {
      test: '7',
    },
  }, {
    key: '/page_8',
    text: 'Page 8',
    metaData: {
      test: '8',
    },
  }, {
    key: '/page_9',
    text: 'Page 9',
    metaData: {
      test: '9',
    },
  },
];

/* eslint-disable no-alert */
const handleItemSelection = (key, metaData) => {
  alert(`itemKey: ${key}, metaData: ${metaData.test}`);
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site
const TabsTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation
      navigationItems={navigationItems}
      activeNavigationItemKey="/page_1"
      onSelectNavigationItem={handleItemSelection}
    />
  </ApplicationBase>
);

export default TabsTest;
