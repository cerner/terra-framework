import React from 'react';
import classNames from 'classnames/bind';
import Avatar from 'terra-avatar';

import { userConfigPropType } from '../utils/propTypes';

import styles from './PopupMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType.isRequired,
};

const PopupMenuUser = ({ userConfig }) => (
  <div className={cx('utility-user-layout')}>
    <div className={cx('avatar-container')}>
      <div className={cx('avatar-outline')} />
      <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials} size="1.174rem" />
    </div>
    <div className={cx('info-container')}>
      <div aria-hidden className={cx('name')}>{userConfig.name}</div>
      {userConfig.detail ? <div className={cx('detail')}>{userConfig.detail}</div> : null}
    </div>
  </div>
);

PopupMenuUser.propTypes = propTypes;

export default PopupMenuUser;
