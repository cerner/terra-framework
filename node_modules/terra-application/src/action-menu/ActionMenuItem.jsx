import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './_ActionUtils';
import styles from './ActionMenuItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string used as an identifier for keyboard navigation.
   */
  actionKey: PropTypes.string.isRequired,
  /**
   * Optional icon to place with the item.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the item is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * The label text to display for the item.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function for action element selection.
   * Returns the event e.g. onAction(event).
   */
  onAction: PropTypes.func,
  /**
   * @private
   * Whether or not indent children based on presence of a selectable item.
   */
  indentChildren: PropTypes.bool,
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
};

const ActionMenuItem = ({
  actionKey,
  icon,
  isDisabled,
  label,
  onAction,
  onArrow,
  onChar,
  indentChildren,
}) => {
  const attrs = {};
  if (isDisabled) {
    attrs['aria-disabled'] = true;
  } else {
    attrs.tabIndex = '-1';
    attrs.onClick = onAction;
    attrs.onKeyDown = generateOnKeyDown(actionKey, onAction, onArrow, onChar);
    attrs.onBlur = enableFocusStyles;
    attrs.onMouseDown = disableFocusStyles;
    attrs['data-focus-styles-enabled'] = true;
  }

  const theme = React.useContext(ThemeContext);
  return (
    <li
      {...attrs}
      className={cx('action-menu-item', { 'is-disabled': isDisabled }, { 'is-actionable': !isDisabled }, { indent: indentChildren }, theme.className)}
      role="menuitem"
      data-action-menu-key={actionKey}
    >
      {icon ? <div className={cx('icon')}>{icon}</div> : null}
      <div className={cx('content')}>
        {label}
      </div>
    </li>
  );
};

ActionMenuItem.propTypes = propTypes;

export default ActionMenuItem;
