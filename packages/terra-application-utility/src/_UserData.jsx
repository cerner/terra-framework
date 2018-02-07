import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';

import styles from './_UserData.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * More information about the user.
   * Displayed next to the user photo and below the username.
   */
  userDetail: PropTypes.string,
    /**
   * The name to be displayed next to the user photo.
   */
  userName: PropTypes.string,
  /**
   * The photo to be displayed next to the userName and userDetail.
   */
  userPhoto: PropTypes.element,
};

const defaultProps = {
  userDetail: null,
  userName: null,
  userPhoto: undefined,
};

const UserData = ({
  userDetail,
  userName,
  userPhoto,
}) => {
  const UserDataClassNames = cx([
    'user-data',
  ]);

  const userPhotoClassNames = cx([
    'user-photo',
  ]);

  const textClassNames = cx([
    'text',
  ]);

  const iconClassNames = cx([
    'icon',
  ]);

  const userNameClassNames = cx([
    'user-name',
  ]);
  const userDetailClassNames = cx([
    'user-detail',
  ]);

  return (
    <div className={UserDataClassNames}>
      <div className={userPhotoClassNames}>{userPhoto}</div>
      <div className={textClassNames}>
        <div className={userNameClassNames}>{userName}</div>
        <div classNames={userDetailClassNames}>{userDetail}</div>
      </div>
      <div className={iconClassNames}> {<IconChevronRight data-utility-more-icon />} </div>
    </div>
  );
};

UserData.propTypes = propTypes;
UserData.defaultProps = defaultProps;

export default UserData;
