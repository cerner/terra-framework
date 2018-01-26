import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';

import styles from './ApplicationMenuName.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The accessory element to be displayed next to the title.
   * */
  accessory: PropTypes.element,
  /**
   * The AppDelegate instance provided by the containing component. If present, its properties will propagate to the children components.
   * */
  app: AppDelegate.propType,
  /**
   * The title branding of the application name.
   * */
  title: PropTypes.string,
};

const ApplicationMenuName = ({
    accessory,
    app,
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
      {!!title && <div className={cx('title')}><strong>{title}</strong></div>}
    </div>
  );
};

ApplicationMenuName.propTypes = propTypes;

export default ApplicationMenuName;
