/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Route } from 'react-router';
import LayoutTests from './LayoutTests';
import LayoutDefault from './LayoutDefault';
import LayoutNoMenu from './LayoutNoMenu';
import LayoutLongText from './LayoutLongText';

const routes = (
  <div>
    <Route path="/tests/layout-tests" component={LayoutTests} />
    <Route path="/tests/layout-tests/default" component={LayoutDefault} />
    <Route path="/tests/layout-tests/no-menu" component={LayoutNoMenu} />
    <Route path="/tests/layout-tests/long-text" component={LayoutLongText} />
  </div>
);

export default routes;
