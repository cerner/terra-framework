import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Avatar from 'terra-avatar';

import { userConfigPropType } from '../utils/propTypes';

import styles from './DrawerMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType.isRequired,
  /**
   * Size variant of the user. One of values [`small`, `large`].
   */
  variant: PropTypes.oneOf(['small', 'large']),
};

const defaultProps = {
  variant: 'small',
};

const DrawerMenuUser = ({ userConfig, variant }) => (
  <div className={variant === 'small' ? cx('small-user-layout') : cx('large-user-layout')}>
    <div className={cx('avatar-container')}>
      <div className={cx('avatar-outline')} />
      <div className={cx('avatar-inner')}>
        <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials} />
      </div>
    </div>
    <div className={cx('info-container')}>
      <div aria-hidden className={cx('name')}>{userConfig.name}</div>
      {userConfig.detail ? <div className={cx('detail')}>{userConfig.detail}</div> : null}
    </div>
  </div>
);

DrawerMenuUser.propTypes = propTypes;
DrawerMenuUser.defaultProps = defaultProps;

export default DrawerMenuUser;
