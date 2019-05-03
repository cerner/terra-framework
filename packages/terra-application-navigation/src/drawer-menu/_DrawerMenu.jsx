import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';

import DrawerMenuTitle from './_DrawerMenuTitle';
import DrawerMenuListItem from './_DrawerMenuListItem';
import DrawerMenuUser from './_DrawerMenuUser';
import DrawerMenuFooterButton from './_DrawerMenuFooterButton';
import {
  titleConfigPropType, userConfigPropType, navigationConfigPropType, utilityItemsPropType,
} from '../utils/propTypes';

import styles from './DrawerMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * A hero element to render within the DrawerMenu.
   */
  hero: PropTypes.element,
  /**
   * An array of configuration objects with information specifying the creation of navigation items.
   */
  navigationConfig: navigationConfigPropType,
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey)`
   */
  onSelectNavigationItem: PropTypes.func,
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
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: PropTypes.func,
};

const defaultProps = {
  navigationConfig: {},
  utilityItems: [],
};

const DrawerMenu = ({
  titleConfig, userConfig, hero, navigationConfig, activeNavigationItemKey, onSelectNavigationItem, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, onSelectUtilityItem,
}) => {
  const titleComponent = titleConfig && !(titleConfig.element || titleConfig.hideTitleWithinDrawerMenu) ? <DrawerMenuTitle titleConfig={titleConfig} /> : undefined;
  const userComponent = userConfig ? <DrawerMenuUser userConfig={userConfig} variant={hero ? 'small' : 'large'} /> : undefined;
  const logoutButton = onSelectLogout ? <DrawerMenuFooterButton onClick={onSelectLogout} text="Logout" /> : undefined;
  const navigationItems = !navigationConfig.navigationItems ? [] : navigationConfig.navigationItems;

  return (
    <div className={cx('drawer-menu')} tabIndex="-1">
      <div className={cx('vertical-overflow-container')}>
        <div className={cx('header')}>
          <div className={cx('header-background-fill')}>
            {titleComponent}
            {hero}
            {userComponent}
          </div>
        </div>
        <ul className={cx('navigation-item-list')} role="listbox">
          {navigationItems.map(item => (
            <DrawerMenuListItem
              key={item.key}
              text={item.text}
              notificationCount={item.notificationCount}
              onSelect={onSelectNavigationItem && onSelectNavigationItem.bind(null, item.key)}
              isSelected={item.key === activeNavigationItemKey}
              icon={item.icon}
            />
          ))}
        </ul>
        <ul className={cx('utility-item-list')} role="listbox">
          {utilityItems.map(item => (
            <DrawerMenuListItem
              key={item.key}
              text={item.text}
              icon={item.icon}
              onSelect={onSelectUtilityItem && onSelectUtilityItem.bind(null, item.key)}
            />
          ))}
          {onSelectSettings ? (
            <DrawerMenuListItem
              text="Settings" // TODO INTL
              icon={<IconSettings />}
              onSelect={onSelectSettings}
            />
          ) : null}
          {onSelectHelp ? (
            <DrawerMenuListItem
              text="Help" // TODO INTL
              icon={<IconUnknown />}
              onSelect={onSelectSettings}
            />
          ) : null}
        </ul>
      </div>
      <div className={cx('footer')}>
        {logoutButton}
      </div>
    </div>
  );
};

DrawerMenu.propTypes = propTypes;
DrawerMenu.defaultProps = defaultProps;

export default DrawerMenu;
