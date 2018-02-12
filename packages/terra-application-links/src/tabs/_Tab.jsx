import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { NavLink } from 'react-router-dom';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Indicates if the tab is be to desplayed in the tab menu.
   */
  isCollapsed: PropTypes.bool,
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
  isCollapsed,
  path,
  text,
  ...customProps
}) => {
  const tabClassNames = cx([
    { tab: !isCollapsed },
    { 'collapsed-tab': isCollapsed },
    customProps.className,
  ]);

  const tabRole = {};
  if (!isCollapsed) {
    tabRole.role = 'tab';
  }

  return (
    <NavLink {...customProps} {...tabRole} className={tabClassNames} to={path} key={path} activeClassName={cx(['selected'])}>
      <span className={cx(['tab-inner'])}>
        {text}
      </span>
    </NavLink>
  );
};

ApplicationTab.propTypes = propTypes;

export default ApplicationTab;
