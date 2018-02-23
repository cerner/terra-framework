import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { Route, matchPath } from 'react-router-dom';
import styles from './ApplicationTabs.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The path to push to the route.
   */
  path: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  text: PropTypes.string.isRequired,
  /**
   * The display text for the tab.
   */
  onTabClick: PropTypes.func,
};

const ApplicationTab = ({
  onTabClick,
  path,
  text,
  ...customProps
}) => (
  <Route
    render={({ location, history }) => {
      const isActive = !!matchPath(location.pathname, { path });
      const tabClassNames = cx([
        'tab',
        { 'is-disabled': isActive },
        customProps.className,
      ]);
      const tabAttr = { 'aria-current': isActive, role: 'tab' };

      return (
        <button
          {...customProps}
          {...tabAttr}
          className={tabClassNames}
          onClick={(event) => {
            if (!isActive) {
              history.push(path);
            }
            if (onTabClick) {
              onTabClick(event);
            }
          }}
        >
          <span className={cx(['tab-inner'])}>
            {text}
          </span>
        </button>
      );
    }}
  />
);

ApplicationTab.propTypes = propTypes;

export default ApplicationTab;
