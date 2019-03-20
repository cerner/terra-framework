import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';

import DrawerMenuListItem from './_DrawerMenuListItem';
import DrawerMenuUser from './_DrawerMenuUser';
import DrawerMenuFooterButton from './_DrawerMenuFooterButton';
import {
  userConfigPropType, heroConfigPropType, navigationItemsPropType, utilityItemsPropType,
} from '../utils/propTypes';

import styles from './DrawerMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  userConfig: userConfigPropType,
  heroConfig: heroConfigPropType,
  navigationItems: navigationItemsPropType,
  activeNavigationItemKey: PropTypes.string,
  onSelectNavigationItem: PropTypes.func,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
  utilityItems: utilityItemsPropType,
  onSelectUtilityItem: PropTypes.func,
};

const defaultProps = {
  navigationItems: [],
  utilityItems: [],
};

const DrawerMenu = ({
  userConfig, heroConfig, navigationItems, activeNavigationItemKey, onSelectNavigationItem, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, onSelectUtilityItem,
}) => {
  let hero;
  if (heroConfig) {
    hero = !heroConfig.removeContainerPadding ? (
      <div className={cx(['padded-hero-container', { 'pad-bottom': !userConfig }])}>{heroConfig.component}</div>
    ) : heroConfig.component;
  }

  let user;
  if (userConfig) {
    user = heroConfig ? <DrawerMenuUser userConfig={userConfig} /> : <DrawerMenuUser userConfig={userConfig} variant="large" />;
  }

  let logout;
  if (onSelectLogout) {
    logout = <DrawerMenuFooterButton onClick={onSelectLogout} text="Logout" />;
  }

  return (
    <div className={cx('drawer-menu')} tabIndex="0">
      <div className={cx('vertical-overflow-container')}>
        <div className={cx('header')}>
          <div className={cx('header-background-fill')}>
            {hero}
            {user}
          </div>
        </div>
        <ul className={cx('navigation-list')} role="listbox">
          {navigationItems.map(item => (
            <DrawerMenuListItem
              key={item.key}
              text={item.text}
              notificationCount={item.notificationCount}
              onSelect={onSelectNavigationItem ? () => {
                onSelectNavigationItem(item.key);
              } : undefined}
              isSelected={item.key === activeNavigationItemKey}
            />
          ))}
        </ul>
        <ul className={cx('utility-list')} role="listbox">
          {onSelectSettings ? (
            <DrawerMenuListItem
              key="application-navigation.drawer-menu.settings"
              text="Settings" // TODO INTL
              icon={<IconSettings />}
              onSelect={onSelectSettings}
            />
          ) : null}
          {onSelectHelp ? (
            <DrawerMenuListItem
              key="application-navigation.drawer-menu.help"
              text="Help" // TODO INTL
              icon={<IconUnknown />}
              onSelect={onSelectSettings}
            />
          ) : null}
          {utilityItems.map(item => (
            <DrawerMenuListItem
              key={item.key}
              text={item.text}
              icon={item.icon}
              onSelect={onSelectUtilityItem ? () => {
                onSelectUtilityItem(item.key);
              } : undefined}
            />
          ))}
        </ul>
      </div>
      <div className={cx('footer')}>
        {logout}
      </div>
    </div>
  );
};

DrawerMenu.propTypes = propTypes;
DrawerMenu.defaultProps = defaultProps;

export default DrawerMenu;
