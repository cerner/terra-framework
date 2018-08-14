import PropTypes from 'prop-types';
import { UtilityUtils } from 'terra-application-utility';

/**
 * Shape for the `layoutConfig` prop provided to components within the ApplicationLayout.
 */
const layoutConfigPropType = PropTypes.shape({
  size: PropTypes.string,
  toggleMenu: PropTypes.func,
  menuIsOpen: PropTypes.bool,
  togglePin: PropTypes.bool,
  menuIsPinned: PropTypes.bool,
});

/**
 * Shape for ApplicationLayout's `nameConfig` prop.
 */
const nameConfigPropType = PropTypes.shape({
  accessory: PropTypes.element,
  title: PropTypes.string,
});

/**
   * Alignment of the navigational tabs.
   */
const navigationAlignmentPropType = PropTypes.oneOf(['start', 'center', 'end']);

/**
 * Shape for ApplicationLayout's `navigationItems` prop.
 */
const navigationItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  path: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasSubMenu: PropTypes.bool,
}));

/**
 * Shape for ApplicationLayout's `utilityConfig` prop.
 */
const utilityConfigPropType = PropTypes.shape({
  title: PropTypes.string,
  accessory: PropTypes.element,
  onChange: PropTypes.func.isRequired,
  menuItems: PropTypes.arrayOf(UtilityUtils.itemShape).isRequired,
  initialSelectedKey: PropTypes.string.isRequired,
});

/**
 * Shape for utilityConfig's menuItem.
 */
const utilityMenuItemPropType = UtilityUtils.itemShape;

export default {
  utilityConfigPropType,
  utilityMenuItemPropType,
  layoutConfigPropType,
  nameConfigPropType,
  navigationAlignmentPropType,
  navigationItemsPropType,
};
