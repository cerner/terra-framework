
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Placeholder from '../common/Placeholder';
import { itemConfigPropType } from '../../componentConfig';

const propTypes = {
  config: itemConfigPropType,
};

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

ComponentTests.propTypes = propTypes;

export default ComponentTests;
