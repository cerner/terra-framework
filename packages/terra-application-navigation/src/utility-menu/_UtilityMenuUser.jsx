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
    <div className={cx('avatar')}>
      <Avatar alt={userConfig.name} image={userConfig.imageSrc} initials={userConfig.initials} />
    </div>
    <div className={cx('info')}>
      <div className={cx('name')}>{userConfig.name}</div>
      <div className={cx('detail')}>{userConfig.detail}</div>
    </div>
  </div>
);

UtilityMenuUser.propTypes = propTypes;

export default UtilityMenuUser;
