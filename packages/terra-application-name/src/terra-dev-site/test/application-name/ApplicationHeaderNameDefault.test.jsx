import React from 'react';
import Image from 'terra-image';
import ApplicationHeaderName from '../../../ApplicationHeaderName';

export default () => (
  <div style={{ backgroundColor: 'green' }}>
    <ApplicationHeaderName
      id="default"
      title="Title"
      accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />}
    />
  </div>
);
