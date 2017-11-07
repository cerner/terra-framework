import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  layoutConfig: PropTypes.object,
};

const TestMenu = ({ layoutConfig }) => (
  <div id="test-menu" style={{ height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translateX(-50%)' }}>
      <h2 style={{ margin: '0' }}>Menu</h2>
      {layoutConfig.toggleMenu && <button className="test-menu-toggle" style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.toggleMenu}>Toggle Menu</button>}
    </div>
  </div>
);

TestMenu.propTypes = propTypes;

export default TestMenu;
