import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import LayoutExamples from '../../examples/layout/Index';

const Components = () => (
  <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      <Route path="/components/layout" component={LayoutExamples} />
      <Redirect to="/components/layout" />
    </Switch>
  </div>
);

export default withRouter(Components);
