/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import NavigationSecondaryTests from './NavigationSecondaryTests';
import DefaultNavigationSecondary from './DefaultNavigationSecondary';

const routes = (
  <div>
    <Route path="/tests/navigation-secondary-tests" component={NavigationSecondaryTests} />
    <Route path="/tests/navigation-secondary-tests/default" component={DefaultNavigationSecondary} />
  </div>
);

export default routes;
