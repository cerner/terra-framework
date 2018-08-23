import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import RoutingStackDelegate from '../../../RoutingStackDelegate';

const inlineButtonStyle = {
  display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey',
};

const Page2Menu = ({ layoutConfig, routingStackDelegate }) => (
  <div style={{
    height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative',
  }}
  >
    <div style={{
      position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translate3d(-50%, -50%, 0)',
    }}
    >
      {routingStackDelegate && routingStackDelegate.showParent
        && (
        <button
          type="button"
          style={inlineButtonStyle}
          onClick={routingStackDelegate.showParent}
        >
Go Back
        </button>
        )}
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          style={inlineButtonStyle}
          onClick={layoutConfig.toggleMenu}
        >
Toggle Menu
        </button>
        )}
      {layoutConfig.togglePin && !layoutConfig.menuIsPinned
        && (
        <button
          type="button"
          style={inlineButtonStyle}
          onClick={layoutConfig.togglePin}
        >
Pin
        </button>
        )}
      {layoutConfig.togglePin && layoutConfig.menuIsPinned
        && (
        <button
          type="button"
          style={inlineButtonStyle}
          onClick={layoutConfig.togglePin}
        >
Unpin
        </button>
        )}
      <h2 style={{ margin: '0' }}>Page 2 Menu</h2>
    </div>
  </div>
);

Page2Menu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
  routingStackDelegate: RoutingStackDelegate.propType,
};

export default withRouter(Page2Menu);
