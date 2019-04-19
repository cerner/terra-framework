import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
/* eslint-disable import/no-unresolved, import/extensions */
import SlidePanelManager from 'terra-slide-panel-manager/lib/SlidePanelManager';
import styles from 'terra-slide-panel-manager/lib/terra-dev-site/doc/example/example-styles.scss';
/* eslint-enable import/no-unresolved, import/extensions */

import ContentComponent from './ContentComponent';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const SlidePanelManagerExample = ({ behavior }) => (
  <div className={cx('example-wrapper')}>
    <SlidePanelManager panelBehavior={behavior}>
      <ContentComponent panelBehavior={behavior} disclosureType="panel" />
    </SlidePanelManager>
  </div>
);

SlidePanelManagerExample.propTypes = propTypes;

export default SlidePanelManagerExample;
