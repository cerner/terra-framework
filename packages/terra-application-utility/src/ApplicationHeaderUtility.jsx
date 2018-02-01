import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import Button from 'terra-button';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import HeaderUtilMenu from './_HeaderUtilMenu';
import UserData from './_UserData';

import styles from './ApplicationHeaderUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func,
    /**
   * The function that discloses the menu.
   */
  onDiscloseUtilityMenu: PropTypes.func,
  /**
   * More information about the user.
   */
  userDetail: PropTypes.string,
  /**
   * The name to be displayed next to the user photo.
   */
  userName: PropTypes.string,
  /**
   * The image associated with the user.
   */
  userPhoto: PropTypes.element,
};

const defaultProps = {
  menuItems: [],
  userDetail: undefined,
  userPhoto: undefined,
  userName: undefined,
};

class ApplicationHeaderUtility extends React.Component {
  constructor(props) {
    super(props);

    this.handleOnChange = this.handleOnChange.bind(this);
  }

  render() {
    const {
      onDiscloseUtilityMenu,
      onChange,
      userPhoto,
      userName,
      ...customProps
    } = this.props;

    const utilityClassNames = cx([
      'header-utility',
      customProps.className,
    ]);

    const userPhotoClassNames = cx([
      'user-photo',
      customProps.className,
    ]);

    const userNameClassNames = cx([
      'user-name',
      customProps.className,
    ]);

    const userData = (<UserData userDetail={this.props.userDetail} userName={this.props.userName} userPhoto={this.props.userPhoto} />);
    const menu = (<HeaderUtilMenu onChange={this.props.onChange} userData={userData} />);

    return (
      <Button {...customProps} className={utilityClassNames} onClick={this.props.onDiscloseUtilityMenu(menu)} variant="link">
        <span className={userPhotoClassNames}>{userPhoto} </span>
        <span className={userNameClassNames}>{userName} </span>
        {<IconChevronRight />}
      </Button>
    );
  }
}

ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.defaultProps = defaultProps;

export default ApplicationHeaderUtility;
