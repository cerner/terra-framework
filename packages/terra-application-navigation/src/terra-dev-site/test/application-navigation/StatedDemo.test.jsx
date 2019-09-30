import React, {
  useState,
} from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
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
    key: 'search',
    text: 'Search',
    metaData: {
      test: 'search',
    },
  }, {
    icon: <IconManufacturer />,
    key: 'manufacturer',
    text: 'View Manufacturers',
    metaData: {
      test: 'manufacturers',
    },
  }, {
    icon: <IconVisualization />,
    key: 'trends',
    text: 'View Trends',
    metaData: {
      test: 'trends',
    },
  }, {
    icon: <IconScratchPad />,
    key: 'inbox',
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
    key: 'save',
    text: 'Save',
    metaData: {
      test: 'save',
    },
  }, {
    icon: <IconPrinter />,
    key: 'print',
    text: 'Print',
    metaData: {
      test: 'print',
    },
  }, {
    icon: <IconBookmark />,
    key: 'bookmark',
    text: 'Bookmark',
    metaData: {
      test: 'bookmark',
    },
  }, {
    icon: <IconAttachment />,
    key: 'attachment',
    text: 'Add Attachment',
    metaData: {
      test: 'attachment',
    },
  },
];

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const StatedDemo = () => {
  const [activeKey, setActiveKey] = useState(navigationItems[0].key);
  const [lastActionKey, setLastActionKey] = useState(null);

  function handleItemSelection(key) {
    setLastActionKey(`Current Action: ${key}`);
  }

  return (
    <ApplicationBase locale="en">
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
        onSelectSettings={() => handleItemSelection('settings')}
        onSelectHelp={() => handleItemSelection('help')}
        onSelectLogout={() => handleItemSelection('logout')}
      >
        <PageContent title={activeKey} subtitle={lastActionKey} />
      </ApplicationNavigation>
    </ApplicationBase>
  );
};

export default StatedDemo;
