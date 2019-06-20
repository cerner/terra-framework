
import React, {
  useState,
} from 'react';
import Application from 'terra-application';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconManufacturer from 'terra-icon/lib/icon/IconManufacturer';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconScratchPad from 'terra-icon/lib/icon/IconScratchPad';
import IconSave from 'terra-icon/lib/icon/IconSave';
import IconPrinter from 'terra-icon/lib/icon/IconPrinter';
import IconBookmark from 'terra-icon/lib/icon/IconBookmark';
import IconAttachment from 'terra-icon/lib/icon/IconAttachment';
import PageContent from '../common/PageContent';
import ApplicationNavigation from '../../../ApplicationNavigation';

const titleConfig = {
  title: 'My Application',
};

const userConfig = {
  name: 'My Name',
  initials: 'MN',
};

const extensionItems = [
  {
    icon: <IconSearch />,
    key: 'item-search',
    text: 'Search',
    metaData: {
      test: 'search',
    },
  }, {
    icon: <IconManufacturer />,
    key: 'item-medication',
    text: 'View Manufacturers',
    metaData: {
      test: 'manufacturers',
    },
  }, {
    icon: <IconVisualization />,
    key: 'item-trends',
    text: 'View Trends',
    metaData: {
      test: 'trends',
    },
  }, {
    icon: <IconScratchPad />,
    key: 'item-inbox',
    text: 'View Inbox',
    metaData: {
      test: 'inbox',
    },
  },
];

const navigationItems = [
  {
    key: '/home',
    text: 'Home',
    metaData: {
      display: 'Home',
    },
  }, {
    key: '/products',
    text: 'Products',
    metaData: {
      display: 'Products',
    },
  }, {
    key: '/management',
    text: 'Management',
    metaData: {
      display: 'Management',
    },
  }, {
    key: '/documentation',
    text: 'Documentation',
    metaData: {
      display: 'Documentation',
    },
  }, {
    key: '/continuing_education',
    text: 'Continuing Education',
    metaData: {
      display: 'Continuing Education',
    },
  }, {
    key: '/support',
    text: 'Support',
    metaData: {
      display: 'Support',
    },
  }, {
    key: '/resources',
    text: 'Resources',
    metaData: {
      display: 'Resources',
    },
  }, {
    key: '/archives',
    text: 'Archives',
    metaData: {
      display: 'Archives',
    },
  },
];

const utilityItems = [
  {
    icon: <IconSave />,
    key: 'item-save',
    text: 'Save',
    metaData: {
      test: 'save',
    },
  }, {
    icon: <IconPrinter />,
    key: 'item-print',
    text: 'Print',
    metaData: {
      test: 'print',
    },
  }, {
    icon: <IconBookmark />,
    key: 'item-bookmark',
    text: 'Bookmark',
    metaData: {
      test: 'bookmark',
    },
  }, {
    icon: <IconAttachment />,
    key: 'item-attachment',
    text: 'Add Attachment',
    metaData: {
      test: 'attachment',
    },
  },
];

/* eslint-disable no-alert */
const handleItemSelection = (key, metaData) => {
  alert(`itemKey: ${key}, metaData: ${metaData.test}`);
};
/* eslint-enable no-alert */

const StatedDemo = () => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);

  return (
    <Application locale="en-US">
      <ApplicationNavigation
        titleConfig={titleConfig}
        userConfig={userConfig}
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
        <PageContent title={activeKey} />
      </ApplicationNavigation>
    </Application>
  );
};

export default StatedDemo;
