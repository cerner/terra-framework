import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import { injectIntl, intlShape } from 'react-intl';
import IconChevronDown from 'terra-icon/lib/icon/IconChevronDown';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import UtilityMenu from './_UtilityMenu';
import Utils from '../Utils';
import styles from './_UtilityButton.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns (event, { key: String, metaData: Object})
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: PropTypes.func.isRequired,
  /**
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: intlShape.isRequired,
  /**
   * The key of the top level menu page.
   */
  initialSelectedKey: PropTypes.string.isRequired,
  /**
   * The text associated with utilities.
   */
  title: PropTypes.string,
  /**
   * The image associated with utilities.
   */
  accessory: PropTypes.element,
  /**
   * The role attribute to set on the menu.
   */
  menuRole: PropTypes.string,
  /**
   * Sets the Utility variant.
   */
  variant: PropTypes.oneOf([Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU]).isRequired,
};

const defaultProps = {
  title: '',
};

class UtilityButton extends React.Component {
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
        initialSelectedKey={this.props.initialSelectedKey}
        menuRole={this.props.menuRole}
        menuItems={this.props.menuItems}
        onChange={this.props.onChange}
        variant={this.props.variant}
      />
    );
  }

  render() {
    const {
      menuItems,
      onChange,
      onDisclose,
      initialSelectedKey,
      intl,
      title,
      accessory,
      variant,
      ...customProps
    } = this.props;

    this.onClick = customProps.onClick;
    delete customProps.onClick;
    delete customProps.menuRole;

    const theme = this.context;

    const utilityClassNames = classNames(cx(
      { 'header-utility-button': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-button': variant === Utils.VARIANTS.MENU },
      theme.className,
    ),
    customProps.className);
    const iconClassNames = cx('icon');

    let cloneAccessory = null;
    if (accessory) {
      cloneAccessory = React.cloneElement(accessory, { className: cx('accessory') });
    }

    let cloneTitle = null;
    if (title) {
      cloneTitle = <span className={cx('title')}>{title}</span>;
    }

    const contentContainer = (
      <span className={cx('content-container')}>
        {cloneAccessory}
        {cloneTitle}
      </span>
    );

    const buttonText = intl.formatMessage({ id: 'Terra.application.utility.button' });
    return (
      <button
        type="button"
        {...customProps}
        className={utilityClassNames}
        onClick={(event) => { this.handleOnClick(event); }}
        aria-label={buttonText}
      >
        {variant === Utils.VARIANTS.MENU ? contentContainer : [cloneAccessory, cloneTitle] }
        {variant === Utils.VARIANTS.MENU ? <IconChevronRight className={iconClassNames} /> : <IconChevronDown className={iconClassNames} />}
      </button>
    );
  }
}

UtilityButton.propTypes = propTypes;
UtilityButton.defaultProps = defaultProps;
UtilityButton.contextType = ThemeContext;

export default injectIntl(UtilityButton);
