import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Avatar from 'terra-avatar';

import styles from './UtilityMenuUser.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  userConfig: PropTypes.object,
};

const UtilityMenuUser = ({ userConfig }) => (
  <div className={cx('utility-user-layout')}>
    <div className={cx('avatar')}>
      <Avatar alt={userConfig.name} image={userConfig.image} initials={userConfig.initials} />
    </div>
    <div className={cx('info')}>
      <div className={cx('name')}>{userConfig.name}</div>
      <div className={cx('detail')}>{userConfig.detail}</div>
    </div>
  </div>
);

UtilityMenuUser.propTypes = propTypes;

export default UtilityMenuUser;
