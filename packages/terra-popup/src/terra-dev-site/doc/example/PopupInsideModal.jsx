import React from 'react';
import ModalManager from 'terra-modal-manager';
// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import ModalContainer from 'terra-popup/lib/terra-dev-site/doc/example/PopupModalContainer';

const ModalManagerDemo = () => (
  <ModalManager>
    <ModalContainer />
  </ModalManager>
);

export default ModalManagerDemo;
