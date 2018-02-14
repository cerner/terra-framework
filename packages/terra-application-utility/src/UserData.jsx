import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';

import styles from './UserData.scss';

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
  const containerClassNames = cx('container');
  const userDataClassNames = cx('user-data');
  const photoClassNames = cx('photo');
  const nameClassNames = cx('name');
  const detailClassNames = cx('detail');
  const chevronClassNames = cx('chevron');
  const photoAttrs = React.cloneElement(userPhoto, { className: photoClassNames });

  return (
    <div className={containerClassNames} >
      <div className={userDataClassNames} >
        {photoAttrs}
        <div>
          <div className={nameClassNames}>{userName}</div>
          <div className={detailClassNames}>{userDetail}</div>
        </div>
      </div>
      {<IconChevronRight className={chevronClassNames} />}
    </div>
  );
};

UserData.propTypes = propTypes;
UserData.defaultProps = defaultProps;

export default UserData;
