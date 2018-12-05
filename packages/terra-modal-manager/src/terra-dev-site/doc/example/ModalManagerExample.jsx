import React from 'react';
import classNames from 'classnames/bind';

/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */
import ModalManager from 'terra-modal-manager/lib/ModalManager';
import styles from 'terra-modal-manager/lib/terra-dev-site/doc/example/example-styles.scss';
/* eslint-enable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */

import ContentComponent from './ContentComponent';

const cx = classNames.bind(styles);

const ModalManagerExample = () => (
  <div className={cx('example-wrapper')}>
    <ModalManager>
      <ContentComponent disclosureType="modal" />
    </ModalManager>
  </div>
);

export default ModalManagerExample;
