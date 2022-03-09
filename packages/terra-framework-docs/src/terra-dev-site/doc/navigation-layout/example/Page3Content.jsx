import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import styles from './NavigationLayoutDocCommon.module.scss';

const cx = classNames.bind(styles);

const Page3Content = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      <h2>Page 3 Content</h2>
      {layoutConfig.toggleMenu
        && (
          <button
            type="button"
            onClick={layoutConfig.toggleMenu}
            className={cx('button')}
          >
            Toggle Menu
          </button>
        )}
    </div>
  </div>
);

Page3Content.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
};

export default Page3Content;
