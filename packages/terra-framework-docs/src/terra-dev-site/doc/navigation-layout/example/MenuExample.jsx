import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './NavigationLayoutDocCommon.module.scss';

const cx = classNames.bind(styles);

const MenuExample = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
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
      {layoutConfig.togglePin && !layoutConfig.menuIsPinned
        && (
          <button
            type="button"
            onClick={layoutConfig.togglePin}
            className={cx('button')}
          >
            Pin
          </button>
        )}
      {layoutConfig.togglePin && layoutConfig.menuIsPinned
        && (
          <button
            type="button"
            onClick={layoutConfig.togglePin}
            className={cx('button')}
          >
            Unpin
          </button>
        )}
      <h2>Menu</h2>
      <br />
      <Link to="/page1">Page 1</Link>
      <br />
      <Link to="/page2">Page 2</Link>
      <br />
      <Link to="/page3">Page 3</Link>
    </div>
  </div>
);

MenuExample.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
    togglePin: PropTypes.func,
    menuIsPinned: PropTypes.bool,
  }),
};

export default withRouter(MenuExample);
