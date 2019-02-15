/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import Application from 'terra-application';

import StandardApplicationNavigation from './test-apps/StandardApplicationNavigation';

const StandardApplicationNavigationTest = () => (
  <MemoryRouter>
    <Application>
      <StandardApplicationNavigation />
    </Application>
  </MemoryRouter>
);

export default StandardApplicationNavigationTest;
