import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const Page1Content = ({ layoutConfig }) => (
  <div style={{ height: 'calc(100% - 10px)', width: 'calc(100% - 10px)', border: '4px dashed lightgrey', margin: '5px', position: 'relative' }}>
    <div style={{ position: 'absolute', top: '50%', left: '50%', color: 'grey', transform: 'translateX(-50%)' }}>
      <h2 style={{ margin: '0' }}>Page 1 Content</h2>
      {layoutConfig.toggleMenu && <button style={{ display: 'inline', marginLeft: '5px', height: '25px', border: '1px dashed lightgrey' }} onClick={layoutConfig.toggleMenu}>Toggle Menu</button>}
      <Route
        path="/page1/item1" render={() => (
          <h2>Item 1</h2>
        )}
      />
      <Route
        path="/page1/item2" render={() => (
          <h2>Item 2</h2>
        )}
      />
    </div>
  </div>
);

Page1Content.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
};

export default Page1Content;
