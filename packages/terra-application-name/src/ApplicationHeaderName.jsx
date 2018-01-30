import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import styles from './ApplicationHeaderName.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The accessory element to be displayed next to the title.
   * */
  accessory: PropTypes.element,
  /**
   * The title branding of the application name.
   * */
  title: PropTypes.string,
};

const ApplicationHeaderName = ({
    accessory,
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
      {!!title && <div className={cx('title')}><strong>{title}</strong></div>}
    </div>
  );
};

ApplicationHeaderName.propTypes = propTypes;

export default ApplicationHeaderName;
