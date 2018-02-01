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

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
};

const generateConfig = () => ({
  key: 'menu',
  title: 'Menu',
  children: [
    {
      key: 'user-information',
      title: 'User Information',
      content: this.props.userData,
      children: [
        {
          key: 'UserInformationChangePhoto',
          title: 'User Information',
        },
      ],
    },
    {
      key: 'settings',
      title: 'Settings',
      children: [
        {
          key: 'appearance',
          title: 'Appearance',
        },
        {
          key: 'security',
          title: 'Security',
        },
      ],
    },
    {
      key: 'help',
      title: 'Help',
      children: [
        {
          key: 'getting-started',
          title: 'Getting Started',
        },
        {
          key: 'about',
          title: 'Getting Started',
        },
        {
          key: 'terms-of-use',
          title: 'Terms of Use',
        },
      ],
    },
  ],
});

const Utils = {
  isFullScreen,
  KEYCODES,
  generateConfig,
};

export default Utils;
