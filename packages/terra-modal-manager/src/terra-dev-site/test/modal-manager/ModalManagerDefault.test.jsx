import React from 'react';
import TestExample from 'terra-disclosure-manager/lib/terra-dev-site/test/common/TestExample';
import ModalManager from '../../../ModalManager';

const ModalManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <ModalManager>
      <TestExample identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
