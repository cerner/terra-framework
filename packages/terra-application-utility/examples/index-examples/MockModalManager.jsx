import React from 'react';
import PropTypes from 'prop-types';
import ModalManager from 'terra-modal-manager';
// import classNames from 'classnames/bind';
import MockApplicationMenu from './MockApplicationMenu';


// import styles from './example-styles.scss';

// const cx = classNames.bind(styles);

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
