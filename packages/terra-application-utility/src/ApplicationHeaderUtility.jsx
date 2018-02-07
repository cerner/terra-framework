import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import Button from 'terra-button';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import UtilityMenu from './_UtilityMenu';
import UserData from './_UserData';

import styles from './ApplicationHeaderUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   *
   */
  isHeightBounded: PropTypes.func,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
    /**
   * The function that discloses the menu.
   */
  onDiscloseUtilityMenu: PropTypes.func.isRequired,
  /**
   *
   */
  rootPageKey: PropTypes.string,
  /**
   * More information about the user.
   */
  userDetail: PropTypes.string.isRequired,
  /**
   * The name to be displayed next to the user photo.
   */
  userName: PropTypes.string.isRequired,
  /**
   * The image associated with the user.
   */
  userPhoto: PropTypes.element.isRequired,
};

const ApplicationHeaderUtility = ({
  onChange,
  onDiscloseUtilityMenu,
  userDetail,
  userName,
  userPhoto,
  ...customProps
}) => {
  const utilityClassNames = cx([
    'header-utility',
    customProps.className,
  ]);

  const userPhotoClassNames = cx([
    'user-photo',
  ]);

  const userNameClassNames = cx([
    'user-name',
  ]);

  const iconClassNames = cx([
    'icon',
  ]);
  const menuConfig = {
    key: { },
    key: { },
    key: { },
    key: { },
  };

  const userData = (<UserData userDetail={this.props.userDetail} userName={this.props.userName} userPhoto={this.props.userPhoto} />);
  const menu = (<UtilityMenu onChange={this.props.onChange} userData={userData} />);
  return (
    <Button {...customProps} className={utilityClassNames} onClick={this.props.onDiscloseUtilityMenu(menu)} variant="link">
      <span className={userPhotoClassNames}>{userPhoto} </span>
      <span className={userNameClassNames}>{userName} </span>
      {<IconChevronDown className={iconClassNames} />}
    </Button>
  );
};

ApplicationHeaderUtility.propTypes = propTypes;

export default ApplicationHeaderUtility;
