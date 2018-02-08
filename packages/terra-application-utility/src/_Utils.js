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

const generateConfig = (userData) => ({
  key: 'menu',
  title: 'Menu',
  children: [
    {
      key: 'user-information',
      title: 'User Information',
      content: userData,
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

const ROOTKEY = 'menu';
/**
 * Recursively traverses a config file and genereates menu pages and it's associated menu items.
 * @param {*} config
 */
generateMenuPage(config) {
  const itemArray = [];
  if ('children' in config) {
    config.children.forEach((object) => {
      const menuItem = (
        <MenuItem
          key={object.key}
          content={object.content || object.title}
        />
      )
      itemArray.push(menuItem);
      this.generateMenuPage(object);
    });
  } else {
    return;
  }
  // console.log('menu page');
  const menuPage = (
    <MenuPage
      title={config.title}
      key={config.key}
      onRequestBack={this.pop}
      onRequestClose={this.push}
      index={}
    >
      {itemArray}
    </MenuPage>);
}

const Utils = {
  isFullScreen,
  KEYCODES,
  generateConfig,
  ROOTKEY,
};

export default Utils;
