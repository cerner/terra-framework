import PropTypes from 'prop-types';

const titleConfigPropType = PropTypes.shape({
  /**
   * Title to be displayed or set as the aria-label if a title element is passed.
   */
  title: PropTypes.string.isRequired,
  /**
   * Super text to be display above the main title text.
   */
  headline: PropTypes.string,
  /**
   * Sub text to be display below the main title text.
   */
  subline: PropTypes.string,
  /**
   * Element to use in place of title text.
   */
  element: PropTypes.element,
  /**
   * Whether or not the title should be hidden when at the compact breakpoint.
   */
  hideTitleWithinDrawerMenu: PropTypes.bool,
});

const userConfigPropType = PropTypes.shape({
  /**
   * User name to be displayed.
   */
  name: PropTypes.string.isRequired,
  /**
   * Additional user details.
   */
  detail: PropTypes.string,
  /**
   * User initials to be displayed within the avatar if no image is present.
   */
  initials: PropTypes.string,
  /**
   * Src to provide to the avatar component.
   */
  imageSrc: PropTypes.string,
});

const navigationItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect
   */
  key: PropTypes.string.isRequired,
  /**
   * Text display and/or aria-label.
   */
  text: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
}));

const utilityItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Key used as react key, and returned in the onSelect.
   */
  key: PropTypes.string.isRequired,
  /**
   * Icon to be rendered.
   */
  icon: PropTypes.element,
  /**
   * Text display and/or aria-label.
   */
  text: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
}));

const extensionItemsPropType = PropTypes.arrayOf(PropTypes.shape({
  /**
   * Key matching the notification key, used as react key, and returned in the onSelect.
   */
  key: PropTypes.string.isRequired,
  /**
   * Icon to be rendered.
   */
  icon: PropTypes.element.isRequired,
  /**
   * Text display and/or aria-label.
   */
  text: PropTypes.string.isRequired,
  /**
   * Object to be returned in the onSelect.
   */
  metaData: PropTypes.object,
}));

export default {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionItemsPropType,
};

export {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType, extensionItemsPropType,
};
