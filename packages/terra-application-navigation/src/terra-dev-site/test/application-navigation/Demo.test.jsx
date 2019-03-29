/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import Application from 'terra-application';

import ApplicationNavigationDemo from './test-apps/ApplicationNavigationDemo';

const Demo = () => (
  <MemoryRouter>
    <Application>
      <ApplicationNavigationDemo />
    </Application>
  </MemoryRouter>
);

export default Demo;
