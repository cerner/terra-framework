import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import Button from 'terra-button';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import Utils from '../_Utils';
import styles from './_UtilityMenuItem.scss';

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
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.state = { isSelected: props.isSelected && props.isSelectable };
  }

  handleKeyDown(event, key) {
    if (event.nativeEvent.keyCode === Utils.KEY_CODES.ENTER || event.nativeEvent.keyCode === Utils.KEY_CODES.SPACE || event.nativeEvent.keyCode === Utils.KEY_CODES.RIGHT_ARROW) {
      this.props.onChange(event, key);
    }
  }

  handleSelection(event, key) {
    event.preventDefault();
    if (this.props.isSelectable) {
      const newIsSelected = !this.state.isSelected;
      this.setState({ isSelected: newIsSelected });
    }
    this.props.onChange(event, key);
  }

  render() {
    const {
      itemKey,
      title,
      content,
      contentLocation,
      isSelected,
      isSelectable,
      hasChevron,
      leftInset,
      onChange,
      rightInset,
      variant,
      ...customProps
    } = this.props;
    let bodyItemClassNames = null;
    let footerItemClassNames = null;
    if (variant === Utils.VARIANTS.HEADER) {
      bodyItemClassNames = cx(['header-utility-body-item']);
      footerItemClassNames = cx('header-utility-footer-item');
    } else {
      bodyItemClassNames = cx(['menu-utility-body-item']);
      footerItemClassNames = cx('menu-utility-footer-item');
    }

    const checkmarkClassNames = cx([
      'checkmark',
      { selected: this.state.isSelected },
    ]);

    const chevronClassNames = cx([
      'chevron',
      { 'has-chevron': hasChevron },
    ]);

    const arrangeClassNames = cx([
      { 'default-left-inset': !leftInset },
      { 'default-right-inset': !rightInset },
    ]);

    // Footer items are always buttons. Body items are list items.
    // If content exists and is a body item, render content. Else, render the title text.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    let item = null;
    if (contentLocation === Utils.LOCATIONS.FOOTER) {
      item = (
        <Button
          {...customProps}
          onClick={event => this.handleSelection(event, itemKey)}
          onKeyDown={event => this.handleKeyDown(event, itemKey)}
          variant={Button.Opts.Variants.NEUTRAL}
          className={footerItemClassNames}
          text={title}
        />
      );
    } else if (content) {
      item = (
        <li
          {...customProps}
          tabIndex="0"
          key={itemKey}
          onClick={event => this.handleSelection(event, itemKey)}
          onKeyDown={event => this.handleKeyDown(event, itemKey)}
          role="button"
          className={bodyItemClassNames}
          aria-label={title}
        >
          <Arrange
            fitStart={leftInset ? <IconCheckmark className={checkmarkClassNames} /> : null}
            fill={content}
            fitEnd={rightInset ? <IconChevronRight className={chevronClassNames} /> : null}
            align={'center'}
            className={arrangeClassNames}
          />
        </li>
      );
    } else {
      item = (
        <li
          {...customProps}
          tabIndex="0"
          key={itemKey}
          onClick={event => this.handleSelection(event, itemKey)}
          onKeyDown={event => this.handleKeyDown(event, itemKey)}
          role="button"
          className={bodyItemClassNames}
          aria-label={title}
        >
          <Arrange
            fitStart={leftInset ? <IconCheckmark className={checkmarkClassNames} /> : null}
            fill={<div>{title}</div>}
            fitEnd={rightInset ? <IconChevronRight className={chevronClassNames} /> : null}
            align={'center'}
            className={arrangeClassNames}
          />
        </li>
      );
    }
   /* eslint-enable jsx-a11y/no-static-element-interactions */
    return item;
  }
}

UtilityMenuItem.propTypes = propTypes;
UtilityMenuItem.defaultProps = defaultProps;

export default UtilityMenuItem;
