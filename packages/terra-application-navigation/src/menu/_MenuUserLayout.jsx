import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Avatar from 'terra-avatar';

import styles from './MenuUserLayout.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  userConfig: PropTypes.object,
  variant: PropTypes.oneOf(['small', 'large']),
};

const defaultProps = {
  variant: 'small',
};

const MenuUserLayout = ({ userConfig, variant }) => (
  <div className={variant === 'small' ? cx('small-user-layout') : cx('large-user-layout')}>
    <div className={cx('avatar-container')}>
      <Avatar alt={userConfig.name} image={userConfig.image} initials={userConfig.initials} className={cx('avatar')} />
    </div>
    <div className={cx('info-container')}>
      <div className={cx('name')}>{userConfig.name}</div>
      <div className={cx('detail')}>{userConfig.detail}</div>
    </div>
  </div>
);

MenuUserLayout.propTypes = propTypes;
MenuUserLayout.defaultProps = defaultProps;

export default MenuUserLayout;
