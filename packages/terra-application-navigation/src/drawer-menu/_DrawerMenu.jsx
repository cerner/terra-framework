import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';

import DrawerMenuUser from './_DrawerMenuUser';
import Count from '../count/_Count';
import { userConfigPropType, heroConfigPropType, navigationItemsPropType } from '../utils/propTypes';

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
};

const defaultProps = {
  navigationItems: [],
};

const DrawerMenu = ({
  userConfig, heroConfig, navigationItems, activeNavigationItemKey, onSelectNavigationItem, onSelectSettings, onSelectHelp, onSelectLogout,
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
    logout = <button type="button" onClick={onSelectLogout}>Logout</button>;
  }

  return (
    <div className={cx('drawer-menu')}>
      <div className={cx('vertical-overflow-container')}>
        <div className={cx('header')}>
          {hero}
          {user}
        </div>
        <ul className={cx('navigation-list')} role="listbox">
          {navigationItems.map(item => (
            <li
              key={item.key}
              className={cx(['navigation-list-item', { active: item.key === activeNavigationItemKey }])}
              aria-selected={item.key === activeNavigationItemKey ? true : null}
              onClick={() => {
                if (onSelectNavigationItem) {
                  onSelectNavigationItem(item.key);
                }
              }}
              onKeyDown={(event) => {
                if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
                  event.preventDefault();
                  onSelectNavigationItem(item.key);
                }
              }}
              role="option"
              tabIndex="0"
            >
              {item.key === activeNavigationItemKey ? <div className={cx('active-indicator')} /> : null}
              <span>{item.text}</span>
              {item.notificationCount > 0 && <Count value={item.notificationCount} isInline isDark />}
            </li>
          ))}
        </ul>
        <ul className={cx('utility-list')} role="listbox">
          {onSelectSettings ? (
            <li
              key="application-menu.settings"
              className={cx('utility-list-item')}
              onClick={() => { onSelectSettings(); }}
              onKeyDown={(event) => {
                if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
                  event.preventDefault();
                  onSelectSettings();
                }
              }}
              role="option"
              aria-selected={false}
              tabIndex="0"
            >
              <IconSettings className={cx('utility-menu-icon')} />
              Settings
            </li>
          ) : null}
          {onSelectHelp ? (
            <li
              key="application-menu.help"
              className={cx('utility-list-item')}
              onClick={() => { onSelectHelp(); }}
              onKeyDown={(event) => {
                if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
                  event.preventDefault();
                  onSelectHelp();
                }
              }}
              role="option"
              aria-selected={false}
              tabIndex="0"
            >
              <IconUnknown className={cx('utility-menu-icon')} />
              Help
            </li>
          ) : null}
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
