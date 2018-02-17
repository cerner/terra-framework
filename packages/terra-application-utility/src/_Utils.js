const isFullScreen = (isHeightBounded, isWidthBounded, boundingFrame, popupWidth) => {
  const width = popupWidth;
  let maxWidth;

  if (boundingFrame && !isWidthBounded) {
    maxWidth = boundingFrame.clientWidth;
  } else {
    maxWidth = window.innerWidth;
  }

  if (maxWidth <= 0) {
    return false;
  }

  return isHeightBounded && (width >= maxWidth || isWidthBounded);
};

const KEY_CODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
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

const generateMenuConfig = userData => ({
  key: KEYS.MENU,
  title: TITLES.MENU,
  isSelected: true,
  children: [
    {
      key: KEYS.USER_INFORMATION,
      title: TITLES.USER_INFORMATION,
      content: userData,
      isSelected: false,
      children: [
        {
          key: KEYS.CHANGE_PHOTO,
          title: TITLES.CHANGE_PHOTO,
          isSelected: false,
        },
      ],
    },
    {
      key: KEYS.SETTINGS,
      title: TITLES.SETTINGS,
      isSelected: false,
      children: [
        {
          key: KEYS.APPEARANCE,
          title: TITLES.APPEARANCE,
          isSelected: false,
        },
        {
          key: KEYS.SECURITY,
          title: TITLES.SECURITY,
          isSelected: false,
        },
      ],
    },
    {
      key: KEYS.HELP,
      title: TITLES.HELP,
      isSelected: false,
      children: [
        {
          key: KEYS.GETTING_STARTED,
          title: TITLES.GETTING_STARTED,
          isSelected: false,
        },
        {
          key: KEYS.ABOUT,
          title: TITLES.ABOUT,
          isSelected: false,
        },
        {
          key: KEYS.TERMS_OF_USE,
          title: TITLES.TERMS_OF_USE,
          isSelected: false,
        },
      ],
    },
  ],
});

const Utils = {
  isFullScreen,
  KEY_CODES,
  KEYS,
  TITLES,
  generateMenuConfig,
};

export default Utils;
