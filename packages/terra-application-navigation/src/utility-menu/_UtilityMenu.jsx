import React from 'react';
import PropTypes from 'prop-types';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';

import ActionHeader from 'terra-action-header';
import PopupMenu from '../common/_PopupMenu';
import { userConfigPropType, utilityItemsPropType } from '../utils/propTypes';

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  hero: PropTypes.element,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   * Ex: `onSelectSettings()`
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   * Ex: `onSelectLogout()`
   */
  onSelectLogout: PropTypes.func,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * Whehther or not content is be constrained vertically.
   */
  isHeightBounded: PropTypes.bool,
};

const utilityMenuSettingsKey = 'terra-application-navigation.utility-menu.settings';
const utilityMenuHelpKey = 'terra-application-navigation.utility-menu.help';

const UtilityMenu = ({
  userConfig, hero, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, onSelectUtilityItem, isHeightBounded,
}) => {
  let menuItems = [];
  menuItems = menuItems.concat(utilityItems);

  if (onSelectSettings) {
    menuItems.push({
      key: utilityMenuSettingsKey,
      text: 'Settings',
      icon: <IconSettings />,
    });
  }

  if (onSelectHelp) {
    menuItems.push({
      key: utilityMenuHelpKey,
      text: 'Help',
      icon: <IconUnknown />,
    });
  }

  return (
    <PopupMenu
      header={<ActionHeader title="Utilities" />}
      footer={<ActionFooter end={onSelectLogout ? <Button text="Logout" onClick={onSelectLogout} /> : undefined} />}
      userConfig={userConfig}
      customContent={hero}
      menuItems={menuItems}
      onSelectMenuItem={(itemKey) => {
        if (itemKey === utilityMenuSettingsKey) {
          onSelectSettings();
        } else if (itemKey === utilityMenuHelpKey) {
          onSelectHelp();
        } else {
          onSelectUtilityItem(itemKey);
        }
      }}
      isHeightBounded={isHeightBounded}
    />
  );
};

UtilityMenu.propTypes = propTypes;

export default UtilityMenu;
