import React from 'react';
import TestExample from 'terra-disclosure-manager/examples/test-content/TestExample';
import ModalManager from '../../lib/index';

const ModalManagerDefault = () => (
  <div role="main">
    <ModalManager>
      <TestExample identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
