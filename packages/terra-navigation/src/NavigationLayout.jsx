import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import Layout from 'terra-layout';
import breakpoints from 'terra-responsive-element/lib/breakpoints.scss';

import NavigationLayoutContent from './NavigationLayoutContent';
import { navigationLayoutConfigPropType } from './configurationPropTypes';
import { configHasMatchingRoute } from './routing/routingUtils';

const getBreakpointSize = (queryWidth) => {
  const width = queryWidth || window.innerWidth;
  const { small, medium, large, huge } = breakpoints;

  if (width >= huge) {
    return 'huge';
  } else if (width >= large) {
    return 'large';
  } else if (width >= medium) {
    return 'medium';
  } else if (width >= small) {
    return 'small';
  }
  return 'tiny';
};

const propTypes = {
  header: PropTypes.element,
  menu: PropTypes.element,
  children: PropTypes.element,
  menuText: PropTypes.string,

  app: AppDelegate.propType,
  config: navigationLayoutConfigPropType,
  indexPath: PropTypes.string,

  location: PropTypes.object,
};

class NavigationLayout extends React.Component {
  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);

    this.state = {
      size: getBreakpointSize(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    const newSize = getBreakpointSize();

    if (this.state.size !== newSize) {
      this.setState({
        size: newSize,
      });
    }
  }

  decorateElement(element, routeConfig) {
    if (!element) {
      return null;
    }

    const { app } = this.props;
    const { size } = this.state;

    return React.cloneElement(element, {
      app,
      routeConfig,
      navigationLayoutSize: size,
    });
  }

  render() {
    const { header, children, menu, menuText, config, location, indexPath } = this.props;
    const { size } = this.state;

    const headerComponent = header || (
      <NavigationLayoutContent />
    );

    const contentComponent = children || (
      <NavigationLayoutContent redirect={indexPath} />
    );

    let menuComponent;
    if (configHasMatchingRoute(location.pathname, config.menu, size)) {
      menuComponent = menu || (
        <NavigationLayoutContent stackNavigationIsEnabled />
      );
    }

    return (
      <Layout
        header={this.decorateElement(headerComponent, config.header)}
        menu={this.decorateElement(menuComponent, config.menu)}
        menuText={menuText}
      >
        {this.decorateElement(contentComponent, config.content)}
      </Layout>
    );
  }
}

NavigationLayout.propTypes = propTypes;

export default withRouter(NavigationLayout);
