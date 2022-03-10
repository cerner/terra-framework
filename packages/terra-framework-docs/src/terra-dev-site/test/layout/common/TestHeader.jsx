import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './TestHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.object,
};

const TestHeader = ({
  layoutConfig,
}) => (
  <div
    id="test-header"
    className={cx('content-wrapper1')}
  >
    <div className={cx('content-wrapper2')}>
      <h2 className={cx('content-text')}>Header</h2>
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          className={cx('test-header-toggle')}
          onClick={layoutConfig.toggleMenu}
        >
          Toggle Menu
        </button>
        )}
    </div>
  </div>
);
TestHeader.propTypes = propTypes;

export default TestHeader;
