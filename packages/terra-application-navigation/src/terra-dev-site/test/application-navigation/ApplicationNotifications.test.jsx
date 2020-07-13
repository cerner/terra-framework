import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import ApplicationNavigation from '../../../ApplicationNavigation';

const titleConfig = {
  title: 'Test Title',
};

const userConfig = {
  name: 'Test Name',
  initials: 'TN',
};

const extensionItems = [
  {
    icon: <IconSearch />,
    key: 'item-a',
    text: 'Item A',
    metaData: {
      test: 'a',
    },
  }, {
    icon: <IconPill />,
    key: 'item-b',
    text: 'Item B',
    metaData: {
      test: 'b',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-c',
    text: 'Item C',
    metaData: {
      test: 'c',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-d',
    text: 'Item D',
    metaData: {
      test: 'd',
    },
  },
];

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
  },
];

const utilityItems = [
  {
    icon: <IconSearch />,
    key: 'item-e',
    text: 'Item E',
    metaData: {
      test: 'e',
    },
  }, {
    icon: <IconPill />,
    key: 'item-f',
    text: 'Item F',
    metaData: {
      test: 'f',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-g',
    text: 'Item G',
    metaData: {
      test: 'g',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-h',
    text: 'Item H',
    metaData: {
      test: 'h',
    },
  },
];

const notifications = {
  '/page_2': 5,
  'item-b': 10,
  '/page_8': 4,
};

/* eslint-disable no-alert */
const handleItemSelection = (key, metaData) => {
  alert(`itemKey: ${key}, metaData: ${metaData.test}`);
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const ApplicationNotificationsTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation
      titleConfig={titleConfig}
      userConfig={userConfig}
      notifications={notifications}
      extensionItems={extensionItems}
      onSelectExtensionItem={handleItemSelection}
      navigationItems={navigationItems}
      activeNavigationItemKey="/page_1"
      onSelectNavigationItem={handleItemSelection}
      utilityItems={utilityItems}
      onSelectUtilityItem={handleItemSelection}
      onSelectSettings={() => alert('Settings Selected')} // eslint-disable-line no-alert
      onSelectHelp={() => alert('Help Selected')} // eslint-disable-line no-alert
      onSelectLogout={() => alert('Logout Selected')} // eslint-disable-line no-alert
    />
  </ApplicationBase>
);

export default ApplicationNotificationsTest;
