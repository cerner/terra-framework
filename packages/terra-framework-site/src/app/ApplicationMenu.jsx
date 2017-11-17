import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/routing/RoutingStackDelegate';

import MenuList from './common/menu/MenuList';

const propTypes = {
  navigation: PropTypes.object,
  routingStackDelegate: RoutingStackDelegate.propType,
};

const ApplicationMenu = ({ navigation, routingStackDelegate }) => (
  <MenuList
    headerText="Terra Framework"
    routingStackDelegate={routingStackDelegate}
    links={navigation.links.map(item => ({
      id: item.path,
      path: item.path,
      text: item.text,
    }))}
  />
);

ApplicationMenu.propTypes = propTypes;

export default withRouter(ApplicationMenu);
