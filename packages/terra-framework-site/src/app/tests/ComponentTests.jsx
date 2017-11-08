
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Placeholder from '../common/Placeholder';

const ComponentTests = ({ config }) => (
  <div id="test-root" style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      {config.tests.map(test => (
        <Route key={test.path} path={config.testRoot + test.path} component={test.component} />
        ))}
      <Route
        path={config.testRoot} render={() => (
          <Placeholder text={`${config.name} Tests`} />
        )}
      />
    </Switch>
  </div>
);

const injectConfig = config => (
  ComponentClass => (
      props => (
        <ComponentClass {...props} config={config} />
      )
  )
);

export default ComponentTests;
export { injectConfig };
