import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './LayoutTestCommon.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.object,
};

const TestMenu = ({ layoutConfig }) => (
  <div
    id="test-menu"
    className={cx('content-wrapper1')}
  >
    <div className={cx('content-wrapper2')}>
      <h2 className={cx('content-text')}>Menu</h2>
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          className={cx('test-menu-toggle')}
          onClick={layoutConfig.toggleMenu}
        >
          Toggle Menu
        </button>
        )}
    </div>
  </div>
);

TestMenu.propTypes = propTypes;

export default TestMenu;
