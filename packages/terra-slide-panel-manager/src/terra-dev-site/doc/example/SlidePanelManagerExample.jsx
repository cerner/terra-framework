import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentComponent from 'terra-disclosure-manager/lib/terra-dev-site/doc/example/ContentComponent';
/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import SlidePanelManager from 'terra-slide-panel-manager/lib/SlidePanelManager';
import styles from 'terra-slide-panel-manager/lib/terra-dev-site/doc/example/example-styles.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
