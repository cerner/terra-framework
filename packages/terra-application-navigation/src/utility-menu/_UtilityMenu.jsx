import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { KEY_SPACE, KEY_RETURN } from 'keycode-js';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconUnknown from 'terra-icon/lib/icon/IconUnknown';
import ActionFooter from 'terra-action-footer';
import Button from 'terra-button';

import UtilityMenuUser from './_UtilityMenuUser';
import UtilityMenuListItem from './_UtilityMenuListItem';
import { userConfigPropType, heroConfigPropType, utilityItemsPropType } from '../utils/propTypes';

import styles from './UtilityMenu.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  userConfig: userConfigPropType,
  heroConfig: heroConfigPropType,
  onSelectSettings: PropTypes.func,
  onSelectHelp: PropTypes.func,
  onSelectLogout: PropTypes.func,
  utilityItems: utilityItemsPropType,
  onSelectUtilityItem: PropTypes.func,
};

const UtilityMenu = ({
  userConfig, heroConfig, onSelectSettings, onSelectHelp, onSelectLogout, utilityItems, onSelectUtilityItem,
}) => {
  let user;
  if (userConfig) {
    user = <UtilityMenuUser userConfig={userConfig} />;
  }

  let hero;
  if (heroConfig) {
    hero = heroConfig.component;
  }

  let footer;
  if (onSelectLogout) {
    footer = (
      <div className={cx('footer')}>
        <ActionFooter
          end={<Button text="Logout" onClick={onSelectLogout} />}
        />
      </div>
    );
  }

  return (
    <div className={cx('utility-menu-layout')}>
      <div className={cx('vertical-overflow-container')}>
        <div className={cx('header')}>
          {hero}
          {user}
        </div>
        <ul className={cx('utility-list')} role="listbox">
          {utilityItems.map(item => (
            <UtilityMenuListItem
              key={item.key}
              onSelect={onSelectUtilityItem ? () => {
                onSelectUtilityItem(item.key);
              } : undefined}
              icon={item.icon}
              text={item.text}
            />
          ))}
          {onSelectSettings ? (
            <UtilityMenuListItem
              key="utility-menu-layout.settings"
              onSelect={onSelectSettings}
              icon={<IconSettings />}
              text="Settings"
            />
          ) : null}
          {onSelectHelp ? (
            <UtilityMenuListItem
              key="utility-menu-layout.help"
              onSelect={onSelectHelp}
              icon={<IconUnknown />}
              text="Help"
            />
          ) : null}
        </ul>
      </div>
      {footer}
    </div>
  );
};

UtilityMenu.propTypes = propTypes;

export default UtilityMenu;
