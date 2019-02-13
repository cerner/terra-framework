import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from 'terra-button';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';

import UtilityUserLayout from './_UtilityUserLayout';

import styles from './UtilityMenuLayout.module.scss';

const cx = classNames.bind(styles);

const KEYCODES = {
  ENTER: 13,
  SPACE: 32,
};

const propTypes = {
  userConfig: PropTypes.object,
  heroConfig: PropTypes.object,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
};

const UtilityMenuLayout = ({
  userConfig, heroConfig, onSelectSettings, onSelectHelp, onSelectLogout,
}) => {
  let user;
  if (userConfig) {
    user = <UtilityUserLayout userConfig={userConfig} />;
  }

  let hero;
  if (heroConfig) {
    hero = heroConfig.padded ? <div className={cx(['padded-hero-container', { 'pad-bottom': !userConfig }])}>{heroConfig.component}</div> : heroConfig.component;
  }

  let logout;
  if (onSelectLogout) {
    logout = <Button isBlock text="Logout" onClick={onSelectLogout} />;
  }

  return (
    <div className={cx('utility-menu-layout')}>
      <div className={cx('vertical-overflow-container')}>
        <div className={cx('header')}>
          {hero}
          {user}
        </div>
        <ul className={cx('utility-list')} role="listbox">
          {onSelectSettings ? (
            <li
              key="utility-menu-layout.settings"
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
              key="utility-menu-layout.help"
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

UtilityMenuLayout.propTypes = propTypes;

export default UtilityMenuLayout;
