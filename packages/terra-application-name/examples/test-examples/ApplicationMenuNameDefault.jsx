import React from 'react';

import ApplicationMenuName from '../../lib/ApplicationMenuName';

const color = { color: 'black' };

export default () => (
  <ApplicationMenuName
    id="default"
    style={color}
    title="Title"
    accessory={<img alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />}
  />
);
