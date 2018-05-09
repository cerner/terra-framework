import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import ModalManager from 'terra-modal-manager';
import ModalContainer from './common/PopupModalContainer';

const ModalManagerDemo = () => (
  <ModalManager>
    <ModalContainer />
  </ModalManager>
);

export default ModalManagerDemo;
