import React from 'react';
import { UtilityUtils } from 'terra-application-utility';
import UserData from '../user/_UserData';

const defaultKeys = {
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

const menuTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.menu' }));
const userInformationTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.userInformation' }));
const changePhotoTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.changePhoto' }));
const settingsTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.settings' }));
const appearanceTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.appearance' }));
const securityTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.security' }));
const helpTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.help' }));
const gettingStartedTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.gettingStarted' }));
const aboutTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.about' }));
const termsOfUseTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.termsOfUse' }));
const logOutTitle = intl => (intl.formatMessage({ id: 'Terra.applicationLayout.utilityDefaults.logOut' }));

/**
 * This function integrates a set of additional menu items with the set of default items as generated by getDefaultUtilityItems. Because
 * utility menu items specify their own child items, if custom item children want to be added to a default item, we need to regenerate the default
 * item with the appropriate keys in place. The additionalItems should provide a `parentKey` value that correlates it to another item in the default
 * item set.
 *
 * @param {Array} defaultItems is an Array of Objects adhering to the `terra-application-utility` menu item shape. This is expected to be
 * the set of default items generated by the `getDefaultUtilityItems` function.
 * @param {Array} additionalItems is an Array of Objects adhereing to `terra-application-utility` menu item shape that we need to be
 * integrated with the default item set. Additionally, a `parentKey` must be provided that correlates the item to a default item parent.
 */
const reconcileChildren = (defaultItems, additionalItems) => {
  if (!additionalItems) {
    return defaultItems;
  }

  additionalItems.forEach((additionalItem) => {
    if (additionalItem.parentKey) {
      const matchedParents = defaultItems.filter(configItem => configItem.key === additionalItem.parentKey);
      if (!matchedParents.length) {
        return;
      }

      const parent = matchedParents[0];

      if (!parent.childKeys) {
        parent.childKeys = [additionalItem.key];
      } else if (parent.childKeys.indexOf(additionalItem.key) < 0) {
        parent.childKeys.push(additionalItem.key);
      }
    }
  });

  return defaultItems.concat(additionalItems);
};

/**
 * The function generates a set of ApplicationLayout-standard utility menu items.
 *
 * @param {Object} intl is the intl context object provided by `terra-base`.
 * @param {Object} userData is an Object of user information data used to build the user data menu item.
 * Shape: {
 *   name: {String} The user's name
 *   detail: {String} Additional string-based user information to render with the user's name
 *   photo: {Element} A React element that renders the user's photo
 * }
 * @param {Array} additionalItems is an Array of Objects adhereing to `terra-application-utility` menu item shape that we need to be
 * integrated with the default item set. Additionally, a `parentKey` must be provided that correlates the item to a default item parent.
 */
const getDefaultUtilityItems = (intl, userData, additionalItems) => {
  const userDataComponent = (
    <UserData
      userName={userData.name}
      userDetail={userData.detail}
      userPhoto={userData.photo}
    />
  );

  const defaultConfig = [
    {
      key: defaultKeys.MENU,
      title: menuTitle(intl),
      childKeys: [
        defaultKeys.USER_INFORMATION,
        defaultKeys.SETTINGS,
        defaultKeys.HELP,
        defaultKeys.LOG_OUT,
      ],
    },
    {
      key: defaultKeys.USER_INFORMATION,
      title: userInformationTitle(intl),
      content: userDataComponent,
      childKeys: [
        defaultKeys.CHANGE_PHOTO,
      ],
    },
    {
      key: defaultKeys.SETTINGS,
      title: settingsTitle(intl),
      childKeys: [
        defaultKeys.APPEARANCE,
        defaultKeys.SECURITY,
      ],
    },
    {
      key: defaultKeys.LOG_OUT,
      contentLocation: UtilityUtils.LOCATIONS.FOOTER,
      title: logOutTitle(intl),
    },
    {
      key: defaultKeys.HELP,
      title: helpTitle(intl),
      childKeys: [
        defaultKeys.GETTING_STARTED,
        defaultKeys.ABOUT,
        defaultKeys.TERMS_OF_USE,
      ],
    },
    {
      key: defaultKeys.CHANGE_PHOTO,
      title: changePhotoTitle(intl),
    },
    {
      key: defaultKeys.APPEARANCE,
      title: appearanceTitle(intl),
    },
    {
      key: defaultKeys.SECURITY,
      title: securityTitle(intl),
    },
    {
      key: defaultKeys.GETTING_STARTED,
      title: gettingStartedTitle(intl),
    },
    {
      key: defaultKeys.ABOUT,
      title: aboutTitle(intl),
    },
    {
      key: defaultKeys.TERMS_OF_USE,
      title: termsOfUseTitle(intl),
    },
  ];

  return reconcileChildren(defaultConfig, additionalItems);
};

export default {
  getDefaultUtilityItems,
  defaultKeys,
  locations: UtilityUtils.LOCATIONS,
};
