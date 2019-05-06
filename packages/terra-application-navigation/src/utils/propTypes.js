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

const navigationItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect
   */
  key: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect
   */
  metaData: PropTypes.object,
  /**
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
}));

const utilityItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Icon to be rendered
   */
  icon: PropTypes.element,
  /**
   * Key used as react key, and returned in the onSelect
   */
  key: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect
   */
  metaData: PropTypes.object,
  /**
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
}));

/**
 * Shape for ApplicationLayout's 'extensionConfig' prop.
 */
const extensionItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Icon to be rendered
   */
  icon: PropTypes.element.isRequired,
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect
   */
  key: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect
   */
  metaData: PropTypes.object,
  /**
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
}));

export default {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionItemsPropType,
};

export {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionItemsPropType,
};
