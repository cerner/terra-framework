import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './ActionMenuGroup.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node,
  /**
   * @private
   * Callback function for arrow key interaction.
   * Returns the event e.g. onArrow(key, direction).
   */
  onArrow: PropTypes.func,
  /**
   * @private
   * Callback function for arrow char.
   * Returns the event e.g. onChar(key, char).
   */
  onChar: PropTypes.func,
  /**
   * @private
   * Whether or not indent children based on presence of a selectable item.
   */
  indentChildren: PropTypes.bool,
};

const ActionMenuGroup = ({
  children,
  onArrow,
  onChar,
  indentChildren,
}) => {
  const theme = React.useContext(ThemeContext);
  return (
    <li
      role="none"
    >
      <ul
        className={cx('action-menu-group', theme.className)}
        role="menu"
      >
        {React.Children.map(children, child => {
          if (!child) {
            return undefined;
          }
          return React.cloneElement(
            child,
            { onArrow, onChar, indentChildren },
          );
        })}
      </ul>
    </li>
  );
};

ActionMenuGroup.propTypes = propTypes;

export default ActionMenuGroup;
