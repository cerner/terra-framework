import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';

import MenuList from './common/menu/MenuList';

const propTypes = {
  menuHeader: PropTypes.string,
  navigation: PropTypes.object,
  routingStackDelegate: RoutingStackDelegate.propType,
};

const ApplicationMenu = ({ menuHeader, navigation, routingStackDelegate }) => (
  <MenuList
    headerText={menuHeader}
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
