import React from 'react';
import PropTypes from 'prop-types';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import { ApplicationList } from 'terra-application-links';
import MenuToolbar from './MenuToolbar';

import './MenuList.scss';

const propTypes = {
  routingStackDelegate: RoutingStackDelegate.propType,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string,
    text: PropTypes.string,
  })),
  headerText: PropTypes.string,
};

const MenuList = ({ routingStackDelegate, links, headerText }) => (
  <ApplicationMenuLayout
    header={<MenuToolbar text={headerText} routingStackDelegate={routingStackDelegate} />}
    content={<ApplicationList links={links} />}
  />
);

MenuList.propTypes = propTypes;

export default MenuList;
