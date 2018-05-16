import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalManager from 'terra-modal-manager';
import CompleteNotificationDialog from './CompleteNotificationDialog';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <h4> Notification Dialog on Modal Manager</h4>
      <p> Notification Dialog has the highest z-index of 9001. Click the button to trigger Notification Dialog </p>
      <CompleteNotificationDialog />
    </ModalManager>
  </div>
);

ModalManagerExample.propTypes = propTypes;

export default ModalManagerExample;
