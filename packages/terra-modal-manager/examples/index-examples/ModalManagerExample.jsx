import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ModalManager from '../../src/index';
import ManagerContentComponent from './ManagerContentComponent';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <ManagerContentComponent disclosureType="panel" />
    </ModalManager>
  </div>
);

ModalManagerExample.propTypes = propTypes;

export default ModalManagerExample;
