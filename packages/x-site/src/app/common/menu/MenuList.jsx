import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import RoutingStackDelegate from 'terra-navigation-layout/lib/RoutingStackDelegate';
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
  <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
    <ContentContainer
      header={<MenuToolbar text={headerText} routingStackDelegate={routingStackDelegate} />}
      fill
    >
      <div className="menu-container">
        <div className="menu-back-region">
          {}
        </div>
        <div className="menu-content-region">
          <div>
            {links.map(link => (
              <NavLink
                key={link.id}
                className="menu-link"
                location={routingStackDelegate.location}
                to={link.path}
                activeStyle={{
                  fontWeight: 'bold',
                }}
              >
                {link.text}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </ContentContainer>
  </div>
);

MenuList.propTypes = propTypes;

export default MenuList;
