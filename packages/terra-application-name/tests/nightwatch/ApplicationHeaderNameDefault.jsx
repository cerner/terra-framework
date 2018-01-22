import React from 'react';

import ApplicationHeaderName from '../../lib/ApplicationHeaderName';

const color = { color: 'black' };

export default () => (
  <ApplicationHeaderName
    id="default"
    style={color}
    title="Title"
    subtitle="Subtitle"
    accessory={<img alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />}
    size={'small'}
  />
);
