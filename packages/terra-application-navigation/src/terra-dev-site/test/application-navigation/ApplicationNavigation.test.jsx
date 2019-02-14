/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';
import Application from 'terra-application';

import TestApplication from './test-app/TestApplication';

const ApplicationLayoutTestWrapper = () => (
  <MemoryRouter>
    <Application>
      <TestApplication />
    </Application>
  </MemoryRouter>
);

export default ApplicationLayoutTestWrapper;
