import React from 'react';
import TestExample from 'terra-disclosure-manager/examples/test-content/TestExample';
import ModalManager from '../../lib/ModalManager';

const ModalManagerDefault = () => (
  <ModalManager>
    <TestExample role="main" identifier="root-component" disclosureType="modal" />
  </ModalManager>
);

export default ModalManagerDefault;
