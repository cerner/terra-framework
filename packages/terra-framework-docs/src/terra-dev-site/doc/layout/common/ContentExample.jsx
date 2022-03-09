import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './LayoutDocCommon.module.scss';

const cx = classNames.bind(styles);

const content = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      <h2 className={cx('content-text')}>Content</h2>
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
    </div>
  </div>
);

content.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
};

export default content;
