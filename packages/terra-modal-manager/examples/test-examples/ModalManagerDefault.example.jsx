import React from 'react';
import TestExample from 'terra-disclosure-manager/examples/test-content/TestExample';
import ModalManger from '../../lib/ModalManager';

const ModalMangerDefault = () => (
  <div role="main">
    <ModalManger>
      <TestExample identifier="root-component" disclosureType="modal" />
    </ModalManger>
  </div>
);

export default ModalMangerDefault;
