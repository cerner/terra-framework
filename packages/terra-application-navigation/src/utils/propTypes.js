import PropTypes from 'prop-types';

const userConfigPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  initials: PropTypes.string,
  imageSrc: PropTypes.string,
});

const heroConfigPropType = PropTypes.shape({
  component: PropTypes.node,
  removeContainerPadding: PropTypes.bool,
});

/**
 * Shape for ApplicationLayout's `navigationItems` prop.
 */
const navigationItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  hasSubMenu: PropTypes.bool,
}));

/**
 * Alignment of the navigational tabs.
 */
const navigationAlignmentPropType = PropTypes.oneOf(['start', 'center', 'end']);

/**
 * Shape for ApplicationLayout's 'extensionConfig' prop.
 */
const extensionConfigPropType = PropTypes.shape({
  extensions: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Image to be rendered
     */
    image: PropTypes.element.isRequired,
    /**
     * Object to be returned in the onSelect
     */
    metaData: PropTypes.object,
    /**
     * Selection callback to return onSelect(event, metaData)
     */
    onSelect: PropTypes.func,
    /**
     * Text display and/or aria-label
     */
    text: PropTypes.string.isRequired,
  })),
});

/**
 * Shape for ApplicationLayout's `nameConfig` prop.
 */
const nameConfigPropType = PropTypes.shape({
  accessory: PropTypes.element,
  title: PropTypes.string,
});

export default {
  userConfigPropType, heroConfigPropType, navigationItemsPropType, navigationAlignmentPropType, nameConfigPropType, extensionConfigPropType,
};

export {
  userConfigPropType, heroConfigPropType, navigationItemsPropType, navigationAlignmentPropType, nameConfigPropType, extensionConfigPropType,
};
