import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentComponent from 'terra-disclosure-manager/examples/index-examples/ContentComponent';

import Modal from '../../src/Modal';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const ModalExample = () => (
  <div className={cx('example-wrapper')}>
    <Modal>
      <ContentComponent disclosureType="modal" />
    </Modal>
  </div>
);

ModalExample.propTypes = propTypes;

export default ModalExample;
