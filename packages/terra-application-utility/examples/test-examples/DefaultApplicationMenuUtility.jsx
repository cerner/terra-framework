import React from 'react';
import PropTypes from 'prop-types';
import ModalManager from 'terra-modal-manager';
import ApplicationMenuUtility from './private/_DefaultApplicationMenuUtility';


const propTypes = {
  behavior: PropTypes.string,
};

const MockModalManager = () => (
  <div >
    <ModalManager>
      <ApplicationMenuUtility />
    </ModalManager>
  </div>
);

MockModalManager.propTypes = propTypes;

export default MockModalManager;
