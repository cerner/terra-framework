import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SlidePanelManager from '../../src/SlidePanelManager';
import ManagerContentComponent from './ManagerContentComponent';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const SlidePanelManagerExample = ({ behavior }) => (
  <div className={cx('example-wrapper')}>
    <SlidePanelManager panelBehavior={behavior}>
      <ManagerContentComponent disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

SlidePanelManagerExample.propTypes = propTypes;

export default SlidePanelManagerExample;
