import React, {
  useState,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import ToggleCount from './_ToggleCount';
import Extensions from '../extensions/_Extensions';
import { enableFocusStyles, disableFocusStyles, generateKeyDownSelection } from '../utils/helpers';
import {
  userConfigPropType,
  navigationItemsPropType,
  extensionItemsPropType,
  titleConfigPropType,
  utilityItemsPropType,
} from '../utils/propTypes';

import styles from './CompactHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A string key representing the currently active navigation item. This value should match one of the item keys provided in the
   * `navigationItems` array.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * Whether or not drawer menu is open.
   */
  isDrawerMenuOpen: PropTypes.bool,
  /**
   * A function to be executed upon selection of the CompactHeader's menu button.
   */
  onSelectMenuButton: PropTypes.func,
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: titleConfigPropType,
  /**
   * A configuration object with information specifying the creation of the Extension buttons rendered within the
   * ApplicationNavigation header.
   */
  extensionItems: extensionItemsPropType,
  /**
   * A function to be executed upon the selection of an extensions item.
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A function to be executed upon selection of the 'Skip to Content' button.
   */
  onSelectSkipToContent: PropTypes.func,
  /**
   * Array of navigation items used to determine whether or not the Menu button should render with notifications.
   */
  navigationItems: navigationItemsPropType,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function to be executed upon the selection of a navigation item.
   * Ex: `onSelectNavigationItem(String selectedNavigationItemKey)`
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * A function to be executed upon the selection of a custom utility item.
   * Ex: `onSelectUtilityItem(String selectedUtilityItemKey)`
   */
  onSelectUtilityItem: PropTypes.func,
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
   * @private
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape,
  /**
   * An element to render within the Header's utility menu.
   */
  hero: PropTypes.element,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
};

const defaultProps = {
  extensionItems: [],
  isDrawerMenuOpen: false,
  navigationItems: [],
  utilityItems: [],
  notifications: {},
};

function buildUtilityItem(text, key, onSelect, isUtilityOpen) {
  return (
    <li
      key={key}
      className={cx('hidden-item')}
      tabIndex={isUtilityOpen ? '0' : '-1'}
      role="option"
      aria-selected="false"
      onClick={onSelect}
      onKeyDown={generateKeyDownSelection(onSelect)}
    >
      {text}
    </li>
  );
}

