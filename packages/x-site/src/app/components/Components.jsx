import React from 'react';
import path from 'path';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { siteConfigPropType } from '../configPropTypes';
import SiteUtils from './SiteUtils';
import Placeholder from '../common/Placeholder';

const propTypes = {
  config: siteConfigPropType,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }),
  siteRoot: PropTypes.string,
  exampleType: PropTypes.string,
};

const generateTestComponentPlaceholders = (config, siteRoot) => {
  const testPlaceholders = Object.keys(config).map(componentKey => (
    <Route
      exact
      key={`${siteRoot}${config[componentKey].testsRoot}`}
      path={`${siteRoot}${config[componentKey].testsRoot}`}
      render={() => (
        <Placeholder
          text={`${config[componentKey].name} Tests`}
        />
      )}
    />
  ));

  const testsRootPath = path.join(siteRoot, 'tests');
  testPlaceholders.push(<Route
    exact
    key={`${testsRootPath}`}
    path={`${testsRootPath}`}
    render={() => (
      <Placeholder text="Tests" />
    )}
  />);

  return testPlaceholders;
};

const generateComponentRoutes = (config, exampleType, siteRoot) => (
  SiteUtils.aggregateExamples(config, exampleType, siteRoot).map(
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
  static findPathRoot(config, exampleType, siteRoot) {
    const firstComponent = SiteUtils.aggregateExamples(config, exampleType, siteRoot)[0];
    let pathRoot = siteRoot;

    if (firstComponent && exampleType === 'tests') {
      pathRoot = firstComponent.pathRoot;
    } else {
      pathRoot = firstComponent.fullPath;
    }

    return pathRoot;
  }

  constructor(props) {
    super(props);
    this.firstComponentPath = `${Components.findPathRoot(props.config, props.exampleType, props.siteRoot)}`;
  }

  componentDidUpdate(prevProps) {
    if (this.element && prevProps.location.pathname !== this.props.location.pathname) {
      this.element.scrollTop = 0;
    }
  }

  render() {
    const { config, exampleType, location, siteRoot } = this.props;
    return (
      <div
        ref={(element) => { this.element = element; }}
        style={{ height: '100%', position: 'relative', padding: '15px', overflow: 'auto' }}
      >
        <Switch>
          {generateComponentRoutes(config, exampleType, siteRoot)}
          {exampleType === 'tests' ? generateTestComponentPlaceholders(config, siteRoot) : null}
          {generateRedirect(this.firstComponentPath, location)}
        </Switch>
      </div>
    );
  }
}

Components.propTypes = propTypes;

export default withRouter(Components);
