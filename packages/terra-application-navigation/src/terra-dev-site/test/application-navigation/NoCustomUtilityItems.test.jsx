/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import ApplicationBase from 'terra-application/lib/application-base';
import ApplicationNavigation from '../../../ApplicationNavigation';

// TODO: remove terra-application after it is incorporated into dev-site for themes or themes are co-located
const NoCustomUtilityItemsTest = () => (
  <ApplicationBase locale="en">
    <ApplicationNavigation
      onSelectSettings={() => alert('Settings Selected')} // eslint-disable-line no-alert
      onSelectHelp={() => alert('Help Selected')} // eslint-disable-line no-alert
      onSelectLogout={() => alert('Logout Selected')} // eslint-disable-line no-alert
    />
  </ApplicationBase>
);

export default NoCustomUtilityItemsTest;
