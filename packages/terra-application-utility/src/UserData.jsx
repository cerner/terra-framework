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
  ...customProps
}) => {
  const containerClassNames = cx(['container', customProps.className]);
  const userDataClassNames = cx('user-data');
  const photoClassNames = cx('photo');
  const nameClassNames = cx('name');
  const detailClassNames = cx('detail');
  const chevronClassNames = cx('chevron');
  let photoAttrs;
  if (userPhoto) {
    photoAttrs = React.cloneElement(userPhoto, { className: photoClassNames });
  }

  return (
    <div {...customProps} className={containerClassNames} >
      <div className={userDataClassNames} >
        {userPhoto && photoAttrs}
        <div>
          {userName && <div className={nameClassNames}>{userName}</div>}
          {userDetail && <div className={detailClassNames}>{userDetail}</div>}
        </div>
      </div>
      {<IconChevronRight className={chevronClassNames} />}
    </div>
  );
};

UserData.propTypes = propTypes;
UserData.defaultProps = defaultProps;

export default UserData;
