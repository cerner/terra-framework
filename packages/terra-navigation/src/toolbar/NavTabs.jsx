import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { NavLink } from 'react-router-dom';

import AppDelegate from 'terra-app-delegate';

import styles from './NavTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  links: PropTypes.string,
};

const NavTabs = ({
    app,
    links,
    ...customProps
  }) => {
  const containerClassnames = cx([
    'nav-tabs',
    customProps.className,
  ]);

  const primaryNavButtons = [];
  links.forEach((link) => {
    primaryNavButtons.push((
      <NavLink className={cx('nav-links')} to={link.path} key={link.path} activeStyle={{ fontWeight: 'bold' }}>
        {link.text}
      </NavLink>
    ));
  });

  return (
    <div {...customProps} className={containerClassnames}>
      <div className={cx('container')}>
        {primaryNavButtons}
      </div>
    </div>
  );
};

NavTabs.propTypes = propTypes;

export default NavTabs;
