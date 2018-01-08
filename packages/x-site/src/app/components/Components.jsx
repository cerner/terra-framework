import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { siteConfigPropType } from '../config/proptypes.config';
import SiteUtils from './SiteUtils';
import Placeholder from '../common/Placeholder';

const propTypes = {
  config: siteConfigPropType,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  pathRoot: PropTypes.string,
  exampleType: PropTypes.string,
};

const generateTestComponentPlaceholders = (config, pathRoot) => {
  const testPlaceholders = Object.keys(config).map(componentKey => (
    <Route
      exact
      key={`${pathRoot}${config[componentKey].path}`}
      path={`${pathRoot}${config[componentKey].path}`}
      render={() => (
        <Placeholder
          text={`${config[componentKey].name} Tests`}
        />
      )}
    />
  ));

  testPlaceholders.push(<Route
    exact
    key={`${pathRoot}`}
    path={`${pathRoot}`}
    render={() => (
      <Placeholder text="Tests" />
    )}
  />);

  return testPlaceholders;
};

const generateComponentRoutes = (config, exampleType, pathRoot) => (
  SiteUtils.aggregateExamples(config, exampleType, pathRoot).map(
    component => (
      <Route
        exact
        key={component.fullPath}
        path={`${component.fullPath}`}
        component={component.component}
      />
    ),
  )
);

const generateRedirect = (pathRoot, location) => {
  if (location.pathname === '/site/components') {
    return <Redirect exact to={pathRoot} />;
  }
  return null;
};

class Components extends React.Component {
  static findPathRoot(config, exampleType, pathRoot) {
    const examples = SiteUtils.aggregateExamples(config, exampleType, pathRoot);
    let path = pathRoot;

    if (examples.length > 0) {
      const firstComponent = examples[0];
      if (firstComponent && exampleType === 'tests') {
        path = firstComponent.path;
      } else {
        path = firstComponent.fullPath;
      }
    }

    return path;
  }

  constructor(props) {
    super(props);
    this.firstComponentPath = `${Components.findPathRoot(props.config, props.exampleType, props.pathRoot)}`;
  }

  componentDidUpdate(prevProps) {
    if (this.element && prevProps.location.pathname !== this.props.location.pathname) {
      this.element.scrollTop = 0;
    }
  }

  render() {
    const { config, exampleType, location, pathRoot } = this.props;

    return (
      <div
        ref={(element) => { this.element = element; }}
        style={{ height: '100%', position: 'relative', padding: '15px', overflow: 'auto' }}
      >
        <Switch>
          {generateComponentRoutes(config, exampleType, pathRoot)}
          {exampleType === 'tests' ? generateTestComponentPlaceholders(config, pathRoot) : null}
          {generateRedirect(this.firstComponentPath, location)}
        </Switch>
      </div>
    );
  }
}

Components.propTypes = propTypes;

export default withRouter(Components);
