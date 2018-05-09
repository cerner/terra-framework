import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentComponent from 'terra-disclosure-manager/lib/terra-dev-site/doc/example/ContentComponent';

import ModalManager from '../../../ModalManager';

import styles from './example-styles.scss';

const cx = classNames.bind(styles);

const propTypes = {
  behavior: PropTypes.string,
};

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <ContentComponent disclosureType="modal" />
    </ModalManager>
  </div>
);

ModalManagerExample.propTypes = propTypes;

export default ModalManagerExample;
