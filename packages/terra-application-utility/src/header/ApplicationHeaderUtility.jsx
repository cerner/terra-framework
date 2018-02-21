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
   * The config file containing additional items to be rendered within the menu.
   */
  additionalItemsConfig: PropTypes.arrayOf(PropTypes.object),
  /**
   * The config file containing the static menu items to be rendered within the menu.
   */
  menuConfig: PropTypes.object.isRequired,
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
  userName: PropTypes.string.isRequired,
  /**
   * The image associated with the user.
   */
  userPhoto: PropTypes.element.isRequired,
};

const defaultProps = {
  additionalItemsConfig: [],
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
        additionalItemsConfig={this.props.additionalItemsConfig}
        menuConfig={this.props.menuConfig}
        onChange={this.props.onChange}
      />
    );
  }

  render() {
    const {
      additionalItemsConfig,
      menuConfig,
      onChange,
      onDisclose,
      userName,
      userPhoto,
      ...customProps
    } = this.props;

    const utilityClassNames = cx(['header-utility', customProps.className]);
    const userPhotoClassNames = cx('user-photo');
    const userNameClassNames = cx('user-name');
    const iconClassNames = cx('icon');
    const photo = React.cloneElement(userPhoto, { className: userPhotoClassNames });
    // TODO: hange button variant to de-emphasis on react 16 uplift.
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
