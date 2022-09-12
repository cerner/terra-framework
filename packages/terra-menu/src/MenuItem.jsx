import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import CheckIcon from 'terra-icon/lib/icon/IconCheckmark';
import ChevronIcon from 'terra-icon/lib/icon/IconChevronRight';
import InstructionsForUseIcon from 'terra-icon/lib/icon/IconConsultInstructionsForUse';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import * as KeyCode from 'keycode-js';
import Spacer from 'terra-spacer';
import styles from './MenuItem.module.scss';

const cx = classNamesBind.bind(styles);

const contextTypes = {
  isGroupItem: PropTypes.bool,
  isSelectableMenu: PropTypes.bool,
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
   * Indicates if the item is selected. A selected item is indicated with a checkmark.
   */
  isSelected: PropTypes.bool,

  /**
   * Indicates if the item should be selectable.
   */
  isSelectable: PropTypes.bool,

  /**
   * Displays the  eIFU (electronic instructions for use) icon for menu item if set to true. (This icon is used to indicate Help content that is the equivalent of an instruction manual)
   */
  isInstructionsForUse: PropTypes.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Callback function for when item is clicked
   */
  onClick: PropTypes.func,

  /**
   * Callback function for when selection state changes on a selectable item.
   */
  onChange: PropTypes.func,

  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: PropTypes.bool,

  /**
   * Custom icon to display in the menu
   */
  menuIcon: PropTypes.element,
};

const defaultProps = {
  text: '',
  isSelected: false,
  isInstructionsForUse: false,
  isActive: false,
  isSelectable: undefined,
  isDisabled: false,
  subMenuItems: [],
};

class MenuItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.wrapOnKeyUp = this.wrapOnKeyUp.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setItemNode = this.setItemNode.bind(this);
    this.state = {
      isSelected: props.isSelected && props.isSelectable && !context.isGroupItem,
      isActive: false,
    };
  }

  componentDidUpdate() {
    if (this.props.isActive && this.itemNode) {
      this.itemNode.focus();
    }
  }

  handleSelection(event) {
    event.preventDefault();

    if (this.props.isSelectable && !this.context.isGroupItem && !this.props.isDisabled) {
      this.setState(prevState => ({ isSelected: !prevState.isSelected }));

      if (this.props.onChange) {
        this.props.onChange(event, !this.state.isSelected);
      }
    }
  }

  setItemNode(node) {
    if (node) {
      this.itemNode = node;
    }
  }

  wrapOnClick(event) {
    this.handleSelection(event);

    if (this.props.onClick) {
      this.props.onClick(event);
    }
  }

  wrapOnKeyDown(onKeyDown) {
    return ((event) => {
      if (event.nativeEvent.keyCode === KeyCode.KEY_RETURN || event.nativeEvent.keyCode === KeyCode.KEY_SPACE) {
        this.handleSelection(event);

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
      isInstructionsForUse,
      isSelectable,
      subMenuItems,
      isActive,
      menuIcon,
      ...customProps
    } = this.props;

    const { isGroupItem, isSelectableMenu } = this.context;

    const attributes = { ...customProps };
    attributes.tabIndex = isDisabled ? '-1' : '0';
    attributes['aria-disabled'] = isDisabled;

    // This is passed down by the single select list in group item and not needed
    delete attributes.hasChevron;

    if (isDisabled) {
      delete attributes.onClick;
      delete attributes.onKeyDown;
    } else {
      attributes.onClick = this.wrapOnClick;
      attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);
      attributes.onKeyUp = this.wrapOnKeyUp(attributes.Up);
    }

    const markAsSelected = this.state.isSelected || (isGroupItem && isSelected);
    const textContainer = <div className={cx('text')}>{text}</div>;
    const hasChevron = subMenuItems.length > 0;

    const itemClassNames = cx([
      'item',
      { selected: markAsSelected },
      { 'is-disabled': isDisabled },
      { 'is-top-level': hasChevron },
      // eslint-disable-next-line quote-props
      { 'active': this.state.isActive },
      attributes.className,
    ]);

    let content = textContainer;
    if (hasChevron || isSelectableMenu || isInstructionsForUse || menuIcon) {
      let fitStartIcon = null;
      if (isInstructionsForUse) {
        fitStartIcon = <InstructionsForUseIcon className={cx('start-icon')} />;
      } else if (menuIcon && isSelectableMenu && markAsSelected) {
        fitStartIcon = <CheckIcon className={cx(['checkmark', 'start-icon'])} />;
      } else if (menuIcon) {
        fitStartIcon = (<Spacer marginLeft="small">{menuIcon}</Spacer>);
      } else if (isSelectableMenu) {
        fitStartIcon = <CheckIcon className={cx(['checkmark', 'start-icon'])} />;
      }

      content = (
        <Arrange
          fitStart={fitStartIcon}
          fill={textContainer}
          fitEnd={hasChevron ? <ChevronIcon className={cx('chevron')} /> : null}
          align="center"
        />
      );
    }

    let role = 'menuitem';
    if (isGroupItem) {
      role = 'menuitemradio';
    } else if (isSelectable) {
      role = 'menuitemcheckbox';
    }

    return (
      <ThemeContext.Consumer>
        { theme => (
          <li {...attributes} className={classNames(itemClassNames, cx(theme.className))} ref={this.setItemNode} role={role} aria-checked={markAsSelected}>
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

export default MenuItem;
