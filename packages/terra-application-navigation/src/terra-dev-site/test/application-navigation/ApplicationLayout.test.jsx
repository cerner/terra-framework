/* eslint-disable import/no-extraneous-dependencies, import/no-webpack-loader-syntax, import/first, import/no-unresolved, import/extensions  */
import React from 'react';
import {
  MemoryRouter,
} from 'react-router-dom';

import ApplicationBase from './test-app/ApplicationBase';
import TestApplication from './test-app/TestApplication';

const ApplicationLayoutTestWrapper = () => (
  <MemoryRouter>
    <ApplicationBase>
      <TestApplication />
    </ApplicationBase>
  </MemoryRouter>
);

export default ApplicationLayoutTestWrapper;