const CompactHeader = ({
  isDrawerMenuOpen,
  onSelectMenuButton,
  titleConfig,
  extensionItems,
  onSelectExtensionItem,
  onSelectSkipToContent,
  navigationItems,
  notifications,
  activeBreakpoint,
  utilityItems,
  activeNavigationItemKey,
  onSelectNavigationItem,
  onSelectUtilityItem,
  onSelectSettings,
  onSelectHelp,
  onSelectLogout,
  intl,
  hero,
  userConfig,
}) => {
  const [navigationIsOpen, setNavigationIsOpen] = useState(false);
  const [utilitiesIsOpen, setUtilitiesIsOpen] = useState(false);
  const previousNotificationsRef = React.useRef();
  React.useEffect(() => {
    previousNotificationsRef.current = notifications;
  });

  function renderMenuButton() {
    if (!(utilityItems.length > 0 || navigationItems.length > 0 || userConfig || titleConfig || hero || onSelectHelp || onSelectLogout || onSelectSettings)) {
      return null;
    }

    const headerHasCounts = navigationItems.some(item => !!notifications[item.key]);
    const isPulsed = previousNotificationsRef.current && navigationItems.some((item) => {
      const previousCount = previousNotificationsRef.current[item.key];
      const newCount = notifications[item.key];
      return newCount && (!previousCount || newCount > previousCount);
    });

    return (
      <div
        role="button"
        className={cx('menu-button')}
        aria-label={intl.formatMessage({ id: 'Terra.applicationNavigation.header.menuButtonTitle' })}
        onClick={onSelectMenuButton}
        onBlur={enableFocusStyles}
        onKeyDown={generateKeyDownSelection(onSelectMenuButton)}
        onMouseDown={disableFocusStyles}
        data-focus-styles-enabled
        data-compact-header-toggle
        aria-expanded={isDrawerMenuOpen}
        tabIndex="0"
      >
        <IconMenu />
        {headerHasCounts && <ToggleCount value={isPulsed ? 1 : 0} />}
      </div>
    );
  }

  function renderTitle() {
    if (!titleConfig) {
      return null;
    }

    if (titleConfig.element) {
      return (
        <div className={cx('title-element')} title={titleConfig.title}>
          {titleConfig.element}
        </div>
      );
    }

    return (
      <React.Fragment>
        {titleConfig.headline && <div className={cx('headline')} title={titleConfig.headline}>{titleConfig.headline}</div>}
        <div className={cx('title')} title={titleConfig.title}>{titleConfig.title}</div>
        {titleConfig.subline && <div className={cx('subline')} title={titleConfig.subline}>{titleConfig.subline}</div>}
      </React.Fragment>
    );
  }

  function renderExtensions() {
    if (!extensionItems.length) {
      return null;
    }

    return (
      <Extensions
        extensionItems={extensionItems}
        activeBreakpoint={activeBreakpoint}
        onSelect={onSelectExtensionItem}
        notifications={notifications}
      />
    );
  }

  function generateCloseNavFunc(onSelect) {
    return () => {
      setNavigationIsOpen(false);
      onSelect();
    };
  }

  function buildNavigationItems() {
    if (isDrawerMenuOpen || !navigationItems) {
      return null;
    }

    return (
      <nav
        className={cx('hidden-nav', { 'is-open': navigationIsOpen })}
        tabIndex="-1"
        onFocus={() => setNavigationIsOpen(true)}
        onBlur={() => setNavigationIsOpen(false)}
      >
        <ul className={cx('nav-inner')}>
          {
            navigationItems.map((item) => {
              const onSelect = onSelectNavigationItem && generateCloseNavFunc(onSelectNavigationItem.bind(null, item.key, item.metaData));
              return (
                <li key={item.key}>
                  <div
                    role="link"
                    className={cx('hidden-item')}
                    tabIndex={navigationIsOpen ? '0' : '-1'}
                    aria-current={activeNavigationItemKey === item.key}
                    onClick={onSelect}
                    onKeyDown={generateKeyDownSelection(onSelect)}
                    aria-label={item.text}
                  >
                    <span aria-hidden>
                      {item.text}
                    </span>
                  </div>
                </li>
              );
            })
          }
        </ul>
      </nav>
    );
  }

  function generateCloseUtilsFunc(onSelect) {
    return () => {
      setUtilitiesIsOpen(false);
      onSelect();
    };
  }

  function buildUtilityItems() {
    if (isDrawerMenuOpen || !utilityItems) {
      return null;
    }

    return (
      <ul
        role="listbox"
        aria-label={intl.formatMessage({ id: 'Terra.applicationNavigation.drawerMenu.utilities' })}
        className={cx('hidden-utils', { 'is-open': utilitiesIsOpen })}
        tabIndex="-1"
        onFocus={() => setUtilitiesIsOpen(true)}
        onBlur={() => setUtilitiesIsOpen(false)}
      >
        {utilityItems.map((item) => {
          const onSelect = onSelectUtilityItem && generateCloseUtilsFunc(onSelectUtilityItem.bind(null, item.key, item.metaData));
          return buildUtilityItem(item.text, item.key, onSelect, utilitiesIsOpen);
        })}
        {onSelectSettings ? (
          buildUtilityItem(intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.settings' }), 'app-menu-settings', generateCloseUtilsFunc(onSelectSettings), utilitiesIsOpen)
        ) : null}
        {onSelectHelp ? (
          buildUtilityItem(intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.help' }), 'app-menu-help', generateCloseUtilsFunc(onSelectHelp), utilitiesIsOpen)
        ) : null}
        {onSelectLogout ? (
          buildUtilityItem(intl.formatMessage({ id: 'Terra.applicationNavigation.utilityMenu.logout' }), 'app-menu-logout', generateCloseUtilsFunc(onSelectLogout), utilitiesIsOpen)
        ) : null}
      </ul>
    );
  }

  return (
    <header role="banner" className={cx('compact-header')}>
      <button type="button" role="link" onClick={onSelectSkipToContent} className={cx('skip-content-button')}>
        {intl.formatMessage({ id: 'Terra.applicationNavigation.header.skipToContentTitle' })}
      </button>
      {renderMenuButton()}
      <div className={cx('title-container')}>
        {renderTitle()}
      </div>
      {buildNavigationItems()}
      <div className={cx('extensions-container')}>
        {renderExtensions()}
      </div>
      {buildUtilityItems()}
    </header>
  );
};

CompactHeader.propTypes = propTypes;
CompactHeader.defaultProps = defaultProps;

export default injectIntl(CompactHeader);
