/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '../common/menu/MenuList';

const propTypes = {
  routingManager: PropTypes.object,
};

const LayoutTests = props => (
  <MenuList
    headerText="Application Toolbar Tests"
    routingManager={props.routingManager}
    links={[
      { id: '/tests/application-toolbar/default', path: '/tests/application-toolbar/default', text: 'Application Toolbar - Default' },
    ]}
  />
);

LayoutTests.propTypes = propTypes;

export default LayoutTests;
