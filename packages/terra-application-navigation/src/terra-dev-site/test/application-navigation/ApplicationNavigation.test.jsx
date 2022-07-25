import React, { useState } from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import IconAvailable from 'terra-icon/lib/icon/IconAvailable';
import ApplicationNavigation from '../../../ApplicationNavigation';

const titleConfig = {
  title: 'Connect Messenger',
};

const userConfig = {
  name: 'Phil Callahan',
  initials: 'PC',
  detail: 'Physician - Innovation',
};

const extensionItems = [
  {
    icon: <IconSearch />,
    key: 'item-a',
    text: 'Search',
    metaData: {
      test: 'a',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-d',
    text: 'Suggestions',
    metaData: {
      test: 'd',
    },
  },
];

const navigationItems = [
  {
    key: '/page_1',
    text: 'Messages',
    metaData: {
      test: '1',
    },
  }, {
    key: '/page_2',
    text: 'Notifications',
    metaData: {
      test: '2',
    },
  }, {
    key: '/page_3',
    text: 'Contacts',
    metaData: {
      test: '3',
    },
  }, {
    key: '/page_4',
    text: 'Care Team',
    metaData: {
      test: '4',
    },
  }, {
    key: '/page_5',
    text: 'Video',
    metaData: {
      test: '5',
    },
  },
];

const utilityItems = [
  {
    icon: <IconAvailable />,
    key: 'item-a',
    text: 'Status - Available',
    metaData: {
      test: 'a',
    },
  },
];

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
function ApplicationNavigationTest() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [functionType, setFunctionType] = useState('');

  /* eslint-disable no-alert */
  const handleItemSelection = (key, metaData) => {
    alert(`itemKey: ${key}, metaData: ${metaData.test}`);
  };
  /* eslint-enable no-alert */

  const handleOnDrawerMenuStateChange = (value) => {
    setDrawerOpen(value);
  };

  return (
    <ApplicationNavigation
      titleConfig={titleConfig}
      userConfig={userConfig}
      extensionItems={extensionItems}
      onSelectExtensionItem={handleItemSelection}
      navigationItems={navigationItems}
      // activeNavigationItemKey="/page_1"
      onSelectNavigationItem={handleItemSelection}
      utilityItems={utilityItems}
      onSelectUtilityItem={handleItemSelection}
      onSelectSettings={() => setFunctionType('onSelectSettings was called')}
      onSelectHelp={() => setFunctionType('onSelectHelp was called')}
      onSelectLogout={() => setFunctionType('onSelectLogout was called')}
      onDrawerMenuStateChange={handleOnDrawerMenuStateChange}
    >
      {isDrawerOpen ? <div> The drawer is open</div> : null}
      <p>{functionType}</p>
    </ApplicationNavigation>
  );
}

export default ApplicationNavigationTest;
