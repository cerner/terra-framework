import React from 'react';

import ModalManager from '../../lib/index';
import DemoContainer from './test-content/DemoContainer';

const ModalManagerDefault = () => (
  <div role="main">
    <ModalManager>
      <DemoContainer identifier="root-component" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
