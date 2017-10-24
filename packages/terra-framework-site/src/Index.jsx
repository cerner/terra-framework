import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute, Redirect } from 'react-router';
import App from './App';
import Home from './Home';

// Examples
// import AlertExamples from './examples/alert/Index';

// Test Routes
/* eslint-disable import/first */
// import AlertTestRoutes from 'terra-alert/tests/nightwatch/AlertTestRoutes';
import TestLinks from './TestLinks';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/site" />
    <Route path="/site" component={App}>
      <IndexRoute component={Home} />
      {/* <Route path="alert" component={AlertExamples} /> */}
    </Route>
    <Route path="/tests" component={TestLinks} />
    {/* {AlertTestRoutes} */}
  </Router>
), document.getElementById('root'));
