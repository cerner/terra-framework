import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';

import styles from './ApplicationMenuName.scss';

const cx = classNames.bind(styles);

const SizeTypes = {
  TINY: 'tiny',
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
  HUGE: 'huge',
};

const propTypes = {
  /**
   * The accessory element to be displayeds next to the title.
   * */
  accessory: PropTypes.element,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * The breakpoint size that the window is currently at. Takes one of: `tiny`, `small`, `medium`, `large`, `huge`.
   *
   * */
  size: PropTypes.oneOf([
    SizeTypes.TINY,
    SizeTypes.SMALL,
    SizeTypes.MEDIUM,
    SizeTypes.LARGE,
    SizeTypes.HUGE,
  ]),
  /**
   * The subtitle to be appended to the title.
   * */
  subtitle: PropTypes.string,
  /**
   * The title branding of the application name.
   * */
  title: PropTypes.string,
};

const defaultProps = {
  size: SizeTypes.TINY,
};

const ApplicationMenuName = ({
    accessory,
    app,
    size,
    subtitle,
    title,
    ...customProps
  }) => {
  const ApplicationMenuNameClassNames = cx([
    'application-menu-name',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={ApplicationMenuNameClassNames}>
      {!!accessory && <div className={cx('accessory')}>{accessory}</div>}
      {!!title && size !== SizeTypes.TINY && <div className={cx('title')}><strong>{title}</strong>{subtitle}</div>}
    </div>
  );
};

ApplicationMenuName.propTypes = propTypes;
ApplicationMenuName.defaultProps = defaultProps;

export default ApplicationMenuName;
