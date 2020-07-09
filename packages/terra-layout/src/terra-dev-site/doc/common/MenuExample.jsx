import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './LayoutDocCommon.module.scss';

const cx = classNames.bind(styles);

const menu = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      <h2 className={cx('content-text')}>Menu</h2>
      {layoutConfig.toggleMenu
        && (
        <button
          type="button"
          className={cx('button')}
          onClick={layoutConfig.toggleMenu}
        >
          Toggle Menu
        </button>
        )}
      {layoutConfig.togglePin && !layoutConfig.menuIsPinned
        && (
        <button
          type="button"
          className={cx('button')}
          onClick={layoutConfig.togglePin}
        >
          Pin
        </button>
        )}
      {layoutConfig.togglePin && layoutConfig.menuIsPinned
        && (
        <button
          type="button"
          className={cx('button')}
          onClick={layoutConfig.togglePin}
        >
          Unpin
        </button>
        )}
    </div>
  </div>
);

menu.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
};

export default menu;
