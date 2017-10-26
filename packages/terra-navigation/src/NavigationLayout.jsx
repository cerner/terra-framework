import React from 'react';
import PropTypes from 'prop-types';
import {
  withRouter,
} from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';
import breakpoints from 'terra-responsive-element/lib/breakpoints.scss';
import { navigationConfigPropType } from './routing/RoutingConfigUtils';
import Layout from 'terra-layout';

const propTypes = {
  app: AppDelegate.propType,
  applicationToolbar: PropTypes.element,
  contentRoutingVessel: PropTypes.element,
  location: PropTypes.object,
  menuRoutingVessel: PropTypes.element,
  menuText: PropTypes.string,
  routeConfig: navigationConfigPropType,
};

class NavigationLayout extends React.Component {
  static getBreakpointSize() {
    const width = window.innerWidth;
    const { small, medium, large, huge } = breakpoints;

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
    const { applicationToolbar, contentRoutingVessel, menuRoutingVessel, menuText, ...customProps } = this.props;

    return (
      <Layout
        {...customProps}
        header={this.decorateElement(applicationToolbar)}
        menu={this.decorateElement(menuRoutingVessel)}
        menuText={menuText}
      >
        {this.decorateElement(contentRoutingVessel)}
      </Layout>
    );
  }
}

NavigationLayout.propTypes = propTypes;

export default withRouter(NavigationLayout);
