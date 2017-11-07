/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import ContentContainer from 'terra-content-container';
import Button from 'terra-button';
import { Link } from 'react-router-dom';

const LayoutTests = props => (
  <ContentContainer
    fill
    header={(
      <Button text="Back" onClick={props.routingManager.goBack} />
    )}
  >
    <ul>
      <li><Link to="/tests/layout/default">Layout - Default </Link></li>
      <li><Link to="/tests/layout/no-menu">Layout - No Menu</Link></li>
      <li><Link to="/tests/layout/long-text">Layout - Long Text</Link></li>
    </ul>
  </ContentContainer>
);

export default LayoutTests;
