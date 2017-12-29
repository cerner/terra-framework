import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import Placeholder from '../common/Placeholder';
import { itemConfigPropType } from '../configPropTypes';

const propTypes = {
  config: itemConfigPropType,
  siteRoot: PropTypes.string,
};

const ComponentTests = ({ config, siteRoot }) => (
  <div id="test-root" style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      {config.tests.map(test => (
        <Route
          key={siteRoot + test.path}
          path={`${siteRoot}${config.testsRoot}${test.path}`}
          component={test.component}
        />
      ))}
      <Route
        path={`${siteRoot}${config.testsRoot}`} render={() => (
          <Placeholder text={`${config.name} Tests`} />
        )}
      />
    </Switch>
  </div>
);

ComponentTests.propTypes = propTypes;

export default ComponentTests;
