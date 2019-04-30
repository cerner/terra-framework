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
  userConfig: userConfigPropType,
  hero: PropTypes.element,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
  utilityItems: utilityItemsPropType,
  onSelectUtilityItem: PropTypes.func,
  isHeightBounded: PropTypes.bool,
};

const UtilityMenu = ({
  userConfig, hero, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, onSelectUtilityItem, isHeightBounded,
}) => {
  let menuItems = [];
  menuItems = menuItems.concat(utilityItems);

  if (onSelectSettings) {
    menuItems.push({
      key: 'utility-menu-layout.settings',
      text: 'Settings',
      icon: <IconSettings />,
    });
  }

  if (onSelectHelp) {
    menuItems.push({
      key: 'utility-menu-layout.help',
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
        if (itemKey === 'utility-menu-layout.settings') {
          onSelectSettings();
        } else if (itemKey === 'utility-menu-layout.help') {
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
