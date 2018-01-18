import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { NavLink } from 'react-router-dom';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Indicates if the pane should be disabled.
   */
  isHidden: PropTypes.bool,
  /**
   * Indicates if the pane should be disabled.
   */
  label: PropTypes.string.isRequired,
  /**
   * Indicates if the pane should be disabled.
   */
  path: PropTypes.string.isRequired,
};

const TabPane = ({
  isHidden,
  label,
  path,
  ...customProps
}) => {
  const tabClassNames = cx([
    'tab',
    { 'is-hidden': isHidden },
    customProps.className,
  ]);

  return (
    <NavLink className={tabClassNames} to={path} key={path} activeClassName={cx(['selected'])}>
      {label}
    </NavLink>
  );
};

TabPane.propTypes = propTypes;

export default TabPane;
