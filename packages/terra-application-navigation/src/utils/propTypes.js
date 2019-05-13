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
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect
   */
  metaData: PropTypes.object,
}));

const utilityItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Key used as react key, and returned in the onSelect
   */
  key: PropTypes.string.isRequired,
  /**
   * Icon to be rendered
   */
  icon: PropTypes.element,
  /**
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect
   */
  metaData: PropTypes.object,
}));

/**
 * Shape for ApplicationLayout's 'extensionConfig' prop.
 */
const extensionItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect
   */
  key: PropTypes.string.isRequired,
  /**
   * Icon to be rendered
   */
  icon: PropTypes.element.isRequired,
  /**
   * Text display and/or aria-label
   */
  text: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect
   */
  metaData: PropTypes.object,
}));

export default {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionItemsPropType,
};

export {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionItemsPropType,
};
