import React from 'react';
import Image from 'terra-image';
import ApplicationMenuName from '../../../ApplicationMenuName';

export default () => (
  <div style={{ width: '150px', backgroundColor: 'green' }}>
    <ApplicationMenuName
      id="truncated"
      title="TitleTitleTitleTitleTitleTitleTitle"
      accessory={<Image alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />}
    />
  </div>
);
