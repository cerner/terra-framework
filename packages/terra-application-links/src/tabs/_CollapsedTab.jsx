import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import { Route, matchPath } from 'react-router-dom';
import TabUtils from './_TabUtils';
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
  /**
   * The click callback of the tab..
   */
  onTabClick: PropTypes.func,
};

const CollapsedTab = ({
  onTabClick,
  path,
  text,
  ...customProps
}) => (
  <Route
    render={({ location, history }) => {
      const isActive = !!matchPath(location.pathname, { path });
      const tabClassNames = cx([
        'collapsed-tab',
        { 'is-disabled': isActive },
        customProps.className,
      ]);
      const tabAttr = { 'aria-current': isActive };

      const handleOnClick = (event) => {
        if (!isActive) {
          history.push(path);
        }
        if (onTabClick) {
          onTabClick(event);
        }
      };

      const handleOnKeyDown = (event) => {
        if (event.nativeEvent.keyCode === TabUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === TabUtils.KEYCODES.SPACE) {
          event.preventDefault();
          if (!isActive) {
            history.push(path);
          }
          if (onTabClick) {
            onTabClick(event);
          }
        }
      };

      return (
        /* eslint-disable jsx-a11y/no-static-element-interactions */
        <div
          {...customProps}
          {...tabAttr}
          tabIndex="0"
          className={tabClassNames}
          onClick={handleOnClick}
          onKeyDown={handleOnKeyDown}
        >
          <span className={cx(['tab-inner'])}>
            {text}
          </span>
        </div>
        /* eslint-enable jsx-ally/no-static-element-interactions */
      );
    }}
  />
);

CollapsedTab.propTypes = propTypes;

export default CollapsedTab;
