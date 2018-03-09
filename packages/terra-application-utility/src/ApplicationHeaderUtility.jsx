import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Utils from './_Utils';
import UtiltyButton from './utility/_UtilityButton';

const propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    /**
     * The unique key associated with this item.
     */
    key: PropTypes.string.isRequired,
    /**
     * The component associated with this item.
     */
    content: PropTypes.object,
    /**
     * The location to place the item. One of UtilityUtils.LOCATIONS.BODY, UtilityUtils.LOCATIONS.FOOTER.
     */
    contentLocation: PropTypes.oneOf([Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER]),
    /**
     * Boolean indicating if the item is selected.
     */
    isSelected: PropTypes.bool,
    /**
     * Boolean indicating if the item is selectable.
     */
    isSelectable: PropTypes.bool,
    /**
     * The text associated with this item.
     */
    title: PropTypes.string,
    /**
     * Array containing the keys of each child item of this item.
     */
    childKeys: PropTypes.arrayOf(PropTypes.string),
  })).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   */
  onChange: PropTypes.func.isRequired,
    /**
   * The function that discloses the menu.
   */
  onDisclose: PropTypes.func.isRequired,
  /**
   * The key of the top level menu.
   */
  selectedKey: PropTypes.string.isRequired,
  /**
   * The text to be displayed.
   */
  title: PropTypes.string,
  /**
   * The accessory element to be displayed next to the title.
   */
  accessory: PropTypes.element,
};


const ApplicationHeaderUtility = ({
  menuItems,
  onChange,
  onDisclose,
  selectedKey,
  title,
  accessory,
  ...customProps
}) => (
  <UtiltyButton
    {...customProps}
    menuItems={menuItems}
    onChange={onChange}
    onDisclose={onDisclose}
    selectedKey={selectedKey}
    title={title}
    accessory={accessory}
    variant={Utils.VARIANTS.HEADER}
  />
);

ApplicationHeaderUtility.propTypes = propTypes;

export default ApplicationHeaderUtility;
