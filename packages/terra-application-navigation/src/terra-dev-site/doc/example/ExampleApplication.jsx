
/* eslint-disable */
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

const ExampleApplication = ({ onAction }) => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);

  return (
    <ApplicationBase locale="en-US">
      <ApplicationNavigation
        titleConfig={titleConfig}
        userConfig={userConfig}
        extensionItems={extensionItems}
        onSelectExtensionItem={onAction}
        navigationItems={navigationItems}
        activeNavigationItemKey={activeKey}
        onSelectNavigationItem={key => setActiveKey(key)}
        utilityItems={utilityItems}
        onSelectUtilityItem={onAction}
        onSelectSettings={() => onAction('settings')} // eslint-disable-line no-alert
        onSelectHelp={() => onAction('help')} // eslint-disable-line no-alert
        onSelectLogout={() => onAction('logout')} // eslint-disable-line no-alert
      >
        <Placeholder title={activeKey} />
      </ApplicationNavigation>
    </ApplicationBase>
  );
};

export default ExampleApplication;
