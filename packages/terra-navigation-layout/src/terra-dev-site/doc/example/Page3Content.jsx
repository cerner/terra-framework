import React from 'react';
import PropTypes from 'prop-types';

const inlineButtonStyle = {
  display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey',
};

const Page3Content = ({ layoutConfig }) => (
  <div style={{
    height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative',
  }}
  >
    <div style={{
      position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translate3d(-50%, -50%, 0)',
    }}
    >
      <h2 style={{ margin: '0' }}>Page 3 Content</h2>
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          style={inlineButtonStyle}
          onClick={layoutConfig.toggleMenu}
        >
        Toggle Menu
        </button>
        )
      }
    </div>
  </div>
);

Page3Content.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
};

export default Page3Content;
