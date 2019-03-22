import React from 'react';
import classNames from 'classnames/bind';
import Avatar from 'terra-avatar';

import { userConfigPropType } from '../utils/propTypes';

import styles from './UtilityMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  userConfig: userConfigPropType,
};

const UtilityMenuUser = ({ userConfig }) => (
  <div className={cx('utility-user-layout')}>
    <div className={cx('avatar-container')}>
      <div className={cx('avatar-outline')} />
      <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials} className={cx('avatar')} />
    </div>
    <div className={cx('info-container')}>
      <div className={cx('name')}>{userConfig.name}</div>
      {userConfig.detail ? <div className={cx('detail')}>{userConfig.detail}</div> : null}
    </div>
  </div>
);

UtilityMenuUser.propTypes = propTypes;

export default UtilityMenuUser;
