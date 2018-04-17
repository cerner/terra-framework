import React from 'react';
import TestExample from 'terra-disclosure-manager/examples/test-content/TestExample';
import Modal from '../../lib/Modal';

const ModalDefault = () => (
  <div role="main">
    <Modal>
      <TestExample identifier="root-component" disclosureType="modal" />
    </Modal>
  </div>
);

export default ModalDefault;
