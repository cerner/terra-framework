import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';

import Tabs from '../tabs/_Tabs';
import Extensions from '../extensions/_Extensions';
import UtilityMenuHeaderButton from '../utility-menu/_UtilityMenuHeaderButton';
import {
  userConfigPropType, navigationItemsPropType, extensionItemsPropType, titleConfigPropType, utilityItemsPropType,
} from '../utils/propTypes';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * A configuration object with information pertaining to the application's title.
   */
  titleConfig: titleConfigPropType,
  /**
   * Array of navigation items to render within the Header.
   */
  navigationItems: navigationItemsPropType,
  /**
   * A function to be executed for the render of each navigation item.
   */
  navigationRenderFunction: PropTypes.func,
  /**
   * The string identifying the currently active navigation item.
   */
  activeNavigationItemKey: PropTypes.string,
  /**
   * A function to be executed upon selection of a navigation item.
   */
  onSelectNavigationItem: PropTypes.func,
  /**
   * The element to be placed within the fit start area for extensions within the layout.
   */
  extensionItems: extensionItemsPropType,
  /**
   * A function to be executed upon the selection of an extensions item.
   * Ex: `onSelectExtensionsItem(String selectedUtilityItemKey, Object metaData)`
   */
  onSelectExtensionItem: PropTypes.func,
  /**
   * A configuration object with information pertaining to the application's user.
   */
  userConfig: userConfigPropType,
  /**
   * A function to be executed upon selection of the Header's utility button.
   */
  onSelectUtilityButton: PropTypes.func,
  /**
   * A ref Object that will be provided with a reference to the Header's utility button.
   */
  utilityButtonPopupAnchorRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  /**
   * A function to be executed upon selection of the 'Skip to Content' button.
   */
  onSelectSkipToContent: PropTypes.func,
  /**
   * Key/Value pairs associating a string key entry to a numerical notification count.
   */
  notifications: PropTypes.object,
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
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
  /**
   * A function to be executed upon the selection of the Settings utility item.
   * If `onSelectSettings` is not provided, the Settings utility item will not be rendered.
   */
  onSelectSettings: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Help utility item.
   * If `onSelectHelp` is not provided, the Help utility item will not be rendered.
   */
  onSelectHelp: PropTypes.func,
  /**
   * A function to be executed upon the selection of the Logout action button.
   * If `onSelectLogout` is not provided, the Logout action button will not be rendered.
   */
  onSelectLogout: PropTypes.func,
};

const defaultProps = {
  utilityItems: [],
};

const Header = ({
  titleConfig,
  navigationItems,
  navigationRenderFunction,
  activeNavigationItemKey,
  onSelectNavigationItem,
  notifications,
  extensionItems,
  activeBreakpoint,
  onSelectExtensionItem,
  userConfig,
  onSelectSkipToContent,
  intl,
  onSelectUtilityButton,
  utilityButtonPopupAnchorRef,
  hero,
  utilityItems,
  onSelectSettings,
  onSelectHelp,
  onSelectLogout,
}) => {
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

  function renderNavigationTabs() {
    return (
      <Tabs
        navigationItems={navigationItems}
        activeTabKey={activeNavigationItemKey}
        onTabSelect={onSelectNavigationItem}
        notifications={notifications}
        navigationRenderFunction={navigationRenderFunction}
      />
    );
  }

  function renderExtensions() {
    if (!extensionItems || !extensionItems.length) {
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

  function renderUtilities() {
    if (!(utilityItems.length > 0 || userConfig || hero || onSelectHelp || onSelectLogout || onSelectSettings)) {
      return null;
    }

    return (
      <div className={cx('utilities-container')}>
        <UtilityMenuHeaderButton
          userConfig={userConfig}
          onClick={onSelectUtilityButton}
          popupAnchorRef={utilityButtonPopupAnchorRef}
        />
      </div>
    );
  }

  return (
    <header role="banner" className={cx('header')}>
      <button type="button" role="link" onClick={onSelectSkipToContent} className={cx('skip-content-button')}>
        {intl.formatMessage({ id: 'Terra.applicationNavigation.header.skipToContentTitle' })}
      </button>
      <div className={cx('title-container')}>
        {renderTitle()}
      </div>
      <div className={cx('main-navigation-container')}>
        {renderNavigationTabs()}
      </div>
      <div className={cx('extensions-container')}>
        {renderExtensions()}
      </div>
      {renderUtilities()}
    </header>
  );
};

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default injectIntl(Header);
