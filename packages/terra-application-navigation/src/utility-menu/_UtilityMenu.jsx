import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconQuestionOutline from 'terra-icon/lib/icon/IconQuestionOutline';
import PopupMenu from '../common/_PopupMenu';
import { userConfigPropType, utilityItemsPropType } from '../utils/propTypes';
import { utilityItemId, helpUtilityItemId, settingsUtilityItemId } from '../utils/helpers';

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * An element to render within the Header's utility menu.
   */
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
   * A base id used to generate unique ids for utility items
   */
  id: PropTypes.string,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: PropTypes.func,
  /**
   * Whether or not content is be constrained vertically.
   */
  isHeightBounded: PropTypes.bool,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: PropTypes.shape({ formatMessage: PropTypes.func }),
};

const defaultProps = {
  utilityItems: [],
};

const utilityMenuSettingsKey = 'terra-application-navigation.utility-menu.settings';
const utilityMenuHelpKey = 'terra-application-navigation.utility-menu.help';

const UtilityMenu = ({
  userConfig, hero, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, id, onSelectUtilityItem, isHeightBounded, intl,
}) => {
  let menuItems = [];
  menuItems = utilityItems.map(item => ({
    id: id && utilityItemId(id, item.key),
    key: item.key,
    text: item.text,
    icon: item.icon,
    dataAttrs: item.dataAttrs,
  }));

  if (onSelectSettings) {
    menuItems.push({
      id: id && settingsUtilityItemId(id),
      key: utilityMenuSettingsKey,
      text: intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.settings' }),
      icon: <IconSettings />,
      dataAttrs: { 'data-navigation-utility-item-settings': 'true' },
    });
  }

  if (onSelectHelp) {
    menuItems.push({
      id: id && helpUtilityItemId(id),
      key: utilityMenuHelpKey,
      text: intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.help' }),
      icon: <IconQuestionOutline />,
      dataAttrs: { 'data-navigation-utility-item-help': 'true' },
    });
  }

  return (
    <PopupMenu
      role="listbox"
      title={intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.headerTitle' })}
      footerText={intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.logout' })}
      onSelectFooterItem={onSelectLogout}
      userConfig={userConfig}
      customContent={hero}
      menuItems={menuItems}
      id={id}
      onSelectMenuItem={(itemKey, metaData) => {
        if (itemKey === utilityMenuSettingsKey) {
          onSelectSettings();
        } else if (itemKey === utilityMenuHelpKey) {
          onSelectHelp();
        } else {
          onSelectUtilityItem(itemKey, metaData);
        }
      }}
      isHeightBounded={isHeightBounded}
    />
  );
};

UtilityMenu.propTypes = propTypes;
UtilityMenu.defaultProps = defaultProps;

export default injectIntl(UtilityMenu);
