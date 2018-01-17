/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ApplicationNameTests from './ApplicationNameTests';

// Test Cases
import DefaultApplicationName from './DefaultApplicationName';

const routes = (
  <div>
    <Route path="/tests/application-name-tests" component={ApplicationNameTests} />
    <Route path="/tests/application-name-tests/default" component={DefaultApplicationName} />
  </div>
);

export default routes;
