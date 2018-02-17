import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import AppDelegate from 'terra-app-delegate';
import Button from 'terra-button';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import UtilityMenu from './_MenuUtilityMenu';
import UserData from '../UserData';
import Utils from '../_Utils';

import styles from './ApplicationMenuUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The config file containing additional items to be rendered within the menu.
   */
  additionalItemsConfig: PropTypes.array,
  /**
   * The AppDelegate instance that will be propagated to the components presented within the NavigationLayout.
   */
  app: AppDelegate.propType,
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
    return <UtilityMenu app={this.props.app} additionalItemsConfig={this.props.additionalItemsConfig} menuConfig={Utils.generateMenuConfig(UserData)} onChange={this.props.onChange} userData={userData} />;
  }

  render() {
    const {
      additionalItemsConfig,
      app,
      onChange,
      onDisclose,
      userDetail,
      userName,
      userPhoto,
      ...customProps
    } = this.props;

    const utilityClassNames = cx(['header-utility', customProps.className]);
    const userContainerClassNames = cx('user-container');
    const userPhotoClassNames = cx('user-photo');
    const userNameClassNames = cx('user-name');
    // const iconContainerClassNames = cx('icon-container');
    const iconClassNames = cx('icon');

    return (
      <Button {...customProps} className={utilityClassNames} onClick={this.handleOnClick} variant="link">
        <span className={userContainerClassNames}>
          <span className={userPhotoClassNames}>{userPhoto} </span>
          <span className={userNameClassNames}>{userName} </span>
        </span>
        {<IconChevronRight className={iconClassNames} />}
      </Button>
    );
  }
}

ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.keys = Utils.KEYS;
ApplicationHeaderUtility.titles = Utils.titles;

export default ApplicationHeaderUtility;
