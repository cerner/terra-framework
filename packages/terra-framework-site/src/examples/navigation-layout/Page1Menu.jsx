import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import RoutingStackDelegate from 'terra-navigation-layout/lib/routing/RoutingStackDelegate';

const Page1Menu = ({ layoutConfig, routingStackDelegate }) => (
  <div style={{ height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translateX(-50%)' }}>
      {routingStackDelegate && routingStackDelegate.goBack && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={routingStackDelegate.goBack}>Go Back</button>}
      {layoutConfig.toggleMenu && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.toggleMenu}>Toggle Menu</button>}
      {layoutConfig.togglePin && !layoutConfig.menuIsPinned && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.togglePin}>Pin</button>}
      {layoutConfig.togglePin && layoutConfig.menuIsPinned && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.togglePin}>Unpin</button>}
      <h2 style={{ margin: '0' }}>Page 1 Menu</h2>
      <br />
      <Link to="/page1/item1">Item 1</Link>
      <br />
      <Link to="/page1/item2">Item 2</Link>
    </div>
  </div>
);

Page1Menu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
};

export default withRouter(Page1Menu);
