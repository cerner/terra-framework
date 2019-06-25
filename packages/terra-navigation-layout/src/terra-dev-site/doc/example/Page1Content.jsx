import React from 'react';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import styles from './NavigationLayoutDocCommon.module.scss';

const cx = classNames.bind(styles);

const Page1Content = ({ layoutConfig }) => (
  <div className={cx('content-wrapper1')}>
    <div className={cx('content-wrapper2')}>
      <h2>Page 1 Content</h2>
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
      <Route
        path="/page1/item1"
        render={() => (
          <h2>Item 1</h2>
        )}
      />
      <Route
        path="/page1/item2"
        render={() => (
          <h2>Item 2</h2>
        )}
      />
    </div>
  </div>
);

Page1Content.propTypes = {
  layoutConfig: PropTypes.shape({
    toggleMenu: PropTypes.func,
  }),
};

export default Page1Content;
