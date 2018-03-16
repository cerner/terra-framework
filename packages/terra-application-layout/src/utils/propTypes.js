import PropTypes from 'prop-types';

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
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.element,
    contentLocation: PropTypes.string,
    key: PropTypes.string,
    title: PropTypes.string,
    isSelectable: PropTypes.bool,
    isSelected: PropTypes.bool,
    childKeys: PropTypes.array,
  })).isRequired,
  initialSelectedKey: PropTypes.string.isRequired,
});

export default {
  utilityConfigPropType,
  layoutConfigPropType,
  nameConfigPropType,
  navigationItemsPropType,
};
