import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import Utils from '../Utils';
import styles from './_UtilityMenuItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The unique key associated with this menu item.
   */
  itemKey: PropTypes.string.isRequired,
  /**
   * The text to be displayed next to the menu item.
   */
  title: PropTypes.string,
  /**
   * The component associated with this menu item.
   */
  content: PropTypes.element,
  /**
   * The location of this menu item.
   */
  contentLocation: PropTypes.oneOf([Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER]),
  /**
   * Whether this item should be inset to the left. Based on if any other item has isSelected set to true.
   */
  leftInset: PropTypes.bool,
  /**
   * Indicates if the item has focus. This is used internally to control focus and does not set initial focus.
   */
  isActive: PropTypes.bool,
  /**
   * Whether this item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether this item can be toggled.
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not the menu item should display a disclosure indicator.
   */
  hasChevron: PropTypes.bool,
  /**
   * Function to trigger when a key is pressed.
   */
  onKeyDown: PropTypes.func,
  /**
   * Function to trigger when this item is selected.
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Whether this item should be inset to the right. Based on if any other item has a chevron.
   */
  rightInset: PropTypes.bool,
  /**
   * Sets the Utility variant.
   */
  variant: PropTypes.oneOf([Utils.VARIANTS.HEADER, Utils.VARIANTS.MENU]).isRequired,
};

const defaultProps = {
  title: '',
};

class UtilityMenuItem extends React.Component {
  constructor(props) {
    super(props);
    this.wrapOnKeyDown = this.wrapOnKeyDown.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
    this.setItemNode = this.setItemNode.bind(this);
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

  wrapOnKeyDown(key, onKeyDown) {
    return ((event) => {
      if (event.nativeEvent.keyCode === Utils.KEY_CODES.ENTER || event.nativeEvent.keyCode === Utils.KEY_CODES.SPACE || event.nativeEvent.keyCode === Utils.KEY_CODES.RIGHT_ARROW) {
        this.handleSelection(event, key);
      }
      if (onKeyDown) {
        onKeyDown(event);
      }
    });
  }

  handleSelection(event, key) {
    event.preventDefault();
    this.props.onChange(event, key);
  }

  render() {
    const {
      itemKey,
      title,
      content,
      contentLocation,
      isActive,
      isSelected,
      isSelectable,
      hasChevron,
      leftInset,
      onChange,
      onKeyDown,
      rightInset,
      variant,
      ...customProps
    } = this.props;

    const bodyItemClassNames = cx([
      { 'header-utility-body-item': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-body-item': variant === Utils.VARIANTS.MENU },
    ]);

    const footerItemClassNames = cx([
      { 'header-utility-footer-item': variant === Utils.VARIANTS.HEADER },
      { 'menu-utility-footer-item': variant === Utils.VARIANTS.MENU },
    ]);

    const checkmarkClassNames = cx([
      'checkmark',
      { selected: isSelected },
    ]);

    const chevronClassNames = cx([
      'chevron',
      { 'has-chevron': hasChevron },
    ]);

    const arrangeClassNames = cx([
      { 'default-left-inset': !leftInset },
      { 'default-right-inset': !rightInset },
    ]);

    /* eslint-disable jsx-a11y/no-static-element-interactions, jsx-a11y/no-noninteractive-element-to-interactive-role */
    const renderBodyItem = (fill, wrapOnKeyDown, handleSelection) => (
      <li
        {...customProps}
        tabIndex="0"
        key={itemKey}
        onClick={event => handleSelection(event, itemKey)}
        onKeyDown={wrapOnKeyDown(itemKey, onKeyDown)}
        role="button"
        className={bodyItemClassNames}
        aria-label={title}
        ref={this.setItemNode}
      >
        <Arrange
          fitStart={leftInset ? <IconCheckmark className={checkmarkClassNames} /> : null}
          fill={fill}
          fillAttributes={{ className: cx('menu-item-fill') }}
          fitEnd={rightInset ? <IconChevronRight className={chevronClassNames} /> : null}
          align="center"
          className={arrangeClassNames}
        />
      </li>);
    /* eslint-enable jsx-a11y/no-static-element-interactions */


    const renderFooterButton = (wrapOnKeyDown, handleSelection) => (
      <Button
        {...customProps}
        onClick={event => handleSelection(event, itemKey)}
        onKeyDown={wrapOnKeyDown(itemKey, onKeyDown)}
        variant={Button.Opts.Variants.NEUTRAL}
        className={footerItemClassNames}
        text={title}
      />
    );

    // Footer items are always buttons. Body items are list items.
    // If content exists and is a body item, render content. Else, render the title text.
    let item = null;
    const {
      wrapOnKeyDown, handleSelection,
    } = this;
    if (contentLocation === Utils.LOCATIONS.FOOTER) {
      item = renderFooterButton(wrapOnKeyDown, handleSelection);
    } else if (content) {
      item = renderBodyItem(content, wrapOnKeyDown, handleSelection);
    } else {
      item = renderBodyItem((<div>{title}</div>), wrapOnKeyDown, handleSelection);
    }
    return item;
  }
}

UtilityMenuItem.propTypes = propTypes;
UtilityMenuItem.defaultProps = defaultProps;

export default UtilityMenuItem;
