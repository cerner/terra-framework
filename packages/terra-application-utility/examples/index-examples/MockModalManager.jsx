import React from 'react';
import PropTypes from 'prop-types';
import ModalManager from 'terra-modal-manager';
import MockApplicationMenu from './MockApplicationMenu';

const propTypes = {
  behavior: PropTypes.string,
};

const MockModalManager = () => (
  <div >
    <ModalManager>
      <MockApplicationMenu />
    </ModalManager>
  </div>
);

MockModalManager.propTypes = propTypes;

export default MockModalManager;
