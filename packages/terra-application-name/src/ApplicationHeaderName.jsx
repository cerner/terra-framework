import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';

import styles from './ApplicationHeaderName.scss';

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
   * The breakpoint size that the window is currenty at.
   * */
  size: PropTypes.string,
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
  size: 'tiny',
};

const ApplicationHeaderName = ({
    accessory,
    app,
    size,
    subtitle,
    title,
    ...customProps
  }) => {
  const ApplicationHeaderNameClassNames = cx([
    'application-header-name',
    customProps.className,
  ]);

  return (
    <div {...customProps} className={ApplicationHeaderNameClassNames}>
      {!!accessory && <div className={cx('accessory')}>{accessory}</div>}
      {!!title && size !== 'tiny' && <div className={cx('title')}><strong>{title}</strong>{subtitle}</div>}
    </div>
  );
};

ApplicationHeaderName.propTypes = propTypes;
ApplicationHeaderName.defaultProps = defaultProps;

export default ApplicationHeaderName;
