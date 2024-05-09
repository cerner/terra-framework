import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import FolderTree from 'terra-folder-tree';


const propTypes = {
  /**
   * The label for the folder tree item.
   */
  label: PropTypes.string.isRequired,
  /**
   * The icon to display to the left of the name.
   * Icon usage is restricted to Documents or Hospital.
   */
  icon: PropTypes.element,
  /**
   * The list of items to display in a subfolder when it is selected. This property makes the item expandable and collapsible. The item's icon also becomes a folder, overriding anything given as the icon property.
   */
  subfolderItems: PropTypes.arrayOf(PropTypes.element),
  /**
   * Indicates whether the item is expanded. Only items with subfolderItems can be expanded.
   */
  isExpanded: PropTypes.bool,
  /**
   * Indicates whether the item can be selected. Selectable items will display with a radio button.
   */
  isSelectable: PropTypes.bool,
  /**
   * Indicates whether the item is selected. Because this component has the appearance of a radio button group, only one item should be selected at a time.
   */
  isSelected: PropTypes.bool,
  /**
   * The callback function for a click event.
   */
  onSelect: PropTypes.func,
  /**
   * The callback function for an expand or collapse toggle event.
   */
  onToggle: PropTypes.func,
  /**
   * @private
   * Level of nesting for this item.
   */
  level: PropTypes.number,
  /**
   * @private
   * The position of the item among its sibling items in the same group (subfolder).
   */
  ariaPosInSet: PropTypes.number,
  /**
   * @private
   * Number of sibling items in the same group (subfolder).
   */
  ariaSetSize: PropTypes.number,
  /**
   * @private
   * Ref to the parent folder of the current item.
   */
  parentRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  /**
   * @private
   * intl object programmatically imported through injectIntl from react-intl.
   * */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }).isRequired,
};

const defaultProps = {
  isExpanded: false,
  isSelectable: true,
  isSelected: false,
  level: 0,
};

const OutlineViewItem = ({
  icon,
  isExpanded,
  isSelectable,
  isSelected,
  label,
  level,
  onSelect,
  onToggle,
  ariaPosInSet,
  ariaSetSize,
  subfolderItems,
  parentRef,
  intl,
}) => (
  <FolderTree.Item
    label={label}
    icon={icon}
    subfolderItems={subfolderItems}
    isExpanded={isExpanded}
    isSelected={isSelected}
    onSelect={onSelect}
    onToggle={onToggle}
    isSelectable={isSelectable}
    level={level}
    ariaPosInSet={ariaPosInSet}
    ariaSetSize={ariaSetSize}
    parentRef={parentRef}
    intl={intl}
  />
);

OutlineViewItem.propTypes = propTypes;
OutlineViewItem.defaultProps = defaultProps;

export default injectIntl(OutlineViewItem);
