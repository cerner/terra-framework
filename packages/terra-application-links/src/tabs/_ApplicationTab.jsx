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
  path: PropTypes.string.isRequired,
  /**
   * Indicates if the pane should be disabled.
   */
  text: PropTypes.string.isRequired,
};

const ApplicationTab = ({
  isHidden,
  path,
  text,
  ...customProps
}) => {
  const tabClassNames = cx([
    'tab',
    { 'is-hidden': isHidden },
    customProps.className,
  ]);

  return (
    <NavLink {...customProps} className={tabClassNames} to={path} key={path} activeClassName={cx(['selected'])}>
      {text}
    </NavLink>
  );
};

ApplicationTab.propTypes = propTypes;

export default ApplicationTab;
