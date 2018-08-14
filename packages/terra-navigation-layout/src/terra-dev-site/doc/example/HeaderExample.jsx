import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const propTypes = {
  layoutConfig: PropTypes.shape({}),
};

const inlineButtonStyle = {
  display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey',
};

const HeaderExample = ({ layoutConfig }) => (
  <div style={{
    height: '60px', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative', display: 'flex',
  }}
  >
    <div style={{
      position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translate3d(-50%, -50%, 0)',
    }}
    >
      <h2 style={{ display: 'inline', margin: 0 }}>Header</h2>
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
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page1" style={{ paddingLeft: '5px' }}>Page 1</Link>}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page2" style={{ paddingLeft: '5px' }}>Page 2</Link>}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page3" style={{ paddingLeft: '5px' }}>Page 3</Link>}
    </div>
  </div>
);
HeaderExample.propTypes = propTypes;

export default withRouter(HeaderExample);
