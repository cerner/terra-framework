import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import UtilityMenu from './_HeaderUtilityMenu';
import Utils from '../_Utils';
import styles from './ApplicationHeaderUtility.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The array containing the static menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)),
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
    /**
   * The function that discloses the menu.
   */
  onDisclose: PropTypes.func.isRequired,
  /**
   * The function that closes the menu.
   */
  requestClose: PropTypes.func.isRequired,
  /**
   * The name to be displayed next to the user photo.
   */
  userName: PropTypes.string.isRequired,
  /**
   * The image associated with the user.
   */
  userPhoto: PropTypes.element,
};

const defaultProps = {
  // userPhoto: null,
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
    return (
      <UtilityMenu
        initialSelectedKey={Utils.KEYS.MENU}
        menuItems={this.props.menuItems}
        onChange={this.props.onChange}
        requestClose={this.props.requestClose}
      />
    );
  }

  render() {
    const {
      menuItems,
      onChange,
      onDisclose,
      requestClose,
      userName,
      userPhoto,
      ...customProps
    } = this.props;

    const utilityClassNames = cx(['header-utility', customProps.className]);
    const userPhotoClassNames = cx('user-photo');
    const userNameClassNames = cx('user-name');
    const iconClassNames = cx('icon');
    const photo = React.cloneElement(userPhoto, { className: userPhotoClassNames });
    return (
      <button {...customProps} className={utilityClassNames} onClick={this.handleOnClick}>
        {photo}
        <span className={userNameClassNames}>{userName} </span>
        {<IconChevronDown className={iconClassNames} />}
      </button>
    );
  }
}

ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.propTypes = defaultProps;
ApplicationHeaderUtility.keys = Utils.KEYS;
ApplicationHeaderUtility.titles = Utils.TITLES;

export default ApplicationHeaderUtility;
