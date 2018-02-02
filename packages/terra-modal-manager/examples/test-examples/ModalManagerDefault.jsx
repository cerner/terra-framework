import React from 'react';

import ModalManager from '../../lib/index';
import DemoContainer from './test-content/DemoContainer';

const ModalManagerDefault = () => (
  <ModalManager>
    <DemoContainer identifier="root-component" />
  </ModalManager>
);

export default ModalManagerDefault;
