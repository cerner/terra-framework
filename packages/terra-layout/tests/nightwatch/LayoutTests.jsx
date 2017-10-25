/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { Link } from 'react-router';

const LabelValueViewTests = () => (
  <div>
    <ul>
      <li><Link to="/tests/layout-tests/default">Layout - Default </Link></li>
      <li><Link to="/tests/layout-tests/no-menu">Layout - No Menu</Link></li>
      <li><Link to="/tests/layout-tests/long-text">Layout - Long Text</Link></li>
    </ul>
  </div>
);

export default LabelValueViewTests;
