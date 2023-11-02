import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Spacer from 'terra-spacer';
import { IconFolder } from 'terra-icon';

import styles from './TreeItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The file name.
   */
  text: PropTypes.string,
  /**
   * The icon to display to the left of the name.
   */
  icon: PropTypes.element,
  /**
   * List of FolderTree.Items to display in a subtree when this TreeItem is clicked.
   */
  subtreeItems: PropTypes.arrayOf(PropTypes.element),
  /**
   * Whether or not the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not the item is disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Callback function for click event.
   */
  onClick: PropTypes.function,
  /**
   * Level of nesting for this item.
   */
  level: PropTypes.number,
};

const defaultProps = {
  isSelected: false
}

const TreeItem = ({
  icon, text, subtreeItems, isDisabled, isSelected, onClick
}) => {
  console.log(isSelected);
  console.log(subtreeItems);

  const subtree = subtreeItems?.length > 0 ? (
    <ul
      className={cx('subtree')}
      role="group"
    >
      {subtreeItems.map((item) => (
        <TreeItem {...item.props} />
      ))}
    </ul>
  ) : null;

  const itemIcon = subtree ? <IconFolder /> : icon;
  
  const itemClassNames = classNames(
    cx(
      'item',
      { selected: isSelected },
      { disabled: isDisabled }
    ),
  );

  if (subtree) {
    return (
      <>
        <li className={itemClassNames} onClick={onClick}>
          <input
            type="radio"
            checked={isSelected}
            onClick={onClick}
          />
          <span style={ {paddingLeft: '50px'} } >
            <Spacer paddingLeft='medium' paddingRight='medium' isInlineBlock >
              {itemIcon}
            </Spacer>
            {text}
          </span>
        </li>
        {subtree}
      </>
    );
  }

  return (
    <>
      <li
        className={itemClassNames}
        onClick={onClick}
        role="treeitem"
      >
        <input
          type="radio"
          checked={isSelected}
          onClick={onClick}
        />
        {/* <span style={ {paddingLeft: '50px'} } > */}
          <Spacer paddingLeft='medium' paddingRight='medium' isInlineBlock >
            {itemIcon}
          </Spacer>
          {text}
        {/* </span> */}
      </li>
    </>
  );
};

TreeItem.propTypes = propTypes;
TreeItem.defaultProps = defaultProps;

export default TreeItem;
