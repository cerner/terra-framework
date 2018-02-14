import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import Button from 'terra-button';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import UtilityMenu from './_HeaderUtilityMenu';
import UserData from './UserData';

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
  onDisclose: PropTypes.func.isRequired,
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

class ApplicationHeaderUtility extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.createContent = this.createContent.bind(this);
  }

  handleOnClick() {
    if (this.props.onDisclose) {
      const content = this.createContent();
      this.props.onDisclose(content);
    }
  }

  createContent() {
    const userData = (<UserData userDetail={this.props.userDetail} userName={this.props.userName} userPhoto={this.props.userPhoto} />);
    return <UtilityMenu onChange={this.props.onChange} userData={userData} />;
  }

  render() {
    const {
      onChange,
      onDisclose,
      userDetail,
      userName,
      userPhoto,
      ...customProps
    } = this.props;

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

    return (
      <Button {...customProps} className={utilityClassNames} onClick={this.handleOnClick} variant="link">
        <span className={userPhotoClassNames}>{userPhoto} </span>
        <span className={userNameClassNames}>{userName} </span>
        {<IconChevronDown className={iconClassNames} />}
      </Button>
    );
  }
}

ApplicationHeaderUtility.propTypes = propTypes;

export default ApplicationHeaderUtility;
