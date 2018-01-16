/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import ExternalComponentTests from './ExternalComponentTests';

// Test Cases
import DefaultExternalComponent from './DefaultExternalComponent';

const routes = (
  <div>
    <Route path="/tests/external-component-tests" component={ExternalComponentTests} />
    <Route path="/tests/external-component-tests/default" component={DefaultExternalComponent} />
  </div>
);

export default routes;
