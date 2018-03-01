import PropTypes from 'prop-types';

/**
 * TODO: This utils file will be moved up to a higher order ApplicationUtils file.
*/
const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  BACK_SPACE: 8,
};

const KEYS = {
  MENU: 'menu',
  USER_INFORMATION: 'user-information',
  CHANGE_PHOTO: 'change-photo',
  SETTINGS: 'settings',
  APPEARANCE: 'appearance',
  SECURITY: 'security',
  HELP: 'help',
  GETTING_STARTED: 'getting-started',
  ABOUT: 'about',
  TERMS_OF_USE: 'terms-of-use',
  LOG_OUT: 'log-out',
};

const LOCATIONS = {
  BODY: 'body',
  FOOTER: 'footer',
};

const TITLES = {
  MENU: 'Menu',
  USER_INFORMATION: 'User Information',
  CHANGE_PHOTO: 'Change Photo',
  SETTINGS: 'Settings',
  APPEARANCE: 'Appearance',
  SECURITY: 'Security',
  HELP: 'Help',
  GETTING_STARTED: 'Getting Started',
  ABOUT: 'About',
  TERMS_OF_USE: 'Terms of Use',
  LOG_OUT: 'Log Out',
};

const defaultConfig = userData =>
  [
    {
      key: KEYS.MENU,
      title: TITLES.MENU,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        KEYS.USER_INFORMATION,
        KEYS.SETTINGS,
        KEYS.HELP,
        KEYS.LOG_OUT,
      ],
    },
    {
      key: KEYS.USER_INFORMATION,
      title: TITLES.USER_INFORMATION,
      content: userData,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        KEYS.CHANGE_PHOTO,
      ],
    },
    {
      key: KEYS.SETTINGS,
      title: TITLES.SETTINGS,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        KEYS.APPEARANCE,
        KEYS.SECURITY,
      ],
    },
    {
      key: KEYS.LOG_OUT,
      title: TITLES.LOG_OUT,
      contentLocation: LOCATIONS.FOOTER,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: KEYS.HELP,
      title: TITLES.HELP,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [
        KEYS.GETTING_STARTED,
        KEYS.ABOUT,
        KEYS.TERMS_OF_USE,
      ],
    },
    {
      key: KEYS.CHANGE_PHOTO,
      title: TITLES.CHANGE_PHOTO,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: KEYS.APPEARANCE,
      title: TITLES.APPEARANCE,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: KEYS.SECURITY,
      title: TITLES.SECURITY,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: KEYS.GETTING_STARTED,
      title: TITLES.GETTING_STARTED,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: KEYS.ABOUT,
      title: TITLES.ABOUT,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
    {
      key: KEYS.TERMS_OF_USE,
      title: TITLES.TERMS_OF_USE,
      contentLocation: LOCATIONS.BODY,
      isSelected: false,
      isSelectable: false,
      childKeys: [],
    },
  ];

const itemShape = PropTypes.shape({
  /**
   * The unique key associated with this item.
   */
  key: PropTypes.string.isRequired,
  /**
   * The component associated with this item.
   */
  content: PropTypes.object,
  /**
   *  The location to place the item. One of Utils.LOCATIONS.BODY, Utils.LOCATIONS.FOOTER.
   */
  contentLocation: PropTypes.oneOf([LOCATIONS.BODY, LOCATIONS.FOOTER]),
  /**
   * Boolean indicating if the item is selected.
   */
  isSelected: PropTypes.bool,
  /**
   * Boolean indicating if the item is toggable.
   */
  isSelectable: PropTypes.bool,
  /**
   * The text associated with this item.
   */
  title: PropTypes.string,
  /**
   * Array containing the keys of each child of this item.
   */
  childKeys: PropTypes.arrayOf(PropTypes.string),
});

const Utils = {
  KEY_CODES,
  KEYS,
  LOCATIONS,
  TITLES,
  defaultConfig,
  itemShape,
};

export default Utils;
