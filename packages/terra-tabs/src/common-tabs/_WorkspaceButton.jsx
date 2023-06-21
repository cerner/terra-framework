import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from './_TabUtils';

import styles from './WorkspaceButton.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The text for the button's aria-label and title attributes.
   */
  ariaLabel: PropTypes.string.isRequired,
  /**
   * The icon to display for the associated extension action.
   */
  icon: PropTypes.element.isRequired,
  /**
   * Whether or not the button should display as currently active.
   */
  isActive: PropTypes.bool,
  /**
   * Function callback for selection of the extension. Return (metaData).
   */
  onActivate: PropTypes.func,
  /**
   * Ref callback for button.
   */
  refCallback: PropTypes.func,
  /**
   * Identifier for use during tests
   */
  testId: PropTypes.string,
};

const WorkspaceButton = ({
  ariaLabel,
  icon,
  isActive,
  onActivate,
  refCallback,
  testId,
}) => {
  const theme = React.useContext(ThemeContext);
  const buttonClassNames = cx(
    'workspace-button',
    { 'is-active': isActive },
    theme.className,
  );

  return (
    <div
      role="button"
      tabIndex="0"
      className={buttonClassNames}
      onClick={onActivate}
      onKeyDown={generateKeyDownSelection(onActivate)}
      onBlur={enableFocusStyles}
      onMouseDown={disableFocusStyles}
      data-focus-styles-enabled
      aria-label={ariaLabel}
      ref={refCallback}
      data-testid={testId}
      aria-pressed={isActive}
    >
      <div aria-hidden className={cx('button-inner')}>
        <div
          className={cx('button-image')}
          title={ariaLabel}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

WorkspaceButton.propTypes = propTypes;

export default WorkspaceButton;
