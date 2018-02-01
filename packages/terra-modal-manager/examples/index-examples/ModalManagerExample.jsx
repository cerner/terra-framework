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

const SlidePanelManagerExample = ({ behavior }) => (
  <div className={cx('example-wrapper')}>
    <ModalManager panelBehavior={behavior}>
      <ManagerContentComponent disclosureType="panel" />
    </ModalManager>
  </div>
);

SlidePanelManagerExample.propTypes = propTypes;

export default SlidePanelManagerExample;
