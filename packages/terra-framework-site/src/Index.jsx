import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
import LayoutExamples from './examples/layout/Index';
import NavigationExamples from './examples/navigation/Index';

// Test Routes
/* eslint-disable import/first */
import LayoutTestRoutes from 'terra-layout/tests/nightwatch/LayoutTestRoutes';
import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      <Route path="/layout" component={LayoutExamples} />
      <Route path="/navigation" component={NavigationExamples} />
    </Route>
    <Route path="/tests" component={TestLinks} />
    {LayoutTestRoutes}
  </Router>
), document.getElementById('root'));
