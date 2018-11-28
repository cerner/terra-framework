import React from 'react';
import DisclosureComponent from './DisclosureComponent';
import ModalManager from '../../../ModalManager';

const ModalManagerDefault = () => (
  <div role="main" style={{ height: '100%' }}>
    <ModalManager>
      <DisclosureComponent identifier="root-component" disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerDefault;
