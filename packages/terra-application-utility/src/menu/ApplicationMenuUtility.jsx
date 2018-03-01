import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import AppDelegate from 'terra-app-delegate';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import UtilityMenu from './_MenuUtilityMenu';
import Utils from '../_Utils';
import styles from './ApplicationMenuUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The config file containing the menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
  /**
   * The AppDelegate instance propogated to each child.
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
  userName: '',
  userPhoto: undefined,
};

class ApplicationMenuUtility extends React.Component {
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
    return (
      <UtilityMenu
        app={this.props.app}
        initialSelectedKey={Utils.KEYS.MENU}
        menuItems={this.props.menuItems}
        onChange={this.props.onChange}
        data-application-menu-utility-menu
      />
    );
  }

  render() {
    const {
      app,
      menuItems,
      onChange,
      onDisclose,
      userName,
      userPhoto,
      ...customProps
    } = this.props;

    const utilityClassNames = cx(['header-utility', customProps.className]);
    const userContainerClassNames = cx('user-container');
    const userPhotoClassNames = cx('user-photo');
    const userNameClassNames = cx('user-name');
    const iconClassNames = cx('icon');
    let photo = null;
    if (userPhoto) {
      photo = React.cloneElement(userPhoto, { className: userPhotoClassNames });
    }
    return (
      <button {...customProps} className={utilityClassNames} onClick={this.handleOnClick} role={'main'} aria-label={'Utility button'}>
        <span className={userContainerClassNames}>
          {photo}
          <span className={userNameClassNames}>{userName} </span>
        </span>
        {<IconChevronRight className={iconClassNames} />}
      </button>
    );
  }
}

ApplicationMenuUtility.propTypes = propTypes;
ApplicationMenuUtility.defaultProps = defaultProps;

export default ApplicationMenuUtility;
