import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Popup from 'terra-popup';
import { injectIntl, intlShape } from 'react-intl';

import Tab from '../tabs/_Tab';
import Tabs from '../tabs/_Tabs';
import Extensions from '../extensions/_Extensions';
import UtilityMenuHeaderButton from '../utility-menu/_UtilityMenuHeaderButton';
import UtilityMenu from '../utility-menu/_UtilityMenu';
import {
  userConfigPropType, navigationItemsPropType, extensionItemsPropType, utilityItemsPropType, titleConfigPropType,
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
   * An element to render within the Header's utility menu.
   */
  hero: PropTypes.element,
  /**
   * An array of configuration objects with information specifying the creation of additional utility menu items.
   * These items are rendered within the popup utility menu at larger breakpoints and within the drawer menu at smaller breakpoints.
   */
  utilityItems: utilityItemsPropType,
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
   */
  intl: intlShape,
};

const Header = (props) => {
  const {
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
    hero,
    onSelectSkipToContent,
    intl,
    onSelectLogout,
    onSelectSettings,
    onSelectHelp,
    utilityItems,
    onSelectUtilityItem,
  } = props;

  const [utilityPopupIsOpen, setUtilityPopupIsOpen] = React.useState(false);
  const utilityButtonPopupAnchorRef = React.useRef();
  const closeMenuCallback = React.useRef();

  React.useEffect(() => {
    if (closeMenuCallback.current) {
      closeMenuCallback.current();
      closeMenuCallback.current = undefined;
    }
  });

  function generatePopupClosingCallback(wrappedFunction) {
    return (...args) => {
      if (!wrappedFunction) {
        return;
      }

      closeMenuCallback.current = wrappedFunction.bind(undefined, ...args);
      setUtilityPopupIsOpen(false);
    };
  }

  function renderTitle() {
    if (!titleConfig) {
      return null;
    }

    if (titleConfig.element) {
      return (
        <div title={titleConfig.title}>
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
    return (
      <UtilityMenuHeaderButton
        userConfig={userConfig}
        onClick={() => {
          setUtilityPopupIsOpen(true);
        }}
        popupAnchorRef={utilityButtonPopupAnchorRef}
      />
    );
  }

  function renderUtilitiesPopup() {
    if (utilityPopupIsOpen) {
      return (
        <Popup
          attachmentBehavior="push"
          contentAttachment="top right"
          contentHeight="auto"
          contentWidth="320"
          isArrowDisplayed
          isHeaderDisabled
          isOpen
          onRequestClose={() => setUtilityPopupIsOpen(false)}
          targetAttachment="bottom center"
          targetRef={() => utilityButtonPopupAnchorRef.current}
        >
          <UtilityMenu
            hero={hero}
            userConfig={userConfig}
            onSelectSettings={onSelectSettings ? generatePopupClosingCallback(onSelectSettings) : undefined}
            onSelectHelp={onSelectHelp ? generatePopupClosingCallback(onSelectHelp) : undefined}
            onSelectLogout={onSelectLogout ? generatePopupClosingCallback(onSelectLogout) : undefined}
            utilityItems={utilityItems}
            onSelectUtilityItem={onSelectUtilityItem ? generatePopupClosingCallback(onSelectUtilityItem) : undefined}
          />
        </Popup>
      );
    }

    return null;
  }

  return (
    <div className={cx('header')}>
      <button type="button" onClick={onSelectSkipToContent} className={cx('skip-content-button')}>
        {intl.formatMessage({ id: 'Terra.ApplicationHeaderLayout.SkipToContent' })}
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
      <div className={cx('utilities-container')}>
        {renderUtilities()}
      </div>
      {renderUtilitiesPopup()}
    </div>
  );
};

Header.propTypes = propTypes;

export default injectIntl(Header);
