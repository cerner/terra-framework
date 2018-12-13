import React from 'react';
import Image from 'terra-image';
import ApplicationMenuName from '../../../ApplicationMenuName';

export default () => (
  <div style={{ width: '100%', backgroundColor: 'green' }}>
    <ApplicationMenuName
      id="default"
      title="Title"
      accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-framework/raw/master/terra.png" height="26px" width="26px" />}
    />
  </div>
);
