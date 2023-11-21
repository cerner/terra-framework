import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';

import Spacer from 'terra-spacer';
import Arrange from 'terra-arrange';
import { IconFolder } from 'terra-icon';
import ThemeContext from 'terra-theme-context';

import styles from './FolderTreeItem.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The label for the folder tree item.
   */
  label: PropTypes.string.isRequired,
  /**
   * The icon to display to the left of the name.
   */
  icon: PropTypes.element,
  /**
   * List of FolderTree.Items to display in a subfolder when this FolderTreeItem is clicked. This makes the item expandable and collapsible. It also makes the item's icon a Folder, overriding anything given as the icon prop.
   */
  subfolderItems: PropTypes.arrayOf(PropTypes.element),
  /**
   * Whether or not the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Callback function for click event.
   */
  onClick: PropTypes.func,
  /**
   * @private
   * Level of nesting for this item.
   */
  level: PropTypes.number,
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isSelected: false,
  level: 0,
};

const FolderTreeItem = ({
  icon,
  label,
  subfolderItems,
  isSelected,
  onClick,
  level,
  intl,
}) => {
  const theme = useContext(ThemeContext);

  const subfolder = subfolderItems?.length > 0 ? (
    <ul
      className={cx('subfolder')}
      role="group"
    >
      {subfolderItems.map((item) => (
        <FolderTreeItem
          {...item.props}
          intl={intl}
          level={level + 1}
        />
      ))}
    </ul>
  ) : null;

  const itemIcon = subfolder ? <IconFolder a11yLabel={intl.formatMessage({ id: 'Terra.folder-tree.folder-icon' })} /> : icon;

  const itemClassNames = classNames(
    cx(
      'folder-tree-item',
      { selected: isSelected },
      theme.className,
    ),
  );

  return (
    <>
      <li
        className={itemClassNames}
        role="treeitem"
        aria-selected={isSelected}
      >
        <input
          type="radio"
          checked={isSelected}
          onClick={onClick}
        />
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <span style={{ paddingLeft: `${level}rem` }}>
          <Arrange
            fitStart={(
              <Spacer paddingLeft="medium" paddingRight="medium" isInlineBlock>
                {itemIcon}
              </Spacer>
            )}
            fill={label}
            alignFitStart="center"
          />
        </span>
      </li>
      {subfolder}
    </>
  );
};

FolderTreeItem.propTypes = propTypes;
FolderTreeItem.defaultProps = defaultProps;

export default injectIntl(FolderTreeItem);
