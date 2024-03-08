import React from 'react';
/* eslint-disable-next-line import/no-extraneous-dependencies */
import { injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import CheckIcon from 'terra-icon/lib/icon/IconCheckmark';
import ChevronIcon from 'terra-icon/lib/icon/IconChevronRight';
import InstructionsForUseIcon from 'terra-icon/lib/icon/IconConsultInstructionsForUse';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import VisuallyHiddenText from 'terra-visually-hidden-text';
import * as KeyCode from 'keycode-js';
import styles from './MenuItem.module.scss';
import MenuUtils, { stopPropagation } from './_MenuUtils';

const cx = classNamesBind.bind(styles);

const contextTypes = {
  isGroupItem: PropTypes.bool,

  /**
   * isSelectableMenu has been deprecated and will be removed on next major version release.
   * Rename the `isSelectableMenu` prop to `isToggleableMenu`.
   */
  isSelectableMenu: PropTypes.bool,

  /**
  * Indicates if the menu should be toggleable.
  */
  isToggleableMenu: PropTypes.bool,

  /**
   * Indicates if the menu needs to reserve space on the left for each menu item if one
   * or more of the items needs to display a custom icon, instructions for use icon, or
   * a checkmark if the item is part of a group item.
   */
  shouldReserveSpaceForIcon: PropTypes.bool,
};

const propTypes = {
  /**
   * Sets the item's text.
   */
  text: PropTypes.string,

  /**
   * Indicates if item should be disabled
   */
  isDisabled: PropTypes.bool,

  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * isSelected has been deprecated and will be removed on next major version release.
   * Rename the `isSelected` prop to `isToggled`.
   */
  isSelected: PropTypes.bool,

  /**
   * ![IMPORTANT](https://badgen.net/badge/prop/deprecated/red)
   * isSelectable has been deprecated and will be removed on next major version release.
   * Rename the `isSelectable` prop to `isToggleable`.
   */
  isSelectable: PropTypes.bool,

  /**
  * Indicates if the item is toggled. A toggled item is indicated with a checkmark.
  */
  isToggled: PropTypes.bool,

  /**
  * Indicates if the item should be toggleable.
  */
  isToggleable: PropTypes.bool,

  /**
   * Displays the  eIFU (electronic instructions for use) icon for menu item if set to true. (This icon is used to indicate Help content that is the equivalent of an instruction manual)
   */
  isInstructionsForUse: PropTypes.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is clicked.
   */
  subMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Callback function for when item is clicked
   */
  onClick: PropTypes.func,

  /**
   * Callback function for when toggleable state changes on a toggleabe item.
   */
  onChange: PropTypes.func,

  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: PropTypes.bool,

  /**
   * Custom icon to display in the item
   */
  icon: PropTypes.element,

  /**
   * @private
   * Indicates if the item should display with a highlighted background. Reserved for Terra higher-order component approved usage only.
   */
  isHighlighted: PropTypes.bool,
  /**
   * @private
   * The index of the menu item.
   */
  index: PropTypes.number,
  /**
   * @private
   * Number of items in the menu.
   */
  totalItems: PropTypes.number,
  /**
   * @private
   * The intl object to be injected for translations. Provided by the injectIntl function.
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
  /**
   * If additional visible information text is used, provide a string containing the IDs for html elements that
   * help describe the intent of the group of menu.
   */
  ariaDescribedBy: PropTypes.string,
};

const defaultProps = {
  text: '',
  isToggled: false,
  isInstructionsForUse: false,
  isActive: false,
  isToggleable: undefined,
  isDisabled: false,
  subMenuItems: [],
  isHighlighted: false,
};

// TODO: remove isSelect and isSeletable props on the next major release
class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    const {
      isSelected,
      isSelectable,
      isToggled,
      isToggleable,
    } = this.props;

    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.wrapOnKeyUp = this.wrapOnKeyUp.bind(this);
    this.handleToggled = this.handleToggled.bind(this);
    this.setItemNode = this.setItemNode.bind(this);
    const toggled = (isToggled || isSelected);
    const toggleable = (isToggleable || isSelectable);

    this.state = {
      isToggled: toggled && toggleable && !context.isGroupItem,
      isActive: false,
    };
  }

  componentDidUpdate() {
    if (this.props.isActive && this.itemNode) {
      this.itemNode.focus();
    }
  }

  handleToggled(event) {
    event.preventDefault();

    const {
      isSelectable,
      isToggleable,
    } = this.props;

    if ((isToggleable || isSelectable) && !this.context.isGroupItem && !this.props.isDisabled) {
      this.setState(prevState => ({ isToggled: !prevState.isToggled }));

      if (this.props.onChange) {
        this.props.onChange(event, !this.state.isToggled);
      }
    }
  }

  setItemNode(node) {
    if (node) {
      this.itemNode = node;
    }
  }

  wrapOnClick(event) {
    event.stopPropagation();
    if (!this.props.isDisabled) {
      this.handleToggled(event);

      if (this.props.onClick) {
        this.props.onClick(event);
      }
    }
  }

  wrapOnKeyDown(onKeyDown) {
    return ((event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        this.handleToggled(event);

        // Only add active style if the menu doesn't have a sub menu to avoid active style being stuck enabled
        if (!(this.props.subMenuItems && this.props.subMenuItems.length > 0)) {
          this.setState({ isActive: true });
        }

        if (this.props.onClick) {
          this.props.onClick(event);
        }
      // Remove active state when tab key is released while while holding the space key to avoid active style being stuck enabled
      } else if (event.nativeEvent.keyCode === KeyCode.KEY_TAB) {
        this.setState({ isActive: false });
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  wrapOnKeyUp(onKeyUp) {
    return ((event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        this.setState({ isActive: false });
      }

      if (onKeyUp) {
        onKeyUp(event);
      }
    });
  }

  render() {
    const {
      text,
      isDisabled,
      isSelected,
      isToggled,
      isInstructionsForUse,
      isSelectable,
      isToggleable,
      ariaDescribedBy,
      subMenuItems,
      isActive,
      icon,
      isHighlighted,
      index,
      totalItems,
      intl,
      ...customProps
    } = this.props;

    const {
      isGroupItem,
      isToggleableMenu,
      isSelectableMenu,
      shouldReserveSpaceForIcon,
    } = this.context;
    const attributes = { ...customProps };

    const toggled = (isToggled || isSelected);
    const toggleable = (isToggleable || isSelectable);
    const toggleableMenu = (isToggleableMenu || isSelectableMenu);

    // This is passed down by the single select list in group item and not needed
    delete attributes.hasChevron;

    attributes.onClick = this.wrapOnClick;
    if (!isDisabled) {
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
      attributes.onKeyUp = this.wrapOnKeyUp(attributes.Up);
      attributes['data-terra-menu-interactive-item'] = true;
    }

    const markAsToggled = this.state.isToggled || (isGroupItem && toggled && !isDisabled);
    const textContainer = <div className={cx('text')}>{text}</div>;
    const hasChevron = subMenuItems.length > 0;

    const itemClassNames = cx([
      'item',
      { 'is-highlighted': isHighlighted },
      { 'is-toggled': markAsToggled },
      { 'is-toggleable': toggleable },
      { 'is-disabled': isDisabled },
      { 'is-top-level': hasChevron },
      // eslint-disable-next-line quote-props
      { 'active': this.state.isActive },
      attributes.className,
    ]);

    let content = textContainer;
    let navigationContent;
    let ariaLiveValue = 'polite';

    if (this.itemNode && index === 0 && totalItems !== 1) {
      navigationContent = `. ${intl.formatMessage({ id: 'Terra.menu.navigateMenuItem' })}`;
      if (!MenuUtils.isMac() && this.itemNode.parentNode.getAttribute('data-submenu') !== 'true') {
        navigationContent = '';
      }
    }

    if (isGroupItem && !markAsToggled) {
      ariaLiveValue = undefined;
    }

    const screenReaderResponse = (
      <>
        { MenuUtils.isMac() && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.menu.index' }, { index: index + 1, totalItems })} /> }
        {(isGroupItem || toggleable) && <VisuallyHiddenText aria-live={ariaLiveValue} text={markAsToggled ? intl.formatMessage({ id: 'Terra.menu.selected' }) : intl.formatMessage({ id: 'Terra.menu.unselected' })} /> }
        <VisuallyHiddenText text={navigationContent} />
        {/* Adds context for item with submenu-items */}
        { subMenuItems.length > 0 && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.menu.itemWithSubmenu' })} /> }
        {/* Adds context for navigating back to parent menu from submenu */}
        { this.itemNode && this.itemNode.parentNode.getAttribute('data-submenu') === 'true' && index === 0
            && <VisuallyHiddenText text={intl.formatMessage({ id: 'Terra.menu.exitSubmenu' })} /> }
      </>
    );

    if (hasChevron || toggleableMenu || isInstructionsForUse || icon || shouldReserveSpaceForIcon) {
      let fitStartIcon = null;
      if (isInstructionsForUse) {
        fitStartIcon = <InstructionsForUseIcon className={cx('start-icon')} />;
      } else if (toggleableMenu) {
        if (!toggleable && icon) {
          fitStartIcon = React.cloneElement(icon, { className: cx([icon.props.className, 'start-icon']) });
        } else {
          fitStartIcon = <CheckIcon className={cx(['checkmark', 'start-icon'])} />;
        }
      } else if (icon) {
        fitStartIcon = React.cloneElement(icon, { className: cx([icon.props.className, 'start-icon']) });
      } else if (shouldReserveSpaceForIcon) {
        fitStartIcon = <CheckIcon className={cx(['checkmark', 'start-icon'])} />;
      }

      content = (
        <>
          <Arrange
            fitStart={fitStartIcon}
            fill={textContainer}
            fitEnd={hasChevron ? <ChevronIcon className={cx('chevron')} /> : null}
            align="center"
          />
          {screenReaderResponse}
        </>
      );
    } else {
      content = (
        <>
          {textContainer}
          {screenReaderResponse}
        </>
      );
    }

    let role = 'menuitem';
    const isMacOs = MenuUtils.isMac();
    if (isGroupItem && isMacOs) {
      role = 'menuitemradio';
    } else if (toggleable && isMacOs) {
      role = 'menuitemcheckbox';
    }
    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
    return (
      <ThemeContext.Consumer>
        { theme => (
          <li
            {...attributes}
            className={classNames(itemClassNames, cx(theme.className))}
            ref={this.setItemNode}
            role={role}
            aria-selected={(isMacOs && toggleable) ? markAsToggled : undefined}
            tabIndex="0"
            onFocus={stopPropagation}
          >
            {content}
          </li>
        )}
      </ThemeContext.Consumer>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;

export default injectIntl(MenuItem);
