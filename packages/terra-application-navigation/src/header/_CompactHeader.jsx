import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { injectIntl, intlShape } from 'react-intl';
import IconMenu from 'terra-icon/lib/icon/IconMenu';
import ToggleCount from './_ToggleCount';
import Extensions from '../extensions/_Extensions';
import { enableFocusStyles, disableFocusStyles } from '../utils/helpers';
import {
  navigationItemsPropType,
  extensionItemsPropType,
  titleConfigPropType,
} from '../utils/propTypes';

import styles from './CompactHeader.module.scss';

const cx = classNames.bind(styles);

const propTypes = {
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
   * @private
   * The currently active breakpoint.
   */
  activeBreakpoint: PropTypes.string,
  /**
   * @private
   * Object containing intl APIs.
   */
  intl: intlShape,
};

const CompactHeader = ({
  onSelectMenuButton,
  titleConfig,
  extensionItems,
  onSelectExtensionItem,
  onSelectSkipToContent,
  navigationItems,
  notifications,
  activeBreakpoint,
  intl,
}) => {
  const previousNotificationsRef = React.useRef();
  React.useEffect(() => {
    previousNotificationsRef.current = notifications;
  });

  function renderMenuButton() {
    const headerHasCounts = navigationItems.some(item => !!notifications[item.key]);
    const isPulsed = previousNotificationsRef.current && navigationItems.some((item) => {
      const previousCount = previousNotificationsRef.current[item.key];
      const newCount = notifications[item.key];
      return newCount && (!previousCount || newCount > previousCount);
    });

    return (
      <button
        type="button"
        className={cx('menu-button')}
        aria-label={intl.formatMessage({ id: 'Terra.applicationLayout.applicationHeader.menuToggleLabel' })}
        onClick={onSelectMenuButton}
        onBlur={enableFocusStyles}
        onMouseDown={disableFocusStyles}
        data-focus-styles-enabled
      >
        <IconMenu />
        {headerHasCounts && <ToggleCount value={isPulsed ? 1 : 0} />}
      </button>
    );
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

  return (
    <div className={cx('compact-header')}>
      <button type="button" onClick={onSelectSkipToContent} className={cx('skip-content-button')}>
        {intl.formatMessage({ id: 'Terra.ApplicationHeaderLayout.SkipToContent' })}
      </button>
      {renderMenuButton()}
      <div className={cx('title-container')}>
        {renderTitle()}
      </div>
      <div className={cx('extensions-container')}>
        {renderExtensions()}
      </div>
    </div>
  );
};

CompactHeader.propTypes = propTypes;

export default injectIntl(CompactHeader);
