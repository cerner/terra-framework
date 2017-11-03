import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';

import styles from './Logo.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The accessory element to be displauyed next to the title.
   * */
  accessory: PropTypes.element,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * The breakpoint size that the window is currenty at.
   * */
  size: PropTypes.string,
  /**
   * The subtitle to be appended to the title within the logo.
   * */
  subtitle: PropTypes.string,
  /**
   * The title branding of the logo.
   * */
  title: PropTypes.string,
};

const Logo = ({
    accessory,
    app,
    size,
    subtitle,
    title,
    ...customProps
  }) => {
  const logoClassNames = cx([
    'logo',
    { 'is-compact': size === 'tiny' || size === 'small' },
    customProps.className,
  ]);

  return (
    <div {...customProps} className={logoClassNames}>
      {!!accessory && <div className={cx('accessory')}>{accessory}</div>}
      {!!title && size !== 'tiny' && <div className={cx('title')}><strong>{title}</strong>{subtitle}</div>}
    </div>
  );
};

Logo.propTypes = propTypes;

export default Logo;
