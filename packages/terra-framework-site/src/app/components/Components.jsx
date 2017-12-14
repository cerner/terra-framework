import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { siteConfigPropType } from '../../componentConfig';

const propTypes = {
  config: siteConfigPropType,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
};

const generateRoutes = config => (
  Object.keys(config).map((componentKey) => {
    const example = config[componentKey].example;
    if (example) {
      return (
        <Route key={example.path} path={`/site${example.path}`} component={example.component} />
      );
    }
    return undefined;
  })
);

const generateRedirect = (config) => {
  const firstExample = Object.keys(config).map(componentKey => (config[componentKey].example)).filter(example => !!example)[0];
  if (firstExample) {
    return <Redirect to={`/site${firstExample.path}`} />;
  }
  return null;
};

class Components extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.element && prevProps.location.pathname !== this.props.location.pathname) {
      this.element.scrollTop = 0;
    }
  }

  render() {
    const { config } = this.props;

    return (
      <div ref={(element) => { this.element = element; }} style={{ height: '100%', position: 'relative', padding: '15px', overflow: 'auto' }}>
        <Switch>
          {generateRoutes(config)}
          {generateRedirect(config)}
        </Switch>
      </div>
    );
  }
}

Components.propTypes = propTypes;

export default withRouter(Components);
