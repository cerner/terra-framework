import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl } from 'react-intl';

import Spacer from 'terra-spacer';
import Arrange from 'terra-arrange';
import { IconFolder, IconCaretRight, IconCaretDown } from 'terra-icon';
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
   * Whether or not the item is selected. Since this component has the appearance of a radio button group, only one item should be selected at a time.
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

  const [isExpanded, setIsExpanded] = useState(false);
  const isFolder = subfolderItems?.length > 0;

  const subfolder = isFolder ? (
    <ul
      className={cx('subfolder')}
      role="group"
      hidden={!isExpanded}
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
  const expandCollapseIcon = isExpanded
    ? <IconCaretDown height="8px" width="8px" style={{ verticalAlign: 'baseline' }} /> // eslint-disable-line react/forbid-component-props
    : <IconCaretRight height="8px" width="8px" style={{ verticalAlign: 'baseline' }} />; // eslint-disable-line react/forbid-component-props

  const handleExpandCollapse = () => {
    setIsExpanded(!isExpanded);
  };

  const itemClassNames = classNames(
    cx(
      'folder-tree-item',
      { selected: isSelected },
      { folder: isFolder },
      theme.className,
    ),
  );

  return (
    <>
      <li
        className={itemClassNames}
        role="treeitem"
        aria-expanded={isFolder ? isExpanded : null}
        aria-selected={isSelected}
        onClick={handleExpandCollapse}
        onKeyDown={handleExpandCollapse}
      >
        <input
          type="radio"
          checked={isSelected}
          onClick={onClick}
          aria-hidden={true} // Hiding the radio button from assistive technology since they cannot be grouped correctly
          tabIndex={-1} // Prevent tabbing to the button since it should not be read or acknowledged by assistive technology
        />
        {/* eslint-disable-next-line react/forbid-dom-props */}
        <span style={{ paddingLeft: `${level}rem` }}>
          <Arrange
            fitStart={(
              <Spacer paddingLeft="medium" paddingRight="medium" isInlineBlock>
                {
                  isFolder ? (
                    <Spacer paddingRight="small" isInlineBlock>
                      {expandCollapseIcon}
                    </Spacer>
                  ) : null
                }
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
