import React from 'react';
import { withRouter } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import Image from 'terra-image';
import MenuList from './common/menu/MenuList';
import RoutingDelegate from './common/navigation/routing/RoutingDelegate';

const propTypes = {
  routingManager: RoutingDelegate.propType,
};

const ApplicationMenu = ({ routingManager }) => (
  <MenuList
    headerText="Terra Framework"
    routingManager={routingManager}
    links={[
      { id: '/home', path: '/home', text: 'Home' },
      { id: '/components', path: '/components', text: 'Components' },
      { id: '/tests', path: '/tests', text: 'Tests' },
    ]}
  />
);

ApplicationMenu.propTypes = propTypes;

export default withRouter(ApplicationMenu);
