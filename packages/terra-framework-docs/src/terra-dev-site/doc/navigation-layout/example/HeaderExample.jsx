import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import styles from './HeaderExample.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  layoutConfig: PropTypes.shape({}),
};

/* eslint-disable react/prop-types */
const HeaderExample = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      <h2>Header</h2>
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
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page1" className={cx('link')}>Page 1</Link>}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page2" className={cx('link')}>Page 2</Link>}
      {layoutConfig.size !== 'small' && layoutConfig.size !== 'tiny' && <Link to="/page3" className={cx('link')}>Page 3</Link>}
    </div>
  </div>
);
HeaderExample.propTypes = propTypes;
/* eslint-enable react/prop-types */

export default withRouter(HeaderExample);
