import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import Menu from './_TabMenu';
import styles from './Tabs.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Key of the current active tab.
   */
  activeKey: PropTypes.string,

  /**
   * Tabs to display in menu.
   */
  children: PropTypes.node,

  /**
   * Callback function when label truncation state has changed.
   * Parameters: 1. Bool indicating if any of the tab labels have been truncated.
   */
  onTruncationChange: PropTypes.func,
};

const CollapsedTabs = (props) => {
  props.onTruncationChange(false);
  const theme = React.useContext(ThemeContext);
  return (
    <div className={cx('collapsed-tabs-container', theme.className)}>
      <Menu activeKey={props.activeKey}>
        {props.children}
      </Menu>
    </div>
  );
};

CollapsedTabs.propTypes = propTypes;
export default CollapsedTabs;
