/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import Application from 'terra-application';

import ApplicationNavigationTest from './test-apps/ApplicationNavigationTest';

const NoSettingsOrHelpTest = () => (
  <MemoryRouter>
    <Application locale="en-US">
      <ApplicationNavigationTest hideNavigationItems />
    </Application>
  </MemoryRouter>
);

export default NoSettingsOrHelpTest;
