import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import Arrange from 'terra-arrange';
import IconCheckmark from 'terra-icon/lib/icon/IconCheckmark';
import IconChevronRight from 'terra-icon/lib/icon/IconChevronRight';
import Utils from '../_Utils';
import styles from './_HeaderUtilityMenuItem.scss';

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
};

const defaultProps = {
  title: '',
  content: null,
};

class HeaderUtilityMenuItem extends React.Component {
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
      onChange,
      ...customProps
    } = this.props;

    const bodyItemClassNames = cx(['body-item']);
    const footerItemclassName = cx('footer-item');
    const checkmarkClassName = cx(['checkmark', { selected: this.state.isSelected }]);
    const chevronClassName = cx('chevron', { 'has-chevron': hasChevron });

    // Footer items are buttons. Body items are list items.
    // If content exists, render content. Else, render the title text.
    /* eslint-disable jsx-a11y/no-static-element-interactions */
    let item = null;
    if (contentLocation === Utils.LOCATIONS.FOOTER) {
      if (content) {
        item = (
          <button
            {...customProps}
            onClick={event => this.handleSelection(event, itemKey)}
            onKeyDown={event => this.handleKeyDown(event, itemKey)}
            className={footerItemclassName}
            aria-label={title}
          >
            {content}
          </button>
        );
      } else {
        item = (
          <button
            {...customProps}
            onClick={event => this.handleSelection(event, itemKey)}
            onKeyDown={event => this.handleKeyDown(event, itemKey)}
            className={footerItemclassName}
            aria-label={title}
          >
            {title}
          </button>
        );
      }
    } else if (content) {
      item = (
        <li
          {...customProps}
          tabIndex="0"
          key={itemKey}
          onClick={event => this.handleSelection(event, itemKey)}
          onKeyDown={event => this.handleKeyDown(event, itemKey)}
          role="button"
          className={`${bodyItemClassNames} ${cx('body-custom-item')}`}
          aria-label={title}
        >
          {content}
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
            fitStart={<IconCheckmark className={checkmarkClassName} />}
            fill={<div>{title}</div>}
            fitEnd={<IconChevronRight className={chevronClassName} />}
            align={'center'}
          />
        </li>
      );
    }
   /* eslint-enable jsx-a11y/no-static-element-interactions */
    return item;
  }
}

HeaderUtilityMenuItem.propTypes = propTypes;
HeaderUtilityMenuItem.defaultProps = defaultProps;

export default HeaderUtilityMenuItem;
