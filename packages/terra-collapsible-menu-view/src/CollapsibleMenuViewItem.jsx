import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import ButtonGroup from 'terra-button-group';
import Menu from './_CollapsibleMenu';
import styles from './CollapsibleMenuView.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Sets the item's text
   */
  text: PropTypes.string.isRequired,

  /**
   * Bounding container for the menu, will use window if no value provided.
   */
  boundingRef: PropTypes.func,

  /**
  * An optional icon. Nested inline with the text when provided
  */
  icon: PropTypes.element,

  /**
   * Indicates if only the icon should display when item is face-up. (Text should still be given to be displayed when item is in the menu)
   */
  isIconOnly: PropTypes.bool,

  /**
  * Reverses the position of the icon and text
  */
  isReversed: PropTypes.bool,

  /**
   * Indicates if the item start as selected when placed in a button group
   */
  isSelected: PropTypes.bool,

  /**
   * Indicates if the item should be disabled.
   */
  isDisabled: PropTypes.bool,

  /**
   * Indicates that clicking on this item while displayed inside a menu should close the menu.
   */
  shouldCloseOnClick: PropTypes.bool,

  /**
   * List of Menu.Items to display in a submenu when this item is selected.
   */
  subMenuItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Callback function for when the item is clicked
   */
  onClick: PropTypes.func,

  /**
   * A string representation of the width in px, limited to:
   * 160, 240, 320, 640, 960, 1280, 1760, or auto
   */
  menuWidth: PropTypes.oneOf(['160', '240', '320', '640', '960', '1280', '1760', 'auto']),

  /**
   * Sets the button variant. One of neutral, emphasis, ghost, de-emphasis, action or utility.
   */
  variant: PropTypes.oneOf([Button.Opts.Variants.NEUTRAL, Button.Opts.Variants.EMPHASIS, Button.Opts.Variants.GHOST, Button.Opts.Variants['DE-EMPHASIS'], Button.Opts.Variants.ACTION, Button.Opts.Variants.UTILITY]),
};

const contextTypes = {
  isCollapsibleGroupItem: PropTypes.bool,
  isCollapsibleMenuItem: PropTypes.bool,
};

const defaultProps = {
  isSelected: false,
  isReversed: false,
  shouldCloseOnClick: true,
  isIconOnly: false,
  variant: Button.Opts.Variants.NEUTRAL,
};

class CollapsibleMenuViewItem extends React.Component {
  constructor(props) {
    super(props);
    this.setButtonNode = this.setButtonNode.bind(this);
    this.getButtonNode = this.getButtonNode.bind(this);
  }

  setButtonNode(node) {
    this.buttonNode = node;
  }

  getButtonNode() {
    return this.buttonNode;
  }

  render() {
    const {
      icon,
      isIconOnly,
      isReversed,
      text,
      isSelected,
      isDisabled,
      subMenuItems,
      shouldCloseOnClick,
      boundingRef,
      menuWidth,
      variant,
      ...customProps
    } = this.props;

    const { isCollapsibleGroupItem, isCollapsibleMenuItem } = this.context;
    const attributes = { ...customProps };
    let item;

    if (isCollapsibleMenuItem) {
      item = (
        <Menu.Item
          {...attributes}
          text={text}
          isSelected={isSelected && isCollapsibleGroupItem}
          isDisabled={isDisabled}
          subMenuItems={subMenuItems}
        />
      );
    } else if (isCollapsibleGroupItem) {
      item = (
        <ButtonGroup.Button
          {...attributes}
          icon={icon}
          text={text}
          isDisabled={isDisabled}
        />
      );
    } else if (subMenuItems && subMenuItems.length > 0) {
      item = (
        <Menu
          contentWidth={menuWidth}
          boundingRef={boundingRef}
          button={(
            <Button
              {...attributes}
              icon={icon}
              text={text}
              isReversed={isReversed}
              isDisabled={isDisabled}
              isIconOnly={isIconOnly}
              variant={variant}
            />
          )}
        >
          {subMenuItems}
        </Menu>
      );
    } else {
      item = (
        <div className={cx('face-up-item')}>
          <Button
            {...attributes}
            icon={icon}
            text={text}
            isReversed={isReversed}
            isDisabled={isDisabled}
            isIconOnly={isIconOnly}
            variant={variant}
          />
        </div>
      );
    }

    return item;
  }
}

CollapsibleMenuViewItem.propTypes = propTypes;
CollapsibleMenuViewItem.defaultProps = defaultProps;
CollapsibleMenuViewItem.contextTypes = contextTypes;
CollapsibleMenuViewItem.Opts = {
  widths: Menu.Opts.widths,
};

export default CollapsibleMenuViewItem;
