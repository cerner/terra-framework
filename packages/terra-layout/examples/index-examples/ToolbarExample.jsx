import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  layoutConfig: PropTypes.object,
};

const content = ({
  layoutConfig,
}) => (
  <div style={{ height: '60px', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative', display: 'flex' }}>
    <div style={{ position: 'absolute', top: '15px', left: '50%', color: 'grey', transform: 'translateX(-50%)' }}>
      <h2 style={{ display: 'inline', margin: 0 }}>Header</h2>
      {layoutConfig.toggleMenu && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.toggleMenu}>Toggle Menu</button>}
    </div>
  </div>
);
content.propTypes = propTypes;

export default content;
