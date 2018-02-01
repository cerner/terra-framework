import React from 'react';
import PropTypes from 'prop-types';
import Arrange from 'terra-arrange';
import CheckIcon from 'terra-icon/lib/icon/IconCheckmark';
import ChevronIcon from 'terra-icon/lib/icon/IconChevronRight';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';

import styles from './MenuItem.scss';

const cx = classNames.bind(styles);

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
   * Indicates if the item is selected. A selected item is indicated with a checkmark.
   */
  isSelected: PropTypes.bool,
  /**
   * Object containing menu item information
   */
  itemData: PropTypes.Object,
  /**
   * Unique key
   */
  key: PropTypes.string,
  /**
   * Indicates if menu item drills to a sub menu page
   */
  hasChevron: PropTypes.bool,
  // /**
  //  * List of Menu.Items to display in a submenu when this item is selected.
  //  */
  // subMenuItems: PropTypes.arrayOf(PropTypes.element),

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
};

const defaultProps = {
  text: '',
  isSelected: false,
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
    this.handleSelection = this.handleSelection.bind(this);
    this.setItemNode = this.setItemNode.bind(this);
    this.state = { isSelected: props.isSelected, key: '' };
  }

  componentDidUpdate() {
    if (this.props.isActive && this.itemNode) {
      this.itemNode.focus();
    }
  }

  setItemNode(node) {
    if (node) {
      this.itemNode = node;
    }
  }

  handleSelection(event) {
    event.preventDefault();
    const newIsSelected = !this.state.isSelected;
    this.setState({ isSelected: newIsSelected });

    if (this.props.onChange) {
      this.props.onChange(event, newIsSelected);
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
      if (event.nativeEvent.keyCode === MenuUtils.KEYCODES.ENTER || event.nativeEvent.keyCode === MenuUtils.KEYCODES.SPACE) {
        this.handleSelection(event);

        if (this.props.onClick) {
          this.props.onClick(event);
        }
      }

      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  render() {
    const {
      text,
      isSelected,
      isActive,
      ...customProps
    } = this.props;

    const { isGroupItem, isSelectableMenu } = this.context;

    const attributes = Object.assign({}, customProps);
    attributes.tabIndex = '0';

    attributes.onClick = this.wrapOnClick;
    attributes.onKeyDown = this.wrapOnKeyDown(attributes.onKeyDown);

    const itemClassNames = cx([
      'item',
      { selected: this.state.isSelected || (isGroupItem && isSelected) },
      attributes.className,
    ]);

    const textContainer = <div className={cx(['title'])}>{text}</div>;
    let content = textContainer;
    if (this.props.hasChevron || isSelectableMenu) {
      content = (
        <Arrange
          fitStart={isSelectableMenu ? <CheckIcon className={cx(['checkmark'])} /> : null}
          fill={textContainer}
          fitEnd={this.props.hasChevron ? <ChevronIcon className={cx(['chevron'])} /> : null}
          align={'center'}
        />
      );
    }

    const role = 'menuitem';

    return (
      <li {...attributes} className={itemClassNames} ref={this.setItemNode} role={role} >
        {content}
      </li>
    );
  }
}

MenuItem.propTypes = propTypes;
MenuItem.defaultProps = defaultProps;
MenuItem.contextTypes = contextTypes;

export default MenuItem;
