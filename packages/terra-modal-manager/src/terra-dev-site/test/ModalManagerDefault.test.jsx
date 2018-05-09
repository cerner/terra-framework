import React from 'react';
import TestExample from 'terra-disclosure-manager/examples/test-content/TestExample';
import ModalManager from '../../ModalManager';

const ModalManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <ModalManager>
      <TestExample identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
