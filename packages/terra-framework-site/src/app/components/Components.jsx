import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

const Components = ({ config }) => (
  <div style={{ height: '100%', position: 'relative', padding: '15px' }}>
    <Switch>
      {Object.keys(config).map((componentKey) => {
        const example = config[componentKey].example;
        if (example) {
          return (
            <Route key={example.path} path={example.path} component={example.component} />
          );
        }
        return undefined;
      })}
      <Redirect to={Object.keys(config).map(componentKey => (config[componentKey].example)).filter(example => !!example)[0].path} />
    </Switch>
  </div>
);

export default Components;
