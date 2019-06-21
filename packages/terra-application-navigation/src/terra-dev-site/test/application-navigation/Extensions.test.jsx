/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconPill from 'terra-icon/lib/icon/IconPill';
import IconVisualization from 'terra-icon/lib/icon/IconVisualization';
import IconLightbulb from 'terra-icon/lib/icon/IconLightbulb';
import ApplicationNavigation from '../../../ApplicationNavigation';

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

/* eslint-disable no-alert */
const handleItemSelection = (key, metaData) => {
  alert(`itemKey: ${key}, metaData: ${metaData.test}`);
};
/* eslint-enable no-alert */

// TODO: remove terra-application after it is incorporated into dev-site
const TabsTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation
      extensionItems={extensionItems}
      onSelectExtensionItem={handleItemSelection}
    />
  </ApplicationBase>
);

export default TabsTest;
