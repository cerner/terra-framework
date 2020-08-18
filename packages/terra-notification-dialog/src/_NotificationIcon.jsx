import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './NotificationIcon.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The variant of notification to be rendered. This renders the icon corresponding to the variant concept.
   */
  variant: PropTypes.oneOf([
    'hazard-high',
    'hazard-medium',
    'hazard-low',
    'error',
    'custom',
  ]).isRequired,
  /**
   * The class name for the custom icon to be used for a notification when `variant="custom"`.
   */
  iconClassName: PropTypes.string,
};

const NotificationDialogIcon = ({ variant, iconClassName }) => {
  const theme = React.useContext(ThemeContext);

  return (
    <div className={cx('icon-container', theme.className)}>
      <span className={classNames(cx(['icon', `${variant}-icon`], { [`${iconClassName}`]: variant === 'custom' }))} />
    </div>
  );
};

NotificationDialogIcon.propTypes = propTypes;

export default NotificationDialogIcon;
