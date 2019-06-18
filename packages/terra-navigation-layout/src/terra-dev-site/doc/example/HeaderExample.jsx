import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './HeaderExample.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.shape({}),
};

const HeaderExample = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      <h2>Header</h2>
      {layoutConfig.toggleMenu
        && (
          <button
            type="button"
            onClick={layoutConfig.toggleMenu}
          >
            Toggle Menu
          </button>
        )}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page1" className={cx('link')}>Page 1</Link>}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page2" className={cx('link')}>Page 2</Link>}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page3" className={cx('link')}>Page 3</Link>}
    </div>
  </div>
);
HeaderExample.propTypes = propTypes;

export default withRouter(HeaderExample);
