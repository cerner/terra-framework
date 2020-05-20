import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';

import styles from './ApplicationHeaderName.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The accessory element to be displayed next to the title.
   * */
  accessory: PropTypes.element,
  /**
   * The title branding of the application name.
   * */
  title: PropTypes.node,
};

const ApplicationHeaderName = ({
  accessory,
  title,
  ...customProps
}) => {
  const theme = React.useContext(ThemeContext);
  const ApplicationHeaderNameClassNames = classNames(cx(
    'application-header-name',
    theme.className,
  ),
  customProps.className);

  return (
    <div {...customProps} className={ApplicationHeaderNameClassNames}>
      {accessory && <div className={cx('accessory')}>{accessory}</div>}
      {title && <div className={cx('title')}>{title}</div>}
    </div>
  );
};

ApplicationHeaderName.propTypes = propTypes;

export default ApplicationHeaderName;
