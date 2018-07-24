import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import styles from './UserData.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * More information about the user.
   * Displayed next to the userPhoto and below the userName.
   */
  userDetail: PropTypes.string,
  /**
   * The name to be displayed next to the userPhoto.
   */
  userName: PropTypes.string,
  /**
   * The photo to be displayed next to the userName and userDetail.
   */
  userPhoto: PropTypes.element,
};

const UserData = ({
  userDetail,
  userName,
  userPhoto,
  ...customProps
}) => {
  const userClassNames = cx(['user-data', customProps.className]);

  let userInfo;
  if (userName || userDetail) {
    userInfo = (
      <div className={cx('user-info')}>
        {!!userName && <div className={cx('name')}>{userName}</div>}
        {!!userDetail && <div className={cx('detail')}>{userDetail}</div>}
      </div>
    );
  }

  return (
    <div {...customProps} className={userClassNames}>
      {!!userPhoto && React.cloneElement(userPhoto, { className: cx('photo') })}
      {userInfo}
    </div>
  );
};

UserData.propTypes = propTypes;

export default UserData;
