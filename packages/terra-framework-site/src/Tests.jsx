import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Route, Switch, Redirect, Link, withRouter } from 'react-router-dom';

import LayoutTests from 'terra-layout/tests/nightwatch/LayoutTests';
import LayoutDefault from 'terra-layout/tests/nightwatch/LayoutDefault';
import LayoutNoMenu from 'terra-layout/tests/nightwatch/LayoutNoMenu';
import LayoutLongText from 'terra-layout/tests/nightwatch/LayoutLongText';

const Tests = () => (
  <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      <Route
        path="/tests"
        render={() => (
          <div style={{ height: '100%' }}>
            <Switch>
              <Route path="/tests/layout-tests/default" component={LayoutDefault} />
              <Route path="/tests/layout-tests/no-menu" component={LayoutNoMenu} />
              <Route path="/tests/layout-tests/long-text" component={LayoutLongText} />
              <Route path="/tests/layout-tests" component={LayoutTests} />
              <Redirect to="/tests/layout-tests" />
            </Switch>
          </div>
        )}
      />
      <Redirect to="/tests" />
    </Switch>
  </div>
);

export default withRouter(Tests);
