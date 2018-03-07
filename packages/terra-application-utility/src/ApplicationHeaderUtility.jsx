import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Utils from './_Utils';
import UtiltyButton from './utility/_UtilityButton';

const propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf((Utils.itemShape)).isRequired,
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

const defaultProps = {
  menuItems: [],
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
ApplicationHeaderUtility.defaultProps = defaultProps;

export default ApplicationHeaderUtility;
