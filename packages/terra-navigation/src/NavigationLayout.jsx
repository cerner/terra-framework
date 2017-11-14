import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import Layout from 'terra-layout';
import { navigationConfigPropType, configHasMatchingRoute } from './routing/RoutingConfigUtils';

const propTypes = {
  app: AppDelegate.propType,
  header: PropTypes.element,
  children: PropTypes.element,
  location: PropTypes.object,
  menu: PropTypes.element,
  menuText: PropTypes.string,
  routeConfig: navigationConfigPropType,
};

class NavigationLayout extends React.Component {
  static getBreakpointSize() {
    const width = window.innerWidth;

    if (width >= 1440) {
      return 'huge';
    } else if (width >= 1216) {
      return 'large';
    } else if (width >= 992) {
      return 'medium';
    } else if (width >= 768) {
      return 'small';
    }
    return 'tiny';
  }

  constructor(props) {
    super(props);

    this.updateSize = this.updateSize.bind(this);

    this.state = {
      size: NavigationLayout.getBreakpointSize(),
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateSize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    const newSize = NavigationLayout.getBreakpointSize();

    if (this.state.size !== newSize) {
      this.setState({
        size: newSize,
      });
    }
  }

  decorateElement(element) {
    if (!element) {
      return null;
    }
    const { app, routeConfig } = this.props;
    const { size } = this.state;

    return React.cloneElement(element, {
      app,
      routingManager: {
        size,
        location,
        routeConfig,
      },
    });
  }

  render() {
    const { header, children, menu, menuText, routeConfig, location } = this.props;

    let menuComponent;
    if (configHasMatchingRoute(location.pathname, routeConfig.menuRoutes, this.state.size)) {
      menuComponent = this.decorateElement(menu);
    }

    return (
      <Layout
        header={this.decorateElement(header)}
        menu={menuComponent}
        menuText={menuText}
      >
        {this.decorateElement(children)}
      </Layout>
    );
  }
}

NavigationLayout.propTypes = propTypes;

export default withRouter(NavigationLayout);
