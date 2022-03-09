import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './LayoutTestCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.object,
};

const TestContent = ({ layoutConfig }) => (
  <div
    id="test-content"
    className={cx('content-wrapper1')}
  >
    <div className={cx('content-wrapper2')}>
      <h2 className={cx('content-text')}>Content</h2>
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          className={cx('test-content-toggle')}
          onClick={layoutConfig.toggleMenu}
        >
          Toggle Menu
        </button>
        )}
    </div>
  </div>
);

TestContent.propTypes = propTypes;

export default TestContent;
