import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import Button from 'terra-button';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import UtilityMenu from './_HeaderUtilityMenu';
import UserData from './UserData';
import Utils from './_Utils';

import styles from './ApplicationHeaderUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The config file containing additional items to be rendered within the menu.
   */
  additionalItemsConfig: PropTypes.array,
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
  static generateMenuConfig() {
    return {
      key: Utils.KEYS.MENU,
      title: Utils.TITLES.MENU,
      // isSelected: true,
      children: [
        {
          key: Utils.KEYS.USER_INFORMATION,
          title: Utils.TITLES.USER_INFORMATION,
          content: <UserData />,
          // isSelected: false,
          children: [
            {
              key: Utils.KEYS.CHANGE_PHOTO,
              title: Utils.TITLES.CHANGE_PHOTO,
              // isSelected: false,
            },
          ],
        },
        {
          key: Utils.KEYS.SETTINGS,
          title: Utils.TITLES.SETTINGS,
          // isSelected: false,
          children: [
            {
              key: Utils.KEYS.APPEARANCE,
              title: Utils.TITLES.APPEARANCE,
              // isSelected: false,
            },
            {
              key: Utils.KEYS.SECURITY,
              title: Utils.TITLES.SECURITY,
              // isSelected: false,
            },
          ],
        },
        {
          key: Utils.KEYS.HELP,
          title: Utils.TITLES.HELP,
          // isSelected: false,
          children: [
            {
              key: Utils.KEYS.GETTING_STARTED,
              title: Utils.TITLES.GETTING_STARTED,
              // isSelected: false,
            },
            {
              key: Utils.KEYS.ABOUT,
              title: Utils.TITLES.ABOUT,
              // isSelected: false,
            },
            {
              key: Utils.KEYS.TERMS_OF_USE,
              title: Utils.TITLES.TERMS_OF_USE,
              // isSelected: false,
            },
          ],
        },
      ],
    };
  }

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
    return <UtilityMenu additionalItemsConfig={this.props.additionalItemsConfig} menuConfig={ApplicationHeaderUtility.generateMenuConfig()} onChange={this.props.onChange} userData={userData} />;
  }

  render() {
    const {
      additionalItemsConfig,
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
ApplicationHeaderUtility.keys = Utils.KEYS;
ApplicationHeaderUtility.titles = Utils.titles;

export default ApplicationHeaderUtility;
