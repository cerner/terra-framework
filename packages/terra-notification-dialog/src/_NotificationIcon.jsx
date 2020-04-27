import React from 'react';
import PropTypes from 'prop-types';
import classNamesBind from 'classnames/bind';

import styles from './NotificationIcon.module.scss';

const cx = classNamesBind.bind(styles);

const variants = {
  ALERT: 'alert',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
  SUCCESS: 'success',
  CUSTOM: 'custom',
};

const propTypes = {
  /**
   * The variant of notification to be rendered. This renders the icon corresponding to the variant concept.
   * Use one of `alert`, `error`, `warning`, `info`, or `custom`.
   */
  variant: PropTypes.oneOf([
    variants.ALERT,
    variants.ERROR,
    variants.WARNING,
    variants.INFO,
    variants.CUSTOM,
  ]).isRequired,
  /**
   * The icon to be used for a notification when `variant="custom"`.
   */
  customIcon: PropTypes.element,
};

const shouldAddVariantClass = (variant) => Object.values(variants).indexOf(variant) >= 0;

const Icon = ({ variant, customIcon }) => {
  let icon;

  if (variants.CUSTOM === variant) {
    icon = customIcon;
  } else if (shouldAddVariantClass(variant)) {
    icon = <span className={cx(['icon', `${variant}-icon`])} />;
  }

  return (
    <div className={cx('icon-container')}>
      {icon}
    </div>
  );
};

Icon.propTypes = propTypes;

export default Icon;
