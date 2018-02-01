// import HeaderUtilMenu from './_HeaderUtilMenu';
// import HeaderUtilMenuPages from './_HeaderUtilMenuPage';
import UserData from './_UserData';

module.exports = {
  key: 'UtilMenu',
  title: 'Menu',
  children: [
    {
      key: 'UserInformation',
      title: 'User Information',
      content: <UserData />,
      children: [
        {
          key: 'UserInformationChangePhoto',
          title: 'User Information',
          content: 'Change Photo',
        },
      ],
    },
    {
      key: 'Settings',
      title: 'Settings',
      content: ['Appearance', 'Security'],
      children: [
        {
          key: 'Appearance',
          title: 'Settings',
          content: 'Appearance',
        },
        {
          key: 'Security',
          title: 'Settings',
          content: 'Security',
        },
      ],
    },
    {
      key: 'Help',
      title: 'Help',
      content: ['Getting Started', 'About', 'Terms of Use'],
      children: [
        {
          key: 'Getting Started',
          title: 'Help',
          content: 'Getting Started',
        },
        {
          key: 'About',
          title: 'Help',
          content: 'Getting Started',
        },
        {
          key: 'Terms of Use',
          title: 'Help',
          content: 'Terms of Use',
        },
      ],
    },
  ],
};
