import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import UtilityMenu from './_UtilityMenu';
import Utils from '../_Utils';
import styles from './_UtilityButton.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: PropTypes.func.isRequired,
  /**
   * The key of the top level menu.
   */
  selectedKey: PropTypes.string.isRequired,
  /**
   * The text associated with utilities.
   */
  title: PropTypes.string,
  /**
   * The image associated with utilities.
   */
  accessory: PropTypes.element,
  /**
   * Sets the Utility variant.
   */
  variant: PropTypes.oneOf([Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU]).isRequired,
};

const defaultProps = {
  menuItems: [],
  title: '',
};

class ApplicationHeaderUtility extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClick = this.handleOnClick.bind(this);
    this.createContent = this.createContent.bind(this);
  }

  handleOnClick(event) {
    if (this.props.onDisclose) {
      const content = this.createContent();
      this.props.onDisclose(content);
    }
    if (this.onClick) {
      this.onClick(event);
    }
  }

  createContent() {
    return (
      <UtilityMenu
        selectedKey={this.props.selectedKey}
        menuItems={this.props.menuItems}
        onChange={this.props.onChange}
        variant={this.props.variant}
        data-application-header-utility-menu
      />
    );
  }

  render() {
    const {
      menuItems,
      onChange,
      onDisclose,
      selectedKey,
      title,
      accessory,
      variant,
      ...customProps
    } = this.props;

    this.onClick = customProps.onClick;
    delete customProps.onClick;

    let utilityClassNames = null;
    let cloneAccessory = null;
    let cloneTitle = null;
    let contentContainer = null;
    if (variant === Utils.VARIANTS.HEADER) {
      utilityClassNames = cx(['header-utility-button', customProps.className]);
    } else {
      utilityClassNames = cx(['menu-utility-button', customProps.className]);
    }
    const accessoryClassNames = cx('accessory');
    const titleClassNames = cx('title');
    const iconClassNames = cx('icon');

    if (accessory) {
      cloneAccessory = React.cloneElement(accessory, { className: accessoryClassNames });
    }
    if (title) {
      cloneTitle = <span className={titleClassNames}>{title}</span>;
    }
    contentContainer = (
      <span className={cx('content-container')}>
        {cloneAccessory}
        {cloneTitle}
      </span>
    );

    return (
      <button {...customProps} className={utilityClassNames} onClick={(event) => { this.handleOnClick(event); }} aria-label={'Utility Button'}>
        {variant === Utils.VARIANTS.MENU ? contentContainer : [cloneAccessory, cloneTitle] }
        {variant === Utils.VARIANTS.MENU ? <IconChevronRight className={iconClassNames} /> : <IconChevronDown className={iconClassNames} />}
      </button>
    );
  }
}

ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.defaultProps = defaultProps;

export default ApplicationHeaderUtility;
