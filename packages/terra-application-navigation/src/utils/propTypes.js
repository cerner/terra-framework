import PropTypes from 'prop-types';

const titleConfigPropType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  headline: PropTypes.string,
  subline: PropTypes.string,
  element: PropTypes.element,
  hideTitleWithinDrawerMenu: PropTypes.bool,
});

const userConfigPropType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  detail: PropTypes.string,
  initials: PropTypes.string,
  imageSrc: PropTypes.string,
});

const navigationConfigPropType = PropTypes.shape({
  hasNotifications: PropTypes.bool,
  navigationItems: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    notificationCount: PropTypes.number,
    renderFunction: PropTypes.func,
    icon: PropTypes.element,
  })),
});

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
    key: PropTypes.string.isRequired,
    /**
     * Image to be rendered
     */
    icon: PropTypes.element.isRequired,
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
    notificationCount: PropTypes.number,
  })),
});

export default {
  titleConfigPropType, userConfigPropType, navigationConfigPropType, utilityItemsPropType, extensionConfigPropType,
};

export {
  titleConfigPropType, userConfigPropType, navigationConfigPropType, utilityItemsPropType, extensionConfigPropType,
};
