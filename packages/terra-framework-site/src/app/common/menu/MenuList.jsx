import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import ContentContainer from 'terra-content-container';
import RoutingDelegate from 'terra-navigation/lib/routing/RoutingDelegate';
import MenuToolbar from './MenuToolbar';

import './MenuList.scss';

const propTypes = {
  routingManager: RoutingDelegate.propType,
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    path: PropTypes.string,
    text: PropTypes.string,
  })),
  headerText: PropTypes.string,
};

const MenuList = ({ routingManager, links, headerText }) => (
  <div style={{ height: '100%', width: '100%', position: 'absolute' }}>
    <ContentContainer
      header={<MenuToolbar text={headerText} routingManager={routingManager} />}
      fill
    >
      <div className="cm-container">
        <div className="cm-backRegion">
          {}
        </div>
        <div className="cm-contentRegion">
          <div>
            {links.map(link => (
              <NavLink
                key={link.id}
                className="cm-link"
                location={routingManager.browserLocation}
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
