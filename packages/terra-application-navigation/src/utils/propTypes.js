import PropTypes from 'prop-types';

const userConfigPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  initials: PropTypes.string,
  imageSrc: PropTypes.string,
});

const navigationItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  // notificationCount: PropTypes.number,
  // hasNotifications: PropTypes.bool,
  // renderFunction: PropTypes.func,
  // icon: PropTypes.element,
}));

const utilityItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  key: PropTypes.string.isRequired,
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
}));

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
  largeCount: PropTypes.oneOf([1, 2, 3, 4, 4, 5, 6]),
  mediumCount: PropTypes.oneOf([3, 4, 4, 5]),
});

export default {
  userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionConfigPropType,
};

export {
  userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionConfigPropType,
};
