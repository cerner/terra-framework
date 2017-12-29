import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { siteConfigPropType } from '../configPropTypes';
import aggregateExamples from './ComponentsUtils';

const propTypes = {
  config: siteConfigPropType,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  siteRoot: PropTypes.string,
};

const generateRoutes = (config, siteRoot) => (
  aggregateExamples(config).map(
    example => (
      <Route
        key={siteRoot + example.fullPath}
        path={`${siteRoot}${example.fullPath}`}
        component={example.component}
      />
    ),
  )
);

const generateRedirect = (location, config, siteRoot) => {
  const firstExample = aggregateExamples(config)[0];

  if (firstExample) {
    const firstExamplePath = `${siteRoot}${firstExample.fullPath}`;

    if (firstExamplePath !== location.pathname) {
      return <Redirect to={firstExamplePath} />;
    }
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
    const { config, location, siteRoot } = this.props;
    return (
      <div
        ref={(element) => { this.element = element; }}
        style={{ height: '100%', position: 'relative', padding: '15px', overflow: 'auto' }}
      >
        <Switch>
          {generateRoutes(config, siteRoot)}
          {generateRedirect(location, config, siteRoot)}
        </Switch>
      </div>
    );
  }
}

Components.propTypes = propTypes;

export default withRouter(Components);
