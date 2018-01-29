/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Route } from 'react-router';
import AggregatorTests from './AggregatorTests';

// Test Cases
import DefaultAggregator from './DefaultAggregator';

const routes = (
  <div>
    <Route path="/tests/aggregator-tests" component={AggregatorTests} />
    <Route path="/tests/aggregator-tests/default" component={DefaultAggregator} />
  </div>
);

export default routes;
