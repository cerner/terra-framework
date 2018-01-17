/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import EmbeddedComponentTests from './EmbeddedComponentTests';

// Test Cases
import DefaultEmbeddedComponent from './DefaultEmbeddedComponent';

const routes = (
  <div>
    <Route path="/tests/embedded-component-tests" component={EmbeddedComponentTests} />
    <Route path="/tests/embedded-component-tests/default" component={DefaultEmbeddedComponent} />
  </div>
);

export default routes;
