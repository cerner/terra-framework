import React from 'react';
import ApplicationNavigation from '../../../ApplicationNavigation';

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const NoCustomUtilityItemsTest = () => (
  <ApplicationNavigation
    onSelectSettings={() => alert('Settings Selected')} // eslint-disable-line no-alert
    onSelectHelp={() => alert('Help Selected')} // eslint-disable-line no-alert
    onSelectLogout={() => alert('Logout Selected')} // eslint-disable-line no-alert
  />
);

export default NoCustomUtilityItemsTest;
