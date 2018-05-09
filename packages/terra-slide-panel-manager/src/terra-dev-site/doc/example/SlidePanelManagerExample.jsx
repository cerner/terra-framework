import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentComponent from 'terra-disclosure-manager/examples/index-examples/ContentComponent';
import SlidePanelManager from '../../../SlidePanelManager';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const SlidePanelManagerExample = ({ behavior }) => (
  <div className={cx('example-wrapper')}>
    <SlidePanelManager panelBehavior={behavior}>
      <ContentComponent disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

SlidePanelManagerExample.propTypes = propTypes;

export default SlidePanelManagerExample;
