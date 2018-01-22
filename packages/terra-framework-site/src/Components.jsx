import React from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import LayoutExamples from './examples/layout/Index';
import NavigationExamples from './examples/navigation-layout/Index';
import ApplicationHeaderLayoutExamples from './examples/application-header-layout/Index';
import ApplicationMenuLayoutExamples from './examples/application-menu-layout/Index';
import ApplicationNameExamples from './examples/application-name/Index';

const Components = () => (
  <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      <Route path="/components/layout" component={LayoutExamples} />
      <Route path="/components/navigation-layout" component={NavigationExamples} />
      <Route path="/components/application-header-layout" component={ApplicationHeaderLayoutExamples} />
      <Route path="/components/application-menu-layout" component={ApplicationMenuLayoutExamples} />
      <Route path="/components/application-name" component={ApplicationNameExamples} />
      <Redirect to="/components/layout" />
    </Switch>
  </div>
);

export default withRouter(Components);
