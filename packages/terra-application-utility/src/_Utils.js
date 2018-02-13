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

const generateConfig = userData => ({
  key: 'menu',
  title: 'Menu',
  // isSelected: true,
  children: [
    {
      key: 'user-information',
      title: 'User Information',
      content: userData,
      // isSelected: false,
      children: [
        {
          key: 'change-photo',
          title: 'Change Photo',
          // isSelected: false,
        },
      ],
    },
    {
      key: 'settings',
      title: 'Settings',
      // isSelected: false,
      children: [
        {
          key: 'appearance',
          title: 'Appearance',
          // isSelected: false,
        },
        {
          key: 'security',
          title: 'Security',
          // isSelected: false,
        },
      ],
    },
    {
      key: 'help',
      title: 'Help',
      // isSelected: false,
      children: [
        {
          key: 'getting-started',
          title: 'Getting Started',
          // isSelected: false,
        },
        {
          key: 'about',
          title: 'About',
          // isSelected: false,
        },
        {
          key: 'terms-of-use',
          title: 'Terms of Use',
          // isSelected: false,
        },
      ],
    },
  ],
});

const ROOTKEY = 'menu';
const LOGOUT = 'Log Out';
// /**
//  * Recursively traverses a config file and genereates menu pages and it's associated menu items.
//  * @param {*} config
//  */
// generateMenuPage(config) {
//   const itemArray = [];
//   if ('children' in config) {
//     config.children.forEach((object) => {
//       const menuItem = (
//         <MenuItem
//           key={object.key}
//           content={object.content || object.title}
//         />
//       )
//       itemArray.push(menuItem);
//       this.generateMenuPage(object);
//     });
//   } else {
//     return;
//   }
//   // console.log('menu page');
//   const menuPage = (
//     <MenuPage
//       title={config.title}
//       key={config.key}
//       onRequestBack={this.pop}
//       onRequestClose={this.push}
//       index={}
//     >
//       {itemArray}
//     </MenuPage>);
// }

const Utils = {
  isFullScreen,
  KEYCODES,
  generateConfig,
  ROOTKEY,
  LOGOUT,
};

export default Utils;
