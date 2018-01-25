import React from 'react';

import ApplicationMenuName from '../../lib/ApplicationMenuName';

export default () => (
  <ApplicationMenuName
    id="default"
    title="Title"
    accessory={<img alt="terra accessory" variant="rounded" src="https://github.com/cerner/terra-core/raw/master/terra.png" height="26px" width="26px" />}
    size={'tiny'}
  />
);
