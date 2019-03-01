import React from 'react';
import PropTypes from 'prop-types';
import 'terra-base/lib/baseStyles';
import Utils from './Utils';
import UtilityButton from './utility/_UtilityButton';

const propTypes = {
  /**
   * The array containing the menu items to be rendered within the menu.
   */
  menuItems: PropTypes.arrayOf(Utils.itemShape).isRequired,
  /**
   * The function to trigger when a menu item is selected.
   * Returns `(event, { key: String, metaData: Object})`
   */
  onChange: PropTypes.func.isRequired,
  /**
   * The function that discloses the menu.
   */
  onDisclose: PropTypes.func.isRequired,
  /**
   * The key of the top level menu page.
   */
  initialSelectedKey: PropTypes.string.isRequired,
  /**
   * The text to be displayed.
   */
  title: PropTypes.string,
  /**
   * The accessory element to be displayed next to the title.
   */
  accessory: PropTypes.element,
  /**
   * The role attribute to set on the menu.
   */
  menurole: PropTypes.string,
};

const defaultProps = {
  menurole: 'navigation',
};

const ApplicationHeaderUtility = ({
  menuItems,
  onChange,
  onDisclose,
  initialSelectedKey,
  title,
  accessory,
  menurole,
  ...customProps
}) => (
  <UtilityButton
    {...customProps}
    menuItems={menuItems}
    onChange={onChange}
    onDisclose={onDisclose}
    initialSelectedKey={initialSelectedKey}
    title={title}
    accessory={accessory}
    menurole={menurole}
    variant={Utils.VARIANTS.HEADER}
  />
);

ApplicationHeaderUtility.propTypes = propTypes;
ApplicationHeaderUtility.defaultProps = defaultProps;

export default ApplicationHeaderUtility;
