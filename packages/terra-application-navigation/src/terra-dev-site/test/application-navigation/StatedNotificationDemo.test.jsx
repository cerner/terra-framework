import React, {
  useState,
} from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import Placeholder from 'terra-doc-template/lib/Placeholder';
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
    key: 'item-search',
    text: 'Item Search',
    metaData: {
      test: 'search',
    },
  }, {
    icon: <IconPill />,
    key: 'item-pill',
    text: 'Item Pill',
    metaData: {
      test: 'pill',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-lisualization',
    text: 'Item Visualization',
    metaData: {
      test: 'visualization',
    },
  }, {
    icon: <IconLightbulb />,
    key: 'item-lightbulb',
    text: 'Item Lightbulb',
    metaData: {
      test: 'lightbulb',
    },
  },
];

const navigationItems = [
  {
    key: '/page_1',
    text: 'Page 1',
    metaData: {
      display: 'Page 1',
    },
  }, {
    key: '/page_2',
    text: 'Page 2',
    metaData: {
      display: 'Page 2',
    },
  }, {
    key: '/page_3',
    text: 'Page 3',
    metaData: {
      display: 'Page 3',
    },
  }, {
    key: '/page_4',
    text: 'Page 4',
    metaData: {
      display: 'Page 4',
    },
  }, {
    key: '/page_5',
    text: 'Page 5',
    metaData: {
      display: 'Page 5',
    },
  }, {
    key: '/page_6',
    text: 'Page 6',
    metaData: {
      display: 'Page 6',
    },
  }, {
    key: '/page_7',
    text: 'Page 7',
    metaData: {
      display: 'Page 7',
    },
  }, {
    key: '/page_8',
    text: 'Page 8',
    metaData: {
      display: 'Page 8',
    },
  },
];

const utilityItems = [
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

const notifications = [
  {
    '/page_2': 5,
    'item-pill': 10,
    '/page_8': 4,
  },
  {
    '/page_2': 8,
    'item-pill': 12,
    '/page_8': 999,
    'item-lightbulb': 1,
  },
];

const StatedNotificationDemo = () => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  const [notificationIndex, setNotificationIndex] = useState(0);

  /* eslint-disable no-alert */
  function handleItemSelection(key, metaData) {
    if (key === 'item-search') {
      setNotificationIndex(notificationIndex ? 0 : 1);
      return;
    }
    alert(`itemKey: ${key}, metaData: ${metaData.test}`);
  }
  /* eslint-enable no-alert */

  return (
    <ApplicationBase locale="en-US">
      <ApplicationNavigation
        titleConfig={titleConfig}
        userConfig={userConfig}
        notifications={notifications[notificationIndex]}
        extensionItems={extensionItems}
        onSelectExtensionItem={handleItemSelection}
        navigationItems={navigationItems}
        activeNavigationItemKey={activeKey}
        onSelectNavigationItem={key => setActiveKey(key)}
        utilityItems={utilityItems}
        onSelectUtilityItem={handleItemSelection}
        onSelectSettings={() => alert('Settings Selected')} // eslint-disable-line no-alert
        onSelectHelp={() => alert('Help Selected')} // eslint-disable-line no-alert
        onSelectLogout={() => alert('Logout Selected')} // eslint-disable-line no-alert
      >
        <Placeholder title={activeKey} />
      </ApplicationNavigation>
    </ApplicationBase>
  );
};

export default StatedNotificationDemo;
