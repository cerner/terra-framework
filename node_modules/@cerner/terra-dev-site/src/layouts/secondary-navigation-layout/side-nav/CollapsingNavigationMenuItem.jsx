import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconCaretRight from 'terra-icon/lib/icon/IconCaretRight';
import IconCaretDown from 'terra-icon/lib/icon/IconCaretDown';

import styles from './CollapsingNavigationMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  item: PropTypes.shape({
    /**
     * Text for the menu item
     */
    text: PropTypes.string,

    /**
     * On-click the menu item will take you here
     */
    path: PropTypes.string,

    /**
     * Sub menu items
     */
    childItems: PropTypes.arrayOf(PropTypes.object),

    /**
     * Name of the menu item
     */
    name: PropTypes.string,
  }).isRequired,

  /**
   * HTML ID to be assigned to the menu item element
   */
  id: PropTypes.string.isRequired,

  /**
   * Indicates if a menu item is expanded or not
   */
  itemIsOpen: PropTypes.bool,

  /**
   * Indicates if the menu item is currently selected or not
   */
  isSelected: PropTypes.bool,

  /**
   * Child elements to render within the menu item
   */
  childItems: PropTypes.arrayOf(PropTypes.element),

  /**
   * Indicates if the menu item is a first level element or not
   */
  firstLevel: PropTypes.bool,

  /**
   * Function to handle a keyDown event
   */
  handleKeyDown: PropTypes.func.isRequired,

  /**
   * Function to handle a click event
   */
  handleOnClick: PropTypes.func.isRequired,
};

/**
 * Enables focus styles for the target of the given event. Typically used as an onBlur callback on selectable elements.
 */
const enableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'true');
};

/**
 * Disables focus styles for the target of the given event. Typically used as an onMouseDown callback on selectable elements.
 */
const disableFocusStyles = (event) => {
  event.currentTarget.setAttribute('data-focus-styles-enabled', 'false');
};

const CollapsingNavigationMenuItem = React.forwardRef(({
  item, id, itemIsOpen, isSelected, childItems, firstLevel, handleKeyDown, handleOnClick,
}, ref) => {
  const itemHasChildren = item.childItems !== undefined;

  const menuItemClassNames = classNames(
    cx([
      'item',
      { 'is-selected': isSelected },
    ]),
  );
  const optionalAttributes = itemHasChildren ? { 'aria-expanded': itemIsOpen } : {};

  return (
    <React.Fragment key={item.path}>
      <div className={!firstLevel ? cx('indent') : null}>
        <div
          className={menuItemClassNames}
          tabIndex="-1"
          role="treeitem"
          id={id}
          onKeyDown={event => handleKeyDown(event, item)}
          onClick={event => handleOnClick(event, item)}
          onBlur={enableFocusStyles}
          onMouseDown={disableFocusStyles}
          data-focus-styles-enabled
          ref={ref}
          {...optionalAttributes}
        >
          {itemHasChildren ? <span className={cx('disclosure')}>{ itemIsOpen ? <IconCaretDown className={cx('caret')} /> : <IconCaretRight className={cx('caret')} />}</span> : null}
          {item.name}
        </div>
        {childItems}
      </div>
    </React.Fragment>
  );
});

CollapsingNavigationMenuItem.propTypes = propTypes;

export default CollapsingNavigationMenuItem;
