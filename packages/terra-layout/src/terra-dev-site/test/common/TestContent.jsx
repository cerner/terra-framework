import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  layoutConfig: PropTypes.object,
};

const TestContent = ({ layoutConfig }) => (
  <div
    id="test-content"
    style={{
      height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative',
    }}
  >
    <div style={{
      position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translateX(-50%)',
    }}
    >
      <h2 style={{ margin: '0' }}>Content</h2>
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          className="test-content-toggle"
          style={{
            display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey',
          }}
          onClick={layoutConfig.toggleMenu}
        >
Toggle Menu
        </button>
        )}
    </div>
  </div>
);

TestContent.propTypes = propTypes;

export default TestContent;
