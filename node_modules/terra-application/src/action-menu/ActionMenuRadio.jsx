import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import { enableFocusStyles, disableFocusStyles, generateOnKeyDown } from './_ActionUtils';
import styles from './ActionMenuRadio.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The string used as an identifier for keyboard navigation.
   */
  actionKey: PropTypes.string.isRequired,
  /**
   * Optional icon to place with the radio.
   */
  icon: PropTypes.element,
  /**
   * Whether or not the radio is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not the radio is checked.
   */
  isChecked: PropTypes.bool,
  /**
   * The label text to display for the radio.
   */
  label: PropTypes.string.isRequired,
  /**
   * Callback function for action element selection.
   * Returns the event e.g. onAction(event).
   */
  onAction: PropTypes.func,
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

const ActionMenuRadio = ({
  actionKey,
  icon,
  isDisabled,
  isChecked,
  label,
  onAction,
  onArrow,
  onChar,
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
  /* eslint-disable jsx-a11y/no-noninteractive-element-to-interactive-role */
  return (
    <li
      {...attrs}
      className={cx('action-menu-radio', { 'is-checked': isChecked }, { 'is-actionable': !isDisabled }, { 'is-disabled': isDisabled }, theme.className)}
      role="menuitemradio"
      aria-checked={isChecked}
      data-action-menu-key={actionKey}
    >
      <div className={cx('checkbox')}>{isChecked ? <IconCheckmark /> : null}</div>
      {icon ? <div className={cx('icon')}>{icon}</div> : null}
      <div className={cx('content')}>
        {label}
      </div>
    </li>
  );
  /* eslint-enable jsx-a11y/no-noninteractive-element-to-interactive-role */
};

ActionMenuRadio.propTypes = propTypes;
ActionMenuRadio.interactiveType = true;

export default ActionMenuRadio;
