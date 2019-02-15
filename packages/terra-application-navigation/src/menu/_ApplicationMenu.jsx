import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';

import MenuUserLayout from './_MenuUserLayout';

import styles from './ApplicationMenu.module.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const propTypes = {
  userConfig: PropTypes.object,
  heroConfig: PropTypes.object,
  navigationItems: PropTypes.array,
  activeNavigationItemKey: PropTypes.string,
  onSelectNavigationItem: PropTypes.func,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
};

const defaultProps = {
  navigationItems: [],
};

const ApplicationMenu = ({
  userConfig, heroConfig, navigationItems, activeNavigationItemKey, onSelectNavigationItem, onSelectSettings, onSelectHelp, onSelectLogout,
}) => {
  let user;
  if (userConfig) {
    user = heroConfig ? <MenuUserLayout userConfig={userConfig} /> : <MenuUserLayout userConfig={userConfig} variant="large" />;
  }

  let hero;
  if (heroConfig) {
    hero = heroConfig.padded ? <div className={cx(['padded-hero-container', { 'pad-bottom': !userConfig }])}>{heroConfig.component}</div> : heroConfig.component;
  }

  let logout;
  if (onSelectLogout) {
    logout = <button type="button" onClick={onSelectLogout}>Logout</button>;
  }

  return (
    <div className={cx('application-menu')}>
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
                if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
                  event.preventDefault();
                  onSelectNavigationItem(item.key);
                }
              }}
              role="option"
              tabIndex="0"
            >
              {item.key === activeNavigationItemKey ? <div className={cx('active-indicator')} /> : null}
              {item.text}
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
                if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
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
                if (event.nativeEvent.keyCode === KEYCODES.ENTER || event.nativeEvent.keyCode === KEYCODES.SPACE) {
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

ApplicationMenu.propTypes = propTypes;
ApplicationMenu.defaultProps = defaultProps;

export default ApplicationMenu;
