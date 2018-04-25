import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentComponent from 'terra-disclosure-manager/examples/index-examples/ContentComponent';

import ModalManger from '../../src/ModalManager';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const ModalMangerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManger>
      <ContentComponent disclosureType="modal" />
    </ModalManger>
  </div>
);

ModalMangerExample.propTypes = propTypes;

export default ModalMangerExample;
