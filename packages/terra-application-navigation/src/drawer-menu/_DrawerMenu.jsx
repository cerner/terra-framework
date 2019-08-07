import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconSettings from 'terra-icon/lib/icon/IconSettings';
import IconQuestionOutline from 'terra-icon/lib/icon/IconQuestionOutline';
import { injectIntl, intlShape } from 'react-intl';

import DrawerMenuTitle from './_DrawerMenuTitle';
import DrawerMenuLinkItem from './_DrawerMenuLinkItem';
import DrawerMenuListItem from './_DrawerMenuListItem';
import DrawerMenuUser from './_DrawerMenuUser';
import DrawerMenuFooterButton from './_DrawerMenuFooterButton';
import {
  titleConfigPropType, userConfigPropType, navigationItemsPropType, utilityItemsPropType,
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
  navigationItems: navigationItemsPropType,
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
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object,
  /**
   * @private
   * Object containing intl APIs
   */
  intl: intlShape,
};

const defaultProps = {
  navigationItems: [],
  utilityItems: [],
};

const DrawerMenu = ({
  titleConfig,
  userConfig,
  hero,
  navigationItems,
  activeNavigationItemKey,
  onSelectNavigationItem,
  onSelectSettings,
  onSelectHelp,
  onSelectLogout,
  utilityItems,
  onSelectUtilityItem,
  notifications,
  intl,
}) => {
  const titleComponent = titleConfig && !(titleConfig.element || titleConfig.hideTitleWithinDrawerMenu) ? <DrawerMenuTitle titleConfig={titleConfig} /> : undefined;
  const userComponent = userConfig ? <DrawerMenuUser userConfig={userConfig} variant={hero ? 'small' : 'large'} /> : undefined;
  const logoutButton = onSelectLogout ? (
    <div className={cx('footer')}>
      <DrawerMenuFooterButton
        onClick={onSelectLogout}
        text={intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.logout' })}
      />
    </div>
  ) : undefined;

  const hasNavItems = navigationItems.length;
  const hasUtils = utilityItems.length || onSelectSettings || onSelectSettings;
  const hasItems = hasNavItems || hasUtils;

  let navItems;
  if (hasNavItems) {
    navItems = (
      <div role="navigation">
        <ul
          className={cx('navigation-item-list')}
          aria-label={intl.formatMessage({ id: 'Terra.applicationNavigation.drawerMenu.navigation' })}
        >
          {navigationItems.map(item => (
            <DrawerMenuLinkItem
              key={item.key}
              text={item.text}
              notificationCount={notifications[item.key]}
              onSelect={onSelectNavigationItem && onSelectNavigationItem.bind(null, item.key, item.metaData)}
              isSelected={item.key === activeNavigationItemKey}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    );
  }

  let utilities;
  if (hasUtils) {
    utilities = (
      <ul
        className={cx('utility-item-list')}
        role="listbox"
        aria-label={intl.formatMessage({ id: 'Terra.applicationNavigation.drawerMenu.utilities' })}
      >
        {utilityItems.map(item => (
          <DrawerMenuListItem
            key={item.key}
            text={item.text}
            icon={item.icon}
            onSelect={onSelectUtilityItem && onSelectUtilityItem.bind(null, item.key, item.metaData)}
          />
        ))}
        {onSelectSettings ? (
          <DrawerMenuListItem
            text={intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.settings' })}
            icon={<IconSettings />}
            onSelect={onSelectSettings}
          />
        ) : null}
        {onSelectHelp ? (
          <DrawerMenuListItem
            text={intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.help' })}
            icon={<IconQuestionOutline />}
            onSelect={onSelectSettings}
          />
        ) : null}
      </ul>
    );
  }

  /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
  return (
    <div className={cx('drawer-container')}>
      <div className={cx('drawer-menu')} role={hasItems ? 'dialog' : null} tabIndex={0} data-navigation-drawer-menu>
        <div className={cx('vertical-overflow-container')}>
          <div className={cx('header')}>
            <div className={cx('header-background-fill')}>
              {titleComponent}
              {hero}
              {userComponent}
            </div>
          </div>
          {navItems}
          {utilities}
        </div>
        {logoutButton}
      </div>
    </div>
  );
};

DrawerMenu.propTypes = propTypes;
DrawerMenu.defaultProps = defaultProps;

export default injectIntl(DrawerMenu);
