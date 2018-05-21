import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContentComponent from 'terra-disclosure-manager/lib/terra-dev-site/doc/example/ContentComponent';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ModalManager from 'terra-modal-manager/lib/ModalManager';
import styles from 'terra-modal-manager/lib/terra-dev-site/doc/example/example-styles.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

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
