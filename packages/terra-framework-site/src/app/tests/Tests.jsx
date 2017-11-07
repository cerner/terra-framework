import React from 'react';
// import AppDelegate from 'terra-app-delegate';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import LayoutDefault from 'terra-layout/tests/nightwatch/LayoutDefault';
import LayoutNoMenu from 'terra-layout/tests/nightwatch/LayoutNoMenu';
import LayoutLongText from 'terra-layout/tests/nightwatch/LayoutLongText';
import LayoutNoHeader from 'terra-layout/tests/nightwatch/LayoutNoHeader';

const Tests = () => (
  <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      <Route
        path="/tests"
        render={() => (
          <div id="layout-tests-root" style={{ height: '100%' }}>
            <Switch>
              <Route path="/tests/layout/default" component={LayoutDefault} />
              <Route path="/tests/layout/no-menu" component={LayoutNoMenu} />
              <Route path="/tests/layout/long-text" component={LayoutLongText} />
              <Route path="/tests/layout/no-header" component={LayoutNoHeader} />
            </Switch>
          </div>
        )}
      />
      <Redirect to="/tests" />
    </Switch>
  </div>
);

export default withRouter(Tests);
