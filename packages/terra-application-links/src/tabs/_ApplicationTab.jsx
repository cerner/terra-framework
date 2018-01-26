import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { NavLink } from 'react-router-dom';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Indicates if the tab is be to desplayed in the hidden menu items menu.
   */
  isHidden: PropTypes.bool,
  /**
   * The path to push to the route.
   */
  path: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
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
    <NavLink {...customProps} role="tab" className={tabClassNames} to={path} key={path} activeClassName={cx(['selected'])}>
      {text}
    </NavLink>
  );
};

ApplicationTab.propTypes = propTypes;

export default ApplicationTab;
