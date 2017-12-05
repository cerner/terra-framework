import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ApplicationMenuLayout from 'terra-application-menu-layout';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
import MenuToolbar from './MenuToolbar';
import MenuLinkWrapper from './MenuLinkWrapper';

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
    content={
      <MenuLinkWrapper>
        {links.map(link => (
          <NavLink
            key={link.id}
            className="cm-link"
            location={routingStackDelegate.location}
            to={link.path}
            activeStyle={{
              fontWeight: 'bold',
            }}
          >
            {link.text}
          </NavLink>
        ))}
      </MenuLinkWrapper>
    }
  />
);

MenuList.propTypes = propTypes;

export default MenuList;
