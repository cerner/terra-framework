/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import ApplicationNavigation from '../../../ApplicationNavigation';

const NoCustomUtilityItemsTest = () => (
  <ApplicationNavigation
    onSelectSettings={() => alert('Settings Selected')} // eslint-disable-line no-alert
    onSelectHelp={() => alert('Help Selected')} // eslint-disable-line no-alert
    onSelectLogout={() => alert('Logout Selected')} // eslint-disable-line no-alert
  />
);

export default NoCustomUtilityItemsTest;
